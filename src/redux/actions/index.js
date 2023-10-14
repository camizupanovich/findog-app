import axios from 'axios';
export const actions ={
    GET_DOGS: 'GET_DOGS',
    GET_DOG: 'GET_DOG',
    GET_DOG_NAME: 'GET_DOG_NAME',
    GET_TEMPERAMENTS: 'GET_TEMPERAMENTS',
    BY_SORT: 'BY_SORT',
    BY_TEMPERAMENT: 'BY_TEMPERAMENT',
    BY_CREATED:'BY_CREATED',
    LOADER:'LOADER',
    POST_DOG:'POST_DOG'
}

export function getDogs() {
    return async function (dispatch) {
      dispatch(loading())
      var json = await axios.get("https://dog-server-y5k1.onrender.com/dogs", {});
      return dispatch({
        type: actions.GET_DOGS,
        payload: json.data,
      });
    };
}

export function getDog(id){
    return async(dispatch)=>{
        let info = await axios.get(`https://dog-server-y5k1.onrender.com/dogs/${id}`);
        return dispatch({
            type: actions.GET_DOG,
            payload: info.data,
        });
    };
}

export function postDog(input){
    return async(dispatch)=>{
        let response = axios.post('https://dog-server-y5k1.onrender.com/dog',input);
        return dispatch({
            type: actions.POST_DOG,
        })
    }
}

export function getDogName(name){
    return async (dispatch)=>{
        let info = await axios.get(`https://dog-server-y5k1.onrender.com/dogs?name=${name}`);
            return dispatch({
                type: actions.GET_DOG_NAME,
                payload: info.data
            });
        }
}

export function getTemperaments(){
    return async (dispatch)=>{
        let temp = await axios.get('https://dog-server-y5k1.onrender.com/temperaments',{});
        return dispatch({
            type: actions.GET_TEMPERAMENTS,
            payload:temp.data,
        })
    }
}

export function bySort(typeOfSort){
    return ({
        type: 'BY_SORT',
        payload: typeOfSort,
    });
}

export function byTemperament(payload){
    return {
        type: 'BY_TEMPERAMENT',
        payload
    };
}

export function byCreated(typeofSource){
    return {
        type: 'BY_CREATED',
        payload:typeofSource,
    };
}

export function loading() {
  return {
    type: "LOADER",
  };
}
