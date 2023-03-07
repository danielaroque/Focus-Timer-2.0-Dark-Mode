import Timer from "./timer.js"
import Events from "./events.js"
import Sound from "./sounds.js"
import {
  minutesDisplay,
  minutes,
  secondsDisplay,
  timerTimeOut
} from "./elements.js"

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  minutes
})

const sound = Sound()

Events({timer, sound})