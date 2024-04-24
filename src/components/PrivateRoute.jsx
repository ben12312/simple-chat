import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    if (!localStorage.getItem("accessToken")) {
        return <Navigate to='/login'/>
    } else {
        return children
    }
}

export default PrivateRoute