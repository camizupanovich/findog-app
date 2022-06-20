import React from 'react';
import s from './NavBar.module.css';
import SearchName from './SearchName';
import { Link } from 'react-router-dom';
import img from '../../../img/bar_icon.png'
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

export default function NavBar(){
    
    const [open,setOpen]=useState(false);
    return(
    <>
        {open ? <div className={s.modal}><Modal setOpen={setOpen}/></div> :
        <div className={s.Bar}>
            <img src={img} alt='dog' className={s.logo}/>
            <div className={s.BarEnd}>
            <Link className={s.link} to='/about'><div className={s.sections}>ABOUT</div></Link>
            <Link className={s.link} to='/contact'><div className={s.sections}>CONTACT</div></Link>
            <button
             onClick={()=>setOpen(true)}
              className={s.openFilters}>≣</button>
            <SearchName/>
            <Link to='/create'
             className={s.link}>
                <button className={s.create}>✚</button></Link>
            </div>
        </div>}
        </>
    )
}