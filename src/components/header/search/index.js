import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import './style.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function Search({props, id}) {
    return (
        <div className="search" style={{ width: 300}}>
            <Route>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={props.map(i => i.title)}
                    type="search" 
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="Search"
                        margin="normal"
                        variant="outlined"
                        InputProps={{...params.InputProps, type: 'search' }}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                              ev.preventDefault();
                            }
                        }}
                    />
                    )}
                />
            </Route>
        </div>
    )
}

export default Search;