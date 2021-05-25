import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    // Prevent the page from refreshing
    onFormSubmit(event) {
        event.preventDefault();

        // this will break because the this keyword is goofy
        // within the context of this function, 'this' is undefined
        console.log(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
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
