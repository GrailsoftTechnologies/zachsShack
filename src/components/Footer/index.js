import React from 'react'
import PropTypes from 'prop-types'
import rgba from 'rgba-convert'
import styles from './styles.css'

export default function Footer (props) {
  const colorarray = rgba(props.background)
  const background = 'rgba(' + colorarray[0] + ', ' + colorarray[1] + ', ' + colorarray[2] + ', 0.8)'
  console.log(background)
  return (
    <div className="Footer"
      style={{backgroundColor: background, color: props.text, position: 'fixed', bottom: '0'}}>
      <style type='text/css'>
        {`
          .` + styles.Footer + ` a:hover {
            border-bottom: 1px ` + props.hovercolor + ` solid;
            color: ` + props.hovercolor + `!important;
          }
        `}
      </style>
      <p>
        Site and design © 2019 Grailsoft Technical Solutions
        <a href='https://www.linkedin.com/company/grailsoft-technologies-llc/' target='_blank' rel='noreferrer noopener'><i className='fab fa-linkedin' /></a>
        <a href='https://github.com/GrailsoftTechnologies' target='_blank' rel='noreferrer noopener'><i className='fab fa-github' /></a>
        <a href='https://twitter.com/GrailsoftTech' target='_blank' rel='noreferrer noopener'><i className='fab fa-twitter' /></a>
      </p>
    </div>
  )
}

Footer.defaultProps = {
  background: 'black',
  text: 'white',
  hovercolor: 'grey'
}

Footer.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string,
  hovercolor: PropTypes.string
}
