import React from "react";
import Icon from "react-fa";
import styled from "styled-components";

const Loading = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4em;
  color: red;
  border-radius: 50%;
  z-index: 10;
`;
