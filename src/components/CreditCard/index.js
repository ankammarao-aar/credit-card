// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  LeftContainer,
  HeadingCard,
  Heading,
  Line,
  CardContainer,
  CardNumber,
  Break,
  NameCard,
  Text,
  CardName,
  RightContainer,
  InputCard,
  InputHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <HeadingCard>
          <Heading>CREDIT CARD</Heading>
          <Line />
        </HeadingCard>

        <CardContainer data-testid="creditCard">
          {number.length > 0 ? <CardNumber>{number}</CardNumber> : <Break />}

          <NameCard>
            <Text>CARDHOLDER NAME</Text>
            {name.length > 0 ? (
              <CardName>{name.toUpperCase()}</CardName>
            ) : (
              <br />
            )}
          </NameCard>
        </CardContainer>
      </LeftContainer>

      <RightContainer>
        <InputCard>
          <InputHeading>Payment Method</InputHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </InputCard>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
