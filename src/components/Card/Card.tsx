import { typeCard } from "@/models/models"
import Icon from "../Icon/Icon"
import NumberDisplay from "../NumberDisplay/NumberDisplay"

type typeCardProps = {
  card: typeCard
  index: number
  setCardValue: Function
}

const Card: React.FC<typeCardProps> = ({
  card,
  index,
  setCardValue,
}): JSX.Element => {
  const minusButtonHandler: React.MouseEventHandler = (e) => {
    e.preventDefault()
    setCardValue(index, card.value - 1)
  }

  const plusButtonHandler: React.MouseEventHandler = (e) => {
    e.preventDefault()
    setCardValue(index, card.value + 1)
  }

  const changeValue = (value: number): void => {
    setCardValue(index, card.value + value)
  }

  return (
    <div className="rounded-lg border bg-gray-700 min-w-full sm:min-w-[250px] min-h-[200px] pb-3 relative overflow-hidden">
      <header className="bg-slate-900 p-3">
        <h3 className="text-center font-medium">{card.title}</h3>
      </header>

      <div className="flex align-item-middle w-[64px] h-[64px] mx-auto items-center justify-center my-5">
        <Icon iconName={card.icon}></Icon>
      </div>

      <footer className="flex justify-center gap-6">
        <button
          className="border w-[2rem] rounded-lg"
          onClick={minusButtonHandler}
        >
          -
        </button>
        <div className="font-bold text-center text-3xl">
          <NumberDisplay
            value={card.value}
            changeValue={changeValue}
          ></NumberDisplay>
        </div>
        <button
          className="border w-[2rem] rounded-lg"
          onClick={plusButtonHandler}
        >
          +
        </button>
      </footer>
    </div>
  )
}

export default Card
