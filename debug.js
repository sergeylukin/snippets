let listener = getEventListeners($0).click[0].listener
$0.removeEventListener('click', listener)
$0.addEventListener('click', (e) => {
  debugger;
  listener(e)
})
