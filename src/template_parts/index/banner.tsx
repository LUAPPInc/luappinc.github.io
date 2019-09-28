import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logoSvg from '../../images/logo.svg'

interface Props {}

const Banner = ({}: Props) => {
  return (
    <div
      className='banner'
      id='#home'
    >
      <Container>
        <div className='box'>
          <div className='wrapper'>
            <figure>
              <img
                title='Lunnar Applications Logo'
                alt='Lunnar Applications Logo'
                className='img-fluid'
                src={logoSvg}
              />
            </figure>
            <div
              className='texts'
            >
              <h1>
                Os melhores golfistas.
              </h1>
              <p>
                Até usando o penis.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <p
        className='app'
      >
        _Desenvolvimento de aplicativos
      </p>
    </div>
  )
}

export default Banner