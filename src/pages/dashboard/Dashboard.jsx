import styled from 'styled-components'
import Sidebar from '../../components/dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <Dash>
            <Sidebar />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </Dash>
    )
}

const Dash = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
`

const Wrapper = styled.div`
    min-height: 100vh;
    flex: 1;
    padding: 50px;
`

export default Dashboard