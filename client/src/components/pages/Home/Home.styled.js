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
      padding: 1% 10%;
    }

    button {
      padding: 1% 5%;
    }
  }
`;