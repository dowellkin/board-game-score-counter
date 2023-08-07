import "./App.css"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import Icon from "./components/Icon/Icon"
import CardList from "./components/CardList/CardList"
import { useState } from "react"
import { typeCard } from "./models/models"

function App() {
  const [cards, setCards] = useState<typeCard[]>([])

  const setCardValue = (index: number, value: number): void => {
    setCards((prev) => {
      return prev.map((card, ind) => {
        if (ind === index) {
          return {
            ...card,
            value: value >= 0 ? value : 0,
          }
        }

        return card
      })
    })
  }

  const createCard = (cardInfo: typeCard) => {
    setCards((prev) => {
      return [...prev, cardInfo]
    })
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Icon></Icon>
      </Container>

      <Container>
        <CardList
          cards={cards}
          setCardValue={setCardValue}
          createCard={createCard}
        />
      </Container>
    </>
  )
}

export default App
