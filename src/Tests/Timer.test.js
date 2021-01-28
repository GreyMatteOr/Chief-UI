import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import Timer, { restart } from '../Components/Pages/Game/Timer.js';

describe('Timer', () => {
  beforeEach( () => {
    render( <Timer duration={3}/>)
  })

  it('should start at the input duration', () => {
    let timer = screen.getByText('3')
    expect( timer ).toBeInTheDocument();
  })

  it('should countdown after each second', async () => {
    let timer = screen.getByText('3')
    expect( timer ).toBeInTheDocument();

    await waitFor( () => timer = screen.getByText('2') )
    expect( timer ).toBeInTheDocument();

    await waitFor( () => timer = screen.getByText('1') )
    expect( timer ).toBeInTheDocument();

    await waitFor( () => timer = screen.getByText('0') )
    expect( timer ).toBeInTheDocument();
  })

  it('should not continue counting', async () => {

    let timer, wrong;
    await waitFor( () => timer = screen.getByText('0'), {timeout: 3100} )
    expect( timer ).toBeInTheDocument();

    await waitFor( () => wrong = screen.queryByText('1'), {timeout: 2000} )
    expect( wrong ).toBeNull();
  })

  it('should restart at the given number when restart is invoked', async () => {

    let timer = screen.getByText('3')
    expect( timer ).toBeInTheDocument();

    act( () => restart( 100 ) );
    timer = screen.getByText('100')
    expect( timer ).toBeInTheDocument();
  })
})
