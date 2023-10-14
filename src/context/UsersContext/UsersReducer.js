// const initialState = {
//   // Define el mismo initialState aquí
//   usersData: {
//     _id: "",
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     password: "",
//     address: "",
//     phoneNumber: "",
//     role: "",
//   },
//   authStatus: false,
//   error: null, // Agrega una propiedad de error
// };

export const UsersReducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_USUARIOS":
      return {
        ...globalState,
        usersData: action.payload, // Cambiado de newProduct a usersData
        error: null,
      };

    case "LOGIN_EXITOSO":
      localStorage.setItem("token", action.payload.token);
      return {
        ...globalState,
        authStatus: true,
        usersData: action.payload, // Agregar la información del usuario si está disponible en action.payload
        error: null, // Limpia el mensaje de error en caso de éxito
      };

    case "ACTUALIZAR_USUARIO":
      return {
        ...globalState,
        authStatus: true,
        usersData: action.payload,
        error: null, // Limpia el mensaje de error en caso de éxito
      };

    case "REGISTRAR_USUARIO":
      // Maneja la acción de registro de usuario
      return {
        ...globalState,
        authStatus: true,
        usersData: action.payload, // Agrega el nuevo usuario al estado
        error: null, // Limpia el mensaje de error en caso de éxito
      };

    case "LOGIN_FALLIDO":
      return {
        ...globalState,
        error: action.payload, // Agrega el mensaje de error
        authStatus: false,
      };

    case "REGISTRO_FALLIDO":
      // Maneja errores de inicio de sesión o registro
      return {
        ...globalState,
        error: action.payload, // Agrega el mensaje de error
        authStatus: false,
      };

    case "OBTENER_USUARIO":
      // Maneja la acción para obtener información del usuario
      return {
        ...globalState,
        usersData: action.payload,
        error: null,
      };

    case "CERRAR_SESION":
      return {
        ...globalState,
        authStatus: false,
        usersData: '',
        error: null,
      };
      
    default:
      return globalState;
  }
};
