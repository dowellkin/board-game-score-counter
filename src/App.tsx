import "./App.css"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import Icon from "./components/Icon/Icon"
import CardList from "./components/CardList/CardList"
import { useState } from "react"
import { typeCard } from "./models/models"

const LOCAL_STORE_CARDS = "lscds"

function App() {
  const [cards, setCards] = useState<typeCard[]>(() => {
    const rawData: string | null = localStorage.getItem(LOCAL_STORE_CARDS)
    const data = JSON.parse(rawData ? rawData : "[]")
    return data
  })

  const saveCards = (data: typeCard[]): void => {
    localStorage.setItem(LOCAL_STORE_CARDS, JSON.stringify(data))
  }

  const setCardValue = (index: number, value: number): void => {
    setCards((prev) => {
      const newData: typeCard[] = prev.map((card, ind) => {
        if (ind === index) {
          return {
            ...card,
            value: value >= 0 ? value : 0,
          }
        }

        return card
      })

      saveCards(newData)
      return newData
    })
  }

  const createCard = (cardInfo: typeCard) => {
    setCards((prev) => {
      const newData = [...prev, cardInfo]
      saveCards(newData)
      return newData
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
