import { Grid, Col, Row, Animation } from 'rsuite';
import Section from '../components/Section';
import '../css/AboutMe.css';
import headshot from '../images/headshot.png';
import bio from '../content/bio';
import intro from '../content/intro';
import switchToCS from '../content/switchToCS';
import creteInternship from '../content/creteInternship';
import seniorProject from '../content/seniorProject';
import udig from '../content/udig';

function AboutMe() {
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
        <h1>About Me</h1>
        <Section align='left' text={intro}/>
        <Section align='right' text={switchToCS}/>
        <Section align='left' text={creteInternship}/>
        <Section align='right' text={seniorProject}/>
        <Section align='left' text={udig}/>
      </Grid>
    </div>
  )
}

export default AboutMe;