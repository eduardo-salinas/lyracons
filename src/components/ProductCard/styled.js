import styled from "styled-components";


const StyledCard = styled.div`
    width: 20rem;
    border: transparent;
    margin:0 auto;
img{
    width:100%
}
.name{
    font: normal normal normal 12px/20px Montserrat;
    letter-spacing: 0.6px;
    color: #000000;
}
.prices{
    margin-top:-.7rem;
    font: normal normal normal 12px/15px Montserrat;
    .listPrice{
        color: #B5B5B5;
        text-decoration:line-through;
    }
    .bestPrice{
        color: #000000;
        padding-left: .5rem;
    }
    display:flex;
}
.fees{
    margin-top:-.7rem;
    font: normal normal normal 12px/20px Montserrat;
    color: #D81313;
}
`

export default StyledCard;