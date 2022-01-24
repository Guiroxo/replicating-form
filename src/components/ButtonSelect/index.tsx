import { Container } from './styles';

interface ButtonSelectProps {
  title: string;
  name: string;
  id: string;
  htmlfor: string;
}

export function ButtonSelect ({title, name, id, htmlfor}: ButtonSelectProps) {
  return (
    <Container>
      <input type="checkbox" name={name} id={id} />
      <label htmlFor={htmlfor}>{title}</label>
    </Container>
  )
}