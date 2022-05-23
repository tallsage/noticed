import React, { useState, useContext } from 'react';
import {Context} from "../../render";
import SingIn from '../singIn/SingIn';
import Noticed from '../noticed/Noticed';
import CreateNotice from '../createNotice/CreateNotice'
import s from './Admin.module.css'


function Admin(props) {

    const [login, setLogin] = useState(false)

    const { state } = useContext(Context)

    const getAllNoticed = () => {
        return state.noticed.map(el => 
            <Noticed key={el.typography} text={el.text} date={el.date} counter={el.counter} typography={el.typography} admin={login}/>
        )
    }

    return (
        <div className={s.main}>
            {!login ? <SingIn setLogin={setLogin}/> : (<CreateNotice/>)}
            {!login ? <></> : (getAllNoticed())}
        </div>
    );
}

export default Admin;