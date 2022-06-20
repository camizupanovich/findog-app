import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import { getTemperaments, postDog } from "../../../redux/actions";
import img from '../../../img/bar_icon.png';
import s from './Create.module.css';
import GoBack from '../GoBack/GoBack';
import Footer from "../Footer/Footer";

export default function Create(){

    const types = useSelector((state) => state.temperaments);

    const [input,setInput]=useState({
        name:'',
        minW:1,
        maxW:60,
        minH:1,
        maxH:60,
        longevity:'',
        image:img,
        temperaments:[]
    })
    

    const [errors,setErrors]=useState('')

    const validate = (entry)=>{
        let error = {};
            if(!/^[/A-Za-z\s]+$/g.test(entry.name)){
                error.name = 'Must not contain numbers or special characters';
            }
            if(entry.name.length>25){
                error.name = 'Should not exceed 25 characters'
            }
            if(entry.name.length<1){
                error.name='Required field'
            }
            if(!/[(http(s)?):\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(entry.image)){
                error.image = 'The image must be a validate url'
            }
            if(entry.temperaments.length< 1){
                error.temperaments = 'Minimum selection required'
            }
            if(entry.temperaments.length>5){
                error.temperaments = 'The limit of selection is 5'
            }
    return error;
    }

    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        })) 
    }

    const handleSelect=(e)=>{
        const newTemperament = {
            ...input,
            temperaments: input.temperaments.concat(e.target.value)
        }
        setInput(newTemperament);
        setErrors(validate(newTemperament)) 
    }

    const handleChekInfo = (errors)=>{
        return Object.keys(errors).length>0
    }

    const dispatch = useDispatch();
    const history = useHistory();
    

    const handleSubmit = (input,e)=>{
        e.preventDefault();
        //imagen por default
        if(input.image.length<10){
            input.image=img
        }
        dispatch(postDog(input));
        alert('Thanks for post !')
        setTimeout(()=>{
            history.push('/dogs')
        },1000)
    }

    return(<>
        <div className={s.container}>
            <GoBack/>
        <form className={s.form} onSubmit={(e)=>handleSubmit(input,e)}>
            {errors.name?
            <label className={s.error}>{errors.name}</label>:
            <label className={s.label}>What is the name?</label>}
            <input type='text' className={s.input} placeholder="Name" value={input.name} name='name' onChange={(e)=> handleChange(e)}/>
            <hr/>
            <label className={s.label}>How many years are him?</label>
            <input type='number' className={s.input} placeholder="Years" value={input.longevity} name='longevity' onChange={(e)=> handleChange(e)}/>
            <hr/>
            <img  className={s.img} src={input.image} alt='post your puppie'/>
            {errors.image?
            <label className={s.error}>{errors.image}</label>: 
            <label className={s.label}>Post a URL image of your puppie !</label>}
            <input type='text' className={s.input} placeholder='https://www.dogapp.com/img.jpeg' value={input.image} name='image' onChange={(e)=> handleChange(e)}/>
            <div className={s.row}>
            <label className={s.label}>Min Weigth: {input.minW}</label>
            <label className={s.label}>Max Weigth: {input.maxW}</label>
            </div>
            <div className={s.row}>
            <input className={s.range} type='range' placeholder="Min Weigth" value={input.minW} name='minW'  onChange={(e)=> handleChange(e)}/>
            <input className={s.range} type='range' placeholder="Max Weigth" value={input.maxW} name='maxW'   onChange={(e)=> handleChange(e)}/>
            </div>
            <hr/>
            <div className={s.row}>
            <label className={s.label}>Min Heigth: {input.minH}</label>
            <label className={s.label}>Max Heigth: {input.maxH}</label>
            </div>
            <div className={s.row}>
            <input className={s.range} type='range' placeholder="Min Heigth" value={input.minH} name='minH' min="1" max="60"  step="1" onChange={(e)=> handleChange(e)}/>
            <input className={s.range} type='range' placeholder="Max Heigth" value={input.maxH} name='maxH' min="1" max="120"  step="1" onChange={(e)=> handleChange(e)}/>
            </div>
              {errors.temperaments?
               <label className={s.error}>{errors.temperaments}</label> :
               <label className={s.label}>Select the temperaments </label>}  
               <select className={s.select} onChange = {(e)=>handleSelect(e)} >
                    {types?.map((types)=>
                        <option  key = {types.id} value = {types.name}> {types.name} </option>)}  
                </select>

            <div className={s.tempContainer} >
                {input.temperaments?.map(t=> 
                    <span  className={s.temp} key={t}>{t}</span>)}
            </div>

            <input type='submit' value='CREATE !' className={s.btn} disabled={handleChekInfo(errors)}/>

        </form>
        </div>
        <Footer/>
        </>
    )
}