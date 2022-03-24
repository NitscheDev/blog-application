import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './pages/dashboard/Overview'
import Posts from './pages/dashboard/Posts'

function Routing() {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<Overview />} />
                <Route path='/dashboard/posts' element={<Posts />} />
                <Route path='/dashboard/users' element={<h1>Users</h1>} />
                <Route path='/dashboard/settings' element={<h1>Settings</h1>} />
            </Route>
        </Routes>
    )
}

export default Routing
