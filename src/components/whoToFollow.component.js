import React from 'react';

import { Observable } from 'rxjs';

import 'whatwg-fetch';
import '../style/whoToFollow.scss';

export default class WhoToFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersStream: '',
            usersArray: [],
            clicksOnRefreshStream: '',
            clicksOnXStream: '',
        };
        this.refCloseButtons = [];
    }

    componentDidMount() {
        const globalRefreshClickStream = Observable.fromEvent(this.refRefreshButton, 'click');
        const closeClickStreams = [];
        this.refCloseButtons.map((refButton)=>{
            closeClickStreams.push(Observable.fromEvent(refButton, 'click'));
        });

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
            return usersPromise.json()
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
        const userSuggestionStreams = [];
        responseStream.map((responsePromise)=>{

        })
        this.closeClickStreams.map((clickStream) => {
            clickStream.subscribe((click)=>{

            })
        })

        userSuggestionStreams.map((userSuggestion) => {

        })
    }

    singleRefresh(index) {
        console.log(index);
    }

    globalRefresh() {
        console.log("global");
    }

    renderSuggestions(nbSuggestions) {
        this.refCloseButtons = [];
        return (
            <ul className="suggestions">
                {
                    this.state.usersArray.map((user, index)=>{
                        if(index < nbSuggestions){
                            return (
                                <li className="suggestion" key={`suggestion-${index}`}>
                                    <img src={user.avatar}/>
                                    <p className="username">{user.name}</p>
                                    <p className="close" ref={(ref) => this.refCloseButtons.push(ref)}> ✕</p>
                                </li>
                            )
                        }
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
                {this.renderSuggestions(3)}
            </div>
        )
    }
}