let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function backweb() {
   
    if (contador==1) {
        document.getElementById("sharelink").style.display = "none";
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("restaurante").style.display = "none";
        document.getElementById("playa").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("playa").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
}

function servicios() {
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1();

};

function categorias() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("costos").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("playa").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
    
    
}

function restaurante() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("restaurante").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("playa").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();
    
    
}

function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("playa").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();     
        
}


function playa() {
    document.getElementById("playa").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();  
        
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("costos").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("playa").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("costos").style.display = "none";
        document.getElementById("restaurante").style.display = "none";
        document.getElementById("playa").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        // llevar cerrar side automatico

        document.querySelector('.tarjeta').addEventListener('click',()=>{
            document.getElementById("side").style.display = "none";
            conta=0;
            });



// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
          
          //ALERTAS>
          function save(){
            let url = `https://drive.google.com/u/0/uc?id=1VVSTlUODTMNHCKxJUVCxXnqyZcBFl6AC&export=download`;
            window.open(url); 
           };
          
          function ftuser() {
              Swal.fire({
                  title: 'Hostería Los Cedros',
                  text: 'Alojamiento Mindo-Ecuador',
                  imageUrl: 'img/logocedros.png',
                  imageWidth: 100,
                  confirmButtonText: 'Añadir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
         
          function msj() {
            Swal.fire({
                title: 'Travel Agency',
                text: 'Function Available Proximant',
                imageUrl: 'img/logofriends2.png',
                imageWidth: 200,
                confirmButtonText: 'ok',
                showCloseButton: 'true',
            })};
          





