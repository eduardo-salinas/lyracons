import styled from "styled-components";


const StyledHeader = styled.div`
.header{
    @media screen and (max-width: 600px){
        display:flex;
        flex-direction:column ;
        h3{
            margin-top:-.5rem;
        }
    }
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color:#FFFFFF;
}
h3{
    letter-spacing: 0.3px;
    font: normal normal normal 12px/15px Montserrat;
}
h1{
    font: normal normal bold 12px/15px Montserrat;
    padding: .5rem;
    letter-spacing: 0.12px;
}
`

export default StyledHeader;