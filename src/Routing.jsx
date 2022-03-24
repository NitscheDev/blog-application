import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'

function Routing() {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<h1>Overview</h1>} />
                <Route path='/dashboard/posts' element={<h1>Posts</h1>} />
                <Route path='/dashboard/users' element={<h1>Users</h1>} />
                <Route path='/dashboard/settings' element={<h1>Settings</h1>} />
            </Route>
        </Routes>
    )
}

export default Routing
