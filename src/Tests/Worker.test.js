import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { toggleBlip } from '../Components/Pages/Game/actions/workerFx.js';
import Worker from '../Components/Pages/Game/Worker.js';
import { workerColors } from '../Styling/colors.js';

let creds = ['econ', 'hr', 'sec', 'tech'];
describe('Worker', () => {


  it('should have no blips to start', () => {

    render( <Worker /> )
    let blips = screen.queryAllByTestId('blip')

    blips.forEach( blip => {
      expect( blip ).toHaveStyle('opacity: 0');
    })

  })

  it('should be able to display each blip', () => {

    render( <Worker id={1}/> )
    creds.forEach( cred => act( () => toggleBlip[1]( cred ) ) )

    let blips = screen.queryAllByTestId('blip')
    blips.forEach( blip => {
      expect( blip ).toHaveStyle('opacity: 1');
    })

  })

  describe('background colors', () => {

    it('should have Blue', () => {
      render( <Worker team='Blue' />)
      let worker = screen.getByTestId('worker')

      expect(worker).toHaveStyle(`backgroundColor: ${workerColors['Blue']}`)
    })

    it('should have Green', () => {
      render( <Worker team='Green' />)
      let worker = screen.getByTestId('worker')

      expect(worker).toHaveStyle(`backgroundColor: ${workerColors['Green']}`)
    })

    it('should have Red', () => {
      render( <Worker team='Red' />)
      let worker = screen.getByTestId('worker')

      expect(worker).toHaveStyle(`backgroundColor: ${workerColors['Red']}`)
    })

    it('should have Yellow', () => {
      render( <Worker team='Yellow' />)
      let worker = screen.getByTestId('worker')

      expect(worker).toHaveStyle(`backgroundColor: ${workerColors['Yellow']}`)
    })

  })
})
