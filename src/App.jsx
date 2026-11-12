
import 'bootstrap/dist/css/bootstrap.min.css'
import pfpImg from './assets/pfp.png'
import CgFront from './assets/CgFront.png'
import ArFront from './assets/ArFront.png'
import MlFront from './assets/MlFront.png'
import './App.css'
import { Col, Row } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function AppContent() {
  const navigate = useNavigate()

  return (
    <>
      <div className="title">
        <h1>12th paradox comics by Philpa12</h1>
      </div>

      <div className="container">
        <p>
          Welcome to 12th paradox productions. We are a web comic publisher from Croatia. The site is managed and made by Luna Damjanic otherwise known as Philpa12. We started back in 2019 with old Midland’s bounty hunters animations on youtube and later we moved on to other ventures. At this moment of time we are non profit and have only had one con appearance. Here you can read about the creator’s blog and read comics, download game and get our socials!
        </p>

        <img src={pfpImg} alt="Profile Picture" className="pfp" />
      </div>

      <h2 className="my-5">Our Comics</h2>

      <Row className="my-5">
        <Col>
          <button
            className="btn p-0 border-0"
            onClick={() => navigate('/archi')}
          >
            <img className="slikaNaslovna" src={ArFront} alt="Archi" />
          </button>
        </Col>

        <Col>
          <button
            className="btn p-0 border-0"
            onClick={() => navigate('/midland')}
          >
            <img className="slikaNaslovna" src={MlFront} alt="Midland" />
          </button>
        </Col>

        <Col>
          <button
            className="btn p-0 border-0"
            onClick={() => navigate('/cotton')}
          >
            <img className="slikaNaslovna" src={CgFront} alt="Cotton" />
          </button>
        </Col>
      </Row>

      <h2>Blog</h2>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/archi" element={<h1>Archi</h1>} />
        <Route path="/midland" element={<h1>Midland</h1>} />
        <Route path="/cotton" element={<h1>Cotton</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App