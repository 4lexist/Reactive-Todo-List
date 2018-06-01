import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };

        this.updateInputValue = this.updateInputValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateInputValue(event) {
        this.setState({inputValue: event.target.value});
    };

    onSubmit(event) {
        event.preventDefault(); // prevents refreshing ?!
        if(this.state.inputValue === ''){
            return;
        }

        this.props.onSubmit(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                />
                <input
                    type='submit'
                    value='Add'
                />
            </form>
        )
    }
}