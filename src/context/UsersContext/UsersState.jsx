import { useReducer } from 'react'
import UsersContext from './UsersContext'
import { axiosClient } from '../../config/api'
import { UsersReducer } from './UsersReducer'


export const UserState = ({children}) => {

    const initialState = {
        usersData: [
            {
                firstName: '',
                lastName: '',
                emailAddress: '',
                password: '',
                address: '',
                phoneNumber: '',
                role: ''
            }
        ],
        authStatus: false 
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    const getUsers = async() => {
        try {
            const response = await axiosClient.get('/users')
            console.log(response)

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
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const loginUser = async(dataForm) => {
        try {
            const response = await axiosClient.post('/login', dataForm)
            console.log(response)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: response.data
            })

            console.log('soy el pulento login')
        } catch (error) {
            console.log(message.error)
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
                usersData: globalState.users,
                authStatus: globalState.authStatus,
                loginUser,
                getUsers,
                signupUser,
                verifyingToken
            }}
        >{children}</UsersContext.Provider>
    )
}