import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { addWorker, removeWorker } from '../Components/Pages/Game/workerFx.js';
import { render, screen } from '@testing-library/react';
import Player from '../Components/Pages/Game/Player.js';
import { boardColors } from '../Styling/colors.js';

describe('Player', () => {

  describe( 'universal', () => {

    it('should render a Player area', () => {
      // and it will next!
      render( <Player team='Red' /> )

      expect(screen.getByTestId('player')).toBeInTheDocument();
    })

    it('should have no Workers to start', () => {

      render( <Player team='Red' /> )
      let workers = screen.queryAllByTestId('worker')

      expect( workers ).toEqual([]);
    })

    it('should be able to add a Worker', () => {

      render( <Player team='Red'/> )
      act( () => addWorker.Red() )
      let workers = screen.queryAllByTestId('worker')

      expect( workers.length ).toBe(1)
    })

    it('should be able to remove a Worker', () => {

      render( <Player team='Red'/> )
      act( () => addWorker.Red() )

      let workers = screen.queryAllByTestId('worker')
      expect( workers.length ).toBe(1)

      act( () => removeWorker.Red() )
      workers = screen.queryAllByTestId('worker')
      expect(workers).toEqual([]);
    })
  })

  describe( 'Specifics', () => {

    it('should be able to display different colors', () => {

      render(
        <>
          <Player team='Red'/>
          <Player team='Yellow'/>
          <Player team='Green'/>
          <Player team='Blue'/>
        </>
      )

      let players = screen.queryAllByTestId('player');

      //RED
      expect(players[0]).toHaveStyle(`backgroundColor: ${boardColors.Red}`)
      //YELLOW
      expect(players[1]).toHaveStyle(`backgroundColor: ${boardColors.Yellow}`)
      //GREEN
      expect(players[2]).toHaveStyle(`backgroundColor: ${boardColors.Green}`)
      //BLUE
      expect(players[3]).toHaveStyle(`backgroundColor: ${boardColors.Blue}`)
    })
  })
})
