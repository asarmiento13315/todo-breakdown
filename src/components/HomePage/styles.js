import styled from 'styled-components'

export default {
  Layout: styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

    & .top-section {
      z-index: 3;
      position: sticky;
      top: 0px;
      background: white;
      width: 100%;
      padding-bottom: 1em;
    }
  `,
}
