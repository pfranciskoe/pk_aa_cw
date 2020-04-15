import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
    } 

    render() {
        return (
        <div class="clock">
            <p>
                <span>Time:</span>
                <span>
                    <span>{this.state.time.getHours()}:</span>
                    <span>{this.state.time.getMinutes()}:</span>
                    <span>{this.state.time.getSeconds()} PDT</span>
                </span>
            </p>
            <p>
                <span>Date:</span>
                <span>
                    { this.state.time.toDateString()}
                </span>
            </p>

            
            
        </div>
            )
    }

   

    tick() {
        this.setState({ time: new Date() })
    }

    componentDidMount() {
       this.ticker = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }


}


export default Clock