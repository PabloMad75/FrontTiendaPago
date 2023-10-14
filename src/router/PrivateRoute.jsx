import { useContext } from "react"
import UsersContext from "../context/UsersContext/UsersContext"

export const PrivateRoute = ({children}) => {
  const userCtx = useContext(UsersContext)
  const { authStatus, veifyingToken } = userCtx

  return (
    <div>PrivateRouter</div>
  )
}
