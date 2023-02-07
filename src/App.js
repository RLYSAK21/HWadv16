import checkmark from './svg/checkmark.svg'
import download from './svg/download.svg'
import like from './svg/like.svg'
import message from './svg/message.svg'
import share from './svg/share.svg'
import mask from './img/mask.jpeg'
import dogcoin from './img/dogcoin.jpeg'

import './App.css';

function App() {
  const name = "Elon"
  const surName = "Mask"
  const nickName = `@${name.toLowerCase()}_${surName.toLowerCase()}`
  const fullName = `${name} ${surName}`
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  return (
      <div className='post'>
        <div className='header'>
          <ul className='information'>
            <img className='photo' src={mask}></img>
            <li className='fullName'>{fullName}</li>
            <img className='post-svg' src={checkmark}></img>
            <li className='nickName'>{nickName}</li>
            <li className='nickName'>{currentDate}</li>
          </ul>
        </div>
        <p className='post-text'>I just know a lot of people who are not that wealthy who, you know, have encouraged me to buy and support Dogecoin.</p>
        <img className='post-img' src={dogcoin}></img>
        <div className='footer'>
          <ul className='likes-info'>
            <div className='message-box'>
              <img className='post-svg' src={message}></img>
              <p className='post-information'>482</p>
            </div>
            <div className='message-box'>
              <img className='post-svg' src={share}></img>
              <p className='post-information'>146</p>
            </div>
            <div className='message-box'>
              <img className='post-svg' src={like}></img>
              <p className='post-information'>887</p>
            </div>
            <div className='message-box'>
              <img className='post-svg' src={download}></img>
            </div>
          </ul>
        </div>
      </div>
  );
}

export default App;
