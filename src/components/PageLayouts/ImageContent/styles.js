import styled from "styled-components"

export const ContentContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  min-height: 400px;
`

export const Text = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 30px;
  background: white;
  padding: 20px;
  flex: 7;
`
export const Image = styled.img`
  flex: 5;
  min-height: 500px;
  width: 100%;
  @media (max-width: 950px) {
    min-height: 250px;
  }
`
