import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Worker from '../Components/Pages/Game/Worker.js';
import { workerColors } from '../Styling/colors.js';

describe('Worker', () => {


  it('should have no blips to start', () => {

    render( <Worker />)
    let blips = screen.queryAllByTestId('blip')

    blips.forEach( blip => {
      expect( blip ).toHaveStyle('opacity: 0');
    })

  })

  it('should be able to display each blip', () => {

    render( <Worker econ={true} hr={true} sec={true} tech={true}/>)
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
