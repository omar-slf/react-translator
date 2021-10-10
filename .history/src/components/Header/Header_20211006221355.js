import { createMuiTheme, TextField } from '@material-ui/core'
import React from 'react'
import './Header.css'

export const Header = () => {
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dakr'
        }
    })
    return (
        <div className='header'>
            <span className="title">Word Hunt</span>
            <div className="inputs">
                <TextField id='standard-basic' label='standard' />
            </div>
        </div>
    )
}
