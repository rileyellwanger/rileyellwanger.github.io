import { Grid, Row, Col, Animation } from 'rsuite';
import '../css/Section.css';

function Section(props) {
  if(props.align === 'left') {
    return (
      <Grid>
        <Animation.Slide in={true} placement='right' unmountOnExit={true}>
          <Row className='leftRow'>
            <Col md={18}>
              {props.text}
            </Col>
          </Row>
        </Animation.Slide>
      </Grid>
    )
  } else if(props.align === 'right') {
    return (
      <Grid>
        <Animation.Slide in={true} placement='left'>
          <Row className='rightRow'>
            <Col md={18} mdOffset={6}>
              {props.text}
            </Col>
          </Row>
        </Animation.Slide>
      </Grid>
    )
  } else {
    return null;
  }
}

export default Section