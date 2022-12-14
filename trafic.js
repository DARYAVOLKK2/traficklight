const LIGHTHS = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
}

const CLASSES_BY_LIGHT = {
  [LIGHTHS.red]: 'traffic-lights_red',
  [LIGHTHS.yellow]: 'traffic-lights_yellow',
  [LIGHTHS.green]: 'traffic-lights_green',
}

const NEXT_LIGHT = {
  [LIGHTHS.red]: LIGHTHS.green,
  [LIGHTHS.green]: LIGHTHS.yellow,
  [LIGHTHS.yellow]: LIGHTHS.red,
}

let currentLight = LIGHTHS.red

function switchLight(node) {
  const currentClass = CLASSES_BY_LIGHT[currentLight]
  const nextLight = NEXT_LIGHT[currentLight]
  const nextClasses = CLASSES_BY_LIGHT[nextLight]

  currentLight = NEXT_LIGHT[currentLight]

  console.log(currentLight)

  node.classList.replace(currentClass, nextClasses)
}

function initLight(node) {
  node.classList.add(CLASSES_BY_LIGHT[currentLight])
}
