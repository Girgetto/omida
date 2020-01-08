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
      font-size: 2rem;
      color: white;
    }

  .secondSection {
    text-align: center;
    margin: 5% 0%;
    background-color: #000;
    color: #fff;

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
