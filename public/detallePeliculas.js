const buttons = document.querySelectorAll("button#butonPelicula");
const divInfos = document.querySelectorAll(".divDetalles");

// Agrega una variable para indicar si el botón debe mostrarse o no
let showButton = true;

buttons.forEach(button => {
  button.addEventListener("click", event => {
    const clickedButtonId = event.target.value;
    const divs = document.querySelectorAll("div.divpeliculas");
    divs.forEach(div => {
      if (div.id !== clickedButtonId) {
        div.style.display = "none";
      } else {
        div.style.display = "block";
      }
    });
    divInfos.forEach(divInfo => {
      divInfo.style.display = "flex";
      divInfo.style.flexDirection = "column";
      divInfo.style.alignItems = "center";
      divInfo.style.alignItems = "center";
      button.style.display = "none";
      // actualiza la variable para indicar que el botón está oculto
      showButton = false;
    });
  });
});

const backButton = document.querySelectorAll(".back");

backButton.forEach(button => {
  button.addEventListener("click", event => {
    const divs = document.querySelectorAll("div.divpeliculas");
    divs.forEach(div => {
      div.style.display = "block";
    });
    divInfos.forEach(divInfo => {
      divInfo.style.display = "none";
      // actualiza la variable para indicar que el botón se debe mostrar
      showButton = true;
    });
    // Verifica si el botón se debe mostrar
    if (showButton) {
      buttons.forEach(button => {
        button.style.display = "block";
      });
    }
  });
});




const btnOpiniones = document.querySelectorAll(".btnOpiniones")

btnOpiniones.forEach(button => {
  button.addEventListener("click", event => {
    const clickedButtonId = event.target.value;
    console.log(clickedButtonId);
    window.open(`http://localhost:3000/opiniones/${clickedButtonId}`)
    
// const options = {
//   method: 'POST',
//   headers:{
//   'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(clickedButtonId)
//   }
//   //console.log(movie);
//   const response =  fetch(`http://localhost:3000/opiniones/:title${clickedButtonId}`, options);
//   const results =  response.json(); 

    });
  });
