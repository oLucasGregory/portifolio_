import styled from "styled-components"


export const Card = styled.div`
  border: 1px solid #C1C1C1;
  padding: 16px;
  

`

export const LinkBotao = styled.a`
  margin: 16px;
  color: #f9f9f9;
  border-radius: 5px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  border: none;
  color: #f9f9f9;

&:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
&:hover {
  color: #f9f9f9;
}
&:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}
&:active {
  top: 2px;
}

`
export const Lista = styled.ul`
  width: 90%;
  margin: 40px auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;



  img{
   width: 100%;
   border-radius: 8px;
   display: block;
   margin: 0 auto;
   margin-bottom: 16px;
   transition: transform .3s;
   &:hover{
    transform: scale(1.05);
   }

  }

  @media(max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;


  }
`