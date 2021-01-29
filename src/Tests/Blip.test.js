import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Blip from '../Components/Pages/Game/Blip.js';
import { credColors } from '../Styling/colors.js';

describe('Blip', () => {


  it('should display be able to display blip', () => {

    render( <Blip active={true} cred='hr' />)
    let blip = screen.queryByTestId('blip')

    expect( blip ).toHaveStyle('opacity: 1');
  })

  it('should be able to display each blip', () => {

    render( <Blip active={false} cred='hr' />)
    let blip = screen.queryByTestId('blip')

    expect( blip ).toHaveStyle('opacity: 0');
  })

  describe('cred colors', () => {

    it('should have tech-color', () => {
      render( <Blip cred='tech' />)
      let blip = screen.getByTestId('blip')

      expect(blip).toHaveStyle(`backgroundColor: ${credColors['tech']}`)
    })

    it('should have econ-color', () => {
      render( <Blip cred='econ' />)
      let blip = screen.getByTestId('blip')

      expect(blip).toHaveStyle(`backgroundColor: ${credColors['econ']}`)
    })

    it('should have sec-color', () => {
      render( <Blip cred='sec' />)
      let blip = screen.getByTestId('blip')

      expect(blip).toHaveStyle(`backgroundColor: ${credColors['sec']}`)
    })

    it('should have hr-color', () => {
      render( <Blip cred='hr' />)
      let blip = screen.getByTestId('blip')

      expect(blip).toHaveStyle(`backgroundColor: ${credColors['hr']}`)
    })

  })
})
