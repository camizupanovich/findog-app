import React from "react";
import {Link} from 'react-router-dom';
import s from './Card.module.css';
import { useDispatch } from "react-redux";
import { getDog } from "../../../redux/actions";

export default function Dogs (props){
    const {name, weight, image,id, temperament,createdDB,Temperaments} = props.dogs;
    const dispatch = useDispatch();
    return(
        <div className={s.card} onClick={(e)=>dispatch(getDog(id))} >
            <img className={s.img} src={image} alt={name}/>
            <div className={s.info}>
                <div className={s.name}>{name.toUpperCase()}</div>
                <div className={s.weight} >{weight} kg</div>
                {createdDB ?
                 <div className={s.tempsContainer}>
                {Temperaments?.map((temperament,i)=>(
                  <span className={s.temps} key={i}>{temperament.name}</span> ))}</div>
                  :
                <div className={s.tempsContainer}>
               {temperament?.slice(0,5).map((temperament,i)=>(
                 <span className={s.temps} key={i}>{temperament}</span> ))}</div> }
            </div>
            <Link className={s.link} to={`/dogs/${id}`}><div className={s.about}>About</div></Link>
        </div>
    )
}