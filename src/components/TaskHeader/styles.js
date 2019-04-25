import styled from 'styled-components'

export default {
  Container: styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    & div {
      margin: 2px 12px 2px 2px;
    }
    & *:last-child {
        margin-left: auto;
    }
  `,
}
