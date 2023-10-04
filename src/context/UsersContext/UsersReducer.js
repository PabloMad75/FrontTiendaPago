export const UsersReducer = (globalState, action)=>{

  switch(action.type){
    case "OBTENER_USUARIOS":
      return {
        ...globalState,
        newProduct: action.payload
      }
    default:
      return globalState;
  }
}