import React from "react";
import { useState } from "react";
import s from './Filters.module.css'

export default function Filters({handleByCreated,handleSort,temperaments,handleRefresh,handleByTemperament}){

    return(
<div className={s.container}>
<div className={s.filtersBox}>
<button  className={s.select} onClick={handleRefresh}>CLEAR FILTERS ↺</button>
</div>

       <div className={s.filtersBox}>
            <select  className={s.select}  onChange= {(e)=>{handleSort(e.target.value)}}>
                <option value=''>SORT</option>
                <option value='az'>A ➜ Z</option>
                <option value='za'>Z ➜ A</option>
                <option value='min_weight'>Min weight</option>
                <option value='max_weight'>Max weight</option>
            </select>
        </div>
        <div className={s.filtersBox}>
            <select className={s.select} onChange={(e)=>{handleByCreated(e.target.value)}}>
                <option value=''>SOURCE</option>
                <option value='created'>Created</option>
                <option value='api'>Api</option>
            </select>
        </div>
        <div className={s.filtersBox}>
            <select  className={s.select} onChange={(e)=>{handleByTemperament(e.target.value)}}>
                <option value=''>TEMPERAMENTS</option>
                {temperaments?.map((t)=>
                <option key={t.id} value={t.name}>{t.name}</option>)}
            </select>
        </div>
</div>
    )
}