import { Container, MainTitle, MainSubtitle } from './styles';
import { Form } from '../Form';

export function Main () {
  return (
    <Container>
    <MainTitle>freeCodeCamp Survey Form</MainTitle>
    <MainSubtitle>Thank you for taking the time to help us improve the platform</MainSubtitle>
    <Form />
    </Container>
  )
}