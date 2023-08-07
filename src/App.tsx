import "./App.css"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import CardList from "./components/CardList/CardList"
import { useState } from "react"
import { typeCard } from "./models/models"
import ControlMenu from "./components/ControlMenu/ControlMenu"
import { StateContext } from "./components/StateContext/StateContext"

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

  const clearCard = () => {
    setCards([])
  }

  const removeSomeItems = (ids: number[]) => {
    setCards((prev) => {
      return prev.filter((prevCard) => {
        return !ids.includes(prevCard.id)
      })
    })
  }

  return (
    <>
      <StateContext>
        <main className="pb-20">
          <Header />

          <Container>
            <CardList
              cards={cards}
              setCardValue={setCardValue}
              createCard={createCard}
            />
          </Container>

          <ControlMenu
            clearCard={clearCard}
            removeSomeItems={removeSomeItems}
          />
        </main>
      </StateContext>
    </>
  )
}

export default App
