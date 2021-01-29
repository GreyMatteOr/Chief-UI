import { credColors } from '../../../Styling/colors.js';

export default function Blip(props) {
  let { active, cred } = props
  let color = credColors[cred]
  let credSpots = {
    'econ': [1,1],
    'hr': [1,2],
    'sec': [2,2],
    'tech': [2,1]
  }
  let [col, row] = credSpots[cred]

  return (
    <div
      data-testid='blip'
      style={{
        'backgroundColor': color,
        'border': '1px solid black',
        'borderRadius': '100%',
        'opacity': active ? '1' : '0',
        'gridColumn': col,
        'gridRow': row,
        'height': '.25em',
        'width': '.25em'
      }}
    >
    </div>
  )
}
