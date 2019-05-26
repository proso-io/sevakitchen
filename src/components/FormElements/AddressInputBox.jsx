import React, { Component } from 'react';
import './AddressInputBox.css'
import keys from './config';

class AddressInputBox extends Component {
    state = {
        value: '',
        predictions: []
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
        fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + e.target.value + '&key=' + keys.apikey2)
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    predictions: result.predictions
                })
            })
    }
    render() {
        return (
            <div className="autocomplete">
                <label htmlFor="address">Your Location (we'll use this to connect you to chapters in your area)</label>
                <input name="address" id="address" list="data-list" type="text" onChange={this.handleChange} placeholder="Start Typing"></input>
                <div className="predictions">
                    <datalist id="data-list" className="results">
                        {this.state.predictions.map((children) => {
                            return (<option key={children.id}>{children.description}</option>)
                        })}
                    </datalist>
                </div>
            </div>);
    }
}

export default AddressInputBox;
