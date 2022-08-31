import React from 'react';
// import PropTypes from 'prop-types';
import "./TimerButton.css";

type TimerButtonProps = {
  buttonAction: () => void;
  buttonValue: string;
};

const TimerButton = ({ buttonAction, buttonValue }: TimerButtonProps) => (
  <div className="button-container" onClick={buttonAction}>
    <p className="button-value">{buttonValue}</p>
  </div>
);



export default TimerButton;