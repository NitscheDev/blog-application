import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Header() {
    //grab the url path and use as title
    let url = window.location.pathname.split('/').pop()
    if (url === 'dashboard') url = 'overview'

    //open profile modal
    const openModal = (e) => {
        //grab modal from DOM
        const modal = document.querySelector('.popup')
        modal.classList.add('active')

        //setup event listner on window to detect click outside the profile div
        window.addEventListener('click', (e) => {
            //check if a click event happened outside the profile div if so close the modal
            if (!document.querySelector('.profile').contains(e.target)) {
                modal.classList.remove('active')
            }
        })
    }
    
    return (
        <StyledHeader>
            <h1 className="title">{url}</h1>
            <div className="profile" onClick={openModal}>
                <p className='fullname'>Rasmus Nitsche</p>
                <div className="avatar">RN</div>
                <div className="popup">
                    <Link to={'/dashboard/settings'}>My Account</Link>
                    <Link to={'/dashboard/settings'}>Logout</Link>
                </div>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333441;

    .title {
        font-size: 20px;
        text-transform: capitalize;
        font-weight: 600;
    }

    .profile {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;

        .fullname {
            font-size: 14px;
            margin-right: 10px;
        }
        .avatar {
            width: 35px;
            height: 35px;
            background: #3682F4;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #FFFFFF;
            font-weight: 600;
        }
        .popup {
            position: absolute;
            display: none;
            flex-direction: column;
            align-items: center;
            top: 20px;
            right: 10px;
            width: 200px;
            height: 100px;
            background: #FFFFFF;
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 5px;
            overflow: hidden;
            //Link -> a
            a {
                font-size: 14px;
                text-decoration: none;
                width: 100%;
                height: 50%;
                display: flex;
                align-items: center;
                padding: 0px 20px;
                color: #333441;
                transition: background .2s ease;

                &:hover {
                    background: #f5f6fa;
                }
            }
            //active state
            &.active {
                display: flex;
            }
        }
    }
`

export default Header