import { Grid, Col, Row, Animation } from 'rsuite';
import '../css/AboutMe.css';
import headshot from '../images/headshot.png';
import bio from '../content/bio';

function MyStory() {
  return (
    <div className='MyStory'>
      <Grid>
        <Animation.Slide in={true} placement='bottom'>
          <Row className='about-me-header-row'>
            <Col xs={6}/>
            <Col xs={12}>
              <img className='headshot' src={headshot} alt='headshot' />
              {bio}
            </Col>
            <Col xs={6}/>
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