import { useReducer } from 'react'
import UsersContext from './UsersContext'
import { axiosClient } from '../../config/api'
import { UsersReducer } from './UsersReducer'

export const UsersState = ({children}) => {

    const initialState = {
        usersData: [
            {
                _id:'',
                firstName: '',
                lastName: '',
                emailAddress: '',
                password: '',
                address: '',
                phoneNumber: '',
                role: ''
            }
        ],
        // authStatus: false
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    const getUsers = async() => {
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

    const signupUser = async(dataForm) => {
        try {
            const response = await axiosClient.post('/users', dataForm)
            dispatch({
                type:"REGISTRAR_USUARIO",
                payload: response.data,
            })
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Si el error tiene una respuesta y un mensaje de datos, lo mostramos
                console.log(error.response.data.message);
                alert(error.response.data.message)
            } else {
                // Si no, simplemente mostramos el mensaje de error predeterminado
                console.log(error.message);
            }
        }
    }

    const loginUser = async(dataForm) => {
        try {
            const response = await axiosClient.post('/login', dataForm,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log(response)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: response.data
            })

                    // Actualiza globalState.usersData con la información del usuario
        dispatch({
            type: "ACTUALIZAR_USUARIOS_DATA",
            payload: response.data // Asume que response.data contiene la información del usuario
        });

            console.log('soy el pulento login')
            const dataString = JSON.stringify(response.data)
            console.log(`datos del response: ${dataString}`)
            alert(response.data)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Si el error tiene una respuesta y un mensaje de datos, lo mostramos
                console.log(error.response.data.message);
                alert(error.response.data.message)
            } else {
                // Si no, simplemente mostramos el mensaje de error predeterminado
                console.log(error.message);
                alert(error.message);
            }
        }
    }

    const verifyingToken = async() => {
        const token = localStorage.getItem('token')

        if(token) {
            axiosClient.defaults.headers.common['authorization'] = token
        }else{
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
                loginUser,
                getUsers,
                signupUser,
                verifyingToken
            }}
        >{children}</UsersContext.Provider>
    )
}