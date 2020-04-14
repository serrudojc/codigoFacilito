class IndexForSiblings{
    //retorna en que posicion estamos respecto a sus parientes
    static get(el){
        let children = el.parentNode.children;

        for(var i=0; i<children.length; i++){
            let child = children[i];
            if(child == el) return i;
        }
    }
}

class Slider{
    constructor(selector, movimiento = true){
        this.move = this.move.bind(this);   //nos aseguramos que this no cambie
        this.moveByButton = this.moveByButton.bind(this);

        this.slider = document.querySelector(selector);
        this.itemsCount = this.slider.querySelectorAll(".container > *").length; //todos los hijos directos de la clase container

        this.interval = null;
        this.contador = 0;
        this.movimiento = movimiento;

        this.start();

        //hacemos controles
        this.buildControls();
        //luego contruimos eventos
        this.buildEvents();
    }

    start(){
        if(!this.movimiento) return;
        this.interval = window.setInterval(this.move, 3000);
    }

    restart(){
        if(this.interval) window.clearInterval(this.interval);
        this.start();
    }

    buildEvents(){
        this.slider.querySelectorAll(".controls li").forEach(item => {
            item.addEventListener("click", this.moveByButton);
        });
    }

    moveByButton(ev){
        let index = IndexForSiblings.get(ev.currentTarget);
        console.log(index);

        //tengo que actualizar el contador
        this.contador = index;
        //me muevo a la diapositiva que hago click
        this.moveTo(index);
        //reiniciamos el intervalo para que no sea muy rapido al clickear
        this.restart();
    }

    buildControls(){
        for(var i=0; i<this.itemsCount; i++){
            let control = document.createElement("li");

            //si es el primer control, tenga la clase active
            if(i==0) control.classList.add("active");

            this.slider.querySelector(".controls ul").appendChild(control);
        }
    }

    move(){
        //this -> Objeto
        this.contador++;
        if(this.contador > this.itemsCount-1) this.contador = 0;
        this.moveTo(this.contador);
    }

    resetIndicator(){
        this.slider.querySelectorAll(".controls li.active").forEach(item => item.classList.remove("active"));
    }

    moveTo(index){
        let left =  index*100;

        this.resetIndicator();
        //al mover el slider, q tbm se mueva las viñetas
        this.slider.querySelector(".controls li:nth-child("+(index+1)+")").classList.add("active");
        
        //manipulo el margen
        this.slider.querySelector(".container").style.left = "-"+left+"%";
    }
}




//todo lo global lo encerramos en un closure, para que no contamine con lo global)
// con el segundo argumento, activo o desactivo el movimiento automatico
(function(){
    new  Slider(".slider",true);
})();