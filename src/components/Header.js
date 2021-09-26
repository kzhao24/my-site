import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hi, I'm Kevin!</h1>
        <p>
          I'm a software engineer, working at Convoy. Here's some more about me:
        </p>
      </div>
      <ul className="icons">
        <li>
          <a href="https://linkedin.com/in/kevinkzhao" className="icon fa-linkedin">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/kzhao24" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kzhao24"
            className="icon fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
    {/* <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav> */}
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
