import { typeCard } from "@/models/models"
import Card from "../Card/Card"
import CardCreate from "../CardCreate/CardCreate"

type typeCardListProps = {
  cards: typeCard[]
  setCardValue: Function
  createCard: Function
}

const CardList: React.FC<typeCardListProps> = ({
  cards,
  setCardValue,
  createCard,
}): JSX.Element => {
  return (
    <div className="flex gap-6 pt-4 flex-wrap">
      {cards.map((card: typeCard, index: number) => (
        <Card
          card={card}
          key={card.title}
          index={index}
          setCardValue={setCardValue}
        ></Card>
      ))}

      <CardCreate createCard={createCard}></CardCreate>
    </div>
  )
}

export default CardList
