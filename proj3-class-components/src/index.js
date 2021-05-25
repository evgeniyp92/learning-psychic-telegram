import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: `` };
    // }

    // newer and easier way of setting up state compared to above
    // thanks babel!
    state = {
        lat: null,
        errorMessage: ``,
    };

    // predefined function name for javascript code to be executed when the component renders
    componentDidMount() {
        console.log(`App rendered`);
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

    // predefined function name for javascript code to be executed
    // when a state change is detected and a component needs to be rendered
    componentDidUpdate() {
        console.log(`App updated/rerendered`);
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

// OUTLINE OF THE COMPONENT LIFECYCLE
// constructor() - good place to do one-time setup, but try to avoid data loading here, not best practice
// render() - avoid doing anything besides returning jsx
// componentDidMount() - good place to load data, best practice
// componentDidUpdate() - good place to load data when state/props change
// componentWillUnmount() - good place to do housekeeping after your component is removed
// ^^^ this isnt exhaustive
// shouldComponentUpdate(), getDerivedStateFromProps(), getSnapshotBeforeUpdate() also exist
