import { useState } from 'react'
import heroImg from './assets/hero.png'
import pfpImg from './assets/pfp.png'
import CgFront from './assets/CgFront.png'
import ArFront from './assets/ArFront.png'
import MlFront from './assets/MlFront.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div>

        <body>
          <p>

          </p>
        </body>

      </div>
      <div className="container">
        <p> Welcome to 12th paradox productions. We are a web comic publisher from Croatia. The site is managed and made by Luna Damjanic otherwise known as Philpa12. We started back in 2019 with old Midland’s bounty hunters animations on youtube and later we moved on to other ventures. At this moment of time we are non profit and have only had one con appearance. Here you can read about the creator’s blog and read comics, download game and get our socials!</p>
        <img src={pfpImg} alt="Profile Picture" className="pfp" />
      </div>

      <div className="image-row">
        <img src={ArFront} alt="ArFront" />
        <img src={MlFront} alt="MlFront" />
        <img src={CgFront} alt="CgFront" />
      </div>



    </>
  )
}

export default App
