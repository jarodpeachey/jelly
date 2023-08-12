import React, { useState, useEffect } from "react"
import Option from "./Option"

const Select = props => {
  const newChildren = []

  return (
    <div className="select">
      <div className={`select__wrapper input ${props.className && props.className}`} id={props.id}>
        <span className="select__value">Select a value</span>
        <div
          style={{
            marginLeft: 12,
            transform: "rotate(90deg)",
            transition: "all .1s ease-in-out",
            fontSize: 14,
          }}
        >
          {"<>"}
        </div>
      </div>
      <div className={`select__menu`}>
        {props.children.forEach(child => {
          newChildren.push(<Option {...child.props}>{child.props.children}</Option>)
        })}

        {newChildren}
      </div>
    </div>
  )
}

export default Select
