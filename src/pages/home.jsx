import 'bootstrap/dist/css/bootstrap.min.css'
import pfpImg from "../assets/pfp.png";
import CgFront from "../assets/CgFront.png";
import ArFront from "../assets/ArFront.png";
import MlFront from "../assets/MlFront.png";
import '../App.css'
import { Col, Row } from 'react-bootstrap'

function Home() {

  return (
    <>


      <div className="title">
        <h1>12th paradox comics by Philpa12</h1>
      </div>
      <div className="container">
        <p> Welcome to 12th paradox productions. We are a web comic publisher from Croatia. The site is managed and made by Luna Damjanic otherwise known as Philpa12. We started back in 2019 with old Midland’s bounty hunters animations on youtube and later we moved on to other ventures. At this moment of time we are non profit and have only had one con appearance. Here you can read about the creator’s blog and read comics, download game and get our socials!</p>
        <img src={pfpImg} alt="Profile Picture" className="pfp" />
      </div>

      <h2 className="mt-5">Our Comics!</h2>

      <Row className="mt-5">
        <Col>
          <button className="btn p-0 border-0">
            <img className="slikaNaslovna" src={ArFront} alt="Ar Front" />
          </button>
        </Col>

        <Col>
          <button className="btn p-0 border-0">
            <img className="slikaNaslovna" src={MlFront} alt="Ml Front" />
          </button>
        </Col>

        <Col>
          <button className="btn p-0 border-0">
            <img className="slikaNaslovna" src={CgFront} alt="Cg Front" />
          </button>
        </Col>
      </Row>


      <h2 className="mt-5">Blog</h2>
      


    </>
  )
}


export default Home;