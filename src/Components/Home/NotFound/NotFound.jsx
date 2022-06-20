import React from "react";
import img from '../../../img/notFound.png';
import s from './NotFound.module.css'

export default function NotFound(){
    return(
        <div className={s.container}>
            <img src={img} alt='Not Found' className={s.img}/>
        </div>
    )
}