import React from "react";
import { Link } from "react-router-dom";
import s from './GoBack.module.css'

export default function GoBack(){
    return (
        <div className={s.container}>
            <Link to='/dogs' className={s.link}>🡬 GO HOME </Link>
        </div>
    )
}