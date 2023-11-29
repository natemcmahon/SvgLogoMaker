class Shape{
    constructor(text, shapeColor) {
        this.text = text;
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shape {
    constructor(text, shapeColor) {
        super(text, shapeColor);
    }

    render() {
        return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${this.color}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
   
   </svg>`
    }
};

class Triangle extends Shape {
    constructor(text, shapeColor) {
        super(text, shapeColor);
    }

    render() {
        return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   
    <id="triangle" viewBox="0 0 100 100">
    <polygon points="50 15, 100 100, 0 100" stroke="${this.color}/>
   
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
   
   </svg>`
        
    }
};

class Square extends Shape {
    constructor(text, shapeColor) {
        super(text, shapeColor);
    }

    render() {
        return `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
   
<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="transparent" stroke-width="5"/>
   
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
   
</svg>`;
    }
};

module.exports = { Circle, Triangle, Square };