// --- DOM Elements ---
const canvas = document.getElementById('drawingCanvas');
const clearButton = document.getElementById('clearButton');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');

  const fillDisplay = document.getElementById('fillDisplay').querySelector('span');



let paint = false;


ctx.strokeStyle = colorPicker.value;
ctx.fillStyle = colorPicker.value;
ctx.lineWidth = 5;
ctx.lineCap = 'round';

fillDisplay.style.color = colorPicker.value;
fillDisplay.textContent = colorPicker.value;



ctx.strokeStyle = '#2c3e50';
ctx.lineWidth = 5;
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

 
let coord = {x:0 , y:0}; 

function getPosition(event){
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function startPainting(event){
  paint = true;
  getPosition(event);
}
function stopPainting(){
  paint = false;
}

function getPosition(event) {
    
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}



function startPainting(event) {
    paint = true;
    getPosition(event);
}

function stopPainting() {
    paint = false;
    
    ctx.beginPath(); 
}


function sketch(event) {
    if (!paint) return;

    ctx.beginPath();

    
    ctx.moveTo(coord.x, coord.y);

   
    getPosition(event);

    
    ctx.lineTo(coord.x, coord.y);

    
    ctx.stroke();
}

// --- Event Listeners ---


window.addEventListener('load', () => {
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
   
});


colorPicker.addEventListener('input', (event) => {
  
    ctx.strokeStyle = event.target.value;
    console.log(`Stroke Color updated: ${ctx.strokeStyle}`);
});


colorPicker.addEventListener('dblclick', (event) => {
    const newFillColor = event.target.value;
    ctx.fillStyle = newFillColor;
    
  
    fillDisplay.style.color = newFillColor;
    fillDisplay.textContent = newFillColor;

    console.log(`Fill Color set to: ${ctx.fillStyle}`);
    
    
});



clearButton.addEventListener('click', () => {
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
   
    ctx.fillStyle = colorPicker.value; 
    ctx.strokeStyle = colorPicker.value; 
    
    console.log('Canvas cleared.');
});