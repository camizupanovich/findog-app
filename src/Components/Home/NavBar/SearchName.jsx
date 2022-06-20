import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDogName } from '../../../redux/actions';
import s from './SearchName.module.css';

export default function SearchName(){
    const [name, setName]=useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSearch = (e)=> {
        setName(e.target.value)
    }
    const getbyName = (e)=> {
        e.preventDefault();
        e.target[0].value='';
         dispatch(getDogName(name));
    }
    return(
        <>
            <form className={s.form} onSubmit={getbyName}>
                <input className={s.input} type='text' placeholder='Search breed..'
                onChange={handleSearch} name='name'/>
                <input className={s.btn} type='submit' value='🔍︎'/>
            </form>
        </>
    )
}