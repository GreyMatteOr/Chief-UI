import { workerColors } from '../../../../Styling/colors.js';

export default function Worker (props) {
  let { id, isFull, left, team, top } = props

  let color = workerColors[`${team}Zone`]
  return (
    <div
      data-id={id}
      data-isfull={isFull}
      data-testid='worker-zone'
      data-type='worker-zone'
      style={{
        'backgroundColor': color,
        'border': '4px solid #a31582',
        'borderRadius': '.25em',
        'left': left,
        'minHeight': 14,
        'minWidth': 14,
        'top': top,
        'padding': '.125em',
        'position': 'fixed',
        'zIndex': 10,
      }}
    ></div>
  )
}
