import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Board from '../Components/Pages/Game/Board.js';

describe( 'Board', () => {

  it( 'should show 4 players', () => {

    render( <Board /> )

    let players = screen.queryAllByTestId('player')
    expect( players.length ).toBe(4)
  })
})
