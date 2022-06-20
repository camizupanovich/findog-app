import { actions } from "../actions";

const initialState ={
    allDogs:[], // siempre van a estar todos
    dogs:[], //primero estan todos, despues le aplicamos los filtros
    dogId:{}, //detalle del perro,
    temperaments: [],
    loading:true
};

export default function rootReducer(state=initialState,action){
    switch(action.type){
//EN PRIMER INSTANCIA TRAIGO TODOS
        case actions.GET_DOGS:
            return{
              ...state,
                dogs: action.payload,
                allDogs: action.payload,
                loading:false
            };
//OBTENER POR ID
        case actions.GET_DOG:
            return{
                ...state,
                dogId: action.payload,
            };
//AGREGAR 
        case actions.POST_DOG:
            return{
                ...state,
            };
//FILTRAR POR NOMBRE
        case actions.GET_DOG_NAME:
            return{
                ...state,
                dogs: action.payload,
            };
//TRAER TEMPERAMENTOS (TODOS) ME VA A SERVIR PARA FILTRAR PRIMER INSTANCIA,
        case actions.GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload,
            };
//ORDENAMIENTO
        case actions.BY_SORT:
            let info = state.allDogs;
            let sortedArr =
              action.payload === "az"
                ? info.sort(function (a, b) {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (b.name > a.name) {
                      return -1;
                    }
                    return 0;
                  })
                : action.payload === "za"
                ? info.sort(function (a, b) {
                    if (a.name > b.name) {
                      return -1;
                    }
                    if (b.name > a.name) {
                      return 1;
                    }
                    return 0;
                  })
                : action.payload === "max_weight"
                ? info.sort(function (a, b) {
                    if (
                      Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])
                    ) {
                      return -1;
                    }
                    if (
                      Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])
                    ) {
                      return 1;
                    }
                    return 0;
                  })
                : info.sort(function (a, b) {
                    if (
                      Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])
                    ) {
                      return 1;
                    }
                    if (
                      Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])
                    ) {
                      return -1;
                    }
                    return 0;
                  });
            return {
              dogs: sortedArr,
              allDogs:sortedArr,
              ...state
            };
//ACA FILTRO SEGUN TEMPERAMENTO
        case actions.BY_TEMPERAMENT:
            const dogsInState = state.dogs;
            const dogsFiltered = dogsInState.filter(e=>e.temperament?.includes(action.payload))
            return{
                ...state,
                dogs: dogsFiltered
            }
//FILTRAR POR ORIGEN
        case actions.BY_CREATED:
          let dogsforFilter;
          action.payload==='created'?  dogsforFilter= state.allDogs.filter((d)=>d.createdDB===true): dogsforFilter= state.allDogs;
          return{
            ...state,
            dogs: dogsforFilter
          }
        case actions.LOADER:
          return{
            ...state,
            loading:true
          }
        default:
            return state;
        }
    }
