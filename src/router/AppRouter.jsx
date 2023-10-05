import { Routes, Route } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
// import ProductList from "../components/ProductList"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/products' element={<ProductsList />} />
                <Route path='/register' element={<Register />} />
            </Routes>

        </>
    )
}