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
    text-align: center;
    margin: 5% 0%;

    .cardsContainer {
      display: flex;
      flex-wrap: wrap;

      .card {
        width: 30%;
        margin: 1%;
        position: relative;

        .card-image {
          width: 100%;
        }
      }
    }

    .all-properties-button {
      background-color: #000;
      color: #fff;
      border: 0;
      padding: 1% 5%;
      border-radius: 15px;
    }
  }
  .thirdSection {
    text-align: center;
    margin: 5% 0%;

    .content {
      padding: 10%;
      display: flex;

      .left-content {
        width: 50%;

        .deal-image {
          width: 100%;
        }
      }

      .right-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #292929;

        p {
          color: white;
        }

        button {
          color: white;
          background-color: #ff5e15;
          border: 0;
          border-radius: 4px;
          padding: 0.6rem 1.8rem;
        }
      }
    }
  }

  .fourthSection {

    .main-title {
      text-align: center;
    }

    .fourth-main {
      background-image: url('https://i.ibb.co/QjLjVVx/hero-bg-image.png');
      background-repeat: no-repeat;
      width: 100%;
      background-size: 110%;
      padding: 5% 2%;
      height: 400px;

      .main-inner {
        background-color: #2842cd;
        width: 400px;
        height: 60%;
        margin: 2%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        
        h1 {
          color: #fff;
        }

        p {
          color: #fff;
          font-size: 0.8rem;
        }

        button {
          background-color: #000;
          padding: 8px 20px;
          border-radius: 10px;
          border: none;
          color: #fff;
        }
      }
    }
  }
`;
