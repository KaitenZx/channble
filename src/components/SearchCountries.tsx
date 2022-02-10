import { FC, useState } from "react"
import { FilterContainer, Select, CountryLabel } from "../styles"
import { CHANNEL_LIST } from "../constants"

export const COUNTRIES =  Array.from(new Set(CHANNEL_LIST.map(channel => channel.country))).sort()


interface Props {
    onChange: (value: string, key: boolean) => void
    value: string
    setValue: (value: string) => void
}

export const SearchCountries: FC<Props> = ({ onChange, value, setValue }) => {
 

  const handleChange = (value: string) => {
    setValue(value)
    onChange(value, true)
  }

  return (
    <FilterContainer>
      <CountryLabel>Country</CountryLabel>
        <Select id="country" onChange={event => handleChange(event.target.value)} value={value} >
          <option value=''></option>
          {COUNTRIES.map(country => (
            <option value={country} key={country}>{country}</option>
          ))}
        </Select>
    </FilterContainer>

  )
}