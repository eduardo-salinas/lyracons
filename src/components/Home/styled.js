import styled from "styled-components";


const StyledHome = styled.div`
.title{
    margin:1.5rem 0rem 1rem 5rem;
    padding:0;
    .temp{
        display:flex;
        font: normal normal normal 11px/18px Montserrat;     
   color: #000000;
   p{
       padding-left:.5rem;
   }
    }
    h1{
        font: normal normal 300 28px/30px Montserrat;
        margin-top: -.2rem;
    }
}
.all{
    border-top:solid 1px #D9D9D9;
    margin-left:5%;
    margin-right: 5%;
    display: flex;
    .products{
        padding-left: 1.5rem;
        display:grid;
        grid-template-columns: repeat(3,0fr);
        grid-gap: 1rem;
        justify-content: center;
    }
    .top{
        padding-left: 2rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        font: normal normal normal 13px/16px Montserrat;
        letter-spacing: 1.3px;
        color: #697078;
        select{
            border:none;
        }
    }
}
margin-bottom: 3rem;
`

export default StyledHome;