// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id, gr_id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w*1.5;
    this.height  = w*1.1;
    this.label  = l;
    this.id     = id;
    this.gr_id  = gr_id;
    this.first_letter = l[0]
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return (mouse_x > (this.x-this.width/2)) && (mouse_x < (this.x+this.width/2)) &&(mouse_y < this.y+this.height/2) && (mouse_y > this.y-this.height/2);
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    // if(this.id < 5){
    //   fill(color(245,66,66));
    // }
    // else if(this.id < 6){
    //    fill(color(65, 176, 69));     
    // }
    // else if(this.id < 7){
    //   fill(color(237, 230, 19));  
    // }
    // else if(this.id < 8){
    //   fill(color(20, 97, 18));
    // }
    // else if(this.id < 10){
    //   fill(color(213, 232, 67));
    // }
    // else if(this.id < 11){
    //   fill(color(201, 73, 26));
    // }  
    // else if(this.id < 15){
    //   fill(color(185, 255, 163));
    // }  
    // else if(this.id < 20){
    //   fill(color(252, 150, 15));
    // }  
    // else if(this.id < 23){
    //   fill(color(129, 191, 84));
    // }  
    // else if(this.id < 24){
    //   fill(color(219, 143, 2));
    // }
    // else if(this.id < 25){
    //   fill(color(93, 27, 148));
    // }  
    // else if(this.id < 27){
    //   fill(color(204, 20, 10));
    // } 
    // else if(this.id < 28){
    //   fill(color(252, 150, 15));
    // }  
    // else if(this.id < 37){
    //   fill(color(117, 109, 36));
    // }  
    // else if(this.id < 58){
    //   fill(color(255,255,255));
    // }  
    // else if(this.id < 61){
    //   fill(color(40, 138, 28));
    // }  
    // else if(this.id < 62){
    //   fill(color(252, 150, 15));
    // }  
    // else if(this.id < 63){
    //   fill(color(40, 138, 28));
    // } 
    // else if(this.id < 65){
    //   fill(color(200,200,200));
    // } 
    // else if(this.id < 66){
    //   fill(color(142, 201, 135));
    // } 
    // else if(this.id < 67){
    //   fill(color(140, 7, 0));
    // } 
    // else if(this.id < 68){
    //   fill(color(240, 166, 55));
    // } 
    // else if(this.id < 72){
    //   fill(color(194, 43, 6));
    // } 
    // else if(this.id < 75){
    //   fill(color(87, 60, 6));
    // } 
    // else if(this.id < 79){
    //   fill(color(255, 8, 0));
    // } 
    // else if(this.id < 80){
    //   fill(color(40, 138, 28));
    // } 

    if (this.first_letter === "A") {
      fill(color(139, 0, 0));
    } else if (this.first_letter === "B") {
      fill(color(0, 100, 0));
    } else if (this.first_letter === "C") {
      fill(color(0, 28, 109));
    } else if (this.first_letter === "D") {
      fill(color(255, 255, 0));
    } else if (this.first_letter === "E") {
      fill(color(255, 0, 255));
    } else if (this.first_letter === "F") {
      fill(color(0, 155, 175));
    } else if (this.first_letter === "G") {
      fill(color(255, 128, 0));
    } else if (this.first_letter === "H") {
      fill(color(128, 0, 255));
    } else if (this.first_letter === "I") {
      fill(color(0, 255, 128));
    } else if (this.first_letter === "J") {
      fill(color(255, 0, 128));
    } else if (this.first_letter === "K") {
      fill(color(128, 205, 10));
    } else if (this.first_letter === "L") {
      fill(color(0, 128, 255));
    } else if (this.first_letter === "M") {
      fill(color(128, 0, 128));
    } else if (this.first_letter === "N") {
      fill(color(0, 128, 128));
    } else if (this.first_letter === "O") {
      fill(color(128, 128, 0));
    } else if (this.first_letter === "P") {
      fill(color(128, 128, 255));
    } else if (this.first_letter === "Q") {
      fill(color(128, 255, 128));
    } else if (this.first_letter === "R") {
      fill(color(255, 128, 128));
    } else if (this.first_letter === "S") {
      fill(color(0, 0, 128));
    } else if (this.first_letter === "T") {
      fill(color(128, 0, 0));
    } else if (this.first_letter === "U") {
      fill(color(0, 128, 0));
    } else if (this.first_letter === "V") {
      fill(color(0, 0, 255));
    } else if (this.first_letter === "W") {
      fill(color(255, 0, 255));
    } else if (this.first_letter === "X") {
      fill(color(128, 128, 255));
    } else if (this.first_letter === "Y") {
      fill(color(255, 128, 0));
    } else if (this.first_letter === "Z") {
      fill(color(155, 155, 128));
    }
    else{
       fill(color(225, 150, 67));
    }
    rect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);

    // Draw label
    textFont("Arial", 20);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
}
