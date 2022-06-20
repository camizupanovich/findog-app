import React from "react";
import s from './Modal.module.css';
import { Link } from "react-router-dom";

export default function Modal({setOpen}){
    return(
        <>
        <div className={s.container}>
            <button  className={s.closeBtn} 
            onClick={()=>setOpen(false)}>X</button>
            <div onClick={()=>setOpen(false)} className={s.sections}>HOME</div>
            <Link className={s.link} to='/about'><div className={s.sections}>ABOUT</div></Link>
            <Link className={s.link} to='/contact'><div className={s.sections}>CONTACT</div></Link>
            <Link className={s.link} to='/create'><div className={s.sections}>CREATE</div></Link>
        </div>
        </>
    )
}