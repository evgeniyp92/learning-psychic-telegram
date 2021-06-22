import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState(`programming`);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // useEffect cannot be async
  // WORKAROUND 1
  //// const searchArticles = async () => {
  ////     await axios.get('blablabla');
  //// };
  //// searchArticles();
  ////
  ////
  // WORKAROUND 2 - IIFE
  //// (async () => {
  ////     await axios.get('blablabla');
  //// })();
  ////
  ////
  // WORKAROUND 3 -   JUST USE PROMISES BRO
  //// axios.get('blablabla').then((response) => {
  ////     // console.log(response.data)
  //// });

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        'https://en.wikipedia.org/w/api.php',
        {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouncedTerm,
          },
        },
      );
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target='blank'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span
            // only use this if you are 100% certain about the integrity of the response
            dangerouslySetInnerHTML={{ __html: result.snippet }}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter search term</label>
          <input
            type='text'
            className='input'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;

// https://www.amazon.com/dp/B087GCFMS1?tag=theverge02-20&ascsubtag=[]vg[p]22302533[t]w[r]theverge.com[d]D
// https://www.amazon.com/dp/B07X5MWMDG?tag=theverge02-20&ascsubtag=[]vg[p]22302533[t]w[r]theverge.com[d]D
