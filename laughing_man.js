const SQUARE_COUNT=1;
const TIMER_SPEED=16.6;
const SPEED = 5;

document.addEventListener('DOMContentLoaded', ()=>{

    let fsquare = document.querySelector("#square");

    fsquare.addEventListener("click",()=>{
        alert("OMG YOU CLICKED ME!");
    });
    
    fsquare.addEventListener("mouseover",()=>{
        fsquare.style.backgroundColor = getColor();
    });
        fsquare.addEventListener("mouseout",()=>{
        fsquare.style.backgroundColor = "#FF0000";
    });


    let box = document.querySelector("#box");

    for(let i =0;i < SQUARE_COUNT; i++){
        //Makee the element, but its not anything or on the page
        let square = document.createElement('img');
        //Set the attributes/properties of that element.
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";
        box.appendChild(square);
        square.addEventListener('mouseover', ()=>{
            square.src = "orochimaru.jpg";
        });
        square.addEventListener('mouseout', ()=>{
            square.src = "laughing_man.jpg";
        });

    }

    Array.from(box.children).forEach((element)=>{

        const parent = element.parentElement;
        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED * (Math.random()*2-1); //This gives a number from -1 to .9999...
        let dy = SPEED * (Math.random()*2-1);

        let x = parseInt(element.style.left) || 175;
        let y = parseInt(element.style.top) || 225;
        setInterval(() => {

            if(x <= 0 || x>= maxX ){
                dx*=-1;
            }

            if(y <= 0 || y >= maxY){
                dy*=-1;
            }

            x+=dx;
            y+=dy;

            element.style.left = x+"px";
            element.style.top = y+"px"; 
        }, TIMER_SPEED)
    });
});

function getColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0;i<6; i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }
    return color;
}