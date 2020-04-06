import styled from 'styled-components';
import Home from './Home.component';

export default styled(Home).attrs({})`
  .firstSection {
    height: 724px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;

    .mainTitle {
      font-size: 46px;
      font-weight: 500;
      color: white;
    }
  }
`;
