import styled from 'styled-components'

export default {
  Button: styled.div`
    margin:1px;
    cursor: pointer;
    padding: 1px;
    align-items: center;
    display:flex;
    outline: unset; 

    ${(props) => props.fullWidth ? 'width: 100%' : ''};

    &:hover {
      /* transform: scale(1.03); */
      box-shadow: rgba(131, 136, 148, 0.35) 1px 1px 1px 0px;
      border-radius: 8px;
    }

    & div:last-child {
      ${(props) => props.marked
    ? `
        text-decoration: line-through;
        font-style: italic;
        color: #808080;
    `
    : ''};
    }
    
    &:active {
      outline:unset
    }
  `,
}
