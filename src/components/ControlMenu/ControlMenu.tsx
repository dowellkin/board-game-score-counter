import {
  typeGlobalContext,
  useGlobalContext,
} from "../StateContext/StateContext"

type typeControlMenu = {
  clearCard: Function
  removeSomeItems: Function
}

const ControlMenu: React.FC<typeControlMenu> = ({
  clearCard,
  removeSomeItems,
}) => {
  const { state: globalState, setState: setGlobalState } = useGlobalContext()

  const setDeletingMode: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (setGlobalState) {
      setGlobalState((prev: typeGlobalContext) => {
        return { ...prev, isDeletingMode: true }
      })
    }
  }

  const removeSelected: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (setGlobalState) {
      setGlobalState((prev: typeGlobalContext) => {
        return { ...prev, isDeletingMode: false }
      })
      removeSomeItems(globalState.selectedItems)
    }
  }

  const cancelDeletion: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (setGlobalState) {
      setGlobalState(() => {
        return { selectedItems: [], isDeletingMode: false }
      })
    }
  }

  const clearCards: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    clearCard()
    cancelDeletion(e)
  }

  return (
    <div className="fixed right-2 bottom-4 flex gap-2 flex-wrap flex-row-reverse">
      {!globalState.isDeletingMode && (
        <button
          className="px-3 py-2 rounded-md bg-rose-500 text-white cursor-pointer md:hover:bg-rose-400 transition-colors"
          onClick={setDeletingMode}
        >
          Удалить
        </button>
      )}
      {globalState.isDeletingMode && (
        <>
          <button
            className="px-3 py-2 rounded-md bg-rose-500 text-white cursor-pointer md:hover:bg-rose-400 transition-colors"
            onClick={removeSelected}
          >
            Удалить Выбранные
          </button>
          <button
            className="px-3 py-2 rounded-md bg-rose-500 text-white cursor-pointer md:hover:bg-rose-400 transition-colors"
            onClick={clearCards}
          >
            Очистить
          </button>
          <button
            className="px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer md:hover:bg-rose-400 transition-colors"
            onClick={cancelDeletion}
          >
            Отмена
          </button>
        </>
      )}
    </div>
  )
}

export default ControlMenu
