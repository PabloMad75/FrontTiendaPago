import { useContext, useState, useEffect } from "react"
import UsersContext from "../context/UsersContext/UsersContext"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
  const userCtx = useContext(UsersContext)
  const { authStatus, verifyingToken } = userCtx
  const  [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        await verifyingToken()
        setLoading(false)
      } catch (error) {
        console.log('error al verificar el token ',error)
        setLoading(false)
      }
    }
    fetchData()
  }, [authStatus, verifyingToken])

  if(loading) return null
// la funcion anterior puede ser un custom hook
  return (
    <>
    {
      authStatus ? (<> {children}</>) : ( <Navigate to='/register' replace />)
    }
    </>
  )
}
