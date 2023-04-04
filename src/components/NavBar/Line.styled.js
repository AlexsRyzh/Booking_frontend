import styled from "styled-components";

export const Line = styled.div`
    position: absolute;
    width: ${props => props.width1}px;
    height: 30px;
    left: ${props => props.position1}px;
    background: #F14868;
    z-index: -1;
    top: -2px;
    border-radius: 10px;

    transition: ${props => props.transition1}ms;
`;
