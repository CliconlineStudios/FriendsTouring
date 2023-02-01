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
        document.getElementById("codeqr").style.display = "none";
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();
     

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("codeqr").style.display = "none";
        contador=1;
        backarriba();
        ids1();
     

    }
    else{
            history.back();
        
    }

    } 


function home() {
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
};


function codigoqr() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("codeqr").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("viajes").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba();

}

function destinos() {
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("codeqr").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("destinos").textContent=  `Destinations`;
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba();
    
}

function couples() {
    document.getElementById("parejas").style.display = "block";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    contador=2;
    ids2();
    backarriba();
    
}



function family() {
    document.getElementById("family").style.display = "block";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
}



function aventura() {
    document.getElementById("aventura").style.display = "block";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}

function screnn4() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("viajes").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}


function screen5() {
    document.getElementById("viajes").style.display = "none";
    document.getElementById("galapagos").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "block";
    conta=0;
    contador=2;
    ids2();
    backarriba();
    
}



//   boton atras

function back() {

  
    if (contador==1) {
        document.getElementById("codeqr").style.display = "none";
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();
     

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("codeqr").style.display = "none";
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
    informacion = document.getElementById("codeqr"),
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
        var pass = '070723';
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
          

// admin

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    let clave = document.querySelector("#clave").value;
    let resp = document.querySelector("#respuesta");
  

    if (clave === pass ) {
    resp.classList.remove("fail");
    resp.classList.remove("send");
    resp.innerHTML = `Clave, Aprovada`;
    screen5();
    }else if (clave === ""){
     resp.classList.add("fail");
    resp.classList.remove("send");
    resp.innerHTML = `Tu Clave, ${clave} es Incorrecta `;
    return false;   
    }else {
        resp.classList.add("fail");
        resp.classList.remove("send");
        resp.innerHTML = `Tu Clave, ${clave} es Incorrecta `;
        return false;  
    }

  });

