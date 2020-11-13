import styled from "styled-components"

export const HeroContainer = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 950px) {
    height: 400px;
  }
  h1 {
    display: block;
    width: 100%;
    color: white;
  }
  p {
    width: 100%;
    display: block;
    color: white;
    font-style: italic;
  }
`

export const HeroVideo = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  video {
    height: 100%;
    width: 450%;
  }
  @media (max-width: 950px) {
    height: 400px;
  }
`
