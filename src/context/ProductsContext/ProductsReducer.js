export const ProductsReducer = (globalState, action)=>{

  switch(action.type){
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        newProduct: action.payload
      }
    default:
      return globalState;
  }
}