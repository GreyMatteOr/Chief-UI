import { disableMove } from './workerFx.js'

export const emptyZone = {}
export const fillZone = {}

export function zoneChecker( target, left, top ) {
  if ( isTargetInEmptyZone(target, left, top) ){
    moveTargetToZone( target )
  }
}

let topElement;
function isTargetInEmptyZone( target, left, top ) {
  let { offsetHeight, offsetWidth } = target;
  let middleXY = [ (left + (offsetWidth / 2)), (top + (offsetHeight / 2)) ]
  topElement = document.elementsFromPoint( ...middleXY ).find( element => element !== target )
  let { isfull, type } = topElement.dataset
  return ( isfull === 'false' && type === 'worker-zone' )
}

function moveTargetToZone( target ) {
  let newLeft = parseInt( topElement.style.left ) + 3 + 'px'
  let newTop = parseInt( topElement.style.top ) + 3 + 'px'
  target.style.left = newLeft
  target.style.top = newTop
  target.style.zIndex = 99
  fillZone[ topElement.dataset.id ]()
  disableMove[ target.dataset.id ]()
}
