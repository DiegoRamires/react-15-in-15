import React from 'react';
import Square from '../Square/index.js'

export default function Board() {
  const squares = []

  for (let i = 0; i < 9; i++)
  squares.push(<Square key={squares.length} />)

  return <div className="board">{squares}</div>
}