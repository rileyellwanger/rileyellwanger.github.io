import { Grid, Col, Row, Animation } from 'rsuite';
import '../css/AboutMe.css';
import headshot from '../images/headshot.png';

function MyStory() {
  return (
    <div className='MyStory'>
      <Grid>
        <Animation.Slide in={true} placement='bottom'>
          <Row className='about-me-header-row'>
          <img className='headshot' src={headshot} alt='headshot' />
            <p>
              Software Developer<br/>
              Outdoorsman<br/>
              Nebraska
            </p>
          </Row>
        </Animation.Slide>
        <Row className='story-main-row'>
          <Col className='main-content' xs={22}>
          </Col>
          <Col className='steps-col' xs={2}>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default MyStory;