import styled from 'styled-components'
import Image from './image/session.jpg'

export const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`

export const H1 = styled.h1`
  font-size: 3.4375em;

  text-align: center;
  font-family: meathflfregular;
  margin: 10px;

  @media screen and (min-width: 960px) {
    font-size: 10em;
  }
`

export const IntroContainer = styled.div`
  @media screen and (min-width: 960px) {
    background: black;
    background-image: url(${Image});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-flow: column nowrap;
    height: 100vh;
    padding: 0px 200px;
  }
`

export const H2 = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0px;
  text-align: center;
  text-decoration: underline green 5px;
  text-underline-offset: 15px;
  padding-top: 1.25em;

  @media screen and (min-width: 960px) {
    font-size: 2em;
    padding-top: 0;
  }
`

export const Text = styled.p`
  font-size: 1.125em;

  @media screen and (min-width: 960px) {
    font-size: 2em;
  }
`

export const Divider = styled.section`
  box-shadow: inset 0 5px 0 0 rgba(0, 0, 0, 0.05),
    inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);

  @media screen and (min-width: 960px) {
    padding: 50px 200px;
  }
`
