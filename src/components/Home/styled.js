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
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1,1fr);
        }
        padding-left: 1.5rem;
        display:grid;
        grid-template-columns: repeat(3,1fr);
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
.more{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
        margin-top: 1rem;
        height: 2.5rem;
        width: 10rem;
        background: #000000 0% 0% no-repeat padding-box;
        border-radius: 4px;
        font: normal normal bold 12px/15px Montserrat;
        letter-spacing: 0.24px;
        color: #FFFFFF;
    }
}
margin-bottom: 3rem;
`

export default StyledHome;