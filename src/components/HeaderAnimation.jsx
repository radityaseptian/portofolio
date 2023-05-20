/* eslint-disable react/prop-types */
import { animation } from "../config/string"

export default function HeaderAnimation({description}) {
  let value = animation(description)
  return (
    <div className="text-lg md:text-xl">
      {value.map((item) => {
        return <span key={item}>{item} </span>
      })}
    </div>
  )
}
