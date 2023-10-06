import { Routes, Route } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { Products } from "../pages/Products"
import { LoginRegister } from "../pages/LoginRegister"
// import ProductList from "../components/ProductList"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/products' element={<Products />} />
                <Route path='/register' element={<LoginRegister />} />
            </Routes>

        </>
    )
}