import styled from "styled-components";


const StyledFooter = styled.div`
border-top: solid 1px #D9D9D9;
padding:1rem;
.footer{
    .help{
        display:flex;
        flex-direction: column;
        text-align:center;        
        a{
            font: normal normal normal 12px/20px Montserrat;
            letter-spacing: 1.2px;
            color: #000000;
        }
    }
    .news{
        padding:1rem;
        text-align:center;
        h1{
            font: normal normal bold 18px/20px Montserrat;
            letter-spacing: 0.18px;
            color: #000000;
        }
        p{
            font: normal normal normal 13px/20px Montserrat;
            letter-spacing: 0px;
            color: #000000; 
        }
        input{
            width: 15rem;
            height: 2rem;
            text-align:center;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #989898;
            border-radius: 4px;
            font: normal normal normal 12px/15px Montserrat;
            color: #989898;
            margin-bottom: 1rem;
        }
        button{
            background: #000000 0% 0% no-repeat padding-box;
            border-radius: 4px;
            font: normal normal normal 12px/40px Montserrat;
            color: #FFFFFF;
        }
    }
}
`

export default StyledFooter;