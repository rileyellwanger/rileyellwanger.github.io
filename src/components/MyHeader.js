import fullLogo from '../images/white_logo_transparent_background.png';
import logo from '../images/white_mini_logo.png';
import '../css/MyHeader.css';
import { Grid, Col, Row, Affix, Animation } from 'rsuite';

function MyHeader() {
  return (
    <div className='MyHeader'>
      <Grid className='HeaderGrid' fluid>
        <Row className='HeaderRow'>
          <Col xs={6} xsPull={2}>
            <Affix>
              <Animation.Slide in={true} placement='left'>
                <img className='logo' src={logo} alt='r' />
              </Animation.Slide>
            </Affix>
          </Col>
          <Col xs={12}>
            <Animation.Slide in={true} placement='right'>
              <img className='fullLogo' src={fullLogo} alt='Riley Ellwanger'/>
            </Animation.Slide>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default MyHeader;