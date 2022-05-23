import React from 'react';
import Button from '@mui/material/Button';
import s from './FirstFrame.module.css'
import { NavLink } from "react-router-dom";

function FirstFrame(props) {
    return (
        <div className={s.main}>
            <div className={s.header}>
                ЗАЙТИ КАК 
            </div>
            <div>
                <NavLink to={'/admin'}>
                    <Button variant="contained" className={s.nav}>АДМИН</Button>
                </NavLink>
                <NavLink to={'/client'}>
                    <Button variant="contained" className={s.nav}>КЛИЕНТ</Button>
                </NavLink>
            </div>
        </div>
    );
}

export default FirstFrame;