import { useReducer } from 'react'
import UsersContext from './UsersContext'
import { axiosClient } from '../../config/api'
import { UsersReducer } from './UsersReducer'

export const UsersState = ({ children }) => {

    const initialState = {
        usersData: [
            {
                _id: '',
                firstName: '',
                lastName: '',
                emailAddress: '',
                password: '',
                address: '',
                phoneNumber: '',
                role: ''
            },
        ],
        authStatus: false,
        error: null, // Agrega una propiedad de error
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    const getUsers = async () => {
        try {
            const response = await axiosClient.get('/users')
            console.log(response.data)

            dispatch({
                type: "OBTENER_USUARIOS",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const signupUser = async (dataForm) => {
        try {
            const response = await axiosClient.post('/users', dataForm)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Bienvenido ${response.data.user.firstName} ${response.data.user.lastName} `,
                showConfirmButton: true,
                timer: 1500
            })
            dispatch({
                type: "REGISTRAR_USUARIO",
                payload: response.data.user,
            })
        } catch (error) {

            let errorMessage = 'Error al registrarse';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `paso${errorMessage}`,
                    showConfirmButton: true,
                    // timer: 1500
                })
            }

            dispatch({
                type: "REGISTRO_FALLIDO",
                payload: errorMessage, // Agrega el mensaje de error al estado
            });
        }
    }

    const loginUser = async (dataForm) => {
        try {
            const response = await axiosClient.post('/login', dataForm, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: response.data
            })

            const dataString = JSON.stringify(response.data)
            console.log(`datos del response: ${dataString}`)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Bienvenido ${response.data.firstName} ${response.data.lastName} `,
                showConfirmButton: true,
                timer: 1500
            })
        } catch (error) {
            let errorMessage = 'Error al iniciar sesión';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
                console.log(error.response);
                console.log(error.response.data);
                console.log(error.response.data.message);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${errorMessage}`,
                    showConfirmButton: true,
                    // timer: 1500
                })
            }
            
            dispatch({
                type: "LOGIN_FALLIDO",
                payload: error.response, // Agrega el mensaje de error al estado
            });
        }
    }
    const updateUser = async (userId, updatedUserData) => {
        console.log("eluserid", userId)
        console.log("Datos updated", JSON.stringify(updatedUserData))
        try {
            const response = await axiosClient.put(`/users/${userId}`, updatedUserData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            dispatch({
                type: "ACTUALIZAR_USUARIO",
                payload: response.data.updatedUser,
            });

            alert('Datos del usuario actualizados con éxito');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message);
            } else {
                console.log(error.message);
            }
        }
    };

    const logoutUser = async () => {
        // Realiza las acciones necesarias para cerrar la sesión del usuario, por ejemplo:
        localStorage.removeItem('token'); // Elimina el token de autenticación del almacenamiento local
        dispatch({
            type: 'CERRAR_SESION',
        });
    };


    const verifyingToken = async () => {
        const token = localStorage.getItem('token')

        if (token) {
            axiosClient.defaults.headers.common['authorization'] = token
        } else {
            delete axiosClient.defaults.headers.common['authorization']
        }

        const response = await axiosClient.get('/verify-token')

        dispatch({
            type: "OBTENER_USUARIO",
            payload: response.data
        })
    }

    return (
        <UsersContext.Provider
            value={{
                usersData: globalState.usersData,
                authStatus: globalState.authStatus,
                error: globalState.error, // Añade error al contexto
                loginUser,
                getUsers,
                signupUser,
                verifyingToken,
                logoutUser,
                updateUser
            }}
        >{children}</UsersContext.Provider>
    )
}