const minutesDisplay = document.querySelector('.minutes')
let minutes = Number(minutesDisplay.textContent)
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMinutePlus = document.querySelector('.minute-plus')
const buttonMinuteMinus = document.querySelector('.minute-minus')
const cardForest = document.querySelector('#forest')
const cardRain = document.querySelector('#rain')
const cardCoffeeMachine = document.querySelector('#coffee-machine')
const cardFireplace = document.querySelector('#fireplace')
const lightMode = document.querySelector('.light-mode')
const darkMode = document.querySelector('.dark-mode')
const theme = document.querySelector('.theme')
const volumeForest = document.querySelector('.volume-forest')
const volumeRain = document.querySelector('.volume-rain')
const volumeCoffee = document.querySelector('.volume-coffee')
const volumeFireplace = document.querySelector('.volume-fireplace')
let timerTimeOut = null

export {
  minutesDisplay,
  minutes,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMinutePlus,
  buttonMinuteMinus,
  timerTimeOut,
  cardForest,
  cardRain,
  cardCoffeeMachine,
  cardFireplace,
  lightMode,
  darkMode,
  theme,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace
} 