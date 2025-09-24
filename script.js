 // --- DOM Elements ---
        const canvas = document.getElementById('drawingCanvas');
        const clearButton = document.getElementById('clearButton');
        const ctx = canvas.getContext('2d');

        // --- Core Logic & Drawing ---
        // You will write your drawing logic here.
        // For example, you can set the line color and width.
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round'; // Gives the lines a smooth, rounded end

        // You will also write the variables to track the drawing state.
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        // --- Event Listeners ---
        // You will add your event listeners here to handle user input.
        // The events you'll need are:
        // 'mousedown', 'mousemove', 'mouseup', and 'mouseout'
        // 'touchstart', 'touchmove', 'touchend' for mobile

        // Event listener for the clear button
        clearButton.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });