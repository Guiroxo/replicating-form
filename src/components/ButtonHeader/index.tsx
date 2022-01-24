import { Container } from './styles';

interface ButtonHeaderProps {
  title: string;
  href: string;
}

export function ButtonHeader ({ title, href }: ButtonHeaderProps) {
  return (
    <Container>
      <button > 
        <a href={href}>{title}</a> 
      </button> 
    </Container>
  )
}