import { Container } from './styles';
import { Button } from '../Button';
import { InputText } from '../InputText';
import { InputOptions } from '../InputOptions';
import { InputRadio } from '../InputRadio';
import { InputComment } from '../InputComment';
import { InputSelect } from '../InputSelect';


export function Form () {
  return (
    <Container>
      <InputText title="Name" type="text" placeholder="Enter your name" />
      <InputText title="Email" type="email" placeholder="Enter your Email" />
      <InputText title="Age (optional)" type="number" placeholder="Age" />
      <InputOptions title="Which option recommend freeCodeCamp to a friend?">
        <option value="">Select current role</option>
        <option value="">Student</option>
        <option value="">Full time Job</option>
        <option value="">Full time Learner</option>
        <option value="">Prefer not to say</option>
        <option value="">Other</option>
      </InputOptions>
      <InputRadio />
      <InputOptions title="What is your favorite feature of freeCodeCamp?">
        <option value="">Select an option</option>
        <option value="">Challenges</option>
        <option value="">Projects</option>
        <option value="">Community</option>
        <option value="">Open Source</option>
      </InputOptions>
      <InputSelect />
      <InputComment />
      <Button />
    </Container>
  )
};