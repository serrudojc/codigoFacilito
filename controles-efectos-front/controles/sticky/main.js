//closure para no contaminar el scope global
(function(){
    //para saber si ya la navegacion ya está pegada arriba. False= no ha sido pegada
    let pinged = false;

    let nav = document.querySelector('.nav');

    //bug. Usamos la parte superior de la navegacion, para definir el punto de retorno. Usamos su altura
    //la distancia en la que no deberiamos pegarlo
    let stickyScrollPoint = document.querySelector('.hero-image').clientHeight;

    //pega la navegacion a la parte de arriba
    function pingToTop(){
        if(pinged) return;

        nav.classList.add('pined');
        pinged = true;
    }

    function unPingFromTop(){
        if(!pinged) return;

        nav.classList.remove('pined');
        pinged = false;
    }

    //evento para cuando usuario haga scroll sobre la ventana
    window.addEventListener('scroll', function(ev){
        //agrego esto para arreglar el bug. Hay que calcular la distancia en la parte superior (medio rebuscado)
        //si la distancia q se scrolleó es menor q la altura del elemento image arriba, la navegacion deberia aparecer abajo. 
        if(window.scrollY < stickyScrollPoint) return unPingFromTop();

        //metodo para obtener objeto con altura, anchura y dist del elemento con la esq superior e izquerda
        let coords = nav.getBoundingClientRect();
        console.log(coords);

        if(coords.top <= 0) return pingToTop();

        //sino, lo despego
        unPingFromTop();
    })

})();