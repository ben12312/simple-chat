import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './Home';
import Register from './Register';

function App() {
   return (
    <Router>
        <Routes>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={
                <PrivateRoute>
                    <Home/>
                </PrivateRoute>
            }/>
        </Routes>
    </Router>
   )
}

export default App;
