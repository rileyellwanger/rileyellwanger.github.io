import { Grid, Row } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { IoIosMail as Mail } from 'react-icons/io';
import { AiFillGithub as Github } from 'react-icons/ai';
import '../css/MyFooter.css';

function MyFooter() {
  return (
    <Grid className='footer' fluid>
      <Row>
        <a className='mail-icon' href='mailto: rileyellwanger@outlook.com'>
          <Icon as={Mail} size='2em' style={{ color: '#0c9b64' }} />
        </a>
        <a className='github-icon' 
          href='https://github.com/rileyellwanger/rileyellwanger.github.io' 
          target='_blank'
          rel='noreferrer noopener'>
          <Icon as={Github} size='2em' style={{ color: '#0c9b64' }} />
        </a>
      </Row>
    </Grid>
  )
}

export default MyFooter