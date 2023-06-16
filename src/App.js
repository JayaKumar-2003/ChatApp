import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
 const {currentUser} = useContext(AuthContext);
 const ProtectedRoute = ({children}) => {
    if(!currentUser) {
        return <Navigate to="/login"/>
    }
    return children;
 }
  return (
      <BrowserRouter>
      <Routes >
        <Route path="/">
        <Route index element={
          <ProtectedRoute>
            <Home></Home>
          </ProtectedRoute>
        }></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
