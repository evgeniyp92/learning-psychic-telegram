import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    // Prevent the page from refreshing
    // Fixed by using an arrow function
    // To get the parent this
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    {/* Alternate way of handling broken thises below */}
                    {/* <form onSubmit={(event) => this.onFormSubmit()}></form> */}
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
