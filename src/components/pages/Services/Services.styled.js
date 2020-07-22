import styled from 'styled-components'

import Services from './Services.component'
import background from '../../../assets/img/services4.jpg'

export default styled(Services).attrs({})`
  .header {
    position: relative;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    #overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    p {
      color: white;
      font-weight: 500;
      font-size: 26px;
      width: 80%;
      z-index: 2;
    }
  }

  .content {
    margin: 0 auto;
    width: 60%;

    .titles {
      letter-spacing: 0.1rem;
    }
  }
`
