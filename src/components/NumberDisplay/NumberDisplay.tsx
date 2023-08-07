import { useState } from "react"

type typeNumberDisplayProps = {
  value: number
  changeValue: Function
}

const NumberDisplay: React.FC<typeNumberDisplayProps> = ({
  value,
  changeValue,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [offset, setOffset] = useState<number>(0)

  const items: number[] = [1, 2, 3, 4, 5]
  const minSwipeDistance = 30

  const middleValue = ((): number => {
    return Math.floor(items.length) * 35 + 16 * items.length
  })()
  const singleItemWidth = (middleValue * 2) / (items.length * 2 + 1)

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const value = e.targetTouches[0].clientX
    if (touchStart) {
      const offset = value - touchStart
      const clampedOffset = Math.min(
        middleValue,
        Math.max(offset, -middleValue),
      )
      setOffset(clampedOffset)
    }
    setTouchEnd(value)
  }

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (!touchStart || !touchEnd || Math.abs(offset) < minSwipeDistance) return
    const newValue = -Math.round(offset / singleItemWidth)
    changeValue(newValue)
    setOffset(0)
  }

  const itemClasses = "w-[35px] grow-0 shrink-0 basis-[35px] text-center"

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative w-[35px] h-[36px] overflow-hidden"
    >
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(calc(-${middleValue}px + ${offset}px))`,
        }}
      >
        {[...items].reverse().map((item, index) => {
          return (
            <div key={index} className={itemClasses}>
              -{item}
            </div>
          )
        })}
        <div className={itemClasses}>{value}</div>
        {items.map((item, index) => {
          return (
            <div key={index} className={itemClasses}>
              +{item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NumberDisplay
