import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // We called setState!
                this.setState({ lat: position.coords.latitude });
                // You dont ever want to directly assign to state, just useState instead
                // 1 exception: when we init the state in the constructor
            },
            (error) => {
                console.log(
                    `Something went wrong, here are the details:`,
                    error,
                );
            },
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <SeasonDisplay />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
