import React from 'react';

import { Observable } from 'rxjs';

import 'whatwg-fetch';
import '../style/userSuggestion.scss';

export class UserSuggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersStream: '',
            usersArray: [],
            clicksOnRefreshStream: '',
            clicksOnXStream: '',
        };
        this.refCloseButtons = [];
        this.NB_SUGGESTIONS = 3;
    }

    componentDidMount() {
        const globalRefreshClickStream = Observable.fromEvent(this.refRefreshButton, 'click');

        const requestStream = globalRefreshClickStream
            .startWith('simulate a first click to show first batch of users')
            .map(()=>{
                const randomOffset = Math.floor(Math.random()*500);
                return 'https://api.github.com/users?since=' + randomOffset
            });

        const responseStream = requestStream
            .flatMap(function(requestedUrl) {
                return Observable.fromPromise(fetch(requestedUrl));
            });

        responseStream.subscribe((usersPromise) => {
            usersPromise.json()
                .then((users) => {
                    const usersArray = users.map(function(user){
                        return {
                            name: user.login,
                            avatar: user.avatar_url
                        }
                    });
                    this.setState({usersArray: usersArray});

                    return usersArray;
                })
                .catch(function(error){
                    console.log(error)
                })
        });

        const closeClickStreams = [];
        this.refCloseButtons.map((refButton) => {
            closeClickStreams.push(Observable.fromEvent(refButton, 'click'));
        });

        closeClickStreams.map((clickStream, index) => {
            const userSuggestionStream = clickStream.combineLatest(responseStream, () => {
                return this.state.usersArray[Math.floor(Math.random()*(this.state.usersArray.length - this.NB_SUGGESTIONS) + this.NB_SUGGESTIONS)];
            });

            userSuggestionStream.subscribe((user) => {
                const newUsersArray = this.state.usersArray;
                newUsersArray[index] = user;

                this.setState({usersArray: newUsersArray});
            })
        })

    }

    renderSuggestions(nbSuggestions) {
        if(this.refCloseButtons.length === 0) {
            // Need to populate the array on first time because can't map on undefined pointers
            this.refCloseButtons = [...Array(nbSuggestions)].map((...args) => { return args })
        }

        return (
            <ul className="suggestions">
                {
                    this.refCloseButtons.map((button, index)=>{
                        return (
                            <li className="suggestion" key={`suggestion-${index}`}>
                                <img src={this.state.usersArray[index] ? this.state.usersArray[index].avatar : ''}/>
                                <p className="username">{this.state.usersArray[index] ? this.state.usersArray[index].name : 'placeholder'}</p>
                                <p className="close" ref={(ref) => this.refCloseButtons[index] = ref}> ✕</p>
                            </li>
                        )

                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>Who to follow</h2><a href="#" className="refresh" ref={(ref) => this.refRefreshButton = ref}>Refresh</a>
                </div>
                {this.renderSuggestions(this.NB_SUGGESTIONS)}
            </div>
        )
    }
}