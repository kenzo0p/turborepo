import React from 'react'

interface Props {
  placeholder  : string
  onChange : () => void
}
const TextInput = ({placeholder , onChange} : Props) => {
  return (
    <input style={{
        padding:10,
        margin:10,
        borderColor:"black",
        borderWidth:1,

    }}
    onChange={onChange}
      placeholder={placeholder}
    />
  )
}
//27.44
export default TextInput