import React, { useState } from 'react';
import styled from 'styled-components'
import { Container, ToolTip, BoxFrame, BoxFrameContent, ProgressBarContainer, TextInput, Submit } from '../Styles/styles'
import '../Styles/index.css';


const ProgressBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: ${props => props.progress < 100 ? 'var(--orange)' : 'var(--green)'};
  width: ${props => 
  props.progress && props.progress >= 100 ? '100%' 
  : props.progress && props.progress < 100 ? `${props.progress}%`  
  : '0'};
`

const Notification = styled.div`
  border: 1px solid; 
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  border-color: ${props => props.error ? 'var(--red)' : 'var(--green)'};
  background-color: ${props => props.error ? 'var(--light-red)' : 'var(--light-green)'};
  a {
    color: var(--true-black);
  }
`

export default () =>  { 
  const [amount, setAmount] = useState(null);
  const [pledgeSent, setPledgeSent] = useState(false);
  const [error, setError] = useState(false);

  const targetFunds = 1000;
  let amountFunded = localStorage.getItem('amountFunded')
  let percentageOfGoal = localStorage.getItem('percentageOfGoal')

  const savePledge = (e) => {
    e.preventDefault();
    setError(false);
    setPledgeSent(true);

    if (Number(amount) % 1 !== 0){
      setError(true);
      return;
    }
    amountFunded = Number(amountFunded) + Number(amount)
    localStorage.setItem('amountFunded', amountFunded)
    percentageOfGoal = Math.floor((amountFunded / targetFunds) * 100)
    localStorage.setItem('percentageOfGoal', percentageOfGoal)
  }

  const handleClose = () => {
    setPledgeSent(false)
  }

  return (
      <Container>
        <ToolTip>
          <strong>{percentageOfGoal || 0}%</strong> of the goal funded
        </ToolTip>
        
        <BoxFrame>
          <ProgressBarContainer>
            <ProgressBar progress={percentageOfGoal}></ProgressBar>
          </ProgressBarContainer>
          
          <BoxFrameContent>
            <p>Only 3 days left to fund this project, <strong>${amountFunded || 0}</strong> has been raised towards the goal to raise <strong>$1000</strong>.</p>
            <p>Pledge money by entering the sum in the field below and press pledge, we already know your credit card details.</p>
            { !pledgeSent &&
              <form onSubmit={(e) => savePledge(e)}>
              <TextInput type="text" onChange={(e)=>setAmount(e.target.value)}></TextInput>&nbsp;&nbsp;
              <Submit type="submit" value="Pledge"></Submit>
              </form>
            }
            { pledgeSent &&
              <Notification error={error}>
                {error ? 'Please enter integers only and try again!' : 'Thank you for your pledge!'} &nbsp;&nbsp;
                <a href="#" onClick={handleClose}>Close</a>
              </Notification>
            }
            { percentageOfGoal >= 100 ? 
              <Notification>
                We've reached our goal of ${targetFunds}! Feel free to pledge anyway - we could always do with some extra cash!
              </Notification>
              : null
            }
          </BoxFrameContent>
        </BoxFrame>
      </Container>
  );
}

