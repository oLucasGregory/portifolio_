import styled from "styled-components";
import{Props} from ".";

export const TituloEstilo  = styled.h3<Props>`
 color: #f9f9f9;
 font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
 font-weigth: bold;
 margin-bottom: 16px;

 @media (max-width: 768px){
   text-align: center;
   font-size: 24px;
  }
`
