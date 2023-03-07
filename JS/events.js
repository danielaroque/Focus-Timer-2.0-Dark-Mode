import {
  buttonPlay,
  buttonStop,
  buttonMinutePlus,
  buttonMinuteMinus,
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
} from "./elements.js"

export default function({timer,sound}) {
  
lightMode.addEventListener('click', function() {
  darkMode.classList.remove('hide')
  lightMode.classList.add('hide')
  theme.classList.remove('dark-mode')
})

darkMode.addEventListener('click', function() {
  darkMode.classList.add('hide')
  lightMode.classList.remove('hide')
  theme.classList.add('dark-mode')
})

buttonPlay.addEventListener('click', function() {
  timer.countdown()
})

buttonStop.addEventListener('click', function() {
  timer.hold()
})

//evento criado para resetar o time para o último tempo estabelecido 
buttonStop.addEventListener('dblclick', function() {
  timer.updateDisplay()
})

buttonMinutePlus.addEventListener('click', function(){
  timer.minutePlus()
})

buttonMinuteMinus.addEventListener('click', function() {
  timer.minuteMinus()
})

cardForest.addEventListener('click', function() {
  cardForest.classList.toggle('active')
  cardRain.classList.remove('active')
  cardCoffeeMachine.classList.remove('active')
  cardFireplace.classList.remove('active')
  
  if (sound.forestAudio.paused) {
    sound.forestAudio.play()
  } else {
    sound.forestAudio.pause()
  } //pausar a música
  sound.rainAudio.pause()
  sound.coffeeMachineAudio.pause()
  sound.fireplaceAudio.pause()
})

cardRain.addEventListener('click', function() {
  cardRain.classList.toggle('active')
  cardForest.classList.remove('active')
  cardCoffeeMachine.classList.remove('active')
  cardFireplace.classList.remove('active')

  if (sound.rainAudio.paused) {
    sound.rainAudio.play()
  } else {
    sound.rainAudio.pause()
  }
  sound.forestAudio.pause()
  sound.coffeeMachineAudio.pause()
  sound.fireplaceAudio.pause()
})

cardCoffeeMachine.addEventListener('click', function() {
  cardCoffeeMachine.classList.toggle('active')
  cardForest.classList.remove('active')
  cardRain.classList.remove('active')
  cardFireplace.classList.remove('active')

  if (sound.coffeeMachineAudio.paused) {
    sound.coffeeMachineAudio.play()
  } else {
    sound.coffeeMachineAudio.pause()
  }
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireplaceAudio.pause()
})

cardFireplace.addEventListener('click', function() {
  cardFireplace.classList.toggle('active')
  cardForest.classList.remove('active')
  cardRain.classList.remove('active')
  cardCoffeeMachine.classList.remove('active')
  
  if (sound.fireplaceAudio.paused) {
    sound.fireplaceAudio.play()
  } else {
    sound.fireplaceAudio.pause()
  }
  sound.coffeeMachineAudio.pause()
  sound.rainAudio.pause()
  sound.forestAudio.pause()
})

volumeForest.addEventListener('input', function() {
  sound.forestAudio.volume = volumeForest.value / 100
})

volumeRain.addEventListener('input', function() {
  sound.rainAudio.volume = volumeRain.value / 100
})

volumeCoffee.addEventListener('input', function() {
  sound.coffeeMachineAudio.volume = volumeCoffee.value / 100
})

volumeFireplace.addEventListener('input', function() {
  sound.fireplaceAudio.volume = volumeFireplace.value / 100
})
}