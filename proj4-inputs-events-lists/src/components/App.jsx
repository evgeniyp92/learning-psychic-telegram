import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(searchTerm) {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchTerm,
            },
            headers: {
                Authorization:
                    'Client-ID KkeTma_ruzAufux-Xueh0higHNIiJ3re6H0jxQRmVck',
            },
        });

        console.log(res.data.results);
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
