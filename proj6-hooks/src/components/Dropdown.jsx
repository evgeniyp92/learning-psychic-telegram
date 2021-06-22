import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // because this is wired up into the dom it
        // gets called before any react event listeners
        // react elements go from child to parent after that

        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, { capture: true });

        // cleanup functions also fire when a component is removed
        // this avoids event listeners trying to do stuff with missing refs
        return () => {
            document.body.removeEventListener('click', onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                className='item'
                key={option.value}
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    console.log(selected);

    return (
        <div className='ui form' ref={ref}>
            <div className='field'>
                <label className='label'>Select a color</label>
                <div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className={`ui selection dropdown ${
                        open ? 'visible active' : ''
                    }`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <div
                    style={{ color: selected.value }}
                >{`This text is ${selected.value}`}</div>
            </div>
        </div>
    );
};

export default Dropdown;
