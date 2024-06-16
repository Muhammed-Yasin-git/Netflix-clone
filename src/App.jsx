import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Components/Pages/Home"
import { AuthContextProvider } from "./Context/AuthContext.jsx"
import SignIn from "./Components/Pages/SignIn.jsx"
import SignUp from "./Components/Pages/SignUp.jsx"
import Accounts from "./Components/Pages/Accounts.jsx"
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx"


function App() {

  return (
    <>
    <AuthContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<ProtectedRoutes><Accounts/></ProtectedRoutes>}/>
      </Routes>
    </AuthContextProvider>
    </>
  ) 
}

export default App
