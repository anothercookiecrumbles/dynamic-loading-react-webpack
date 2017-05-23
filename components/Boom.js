import React, {
    Component
}
from "react";

export
default class Boom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        this.setState({
            appended: true
        });
        this.interval = setInterval(
            this.increment.bind(this),
            1000
        )
    }

    increment() {
        this.setState(({
            counter
        }) => {
            return {
                counter: counter + 10
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
            const {
                counter
            } = this.state;

            return ( < header >
                    < div > More webpack is doing its thing with React and ES2015 < /div>
        <div>{counter}</div >
                    < /header>
    );
  }
}
