import React from 'react';

export class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <form>
                <p>Please select your preferred contact method:</p>
                <div>
                    {this.props.optionsList.map((option, index) => {
                        return [
                            <input
                                type="radio"
                                key={`option+${index}`}
                                onClick={()=>{this.props.changeSelectedOption(index)}}
                                checked={option.active}
                            />,
                            <label key={`labeloption+${index}`} >{option.label}</label>
                        ]
                    })}
                </div>
            </form>
        )
    }
}

Selector.defaultProps = {
    optionsList: [],
    changeSelectedOption: (index) => {},
};