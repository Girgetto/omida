import styled from 'styled-components';
import Home from './Home.component';

export default styled(Home).attrs({})`
  height: 724px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(https://www.hotelseeker.it/wp-content/themes/hotelseeker/images/copertina.jpg);

  .mainTitle {
    font-size: 2rem;
    color: white;
  }

  .inputs {
    margin: 2%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 60%;
      height: 50%;
      font-size: 1rem;
    }

    button {
      padding: 1% 5%;
      background-color: #FAFF2A;
      border: 0;
      margin: 2%;
    }
  }
`;