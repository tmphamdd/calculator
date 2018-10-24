import React, {
    Component
} from 'react';
import Addition from './Addition'

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        // this.setState({
        //     value1: event.target.value,
        //     // value2: event.target.value2,
        // });
        this.setState({ [evt.target.name]: Number((evt.target.value)) });
        console.log(this.state.value1)
        console.log(this.state.value2)
    }

    handleSubmit(event) {
        var result = this.state.value1 + this.state.value2;
        alert('result: ' + result);

        event.preventDefault();
    }

    render() { // in order to render this component - necessary syntax
        return (
            <div className="Calculator">

                <Addition />

                <form onSubmit={this.handleSubmit}>
                    <label>
                        number1
                    <input type="number" name="value1" onChange={this.handleChange} />
                    </label>

                    <label>
                        no 2
                    <input type="number" name="value2" onChange={this.handleChange} />
                    </label>

                    <br />
                    <button type="submit" onSubmit={this.handleSubmit}>Add</button>
                    <button type="button">Minus</button>
                    <button type="button">Divide</button>
                    <button type="button">Multiply</button>
                </form>
            </div>

        )
    }
}

export default Calculator;