import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../../render";
import Noticed from '../noticed/Noticed';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import s from './Client.module.css'

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

function Client(props) {

    const { state } = useContext(Context)

    const [count, setCount] = useState(0);
    const [not, setNot] = useState(undefined)

    useEffect(() => {
        setTimeout(() => {
          setNot(state.noticed[count])
            if (state.noticed.length !== count) {
                setCount(count+1)
            }
        }, 3000);//5000, 3000 for test

      }, [count, state]);

    return (
        <div>
            {!not?<></>:
            <Bounce className={s.not}>
                 <Noticed key={not.id} id={not.id} text={not.text} date={not.date} counter={not.counter} typography={not.typography}/>
            </Bounce>}
            
        </div>
    );
}

export default Client;