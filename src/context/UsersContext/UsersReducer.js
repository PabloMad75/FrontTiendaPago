export const UsersReducer = (globalState, action)=>{

  switch(action.type){
    case "OBTENER_USUARIOS":
      return {
        ...globalState,
        newProduct: action.payload
      }

      case "LOGIN_EXITOSO":
        // localStorage.setItem('token', action.payload.token)
        return {
            ...globalState,
            authStatus: true
        }
    default:
      return globalState;
  }
}