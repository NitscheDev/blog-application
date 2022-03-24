import styled from 'styled-components'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import RouterLink from './RouterLink';

function Sidebar() {
    return (
        <StyledSidebar>
            <div className="head">
                <p>React<span className='colored'>Blog</span></p>
            </div>
            <RouterLink to='/dashboard' name='overview' icon={<VscHome />} exact='true' />
            <RouterLink to='/dashboard/posts' name='posts' icon={<VscArchive />} />
            <RouterLink to='/dashboard/users' name='users' icon={<VscAccount />} />
            <RouterLink to='/dashboard/settings' name='settings' icon={<VscSettingsGear />} />
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
            .colored { color: rgba(54,130,255,1); }
        }
    }
`

export default Sidebar