const button = document.createElement("button")
button.textContent = "Click me"
document.body.append(button)

class Display {
  constructor() {
    this.buttonText = "New text"

    button.addEventListener("click", (event) => {
      event.target.textContent = this.buttonText //this context refers to outher this.buttonText
    })
  }
}

new Display() //New Text Display
//without arrow function, it will be "click me"
