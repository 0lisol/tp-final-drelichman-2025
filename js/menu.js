
document.addEventListener("DOMContentLoaded", function() { //* declaramos la funcion que va a actuar una vez que cargue el DOM (documento)*//

    let botonmenu = document.querySelector(".menu-toggle"); //* aca seleccionamos el boton de la hamburguesa, lo capturamos.
    let listademenu = document.querySelector(".nav-links");//* seleccionamos el nav link

    botonmenu.addEventListener("click",  function() { //* aca le decmos al boton , primero que lo escuchamos y luego que cuando haga click pase esto:
        listademenu.classList.toggle("active"); //* 
    });
});





