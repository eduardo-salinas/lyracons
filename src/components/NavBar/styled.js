import styled from "styled-components";


const StyledNav = styled.div`
.menu-app{
    @media screen and (min-width: 600px){
        display:none;
    }
    display:flex;
    margin-left:-.5rem;
    img{
        margin-left:-1rem;
    }
}
.app-wallet{
    @media screen and (min-width: 600px){
        display:none;
    }
}
.logo{
    @media screen and (max-width: 600px){
    margin:0 1rem 0 1rem;
    }
}
.nav{
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid #D9D9D9 1px;
    padding: 1rem;
}
.list{    
    @media screen and (max-width: 600px){
        display:none;
    }
    font: normal normal normal 14px/20px Montserrat;
    letter-spacing: 1.4px;
    font-weight:700;
    .menu{
        list-style:none;
        li{
            a{
                display:block;
                text-decoration:none;
                color:#000000;
                padding: .5rem;
                border-radius: .2rem;
            } 
            a:hover{
                background-color:#D9D9D9 ;
            }         
            float:left;
        }
        ul{
            text-align: center;
            display:none;
            position: absolute;
            max-width: 8rem;
            list-style:none;
            padding:1rem;
            background-color: #FFFFFF;
            border:1px solid #D9D9D9;
        }
        li:hover {
            ul{
                display:block;
            }
        }
    }
}
.search{
    @media screen and (max-width: 600px){
        display:none;}
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
    @media screen and (max-width: 600px){
        display:none;}
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