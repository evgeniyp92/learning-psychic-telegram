import React, { Component } from 'react';

class SearchBar extends Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    onInputClick(event) {
        console.log(`input was clicked`);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            onClick={this.onInputClick}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
