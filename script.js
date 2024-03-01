const startBtn = document.querySelector("#startBtn")
const endBtn = document.querySelector("#endBtn")
const prevNext = document.querySelectorAll(".prevNext")
const numbers = document.querySelectorAll(".link")

let currentStep = 0

function upDateBtn() {
  if (currentStep === 4) {
    endBtn.disabled = true
    prevNext[1].disabled = true
  } else if (currentStep === 0) {
    startBtn.disabled = true
    prevNext[0].disabled = true
  } else {
    endBtn.disabled = false
    prevNext[1].disabled = false
    startBtn.disabled = false
    prevNext[0].disabled = false
  }
}

numbers.forEach((number, index) => {
  number.addEventListener("click", (e) => {
    e.preventDefault()
    currentStep = index
    document.querySelector(".active").classList.remove("active")
    number.classList.add("active")
    upDateBtn()
  })
})

prevNext.forEach(button => {
  button.addEventListener("click", e => {
    currentStep += e.target.id === "next" ? 1 : -1
    numbers.forEach((number, index) => {
      number.classList.toggle("active", index === currentStep)
      upDateBtn()
    })
  })
})

startBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active")
  numbers[0].classList.add("active")
  currentStep = 0
  upDateBtn()
  endBtn.disabled = false
  prevNext[1].disabled = false
})

endBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active")
  numbers[4].classList.add("active")
  currentStep = 4
  upDateBtn()
  startBtn.disabled = false
  prevNext[0].disabled = false
})