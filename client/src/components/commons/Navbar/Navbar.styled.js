import styled from 'styled-components';
import Navbar from './Navbar.component';

export default styled(Navbar).attrs({})`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  position: fixed;
  right: 0;
  left: 0;

  .list {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
`;