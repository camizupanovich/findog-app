import React, { useEffect } from 'react';
import s from './Dog.module.css';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader'
import GoBack from '../GoBack/GoBack';
import Footer from '../Footer/Footer';

export default function Dog(){
    const dogId = useSelector((state)=>state.dogId);
    return(<div className={s.boxBackground}>
       <div className={s.nav}> <GoBack/></div>
       {dogId.length>0 && ( <>
                    <h1 className={s.dogName}>{dogId[0].name}</h1>
                    <hr/>
                <div className={s.bredfor}>{dogId[0].bredfor}</div>
            <div className={s.container} >

                <div className={s.imgCont}>
                   <img src={dogId[0].image} alt={dogId[0].name} className={s.img} />
                </div>

                <div className={s.box2}>

                    <div className={s.row}>
                        <img src={'https://cdn3.iconfinder.com/data/icons/shopping-e-commerce-4-1/32/Kg-Kilogram-Weight-Scale-2-512.png'} alt='weigth' width='25px' height='25px' />
                        <p className={s.info}>{dogId[0].weight} kg</p>
                    </div>

                    <div className={s.row}>
                        <img src='https://pluspng.com/img-png/metric-png-measuring-metric-tape-icon-512.png' alt='weigth' width='25px' height='25px'/>
                        <p className={s.info}>{dogId[0].height} cm</p>
                    </div>

                    <div className={s.row}>
                        <img src='https://cdn3.iconfinder.com/data/icons/science-line-vol-5/52/life__heart__beat__health-512.png' alt='weigth' width='25px' height='25px' />
                        <p className={s.info}>{dogId[0].longevity}</p>
                    </div>

                    {dogId[0].createDB?

                    <div className={s.temperamentcontainer}>{dogId[0].Temperaments?.map((temperament,i)=>(
                       <span key={i} className={s.temperament}>{temperament.name.toUpperCase()}</span>
                    ))}</div> 
                    
                    :

                    <div className={s.temperamentcontainer}>{dogId[0].temperament?.map((temperament,i)=>(
                       <span key={i} className={s.temperament}>{temperament.toUpperCase()}</span>
                    ))}</div>}

                </div>

            </div>
            <Footer/>
        </>)}
        </div>
    )
}