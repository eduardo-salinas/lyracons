import styled from "styled-components";


const StyledFiltrer = styled.div`
    @media screen and (max-width: 700px){
        display:none;
    }
    width: 18rem;
    margin-left:.8rem;
.filtrer{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom:solid 1px #D9D9D9;
    .filtrer-by{
        margin: 1rem 0 .2rem;
        display:flex;
        justify-content: flex-start;
        font: normal normal normal 14px/24px Montserrat;
    }
}
.size{
    display:flex;
    justify-content: space-between;
}
.numb{
    border-bottom:solid 1px #D9D9D9;
}
`

export default StyledFiltrer;