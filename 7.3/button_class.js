class Button{
    constructor (width, height, type, color){
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    }
    onClick(){
      console.log(`buttonWidth = ${this.width}`); 
      console.log(`buttonHeight = ${this.height}`);
      console.log(`buttonType = ${this.type}`);
      console.log(`buttonColore = ${this.color} \n`); 
    }
}

let chatButton = new Button(200, 100, 'button', 'green');
chatButton.onClick();

function testbutton(){
  if (chatButton.width === 200 && chatButton.height === 100 && chatButton.type === "button" && chatButton.color === "green"){
    console.log("chatButton is true")
  } else {
    console.log("chatButton is false")
  }

}

testbutton();