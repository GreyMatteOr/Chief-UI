import React from 'react';
import loadingImg from '../../images/loading.png';

export default function Loading() {
  return (
    <div
      className=''
      data-testid='loading-component'
      style={{
        'display': 'flex',
        'backgroundColor': 'rgba(0, 0, 0, .2)',
        'height': '100%',
        'position': 'absolute',
        'width': '100%',
        'zIndex': '100'
      }}>

      <img
        className='spin'
        alt='loading...'
        src={loadingImg}
        style={{
          'height': '10em',
          'width': 'auto',
          'margin': 'auto',
        }}
      />

    </div>
  )
}
