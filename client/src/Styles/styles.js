import styled from 'styled-components';

const Container = styled.div`
  margin: 2em auto;
  max-width: 630px; 
`

const ToolTip = styled.div`
  color: var(--light-grey);
  background-color: var(--black);
  padding: 10px 0;
  border-radius: 4px;
  width: 250px;
  margin-bottom: 10px;
  text-align: center;
`

const BoxFrame = styled.div`
  width: 250px;
  border: 1px solid var(--light-grey);
  text-align: left;
`

const BoxFrameContent = styled.div`
  margin: 10px;
`

const ProgressBarContainer = styled.div`
  position: relative;
  height: 12px;
  border-bottom: 1px solid var(--light-grey);
`

const TextInput = styled.input.attrs(() => ({
  type: 'text'
}))`
  padding: 11px;
  border-radius: 5px;
  border: 1px solid var(--light-grey);
`
const Submit = styled.input.attrs(() => ({
  type: 'submit'
}))`
  padding: 12px;
  background-color: var(--green);
  border: 0px;
  color: var(--white);
  border-radius: 5px;

`

export {
   Container,
   ToolTip,
   BoxFrame,
   BoxFrameContent,
   ProgressBarContainer,
   TextInput,
   Submit
}