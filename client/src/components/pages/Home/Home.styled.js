import styled from 'styled-components';
import Home from './Home.component';

export default styled(Home).attrs({})`
.firstSection {
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
    background-color: white;
    width: 80%;
    border-radius: 5px;

    input {
      width: 60%;
      height: 50%;
      font-size: 1rem;
      background-color: #ececec;
      color: #646464;
      border-radius: 5px;
      border: 0;
      padding: 0 2%;
    }

    button {
      padding: 1% 5%;
      background-color: #2a41e8;
      color: #fff;
      border: 0;
      margin: 2%;
      padding: 2% 5%;
      border-radius: 5px;
    }
  }
}

.secondSection {
  
}
`;