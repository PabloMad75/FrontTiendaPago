const initialState = { // Define el mismo initialState aquí
  usersData: {
    _id: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    address: '',
    phoneNumber: '',
    role: '',
  },
  authStatus: false,
};

export const UsersReducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_USUARIOS":
      return {
        ...globalState,
        usersData: action.payload, // Cambiado de newProduct a usersData
      };

    case "LOGIN_EXITOSO":
      localStorage.setItem('token', action.payload.token)
      return {
        ...globalState,
        authStatus: true,
        usersData: action.payload, // Agregar la información del usuario si está disponible en action.payload
      };

      case "ACTUALIZAR_USUARIO":
        return {
          ...globalState,
          authStatus:true,
          usersData: action.payload,
        };
      

    case "CERRAR_SESION":
      return {
        ...globalState,
        authStatus: false,
        usersData: initialState.usersData, // Limpia la información del usuario al cerrar sesión
      };
    default:
      return globalState;
  }
};
