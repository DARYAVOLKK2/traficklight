const btnNode = document.querySelector('.js-btn')
const trafficColorNode = document.querySelector('.js-traffic-lights')

initLight(trafficColorNode)

btnNode.addEventListener('click', function () {
  switchLight(trafficColorNode)
})
