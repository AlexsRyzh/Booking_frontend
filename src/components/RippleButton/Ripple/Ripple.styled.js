import styled from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: ${props => props.opacity} ;
    background-color: ${props => props.color};
    animation-name: ripple;
    animation-duration: ${props => props.duration}ms;
  }

  @keyframes ripple {
    from{
      transform: scale(0.3);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;