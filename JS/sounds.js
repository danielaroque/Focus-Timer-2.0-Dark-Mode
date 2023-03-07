export default function() {
  const forestAudio = new Audio('./sound/florest.wav')
  const rainAudio = new Audio('./sound/rain.wav')
  const coffeeMachineAudio = new Audio('./sound/coffee-machine.wav')
  const fireplaceAudio = new Audio('./sound/fireplace.wav')
  
  forestAudio.loop = true
  rainAudio.loop = true
  coffeeMachineAudio.loop = true
  fireplaceAudio.loop = true
  
return {
  forestAudio,
  rainAudio,
  coffeeMachineAudio,
  fireplaceAudio
}
}