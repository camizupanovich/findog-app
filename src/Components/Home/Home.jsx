import React from 'react';
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDogs,bySort,byTemperament,byCreated, getTemperaments} from '../../redux/actions/index'
import NavBar from './NavBar/NavBar';
import Card from './Card/Card';
import Filters from './Filters/Filters';
import s from './Home.module.css';
import Footer from '../Presentationals/Footer/Footer';
import Loader from '../Loader/Loader'
import NotFound from './NotFound/NotFound';

export default  function Home(){
  const [orden, setOrden] = useState('');
    const dispatch = useDispatch();
   useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperaments());
    },[dispatch]) 
  const loading = useSelector((state)=>state.loading)
  const dogs =useSelector((state)=>state.dogs);
  const temperaments = useSelector((state)=>state.temperaments);
  //paginacion
  const [page,setPage]=useState(0);
  const currentPage = dogs.slice(page,page+8);
  const handleNext = (e)=>{
    if(page< dogs.length-8) setPage(page+8);
    window.scrollTo(10,0);
  }
  const handlePrev=(e)=>{
    if(page>0) setPage(page-8);
    window.scrollTo(10,0);
  }
// ordenamientos
     const handleSort = (e)=>{
        dispatch(bySort(e));
        setOrden(e); 
        window.scrollTo(10,0); 
        setPage(0);
    }
    const handleByCreated = (e)=>{
        dispatch(byCreated(e));
      setOrden(e); 
      window.scrollTo(10,0); 
      setPage(0);
    }
// filtrar por temperamentos

const handleByTemperament= (e)=>{
    dispatch(byTemperament(e));
  setOrden(e); 
  setPage(0);
}
//borrar filtros
const handleRefresh = (e)=>{
    dispatch(getDogs());
    setOrden(''); 
    setPage(0);
}
    return(
        <><div className={s.navFix}>
            <NavBar/>{/*  props */} </div>

        <div className={s.body}>

            <div className={s.fixFilters}>
           <Filters 
           temperaments={temperaments}
           handleByTemperament={handleByTemperament}
           handleByCreated={handleByCreated} 
           handleSort={handleSort} 
           handleRefresh={handleRefresh} />
           </div>

           <div>

           <div className={s.gridCards}> 
           {currentPage.length<1 && !loading ? <NotFound/> : null}
           {loading &&  <Loader/>}
           {currentPage?.map((el)=>
            <Card
             dogs={el}
             key={el.id} />)} 
           </div>

        <div className={s.paginateContainer}>
            {page>0? <button  className={s.btnPaginate} onClick={handlePrev}>Previous</button>:null}
            {page<dogs.length-1 && currentPage.length===8? <button className={s.btnPaginate} onClick={handleNext}>Next</button>:null}
        </div>

          </div>
        
        </div>
        <Footer/>
         </>
    )
}