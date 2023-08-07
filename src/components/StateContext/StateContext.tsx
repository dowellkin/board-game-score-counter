import { createContext, useContext, useState } from "react"

type useGlobalContextProps = {
  children: JSX.Element[] | JSX.Element
}

export type typeGlobalContext = {
  isDeletingMode: boolean
  selectedItems: number[]
}

type typeProviderGlobalContext = {
  state: typeGlobalContext
  setState?: React.Dispatch<any>
}

export const GlobalContext = createContext<typeProviderGlobalContext>({
  state: {
    isDeletingMode: false,
    selectedItems: [],
  },
})
export const useGlobalContext = () => useContext(GlobalContext)
export const StateContext: React.FC<useGlobalContextProps> = ({ children }) => {
  const [state, setState] = useState<typeGlobalContext>({
    isDeletingMode: false,
    selectedItems: [],
  })
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  )
}
