import blackTh from './img/blackTh.svg';
import body1 from './img/body1.jpg';
import body2 from './img/body2.jpg';
import carImgC from './img/carImgC.jpg';
import carImgL from './img/carImgL.jpg';
import carImgR from './img/carImgR.jpg';
import face from './img/face.svg';
import inst from './img/inst.svg';
import link from './img/link.svg';
import logoB from './img/qraiB.svg';
import twit from './img/twit.svg';
import "./styles/main.css";

function App() {
  return (
    <>
      <header>
        <img src={logoB} className="logoB" alt="logoB" />
        <h1>QRAI</h1>
        <nav>
          <ul>
            <li><a href="https:/google.com">Main</a></li>
            <li><a href="https:/google.com">Create QR</a></li>
            <li><a href="https:/google.com">AI-product</a></li>
          </ul>
        </nav>
        <button className="logInBut">Log in</button>
        <button className="blackThe">
          <img src={blackTh} className="blackTh" alt="blackTh" />
        </button>
      </header >
      <div className="body">
        <div className="mainBlock">
          <img src={body1} className="body1" alt="body1" />
          <div className="blockBody">
            <div className="blockTextBody">
              <p className="textBody">Q uintessential</p>
              <p className="textBody">R evolutionary</p>
              <p className="textBody">A dvanced</p>
              <p className="textBody">I nnovative</p>
            </div>
          </div>
          <img src={body2} className="body1" alt="body2" />
        </div>
        <div className="mainBlock2">
          <div className="exp">
            <div className="textBlock">
              <h2>Experience QR codes like never before!</h2>
              <p className="textMain">The goal of using this AI-powered website for generating QR codes with interesting backgrounds is to enhance user engagement and visual appeal. By leveraging advanced technology, the website aims to create QR codes that not only convey information but also leave a lasting impression on users through visually captivating backgrounds. Incorporating AI-generated backgrounds into QR codes enhances the overall user experience by adding a touch of creativity and modernity. The goal is to make the QR codes visually appealing, sparking curiosity and increasing the likelihood of user interaction, ultimately making the information they represent more memorable and engaging.</p>
            </div>
            <div className="container">
              <input type="radio" name="slider" id="item-1" defaultChecked />
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />
              <div className="cards">
                <label className="card" htmlFor="item-1" id="song-1">
                  <img src={carImgC} className="carImg" alt="song" />
                </label>
                <label className="card" htmlFor="item-2" id="song-2">
                  <img src={carImgR} className="carImg" alt="song" />
                </label>
                <label className="card" htmlFor="item-3" id="song-3">
                  <img src={carImgL} className="carImg" alt="song" />
                </label>
              </div>
            </div>
          </div>
          <div className="divMainBut">
            <button className="mainBut">Try it out</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="imgFoot">
          <a href="https://google.com">
            <img src={link} className="imgElemFoot" alt="imgElemFoot" />
          </a>
          <a href="https://google.com">
            <img src={face} className="imgElemFoot" alt="imgElemFoot" />
          </a>
          <a href="https://google.com">
            <img src={twit} className="imgElemFoot" alt="imgElemFoot" />
          </a>
          <a href="https://google.com">
            <img src={inst} className="imgElemFoot" alt="imgElemFoot" />
          </a>
        </div>
        <p className="pFoot">Thank you for attention</p>
      </footer>
    </>
  );
}

export default App;