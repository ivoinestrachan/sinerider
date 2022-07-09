// Welcome to main.js, where we set up the SineRider engine basics

const stepping = false

// Core constants

const ui = {
  menuBar: $('#menu-bar'),
  editButton: $('#edit-button'),
  levelText: $('#level-text'),
  levelButton: $('#level-button'),
  levelButtonString: $('#level-button > .string'),
  resetButton: $('#reset-button'),

  veil: $('#veil'),
  loadingVeil: $('#loading-veil'),
  loadingVeilString: $('#loading-string'),

  bubblets: $('.bubblets'),

  topBar: $('#top-bar'),
  navigatorButton: $('#navigator-button'),

  victoryBar: $('#victory-bar'),
  victoryLabel: $('#victory-label'),
  victoryLabelString: $('#victory-label > .string'),
  victoryStopButton: $('#victory-stop-button'),
  nextButton: $('#next-button'),

  messageBar: $('#message-bar'),
  messageBarString: $('#message-bar > .string'),

  variablesBar: $('#variables-bar'),
  timeString: $('#time-string'),

  controlBar: $('#controls-bar'),
  expressionText: $('#expression-text'),
  expressionEnvelope: $('#expression-envelope'),

  mathField: $('#math-field'),
  mathFieldStatic: $('#math-field-static'),

  dottedMathField: $('#dotted-math-field'),
  dottedMathFieldStatic: $('#dotted-math-field-static'),
  dottedSlider: $("#dotted-slider"),
  
  variableLabel: $('#variable-label'),

  runButton: $('#run-button'),
  runButtonString: $('#run-button > .string'),
  stopButton: $('#stop-button'),
  stopButtonString: $('#stop-button > .string'),

  navigatorFloatingBar: $('#navigator-floating-bar'),
  showAllButton: $('#show-all-button'),
}

ui.levelText.setAttribute('hide', true)
ui.veil.setAttribute('hide', true)

const canvas = $('#canvas')

let canvasIsDirty = true

const ticksPerSecond = 30
const tickDelta = 1/ticksPerSecond

const screen = Screen({
  canvas
})

const world = World({
  ui,
  screen,
  requestDraw,
  tickDelta,
  drawOrder: NINF,
  ...worldData[0],
})

// Core methods

function tick() {
  world.awake()
  world.start()
  
  world.sendEvent('tick')

  requestDraw()
}

function draw() {
  if (!canvasIsDirty) return
  canvasIsDirty = false
  
  let entity
  for (let i = 0; i < world.drawArray.length; i++) {
    entity = world.drawArray[i]

    if (entity.activeInHierarchy && entity.draw)
      entity.draw()
  }
}

function requestDraw() {
  if (!canvasIsDirty) {
    canvasIsDirty = true
    requestAnimationFrame(draw)
  }
}

tick()
draw()

if (!stepping) {
  setInterval(tick, 1000/ticksPerSecond)
}

// MathQuill

ui.mathFieldStatic = MQ.StaticMath(ui.mathFieldStatic)

ui.mathField = MQ.MathField(ui.mathField, {
  handlers: {
    edit: function() {
      const text = ui.mathField.getPlainExpression()
      const latex = ui.mathField.latex()
    // console.log(`Expression text changed to: `, text)
      world.level.sendEvent('setGraphExpression', [text, latex])
    }
  }
})

ui.mathField.getPlainExpression = function() {
  var tex = ui.mathField.latex()
  return mathquillToMathJS(tex)
}

ui.dottedMathFieldStatic = MQ.StaticMath(ui.dottedMathFieldStatic)

ui.mathField.getPlainExpression = function() {
  var tex = ui.mathField.latex()
  return mathquillToMathJS(tex)
}

function onMathFieldFocus(event) {
  world.onMathFieldFocus()
}

ui.expressionEnvelope.addEventListener('focusin', onMathFieldFocus)

function onMathFieldBlur(event) {
  world.onMathFieldBlur()
}

ui.expressionEnvelope.addEventListener('blurout', onMathFieldBlur)

// HTML events

function onKeyUp(event) {
  if (event.keyCode === 13) {
    if (!world.navigating)
      world.toggleRunning()
  }
}

window.addEventListener("keyup", onKeyUp)

function onExpressionTextChanged(event) {
// console.log(`Expression text changed to: `, ui.expressionText.value)

  world.level.sendEvent('setGraphExpression', [ui.expressionText.value])
}

function onClickMapButton(event) {
  world.onClickMapButton()
  requestDraw()
}

ui.levelButton.addEventListener('click', onClickMapButton)
ui.navigatorButton.addEventListener('click', onClickMapButton)

function onClickNextButton(event) {
  world.nextLevel()
}

ui.nextButton.addEventListener('click', onClickNextButton)

function onClickRunButton(event) {
  if (!world.navigating)
    world.toggleRunning()

  return true
}

ui.runButton.addEventListener('click', onClickRunButton)

function onClickStopButton(event) {
  world.toggleRunning()

  return true
}
ui.stopButton.addEventListener('click', onClickStopButton)
ui.victoryStopButton.addEventListener('click', onClickStopButton)

function onClickShowAllButton(event) {
  world.navigator.showAll = !world.navigator.showAll
}

ui.showAllButton.addEventListener('click', onClickShowAllButton)

function onClickEditButton(event) {
  world.editing = !world.editing
}

ui.editButton.addEventListener('click', onClickEditButton)

function onClickResetButton(event) {
  world.onClickResetButton()
}

ui.resetButton.addEventListener('click', onClickResetButton)

function onResizeWindow(event) {
  screen.resize()
  canvasIsDirty = true
  draw()
}

window.addEventListener('resize', onResizeWindow)

function onClickCanvas() {
  if (stepping) {
    tick()
  }
}

canvas.addEventListener('click', onClickCanvas)
ui.veil.addEventListener('click', onClickCanvas)

function onMouseMoveCanvas(event) {
  world.clickableContext.processEvent(event, 'mouseMove')
  event.preventDefault()
}

canvas.addEventListener('mousemove', onMouseMoveCanvas)
canvas.addEventListener('pointermove', onMouseMoveCanvas)

function onMouseDownCanvas(event) {
  world.clickableContext.processEvent(event, 'mouseDown')
  event.preventDefault()
}

canvas.addEventListener('mousedown', onMouseDownCanvas)
canvas.addEventListener('pointerdown', onMouseDownCanvas)

function onMouseUpCanvas(event) {
  world.clickableContext.processEvent(event, 'mouseUp')
  event.preventDefault()
}

canvas.addEventListener('mouseup', onMouseUpCanvas)
canvas.addEventListener('pointerup', onMouseUpCanvas)