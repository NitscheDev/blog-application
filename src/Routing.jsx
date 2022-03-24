import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'

function Routing() {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    )
}

export default Routing
