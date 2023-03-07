export default function Timer ({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  minutes
}) {
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown() {
    if (timerTimeOut != null) {
      return
    }
    timerTimeOut = setInterval(function() {
    let minutes = Number(minutesDisplay.textContent)  
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <=0
    
    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay()
      clearTimeout(timerTimeOut)
      timerTimeOut = null
      return
    }
    
    if (seconds <= 0) {
      seconds = 60
      --minutes
      }
    
    updateDisplay(minutes, String(seconds - 1))
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  
  function hold(){
    clearTimeout(timerTimeOut)
    timerTimeOut = null
  }

  function passedseconds() {
    const secondsDisplay = document.querySelector('.seconds')
    return Number(secondsDisplay.textContent)
  }

  function minutePlus() {
    minutes += 5
    updateDisplay(minutes, passedseconds())
  }

  function minuteMinus() {
    let newMinutes = minutes
    if (minutes - 5 < 0) {
      minutes = 0
      updateDisplay(newMinutes)
    } else {  
      minutes -= 5
      updateDisplay(minutes, passedseconds())
    }
  }

  return {
    hold,
    updateDisplay,
    countdown,
    updateMinutes,
    minutePlus,
    minuteMinus
  }
}