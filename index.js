const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

var shapeClass;

const questions = [
  {
    type: 'input',
    message: 'Please input some text up to three characters',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Please input your desired color or hex code',
    name: 'color',
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'shape',
    choices: ['circle', 'triangle', 'square']
  },
];

    
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
    let renderedShape;

    switch (data.shape) {
      case 'circle':
        const svgCircle = new Circle(data.text, data.color)
        renderedShape = svgCircle.render();
        break;
      case 'triangle':
        const svgTriangle = new Triangle(data.text, data.color)
        renderedShape = svgTriangle.render();
        break;
      case 'square':
        const svgSquare = new Square(data.text, data.color)
        renderedShape = svgSquare.render();
        break;
    }
    console.log(renderedShape);

    fs.writeFile('display.svg', renderedShape, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
  
  });
}

// Function call to initialize app
init();
