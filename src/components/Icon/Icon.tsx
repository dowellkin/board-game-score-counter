import { useEffect, useState } from "react"

const Icon = ({ iconName }: any) => {
  const [iconPath, setIconPath] = useState<null | { default: string }>(null)

  useEffect(() => {
    if (!iconName) return
    import(`../../assets/icons/abstract-${iconName}.svg`).then((result) => {
      setIconPath(result)
    })
  }, [iconName])

  if (iconPath) {
    return <img width="64" height="64" src={iconPath.default} alt="text" />
  }

  return null
}

export default Icon
