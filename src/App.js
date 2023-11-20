import { useState, useEffect } from 'react';
import './App.css';
import cty from './images/closertoyou.webp';
import toy from './images/tasteofyou.webp';
import { ScrollDetection } from './components/ScrollDetection';
import { UpcomingShows } from './components/UpcomingShows';
import { PrevShows } from './components/PrevShows';

function App() {

  ///var scroll = new SmoothScroll('a[href*="#"]', {
  ///  speed: 1000,
  ///  speedAsDuration: true
  ///  });  

  const [one, setOne] = useState(true); 
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false); 
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false); 
  const [six, setSix] = useState(false);
  const [targetReached, setTargetReached] = useState(false);
  const [shows, setShows] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
 
  const clickedMenuItem = (num) => {
    setOne(false); setTwo(false); setThree(false); setFour(false); setFive(false); setSix(false)

    switch (num) {
      case 'one': setOne(true); break;
      case 'two': setTwo(true); break;
      case 'three': setThree(true); break;
      case 'four': setFour(true); break;
      case 'five': setFive(true); break;
      case 'six': setSix(true); break;
      default: break;
    }
  }

  return (
    <div className="App">
      <div className='image-background'></div>
      <ScrollDetection setTargetReached={setTargetReached}/>
      <div className='open' id='home'>
        <div className='open-content-middle'>
          <h1>Jack Critchlow</h1>

          <div className='socials'>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-youtube-play'></i>
            <i className='fa fa-spotify'></i>
          </div>

          <p className='open-new-single'>New Single Out Now!</p>
          <button className='read-more-button'>Read More</button>
      </div>
    </div>

      <div className={targetReached ? 'menu menu-fixed' : 'menu'}>
        <div onClick={() => {clickedMenuItem('one')}} className={one ? 'mid-clicked mid' : 'mid'}><a href='#home'><p>Home</p></a></div>
        <div onClick={() => {clickedMenuItem('two')}} className={two ? 'mid-clicked mid' : 'mid'}><a href='#music'><p>Music</p></a></div>
        <div onClick={() => {clickedMenuItem('three')}} className={three ? 'mid-clicked mid' : 'mid'}><a href='#shows'><p>Shows</p></a></div>
        <div onClick={() => {clickedMenuItem('four')}} className={four ? 'mid-clicked mid' : 'mid'}><a href='#aboutContact'><p>About</p></a></div>
        <div onClick={() => {clickedMenuItem('five')}} className={five ? 'mid-clicked mid' : 'mid'}><a href='#aboutContact'><p>Contact</p></a></div>
        <div onClick={() => {clickedMenuItem('six')}} className={six ? 'mid-clicked mid' : 'mid'}><a href='#'><p>Videos</p></a></div>
      </div>

      <div className='music' id='music'>
        <h1 className={targetReached ? 'section-title-padded section-title' : 'section-title'}>Preview Released Music</h1>

        <div className='songs'>

          <div className='song'>
            <div className='song-main'>
              <div className='song-image'>
                <img src={cty}/>
              </div>
              <div className='song-details'>
                <h4>CLOSER TO YOU</h4>
                <p>Jack Critchlow</p>
                <div className='song-buttons'>
                  <button className='watch-video'>Watch Video</button>
                  <button className='download'>Download</button>
                </div>
              </div>
            </div>
              <h5> Write something about you here about this length.Write something about you here about this length.</h5>
          </div>

          <div className='song'>
            <div className='song-main'>
              <div className='song-image'>
                <img src={toy}/>
              </div>
              <div className='song-details'>
                <h4>TASTE OF YOU</h4>
                <p>Jack Critchlow</p>
                <div className='song-buttons'>
                  <button className='watch-video'>Watch Video</button>
                  <button className='download'>Download</button>
                </div>
              </div>
            </div>
                <h5>Write something about you here about this length.Write something about you here about this length.</h5>
          </div>
        </div>
      </div>

      <div className='show' id='shows'>
        <h1 className='show-title'>Shows</h1>

        <div className='show-grid-outer'>

          <div className='show-intro-div'>
            <p className='show-intro'>Here is a list of Jack Critchlow's shows</p>
            <p className='events-toggle' onClick={() => setShows((prev) => !prev)}>{shows ? 'View previews events' : 'View upcoming events'}</p>
          </div>

          <div className='show-grid'>
            <p className='show-grid-top show-grid-top-date'>DATE</p>
            <p className='show-grid-top'>TIME</p>
            <p className='show-grid-top'>EVENT</p>
            <p className='show-grid-top'>LOCATION</p>
            {shows ? <UpcomingShows/> : <PrevShows/>}
          </div>
        </div>
      </div>

      <div className='contact-about' id='aboutContact'>
        <div className='about' onMouseLeave={() => setExpanded((prev) => !prev)} onMouseEnter={() => setExpanded((prev) => !prev)}>
          <div className='about-details' style={{'backgroundColor': expanded ? 'rgba(0, 0, 0, .7)' : 'rgba(0, 0, 0, .5)', 'height': expanded ? '242px' : '80px'}}>
            <h2>Jack Critchlow's Bio</h2>
            <p style={{'opacity': expanded ? 0 : 1, 'transition': 'opacity .8s ease', 'max-height': expanded ? '0px' : '100px'}}>Jack Critchlow is an 20 year old pop singer-songwriter and producer originally from North Yorkshire but now based in...</p>
            <p style={{'opacity': expanded ? 1 : 0, 'transition': 'opacity .8s ease'}}>Jack Critchlow is an 20 year old pop singer-songwriter and producer originally from North Yorkshire but now based in Manchester. He is currently a student at the Royal Northern College of Music, and has started gigging frequently across Manchester and London. He writes and produces all of his own music from his bedroom, and he categorises this music as his own style of funky pop. His releases have all gained thousands of Spotify streams, and have all featured on BBC Introducing. Jack has also received complimentary feedback from the head of music at Radio 2. Jack's latest single 'Taste of You' got him a live session on BBC Introducing and on BBC Radio Manchester, aswell as some great playlist placements.</p>
          </div>
        </div>

        <div className='contact'>
          <form className='contact-form'>
            <h2>Contact</h2>
            <p>Name</p>
            <input className='contact-input' type='text' placeholder='Input name...'/>
            <p>Email</p>
            <input className='contact-input' type='email' placeholder='Input email...'/>
            <p>Message</p>
            <textarea placeholder='Input message...'></textarea>
            <input className='contact-submit' type='submit'/>
          </form>
          <p className='email-note'>or email me at jackpierscritchlow@gmail.com</p>
        </div>

        </div>

    </div>
  );
}

export default App;
