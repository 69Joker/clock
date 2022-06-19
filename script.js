setInterval(setClock, 1000)

const hourKata = document.querySelector('[data-kata-hour]')
const minuteKata = document.querySelector('[data-kata-minute]')
const secondKata = document.querySelector('[data-kata-second]')

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondKata,secondRatio)
    setRotation(minuteKata,minuteRatio)
    setRotation(hourKata,hourRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
