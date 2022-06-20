import React from "react";
import Footer from "../Footer/Footer";
import GoBack from "../GoBack/GoBack";
import s from './About.module.css';

export default function About (){
    return(
        <div className={s.container}>
        <GoBack/>
        <div className={s.containerGrids}>
            <div className={s.howContainer}>
                <h1>How to use the app?</h1>
                <hr/>
                <h4>1. Search a breed</h4>
                <p>If you are interested to find your favorite breed you can do it through
                     the <b className={s.b}>SEARCH BAR</b>, and if you do not remember the exact name,
                     dont worry! it will bring you all the breeds that match the word entered.  </p>
                <p>For example: if you search "american" it will bring you 8 breeds</p>     
                <h4>2. Find by size</h4>
                <p>Are you in the moment to adopt your next dog, but not 100% sure? You can find one to <b className={s.b}>adaptable at your home</b>. With this app you can sort by size. </p>
                <h4>3. Filters by Temperaments</h4>
                <p>if you are interested to find the perfect breed to play and grow with your son. You can filter by around <b className={s.b}>130 temperaments</b></p>
            </div>
            <div>
                <h1>POST YOUR PUPPIE</h1>
                <p>You can share your love of animals posting a picture and description to your best friend on four legs.</p>
                <div className={s.post}><div className={s.imgLovers}></div></div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}