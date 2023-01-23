import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/neha-kumari-404b46247/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/neha-kum" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/nehathecoder" target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials