import styled from "styled-components";


const StyledFiltredMobile = styled.div`
@media screen and (min-width: 700px){
    display:none;
}
#modal:target{
  opacity:1;
  pointer-events:auto;
  background-color: white;
}
.modal{
  background-color: rgba(0,0,0,.8);
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:0;
  pointer-events:none;  
  padding:1rem ;
  z-index:99;
  .modal-top{
      display:flex;
      justify-content: space-between;
  }
  .modal-size{
        display:flex;
        justify-content: flex-start;
        font: normal normal normal 12px/18px Montserrat;
        color: #5D5D5D;
  }
}
.modal-container{
  background-color:#FFFFFF;
  width:100%;
  height: 100%;
  margin:1rem auto;
  position: relative;
}
.menu-button{
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