//Crear nuevo elementos
//cada vez que hagamos submit, se va crear una nueva carta

//Nos apoyamos de esto para nuestra card
<div class="container">
    <div class="jumbotron">
    <div class="row"> 
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <div class="caption">
                    <h3 id="title_card">Titulo</h3>
                    <p id="description_card">Descripcion</p>
                    <p>
                        <a href="#" class="btn btn-danger">Accion</a>
                    </p>
                    </h3>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>


//primero obtengo el elemento donde voy a colocar las cartas, es decir
//el elemento con clase row
const row = document.querySelector('.row');

const form = document.getElementById('course-form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = decument.getElementById('description-form').value;

    create_card(title,description);
})

//genero una funcion con dos parametros, y se manda llamar cuando hagamos submit al form
function create_card(title, description){
    //genero una variable que almacena un string que es el maquetado de una card.. 
    let html = `<div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3 id="title_card">${title}</h3>
                            <p id="description_card">${description}</p>
                            <p>
                                <a href="#" class="btn btn-danger">Accion</a>
                            </p>
                            </h3>
                        </div>
                    </div>
                </div>`;
    //atributo innerHTML va almacenar el html de un elemento. Concatenamos el row y el html
    row.innerHTML +=html;
}
//no es la forma mas adecuada, si el codigo html es extenso





//agregar elementos al DOM
//ademas de agregar elementos con innerHTML, tmb podemos hacer esto:

const row = document.querySelector('.row');

const form = document.getElementById('course-form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = decument.getElementById('description-form').value;

    create_card(title,description);
})

function create_card(title,description){
    //createElement va crear un elemento a partir del string q pusimos como argumento.
    let div = document.createElement('div');
    div.className = 'col-sm-6 col-md-4';

    //creamos el segundo div
    let thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';

    let caption = document.createElement('div');
    caption.className = 'caption';

    let h3 = document.createElement('h3');
    //h3 no tiene ninguna clase, pero si un titulo. Colocamos el titulo que colocamos como parametro
    h3.textContent = title;

    let p1 = document.createElement('p');
    p1.textContent = description;

    let p2 = document.createElement('p');
    let a = document.createElement('a');
    a.className = 'btn btn-danger';
    a.textContent = 'eliminar';

    //agregamos los elementos a los elementos padre
    p2.appendChild(a);
    caption.appendChild(h3);
    caption.appendChild(p1);
    caption.appendChild(p2);
    
    thumbnail.appendChild(caption);
    div.appendChild(thumbnail);

    row.appendChild(div);
}








//Eliminar elementos
//agregamos evento click a nuestro boton eliminar card.

onst row = document.querySelector('.row');

const form = document.getElementById('course-form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = decument.getElementById('description-form').value;

    create_card(title,description);
})

//declaro el div fuera de la funcion, necesito el elemento a eliminar (ver coment mas abajo)
let div = null;

function create_card(title,description){
    div = document.createElement('div');
    div.className = 'col-sm-6 col-md-4';

    let thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';

    let caption = document.createElement('div');
    caption.className = 'caption';

    let h3 = document.createElement('h3');
    h3.textContent = title;

    let p1 = document.createElement('p');
    p1.textContent = description;

    let p2 = document.createElement('p');
    let a = document.createElement('a');
    a.className = 'btn btn-danger';
    a.textContent = 'eliminar';
    
    //agregamos al elemento
    p2.addEventListener('click', delete_card);

    p2.appendChild(a);
    caption.appendChild(h3);
    caption.appendChild(p1);
    caption.appendChild(p2);
    
    thumbnail.appendChild(caption);
    div.appendChild(thumbnail);

    row.appendChild(div);
}

//generamos una nueva funcion, y al elemento p2 le agregamos addEventListener

function delete_card(){
    //para eliminar un elemento, ncesitamos el padre y el elemento a eliminar.
    //el padre es nuestro div con clase row.
    //nos falta el elemento a eliminar.
    //para esto, declaro el div fuera de la funcion, una variable global

    //padre removeChild y el elemento a eliminar
    row.removeChild(div);
}



//pero usando variables globales, solo podemos eliminar el ultimo card, los previo no vamos a poder.
//existen metodos para esto, con id, clase, ancestro, etc, siempre necesitamos el padre y el elemento a eliminar, hijo del padre

//posible solucion:

//Podemos obtener el elemento q dispara el evento.
//Podemos obtener nuestra etiqueta p2, q está dentro del div caption, este div está dentro de 
//otro div, que a su vez esta dentro del div que nos interesa obtener.
//estamos a 4 niveles de obtener nuestro ancestro.

function delete_card(e){
    let ancestor = get_ancestors(e.target, 4); //coloco el boton y los niveles q necesito subir: nivel base, div caption, thumbnail y div ppal
    row.removeChild(ancestor);
}

//funcion q me retorne un ancestro a partir de cierto nivel:
function get_ancestors(ancestor, level){
    if(level == 0){
        //retorno el elemento actual
        return ancestor;
    }
    //caso contrario, mando ejecutar a la funcion de nuevo, nuestro elemento.parentElement y el nivel
    level --;
    return get_ancestors(ancestor.parentElement, level);
}