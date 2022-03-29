import styled from 'styled-components'
import { FiGrid, FiFileText, FiUsers, FiSettings } from 'react-icons/fi'
import RouterLink from './RouterLink';

function Sidebar() {
    return (
        <StyledSidebar>
            <div className="head">
                <p>React<span className='colored'>Blog</span></p>
            </div>
            <RouterLink to='/dashboard' name='overview' icon={<FiGrid />} exact='true' />
            <RouterLink to='/dashboard/posts' name='posts' icon={<FiFileText />} />
            <RouterLink to='/dashboard/users' name='users' icon={<FiUsers />} />
            <RouterLink to='/dashboard/settings' name='settings' icon={<FiSettings />} />
        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
    position: sticky;
    top: 0px;
    height: 100vh;
    width: 230px;
    background: #f0f4fa;
    padding: 15px;

    .head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -15px;
        padding: 30px 0px;

        p {
            font-size: 24px;
            font-weight: 600;
            color: #23242f;
            .colored { color: rgba(54,130,255,1); }
        }
    }
`

export default Sidebar