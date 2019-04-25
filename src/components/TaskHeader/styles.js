import styled from 'styled-components'

export default {
  Container: styled.div`
    display:flex;
    align-items: center;
    margin-top: 8px;
    margin-left: 10px;
    cursor: pointer;
    & div {
      margin: 2px 10px 2px 2px;
    }
    & *:last-child {
        margin-left: auto;
    }
  `,
}
