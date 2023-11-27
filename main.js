const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;

        // Al apretar "c" en la pantalla aparece el ""0
        if (boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        //Al darle a la flecha elimina el último carácter puesto y si es el último de todos cambia a "0"
        if (boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Syntax Error"){
                pantalla.textContent = "0";
            } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
            }

            // Resuelve la operación al dar en el igual y si no existe la operación da la alerta de error
            if(boton.id === "igual"){
                try{
                pantalla.textContent = eval(pantalla.textContent);
                } catch{
                    pantalla.textContent = "Syntax Error"
                } return;
            }

            //Al apretar un botón el numero apretado aparecera en la pantalla
        if(pantalla.textContent === "0" || pantalla.textContent === "Syntax Error"){
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})