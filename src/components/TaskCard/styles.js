import styled from 'styled-components'

export default {
  Container: styled.div`
    min-width:640px;
    min-height: 30px;
    align-items: center;
    border-radius: 8px;
    /* padding: 10px; */
    margin-bottom: 1.2em;
    background-color: ${(props) => props.completed ? '#bada55a1' : '#60d5faa8'};
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  `,
  TaskContent: styled.div`
    visibility: ${(props) => props.expanded ? 'visible' : 'hidden'};
    height: auto;
    transition: max-height .5s ease-in-out, visibility .4s ease-in-out;
    max-height:${(props) => props.expanded ? '720px' : '0px'};
    align-items: center;
    background-color: aliceblue;
    border-radius: 8px;
  `,
  Form: styled.form`
    visibility: ${(props) => props.expanded ? 'visible' : 'hidden'};
    ${(props) => props.expanded ? 'transition-delay:.35s' : ''};
    margin-top: -15px;
    margin-left: 16px;
    margin-right: 20px;
    padding-bottom: 20px;
  `,
}
