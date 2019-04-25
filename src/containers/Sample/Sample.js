import React from 'react'
import logo from './logo.svg'
import './Sample.css'

export default function Sample() {
  return (
    <div className={'Sample'}>
      <header className={'Sample-header'}>
        <img src={logo} className={'Sample-logo'} alt={'logo'} />
        <p>
            Edit
          {' '}
          <code>src/Sample.js</code>
          {' '}
            and save to reload.
        </p>
        <a
          className={'Sample-link'}
          href={'https://reactjs.org'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
            Learn React ?
        </a>
      </header>
    </div>
  )
}
