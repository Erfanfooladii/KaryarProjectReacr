import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../../App";
import MainPage from "../../pages/mainpage/page";
import SinglePage from "../../pages/singlepage/page";
import CartPage from "../../pages/cartpage/page"

export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="/" element={<MainPage/>}>
            </Route>
            <Route path="/:id" element={<SinglePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Route>
    )
)