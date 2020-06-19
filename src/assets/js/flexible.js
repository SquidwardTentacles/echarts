(function flexible (window, document) {
  let width = document.documentElement.clientWidth
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px"
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    let setWidth = width
    if (width > 1920) {
      setWidth = 1920
    } else if (width < 1100) {
      setWidth = 1100
    }
    var rem = setWidth / 24
    docEl.style.fontSize = rem + "px"
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit)
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body")
    var testElement = document.createElement("div")
    testElement.style.border = ".5px solid transparent"
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines")
    }
    docEl.removeChild(fakeBody)
  }
})(window, document)
