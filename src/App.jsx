import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
// import PrivateRoute from './components/PrivateRoute';
import Home from './Home';
import Register from './Register';

function App() {
   return (
    <Router>
        <Routes>
            <Route exact path='/' element={
                // <PrivateRoute>
                    <Home/>
                // </PrivateRoute>
            }/>
            <Route exact path='/login' element={<SignIn/>}/>
            <Route exact path='/register' element={<Register/>}/>
        </Routes>
    </Router>
   )
}

export default App;
