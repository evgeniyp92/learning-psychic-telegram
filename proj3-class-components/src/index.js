import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: `` };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // We called setState!
                this.setState({ lat: position.coords.latitude });
                // You dont ever want to directly assign to state, just use setState instead
                // 1 exception: when we init the state in the constructor
            },
            (error) => {
                // You dont have to update the entire object when you call setState
                this.setState({ errorMessage: error.message });
            },
        );
    }

    // We must define render()
    render() {
        // Outlining conditional rendering in a document
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude {this.state.lat}</div>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
