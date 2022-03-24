import styled from 'styled-components'

function Header() {
    //grab the url path and use as title
    let url = window.location.pathname.split('/').pop()
    if (url === 'dashboard') url = 'overview'
    return (
        <StyledHeader>
            <h1 className="title">{url}</h1>
            <div className="profile">
                <p className='fullname'>Rasmus Nitsche</p>
                <div className="avatar">RN</div>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 20px;
        text-transform: capitalize;
        color: #23242f;
    }

    .profile {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;

        .fullname {
            font-size: 14px;
            margin-right: 10px;
            color: #23242f;
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
    }
`

export default Header