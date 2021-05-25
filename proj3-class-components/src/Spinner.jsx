import React from 'react';

const Spinner = (props) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>{props.prompt}</div>
        </div>
    );
};

Spinner.defaultProps = {
    prompt: `Please wait...`,
};

export default Spinner;
