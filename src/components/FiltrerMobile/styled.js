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
        flex-direction:column;
        border-bottom: 1px solid #D9D9D9;
        p{
          display:flex;
          justify-content: flex-start;
        }
        font: normal normal normal 12px/18px Montserrat;
        color: #5D5D5D;
        .all-sizes{
          display:grid;
          grid-template-columns: repeat(4,1fr);
        }
        .name-size{
          padding:1rem;
          margin:1rem;
          border: 1px solid #989898;
          border-radius:50%;
          font: normal normal bold 14px/18px Montserrat;
          letter-spacing: -0.84px;
          color: #697078;
        }
        .name-size:hover{
          border: 3px solid #5D5D5D;
        }
  }
}
.modal-color{
        display:flex;
        flex-direction:column;
        border-bottom: 1px solid #D9D9D9;
        p{
          display:flex;
          justify-content: flex-start;
        }
        font: normal normal normal 12px/18px Montserrat;
        color: #5D5D5D;
        padding:.5rem 0 .5rem 0;
  .all-colors{
    display:flex;
  }
  .box-1{
    margin:.5rem;
    top: 283px; 
    left: 90px;
    width: 53px;
    height: 77px;
    background-color: #9FA9AE;
  }
  .box-1{
    border: 2px solid #D81313;
  }
  .box{
    margin:.5rem;
    top: 283px; 
    left: 90px;
    width: 53px;
    height: 77px;
    background-color: #9FA9AE;
  }
}
.modal-price{
        display:flex;
        flex-direction:column;
        p{
          display:flex;
          justify-content: flex-start;
        }
        font: normal normal normal 12px/18px Montserrat;
        color: #5D5D5D;
        padding:.5rem 0 1rem 0;
  .all-prices{
    display:flex;
    flex-direction: column;
  }  
}
.modal-container{
  background-color:#FFFFFF;
  width:100%;
  height: 100%;
  margin:.5rem auto;
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
.apply{
  margin-left: 1.2rem;
  display:flex;
  justify-content: flex-start;
  height: 3rem;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #000000;
  border-radius: 4px;
  font: normal normal normal 14px/20px Montserrat;
}
`

export default StyledFiltredMobile;