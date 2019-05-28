import React, { Component } from 'react';
import keys from './config'
import './AddressInputBox.css'

class AddressInputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            value: ''
        }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
        fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + e.target.value + '&key=' + keys.apikey2)
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    suggestions: result.predictions,
                })
                if (result.predictions.length > 0) {
                    this.setState({
                        isSuggestions: true
                    })
                } else {
                    this.setState({
                        isSuggestions: false
                    })
                }
            })
    }
    selectValue = (e) => {
        this.setState({
            value: e.target.innerHTML,
            suggestions: []
        })
    }
    render() {
        return (
            <div className="component-wrapper">
                <div className="wrapper">
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="location" />
                    {this.state.isSuggestions &&
                        <ul>
                            {this.state.suggestions.map((child) => {
                                return (<li onClick={this.selectValue}>{child.description}</li>)
                            })}
                        </ul>
                    }
                </div>
            </div>);
    }
}

export default AddressInputBox;
