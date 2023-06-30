import { Routes, Route } from "react-router-dom"
import { routes } from "./Utils/routes"
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import PageNotFound from "./Routes/PageNotFound"
import SendForm from "./Components/SendForm"
import Layout from "./Layout/Layout"




function App() {
  return (
    <div className="App">
        <Routes>
                <Route path={routes.home} element={<Layout/>}>
                    <Route path={routes.home} element={<Home/>}/>
                    <Route path={routes.contacto} element={<Contact/>}/>
                    <Route path={routes.detalle} element={<Detail/>}/>
                    <Route path={routes.destacados} element={<Favs/>}/>
                    <Route path={routes.envioDeForm} element={<SendForm/>}/>
                    <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
                </Route>
        </Routes>
        </div>
    );
}

export default App;
