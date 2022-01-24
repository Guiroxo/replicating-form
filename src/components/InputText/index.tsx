import { Container } from './styles';

interface InputTextProps {
  title: string;
  placeholder: string;
  type: string;
}

export function InputText ({title, type, placeholder}: InputTextProps) {
   return(
    <Container>
      <label>{title}</label>
      <input type={type} placeholder={placeholder}/>;
    </Container>
  )
}