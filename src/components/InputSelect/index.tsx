import { Container } from './styles';
import { ButtonSelect } from '../ButtonSelect'

export function InputSelect () {
  return (
    <Container>
      <fieldset>     
      <label>What would you like to see improved? (Check all that apply)</label>

      <ButtonSelect title="Front-end Projects" name="option1" id="option1" htmlfor="option1"/>
      <ButtonSelect title="Back-end Projects" name="option2" id="option2" htmlfor="option2"/>
      <ButtonSelect title="Data Visualization" name="option3" id="option3" htmlfor="option3"/>
      <ButtonSelect title="Challenges" name="option4" id="option4" htmlfor="option4"/>
      <ButtonSelect title="Open Source Community" name="option5" id="option5" htmlfor="option5"/>
      <ButtonSelect title="Gitter help rooms" name="option6" id="option6" htmlfor="option6"/>
      <ButtonSelect title="Videos" name="option7" id="option7" htmlfor="option7"/>
      <ButtonSelect title="City Meetups" name="option8" id="option8" htmlfor="option8"/>
      <ButtonSelect title="Wiki" name="option9" id="option9" htmlfor="option9"/>
      <ButtonSelect title="Forum" name="option10" id="option10" htmlfor="option10"/>
      <ButtonSelect title="Additional Courses" name="option11" id="option11" htmlfor="option11"/>

      </fieldset>
    </Container>
  )
}