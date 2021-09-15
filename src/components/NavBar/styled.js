import styled from "styled-components";


const StyledNav = styled.div`
border: solid #D9D9D9 1px;
padding: 1rem;
.me-auto{
    font-size: 14px;
    letter-spacing: 1.4px;
    font-weight:700;
}
.search{
    display:flex;
    color:#989898;
    font-size: 12px;
    border-bottom: solid #989898 1px;
    input{
        color:#989898;
        width: 7rem;
        border:none;
    }
}
.nav-end{
    display:flex;
    font-size: 12px;
    a{
        color:#989898;
    }
}
img{
    margin-top: -.5rem;
}
`
export default StyledNav