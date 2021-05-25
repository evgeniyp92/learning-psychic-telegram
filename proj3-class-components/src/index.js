import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message }),
        );
    }

    // predefined function name for javascript code to be executed
    // when a state change is detected and a component needs to be rendered
    componentDidUpdate() {
        console.log(`App updated/rerendered`);
    }

    renderContent() {
        // Outlining conditional rendering in a document
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return (
            // If no prompt is provided the component will render silently without any text
            <Spinner prompt='Please allow the browser request to continue...' />
        );
    }

    // We must define render()
    // Try as hard as possible to avoid having multiple render methods,
    // put any conditional logic into render methods instead
    render() {
        return <div className='border red'>{this.renderContent()}</div>;
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
