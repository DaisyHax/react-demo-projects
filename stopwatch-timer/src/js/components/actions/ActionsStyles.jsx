import styled from 'styled-components';

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0px 450px;
    margin-top: 40px;
    text-align: center;
`;

export const Button = styled.button`
    display: block;
    min-width: 100px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.disabled ? '#bebebe' : '#007fff'};
    font-size: 20px;
    color: white;
    cursor: pointer;
`;