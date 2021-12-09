class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
  }
  display() {
    this.input.position(displayWidth / 2 - 90, displayHeight / 2 - 150);
    this.input.size(180, 30);
    this.buttonImg.position(displayWidth / 2 +50 , displayHeight / 2 - 100);
    this.buttonImg.size(150, 50);

  }

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide();
  }
  
}

