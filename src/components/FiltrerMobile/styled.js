import styled from "styled-components";


const StyledFiltredMobile = styled.div`
@media screen and (min-width: 600px){
    display:none;
}
button{
    border: solid 1px black;
    border-radius: 0;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    font: normal normal normal 12px/38px Montserrat;
    color: #000000;
    width: 50%;
    height: 3rem;
    margin-bottom: -1rem;
}
img{
    padding-left:.5rem;
}
`

export default StyledFiltredMobile;