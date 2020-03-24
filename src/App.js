import React, {Fragment} from 'react';
import './App.css';

export default () =>  {
  return (
    <Fragment>
      <div class="container">
        <div class="tooltip">
          <strong id="fundraise_remainingText">0%</strong> of the goal funded
        </div>
        
        <div class="boxFrame">
          <div class="progressBar_container">
            <div class="progressBar_bar inProgress" id="fundraise_progressBar"></div>
          </div>
          
          <div class="boxFrame_content">
            <p>Only 3 days left to fund this project, <strong id="fundraise_currentFundingText">$0</strong> has been raised towards the goal to raise <strong id="fundraise_goalText">$1000</strong>.</p>
            <p>Pledge money by entering the sum in the field below and press pledge, we already know your credit card details.</p>
            <form id="fundraise_form">
              <input id="fundraise_amount" type="text"></input>
              <input type="submit" id="fundraise_pledgeButton" value="Pledge"></input>
            </form>
            
            <div class="notification notification-success">
              Thank you for your pledge!
              <a href="#">Close</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

