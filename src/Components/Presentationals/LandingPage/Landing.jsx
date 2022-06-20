import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';

export default function Landing(){
    return(
        <div className={s.box}>
        <div className={s.content}>
           <h1 className={s.title}>FIND YOUR NEXT DOG !</h1>
           <Link to = '/dogs' className={s.btn}><p>Get start !</p></Link>
        </div>
        </div>
    )
};