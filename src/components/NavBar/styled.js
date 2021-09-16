import styled from "styled-components";


const StyledNav = styled.div`
.nav{
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid #D9D9D9 1px;
    padding: 1rem;
}
.list{
    a{
        letter-spacing: 1.4px;
        font-weight:700;
        font: normal normal normal 14px/20px Montserrat;
        color:#000000;
        text-decoration:none;
        margin-right: 1rem;
    }
}
.search{
    display:flex;
    color:#989898;
    border-bottom: solid #989898 1px;
    input{
        font: normal normal normal 12px/20px Montserrat;
        letter-spacing: 0.12px;
        color:#989898;
        width: 8rem;
        border:none;
    }
}
.nav-end{
    display:flex;
    align-items: center;
    font-size: 12px;
    a{
        margin-right:1rem;
        color:#989898;
    }
}
`
export default StyledNav