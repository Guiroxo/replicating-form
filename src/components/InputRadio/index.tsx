import { Container } from './styles';

export function InputRadio () {
  return (
    <Container>
      <label>Would you recommend freeCodeCamp to a friend?</label>
      
        <label>
          <input type="radio" name="user-recommend" value="definitely" checked />Definitely
        </label>
        
        <label>
          <input type="radio" name="user-recommend" value="maybe" />Maybe
        </label>

        <label>
          <input type="radio" name="user-recommend" value="not-sure" />Not sure
        </label>
        
    </Container>
  )
}