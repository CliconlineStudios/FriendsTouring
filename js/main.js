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
    document.getElementById("imggalapagos2").src= `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBdbn9jKn77wQlLUdk1VtoYAMumuc7Ko-_S8Fh57825UCGJBz07uR3UsJF7bWnXHV-YS9RH_GnkekyEKK0GJwSCytYOg4pMMzuaZk46poWpucx-drrA32yTc7FdrN6381Mo0kqEhYjf4fjWWWvPjDOd98Ugduc19bYbwowsUKMnsCF06KPxcnxxWhI/s320/mujeryfoca.jpg`;
    document.getElementById("imggalapagos").src= `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9UfTf_32V32XJu1tPU7wsvBFzXu47zivHkBrERsAu9sNtwaZ6VJ0EG0CEW22M4eB2lWMmK3DvLWdorv-ZYstNLUGKEFOBr4cSKGOLprKL7YXQdXU9j1UtFvukhpUX3pimOIArH9RLWdAntQ8Dj7QlvzTWt09RC9Y0s6FJ9MEtm82zdLy0zMhJ5X8v/s320/galapagosfoca.jpg`;
    document.getElementById("imgamazonas").src= `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHRpX0l5Oq0bGJIoyG3dlIKvUpU_p8-FbZD2PGIx9C---vIvQFuYw4CmXLUPu0oiOMavhhX1RwJTHflTOsc169fMoFRPyHdh7cHezVjLyHbGYUbssVNSu2t2Wfm6NIKLna1_DBpitKVJWNQLIyM6ti2LWz4goRzJ-4YI2K8m_Z5ji1k7YFXyPk3tn_/s320/amazonaslog.jpg`;
    document.getElementById("galapagos2").style.display = "none";
    document.getElementById("cotopaxi").style.display = "none";
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
    document.getElementById("viajes").style.display = "none";
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
    document.getElementById("imgamazonas").src= `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaZVinLBxxK9_e9IWrZp_EKxJ9g12aBToUlQiy3TtQx4Tybnk1ly14UrDRw-FIjOunkorFWX33HbNpMoLdWZ4cwbZoYFQUHXfYIdasYoaCWuUG5FqqJ6iMw451c2DGxJ_RUpjgB5QIqzGtO8mJahc_KKxWAIL9RE0LF_MtO53a3Bt3LrY9-6dcBxIO/s320/amazonas225.jpg`;
    document.getElementById("imggalapagos").src= `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvZrW_vPGQYN_WqD2pCUKKjZQ5QtWh3p75FZ7U0A0JLWvO4OxKJMdr1O9y8slhpuwpgMbl2yAZTDPo9PPSFZ1KU9OWxAU3eAX-F_4MCV799vLz-NNQQE2RGSIYpKG8z4ZcWhZrDsBBw0e3BKRmhvlEAzyAFDCsHq1uozKVdHW2_wsxJWK_AZWHtXVY/s320/galapagosagua.jpg`;
    document.getElementById("imindo").src= `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLmHyA3ZUFAZq4enYtWtB_YRS0j85elGJq9zxm_5bTPZTNPf3S4yyX4YUDnb-dRDu4XTjTRvSQw5MX9DkD0YNzHl6DL0yVGvGHUO_YCOo5aNVGlow-xpfFN9yIZrB0P_HAD2ZF1lsGTBoCvQDaU2s25c5X7G-JMvv4Gtb1kjK5tTClzoJZ2nMVLwJ-/s320/mindocascada.jpg`;
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
    document.getElementById("quito").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations of Adventure`;
    document.getElementById("galapagos2").style.display = "block";
    document.getElementById("cotopaxi").style.display = "block";
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
          





