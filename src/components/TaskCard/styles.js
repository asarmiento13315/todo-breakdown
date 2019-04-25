import styled from 'styled-components'

export default {
  Container: styled.div`
    min-width:640px;
    min-height: 30px;
    align-items: center;
  `,
  TaskContent: styled.div`
    visibility: ${(props) => props.expanded ? 'visible' : 'hidden'};
    height: auto;
    transition: max-height .5s ease-in-out, visibility .4s ease-in-out;
    max-height:${(props) => props.expanded ? '720px' : '0'};
    align-items: center;
    background-color: aliceblue;
  `,
  Form: styled.form`
    visibility: ${(props) => props.expanded ? 'visible' : 'hidden'};
    ${(props) => props.expanded ? 'transition-delay:.35s' : ''};
    margin-left: 16px;
    margin-right: 20px;
    padding-bottom: 20px;
  `,
}
