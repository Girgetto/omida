import styled from 'styled-components';
import Navbar from './Navbar.component';

export default styled(Navbar).attrs({})`
  height: 40px;
  display: flex;
  align-items: center;
  right: 0;
  left: 0;
  background-color: #000;
  
  .list {
    width: 200px;
    display: flex;
    justify-content: space-around;
    
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;