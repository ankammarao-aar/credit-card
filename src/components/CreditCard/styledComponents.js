// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const LeftContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 14px;

  @media (max-width: 767px) {
    width: 100%;
    height: 60%;
  }
`

export const HeadingCard = styled.div`
  margin: 22px;

  @media (max-width: 767px) {
    margin: 0px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`

export const Line = styled.hr`
  width: 138px;
  height: 3px;
  background-color: #ffd773;
  border: none;
  margin-top: 10px;
  margin-left: 0px;

  @media (max-width: 767px) {
    width: 110px;
  }
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 340px;
  height: 228px;
  border-radius: 32px;
  padding: 26px;
  margin: 22px;
  margin-bottom: 144px;
  box-shadow: 1px 1px 28px #344e7a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 300px;
    border-radius: 20px;
  }
`

export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 10px;

  @media (max-width: 767px) {
    font-size: 18px;
    margin-left: 0px;
    padding-top: 62px;
  }
`

export const Break = styled.hr`
  margin-bottom: 86px;
  border: none;

  @media (max-width: 767px) {
    margin-bottom: 112px;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #d3d9e0;
  margin-left: 10px;

  @media (max-width: 767px) {
    font-size: 12px;
    margin-left: 0px;
  }
`

export const NameCard = styled.div`
  margin-bottom: 28px;
`

export const CardName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  margin-left: 10px;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-left: 0px;
  }
`

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  border-radius: 8px;
  box-shadow: 2px 2px 20px #d3d9e0;
  margin: 22px;
`

export const InputHeading = styled.h3`
  font-family: 'Roboto';
  color: #475569;
  margin-bottom: 42px;

  @media (max-width: 767px) {
    font-size: 24px;
    margin: 0px;
    padding: 26px;
    padding-top: 10px;
  }
`

export const Input = styled.input`
  width: 270px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #475569;
  border: 1px solid #c3cad9;
  border-radius: 2px;
  padding: 8px;
  padding-left: 14px;
  margin-bottom: 16px;
  outline: none;

  @media (max-width: 767px) {
    width: 250px;
  }
`
