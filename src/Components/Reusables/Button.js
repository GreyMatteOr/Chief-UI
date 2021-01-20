import React from 'react';

export default function Button(props) {
  let { callback, disabled, text } = props
  return (
    <button
      disabled={disabled}
      onClick={callback}>
      {text}
    </button>
  )
}
