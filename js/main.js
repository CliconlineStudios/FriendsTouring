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
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();
        offcards();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("viajes").style.display = "none";
        contador=1;
        backarriba();
        ids1();
        offcards();

    }
    else{
            history.back();
        
    }

    } 

function offcards(){
    document.getElementById("quito").style.display = "block";
    document.getElementById("imindo").src=  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbdGXOv0PxJFbBK_2KS6fIw236Ixaf9WBgRe2FRPkeblMjrGI43Q-glPM3GXiU2FMkDX6uHgCN7HHXKeiXeTvuBu777-2UEclWpWsCwTHQfbLIk2r1-i9saj-9Ry5GwV2RgE28BW23QR92htYbCb4MamWfshYpcyHr0K5QhzR7FNqnoTc71P3RlNwQ/s320/minddo.png`;
    document.getElementById("imggalapagos").src= `https://feig.fias.org.ec/wp-content/uploads/sites/10/2021/11/Fondo-para-Control-de-Especies-Invasoras-de-Galapagos-FEIG-1.jpg`;
    document.getElementById("imgamazonas").src= `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/3d/65/07/gaia-amazon-eco-lodge.jpg?w=1200&h=-1&s=1`;
    document.getElementById("galapagos2").style.display = "none";
};



function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
    offcards();

}

function servicios() {
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
    offcards();

};

function destinos() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations`;
    conta=0;
    contador=2;
    ids2();
    backarriba();
    offcards();
    
}

function couples() {
    document.getElementById("viajes").style.display = "block";
    document.getElementById("galapagos").style.display = "block";
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations in Couple`;
    conta=0;
    contador=2;
    ids2();
    backarriba();
    
}



function Family() {
    document.getElementById("viajes").style.display = "block";
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("galapagos").style.display = "none";
    document.getElementById("galapagos2").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations in Family`;
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
}

function Water() {
    document.getElementById("viajes").style.display = "block";
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("quito").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations in Water`;
    document.getElementById("imgamazonas").src= `https://nucleovisual.com/wp-content/uploads/2020/04/Todo-sobre-el-Amazonas-01.jpg`;
    document.getElementById("imggalapagos").src= `https://www.voyagesdereve.ch/upload/images/xBUCEO_GALAPAGOS_001.jpg.pagespeed.ic.6N4F27TS8e.jpg`;
    document.getElementById("imindo").src= `https://www.laislamindo.com/img/portfolio/canyoning.jpg`;
    document.getElementById("galapagos").style.display = "block";
    conta=0;
    contador=2;
    ids2();
    backarriba();    
        
}


function aventura() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations of Adventure`;
    document.getElementById("galapagos2").style.display = "block";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}

function sharetj() {

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
        conta=0;
        contador=0;
        backarriba();
        history.back();
        offcards();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("viajes").style.display = "none";
        contador=1;
        backarriba();
        ids1();
        offcards();

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
            let url = `https://drive.google.com/u/0/uc?id=1mQGrB6AbIbD_KEyd5GMtFSZHXyzO0lCz&export=download`;
            window.open(url); 
           };
          
          function ftuser() {
              Swal.fire({
                  title: 'Travel Agency',
                  text: 'add the contact to your phone',
                  imageUrl: 'img/logofriends2.png',
                  imageWidth: 200,
                  confirmButtonText: 'Add',
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
          





