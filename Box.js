class Box{ // name of the class

    constructor (x,y,width,height,color){ // constructor takes x,y,width,height
        var options = { // properties for the box
            restitution: 0.8,  
            friction: 0.3,
            density: 1
        }
this.body = Bodies.rectangle(x,y,width,height,options); // creating the box using bodies
this.width = width; // giving the width of box
this.height = height; // giving the height of box 
this.color = color;
World.add(world1,this.body); // adding the box to the world1
    }


    display() { // to display the box
var pos = this.body.position; // store the position of the box in pos
var angle = this.body.angle; // store the angle of the box in angle
push(); // we write this whenever we are using angle
translate(pos.x,pos.y); // move the body by pos.x , pos.y
rotate(angle); // rotate the body by an angle
rectMode(CENTER); // set the rectangle mode to center point
fill(this.color) // to fill the color
rect(0,0,this.width,this.height); // to draw the rectangle 
pop(); // we write this whenever we are using angle
    }
}