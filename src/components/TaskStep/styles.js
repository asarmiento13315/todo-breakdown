import styled from 'styled-components'

export default {
  Container: styled.div`
    display:flex;
    align-items: center;
    margin: 0 8px;
    min-height: 40px;

    & div {
      outline: unset; 
      margin: 2px 12px 2px 2px;
    }

    & *:first-child {
      cursor: pointer; 
    }

    & div:last-child {
      margin-left: auto;
    }

    &:hover {
      transform:scale(1.01);
      border-radius: 8px;      
      background-color: ${(props) => props.marked ? '#60d5fa5c' : '#bada555c'};
    }
  `,
}
