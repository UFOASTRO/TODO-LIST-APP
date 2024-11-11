const inputTodo = document.getElementById("Input-todo");
const addTodo = document.getElementById("addTodo");
const todoContainer = document.querySelector(".container");


// Function to display a single task
function displayTodo(task) {
  const newTask = document.createElement("div");
  newTask.classList.add("todo-wrapper");
  newTask.innerHTML = `
 <div
          class="todo bg-white flex justify-between mx-8 py-3 px-2 items-center mb-2 rounded">
          <div class="complete flex text-center">
            <div class="checked border-2 border-gray-400 h-6 w-6 rounded-full my-1 font-bold text-white bg-white">✔</div>
            <p class="py-1 px-2 todos">${task}</p>
          </div>
         
          <div class="actions">
            <button
             style="color: rgb(61, 60, 60);" class=" h-8 w-8 text-center rounded-full font-bold deleteTodo hover:bg-slate-500 text-white transition duration-300 ease-in-out">
             ✖
            </button>
          </div>
  `;
  
  todoContainer.appendChild(newTask);


  const checked = newTask.querySelector('.checked');
  const todos = newTask.querySelector('.todos');
  checked.addEventListener('click', () => {
      todos.classList.toggle('line-through');
      if (checked.style.backgroundColor !== "rgb(74, 222, 128)") {
          checked.style.backgroundColor = "rgb(74, 222, 128)"; // Set to default color (e.g., no color or transparent)
        } else {
          checked.style.backgroundColor = "rgb(255,255,255)";
        }
      });
  // Delete task
  const deleteTodo = newTask.querySelector('.deleteTodo');
  deleteTodo.addEventListener('click', () => {
    newTask.remove();
    
  });
}



function success(){
const successful = document.querySelector('.successful');
 successful.style.display = "flex";
 setTimeout(()=>{successful.style.display="none"},3000);
}
function unssuccessful(){
    const unsuccessful = document.querySelector('.unsuccessful');
     unsuccessful.style.display = "flex";
     setTimeout(()=>{unsuccessful.style.display="none"},3000);
    }
    
// Event listener for adding a new task
addTodo.addEventListener("click", () => {
  if (inputTodo.value.trim() !== "") {
    displayTodo(inputTodo.value);
    inputTodo.value = "";
    success();
  }
 else if (inputTodo.value.trim() == "" ){
    unssuccessful();
 }
});


function animateAstronauts() {
    const astronauts = document.querySelectorAll('.astronaut'); // Select all astronaut elements

    astronauts.forEach(astronaut => {
        // Get the maximum values for X and Y positions based on window size
        const maxX = window.innerWidth - astronaut.offsetWidth;
        const maxY = window.innerHeight * 0;

        // Set initial positions and random speed values
        let positionX = Math.random() * maxX;
        let positionY = Math.random() * maxY;
        let velocityX = (Math.random() * 1.2) - 0.2; // Random speed between -2 and 2
        let velocityY = (Math.random() * 1.2) - 0.2;
        let rotationAngle = Math.random() * 360; // Initial random rotation

        function animate() {
            // Update position
            positionX += velocityX;
            positionY += velocityY;

            // Bounce off the walls by reversing direction
            if (positionX <= 0 || positionX >= maxX) {
                velocityX = -velocityX;
            }
            if (positionY <= 0 || positionY >= maxY) {
                velocityY = -velocityY;
            }

            // Randomly change the rotation angle slightly each frame
            rotationAngle += (Math.random() - 1.5) * 0.5; // Rotate between -2.5 and 2.5 degrees

            // Apply the new position and rotation
            astronaut.style.transform = `translate(${positionX}px, ${positionY}px) rotate(${rotationAngle}deg)`;

            // Repeat the animation
            requestAnimationFrame(animate);
        }

        // Start animation for each astronaut
        animate();
    });
}

// Call the function to animate all astronaut elements
animateAstronauts();


astronaut()

