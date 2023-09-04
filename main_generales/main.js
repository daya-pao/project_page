 // Obtener referencias a los elementos HTML relevantes
const leftIcon = document.getElementById("left_icon");
const rightIcon = document.getElementById("right_icon");
const perfil1 = document.querySelector(".perfil1");
const perfil2 = document.querySelector(".perfil_2");

  // Cuando se hace clic en el ícono de la izquierda
leftIcon.addEventListener("click", () =>{
    // Mostrar perfil_1 y ocultar perfil_2
    if (perfil1.classList.contains("display_none")) {
        // Mostrar perfil_2 y ocultar perfil_1
        perfil1.classList.remove("display_none");
        perfil2.classList.add("display_none");
    }
});

  // Cuando se hace clic en el ícono de la izquierda
rightIcon.addEventListener("click", ()=> {
    // Mostrar perfil_1 y ocultar perfil_2
    if (perfil2.classList.contains("display_none")) {
        // Mostrar perfil_1 y ocultar perfil_2
        perfil2.classList.remove("display_none");
        perfil1.classList.add("display_none");
    }
});