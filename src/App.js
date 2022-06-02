import Register from "./pages/Register";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>          
        </BrowserRouter>
      </>
  );
}

export default App;

