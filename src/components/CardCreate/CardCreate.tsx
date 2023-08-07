import { useEffect, useRef, useState } from "react"
import plusIcon from "@assets/icons/icon-plus.svg"
import { randomNum } from "@/utils/index"

type typeCardCreateProps = {
  createCard: Function
}

let timer: number = -1

const CardCreate: React.FC<typeCardCreateProps> = ({ createCard }) => {
  const [isCreation, setIsCreation] = useState<boolean>(false)
  const [name, setName] = useState<string>("")

  useEffect(() => {
    timer = window.setTimeout(() => {
      setIsCreation(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [isCreation, name])

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const sendCreateCard = (): void => {
    if (name.length < 3) return

    createCard({
      icon: String(randomNum(1, 121)).padStart(3, "0"),
      title: name,
      value: 0,
    })

    setName("")
    setIsCreation(false)
  }

  const createCardClickHandler: React.MouseEventHandler = (e) => {
    console.log("test")
    e.preventDefault()
    sendCreateCard()
  }

  const showForm = (): void => {
    setIsCreation(true)
  }

  const inputKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ): void => {
    if (e.key === "Enter") {
      sendCreateCard()
    }
  }

  if (!isCreation) {
    return (
      <div className="rounded-lg border min-w-full sm:min-w-[250px] min-h-[200px] pb-3 relative overflow-hidden flex justify-center items-center">
        <div className="p-5 rounded-full" onClick={() => showForm()}>
          <img src={plusIcon} alt="add card" />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-gray-900 min-w-full sm:min-w-[250px] min-h-[200px] p-3 relative overflow-hidden flex flex-col justify-center items-center gap-8">
      <input
        type="text"
        className="w-full px-4 py-2 rounded"
        value={name}
        onChange={nameChangeHandler}
        placeholder="Введите имя игрока"
        onKeyDown={inputKeyDownHandler}
      />
      <button
        className="border px-4 py-2 rounded hover:bg-sky-500/20 transition-colors disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-transparent"
        onClick={createCardClickHandler}
        disabled={name.length < 3}
      >
        Добавить
      </button>
    </div>
  )
}

export default CardCreate
