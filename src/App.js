import './App.css';
import myPic from './assets/Shehryar.jpg'
import resumeFile from "./assets/mShehryarResume.pdf";

function App() {

  function downloadFile() {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "mShehryarResume.pdf";
    link.target = "_blank";
    link.click();
  }

  return (
    <div className="App Test">
      <div className="Intro">
        <nav className='Navbar'>Welcome, to</nav>
        <div className="Name">M SHEHRYAR AHMED's</div>
        <div className='Subtext'>Portfolio</div>
      </div>
      <div className='pic-container'>
        <img src={myPic} alt='Shehryar' className='centerPic' />
      </div>
      <div className='Summary'>
        <p>
          <q>
            I am a passionate Software Engineer with a focus on full-stack web development. I have experience in planning, designing, and developing applications to meet client requirements. My interests also include quantum computers and the potential of artificial intelligence and machine learning. I have developed novel applications and models in these areas. ReactJS is my preferred JavaScript framework.
          </q>
        </p>
      </div>
      <div className='resume-section'>
        <button className='resume-button' onClick={() => downloadFile("mShehryarResume.pdf")}><i className="fa fa-cloud-download"></i> Resume</button>
      </div>
      <div className='Socials'>
        <p>More About Me!</p>
        <p className='social-icons'>
          <a target="_blank" href="https://www.linkedin.com/in/mohammedshehryarahmed/" className="fa fa-linkedin"></a>
          <a target="_blank" href="https://github.com/exprodev" className="fa fa-github"></a>
          <a target="_blank" href="https://www.facebook.com/mohammedshehryarahmed" className="fa fa-facebook"></a>
          <a target="_blank" href="https://yaarkidaastan.blogspot.com/" className="blogger-icon"></a>
          <a target="_blank" href="https://twitter.com/msherryahmed" className="fa fa-twitter"></a>
          <a target="_blank" href="https://www.instagram.com/m.shehryarahmed/" className="fa fa-instagram"></a>
        </p>
      </div>
    </div>
  );
}

export default App;
