import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function RouterLink({ to, icon, name, exact }) {
    return (
        <Link to={to} end={exact}>
            { icon }
            { name }
        </Link>
    )
}

const Link = styled(NavLink)`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 14px;
    border-radius: 5px;
    color: #85909F;
    margin-bottom: 10px;
    font-weight: 600;

    svg {
        margin-right: 10px;
        font-size: 18px;
    }

    &.active {
        background: rgba(54,130,255,0.1);
        color: rgba(54,130,255,1);
    }
`

export default RouterLink