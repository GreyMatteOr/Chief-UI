import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Player, { addWorker, removeWorker } from '../Components/Pages/Game/Player.js';
import { boardColors } from '../Styling/colors.js';

describe('Player', () => {

  it('should render a Board', () => {
    // and it will next!
    render( <Player team='Red' />)

    expect(screen.getByTestId('player')).toBeInTheDocument();
  })

  it('should have no Workers to start', () => {

    render( <Player team='Red' />)
    let workers = screen.queryAllByTestId('worker')

    expect( workers ).toEqual([]);
  })

  it('should be able to add a Worker', () => {

    render( <Player team='Red'/>)
    act( () => addWorker() )
    let workers = screen.queryAllByTestId('worker')

    expect( workers.length ).toBe(1)
  })

  it('should be able to remove a Worker', () => {

    render( <Player team='Red'/>)
    act( () => addWorker() )

    let workers = screen.queryAllByTestId('worker')
    expect( workers.length ).toBe(1)

    act( () => removeWorker() )
    workers = screen.queryAllByTestId('worker')
    expect(workers).toEqual([]);
  })
})
