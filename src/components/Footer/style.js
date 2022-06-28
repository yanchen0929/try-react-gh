import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  background: #e9d8d8;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  a {
    font-weight: 700;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &.active {
      color: red;
    }
    i {
      font-size: 2em;
    }
  }
`;
