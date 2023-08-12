import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

interface Props {
  children: object
  className: string
  id: string
  value: string
  selected: boolean
}

const Option: React.FC<Props> = props => {
  return (
    <option className={`option ${props.className}`} id={props.id} value={props.value}>
      {props.children}
    </option>
  )
}

export default Option
