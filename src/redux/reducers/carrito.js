import { actions } from "../actions/carrito";

import dbProductos from "./../../db/products.json"; //json con productos posibles


const initialState = {
  dbProductos: dbProductos,
  carrito: [],
};


export default function carritoReducer(state = initialState, action) {
  //console.log(action.type);
  switch (action.type) {
    
    case actions.DELETE:
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload.id),
      };

    //------------------------
      case actions.ADD_PROD:
        const cant = action.payload.cant;
        const newItem = { ...action.payload.item, cant };
        return {
        ...state,   // lo dejo por si el estado luego se le agregan mas cosas
        carrito: [...state.carrito, newItem]
         }

     //----------------------------
    case actions.ADD_DEC_CANT:
      const canti = action.payload.cant;
      const existeProdInCarrito = state.carrito.findIndex(item => item.id === action.payload.id);
       
      if (existeProdInCarrito >=0) {  //si existe el produc modifico cantidad
         const newCantM = parseInt(state.carrito[existeProdInCarrito].cant) + parseInt(canti);
         if  (newCantM >= 0)  //actulizo la cantidad mientras quede positiva
            {state.carrito[existeProdInCarrito].cant= newCantM;}
         }
        
      return {...state};
     //------------

      default:

      return state;
  }
}
