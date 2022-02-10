import { FC, useState } from "react";
import { Input } from "../styles"



interface Props {
  value: string
  onChange: (value: string) => void
  setValue: (value:string) => void
}

export const SearchChannels: FC<Props> = ({ onChange, value, setValue }) => {
  

  const handleChange = ( value: string) => {
    setValue(value)
    onChange(value.toLowerCase())
  }

    return (
      <Input type="text" value={value}  onChange={event => handleChange(event.target.value)}/>
  )
}