import { useEffect, useState } from 'react';
import { BuildingZone, SpecialtyWorkerZone, YearIncentiveZone } from './Zones';

export default function Deck( props ) {
  let { type } = props;
  let types = {
    'Building': {size:15},
    'SpecialtyWorker': {size:20},
    'YearIncentive': {size:10},
  }
  let [cardsRemaining, setCardsRemaining ] = useState( types[ type ].size )

  return (
    <
      section
      data-testid='deck'
      onClick={ () => flipCard() }
    >
      Deck! {cardsRemaining}
    </section>
  )
}
