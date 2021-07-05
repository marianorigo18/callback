window.onload = () =>{ 

    //un callback es una funcion que tiene como parametro a otra funcion

    //Ej:

    function cambiarTitulo(){
        document.getElementById("titulo").innerHTML = prompt("escribe algo y se cambiara en el titulo")
    }
    //en la function cambiarTitulo le asignamos que en el document html con el metodo getElement capture el elemento 
    //con el id "titulo" y con el innerHTML que regrese lo que el cliente escriba en le promt.

    document.getElementById("button").onclick = function(){
        cambiarTitulo();
    }
    //aqui en el document con el metodo getElement capture en elemento con el id "button" y le asigne el evento
    //onclick que cuando a la hora de hacer click a boton ejecutara una funccion que tiene como parametro
    //cambiarTitulo que es otra funcion. 

    //un callback es lo que esta desde la linea 13 a la 15 








}













