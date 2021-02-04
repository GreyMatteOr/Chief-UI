import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { emptyZone, fillZone } from '../Components/Pages/Game/actions/zoneFx.js';
import Zone from '../Components/Pages/Game/Zone.js';
import { workerColors } from '../Styling/colors.js';

describe( 'Zone', () => {

  describe( 'Worker', () => {

    it('should render a `worker-zone`', () => {
      render(
        <Zone type='Worker'/>
      )

      let workerZone = screen.getByTestId('worker-zone')
      expect( workerZone ).toBeInTheDocument()
    })

    it('should be able to be full or empty', () => {
      render(
        <Zone type='Worker'/>
      )

      let workerZone = screen.getByTestId('worker-zone')
      let accessName = Object.keys(workerZone)
      let id = ( workerZone[ accessName[1] ]['data-id'] )

      expect( workerZone ).toHaveAttribute('data-isfull', 'false')

      act( () => fillZone[ id ]() )
      expect( workerZone).toHaveAttribute('data-isfull', 'true')

      act( () => emptyZone[ id ]() )
      expect( workerZone).toHaveAttribute('data-isfull', 'false')
    })

    it('should be able to be different colors', () => {
      render(
        <>
          <Zone team='Red' type='Worker'/>
          <Zone team='Yellow' type='Worker'/>
          <Zone team='Green' type='Worker'/>
          <Zone team='Blue' type='Worker'/>
        </>
      )

      let workerZones = screen.getAllByTestId('worker-zone');
      let colors = [workerColors.RedZone, workerColors.YellowZone, workerColors.GreenZone, workerColors.BlueZone]
      workerZones.forEach( (zone, i) => {
        expect( zone ).toHaveStyle( `backgroundColor: ${colors[i]}` )
      })
    })
  })
})
