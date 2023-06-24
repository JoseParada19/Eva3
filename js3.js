/*cargarTabla toma como parametro a listadonuevo, con let declaramos las variables,
con "document.getElementbyId", identificamos de html el id que se le dio, en mi caso tabla,nombreapellido,contraseniaa etc.. */

var cargarTabla = (listadonuevo)=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eTabla = document.getElementById("tabla");
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    let efile = document.getElementById("file");
    let erango = document.getElementById("rango")

    /*aca tengo entendido que genera una tabla de "listadonuevo", y la variable en este caso render se concatena con las etiquetas
     y valores, generando una tabla con los nombres y valores que incluya */

    render = "<table>"
    render+= "<tr><th> Nombre_Apellido </th><th> Contraseña </th><th> Email </th><th> Check </th><th> Intereses </th><th> Zona </th><th> Documento </th><th> Rango </th></tr>"
    for (let i = 0; i < listadonuevo.length; i++) {
        const element = listadonuevo[i];
        console.log(element)
        render+="<tr>"
        render+="<td>"+element.nombreapellido+"</td>"
        render+="<td>"+element.contraseniaa+"</td>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.check+"</td>"
        render+="<td>"+element.interes+"</td>"
        render+="<td>"+element.moneda+"</td>"
        render+="<td>"+element.file+"</td>"
        render+="<td>"+element.rango+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"


    


    }
    render+="</table>";
    eTabla.innerHTML = render;
    for (let i = 0; i < listadonuevo.length; i++) {
        const element = listadonuevo[i];
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>"
            eSBtnAccion.innerHTML=sBtn

            

            let eBtnEditarUp = document.getElementById("btnEditar");
            console.log(eBtnEditarUp)
            eBtnEditarUp.addEventListener('click',()=>modificar(listadonuevo))


            enombre.value = element.nombreapellido;
            econtrasena.value = element.contraseniaa;
            eemail.value = element.email;
            echeckbox = element.check;
            eintereses = element.interes;
            edolar.value = element.moneda;
            efile.value = element.file;
            erango.value = element.rango;
        })


            

        var eBtnEliminar = document.getElementById("btnEliminar"+i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            

            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp)
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadonuevo)) 
       
       
            enombre.value = element.nombreapellido;
            econtrasena.value = element.contraseniaa;
            eemail.value = element.email;
            echeckbox = element.check;
            eintereses = element.interes;
            edolar = element.moneda;
            efile = element.file;
            erango = element.rango;
            
        })
    }
}


/* obtiene los elemenstos del formulario mediuante el id de ellos, luego obtiene el valor de ellos mediante el
 ".value", luego modifica el objeto de la lista desde la modificacion del indice  */

var modificar = (listadonuevo)=>{
    
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    let eBtneditar = document.getElementById("btnEditar");
    let efile = document.getElementById("file")
    let erango = document.getElementById("rango");

    let nombreapellido = enombre.value;
    let contraseniaa = econtrasena.value;
    let email = eemail.value;
    let check = echeckbox.value;
    let interes = eintereses.value;
    let moneda = edolar.value;
    let file = efile.value;
    let rango = erango.value;
    let indice = eBtneditar.value;


    listadonuevo[indice].nombreapellido = nombreapellido;
    listadonuevo[indice].contraseniaa = contraseniaa;
    listadonuevo[indice].email = email;
    listadonuevo[indice].check = check;
    listadonuevo[indice].interes = interes;
    listadonuevo[indice].moneda = moneda;
    listadonuevo[indice].file = file;
    listadonuevo[indice].rango = rango;
    
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    
    cargarTabla(listadonuevo);
}




var eliminar = (listadonuevo)=>{
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    console.log(listadonuevo)
    lista = listadonuevo.filter((p)=>p.id!=indice)
    listaFinal = lista.map((p,index)=>{return {...p,'id':index}})
    console.log(lista)

    localStorage.setItem("personas",JSON.stringify(listaFinal));
    cargarTabla(lista)
}


/* mediante el "getElementById" identificamos los id de los elementos, con el ".value" podemos sacarle el valor, luego se ocupa el condicional 
if para determinar el valor de True o False en mi caso de "ccheck", luego se guarda y almacena en el google mediuate "localStorage.getitem", 
luego se usa "Json.parse" para traspasar el valor a cadena Json, por ultimo utilizamos otravez el condicional if para comprobar "listadoAntiguo" si es "null",
si pasa eso se hace un objeto persona con los valores anteriores, luego crea una variable "listadonuevo" que es un array el que tiene "persona", luego esto se puede apreciar en el navegador */

var registro=()=>{
    
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    let efile = document.getElementById("file")
    let erango = document.getElementById("rango")

    let nombree = enombre.value;
    let contraseniaaa = econtrasena.value;
    let correo = eemail.value;
    let ccheck = echeckbox.checked;

    if(ccheck==true){
        opcion=("El usuario si desea seguir comprando aca");
    }else if(ccheck==false){
        opcion=("El usuario no desea seguir comprando aca");
    }

    let interesss = eintereses.value;
    let euro = edolar.value;
    let file = efile.value;
    let rango = erango.value;
 
    console.log(nombree)
    console.log(contraseniaaa)
    console.log(correo)
    console.log(opcion)
    console.log(interesss)
    console.log(euro)
    console.log(file)
    console.log(rango)
    
    let listadoAntiguoStr= localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);

    console.log(listaAntiguo)

    if(listaAntiguo==null){
        let persona = {"id":0,"nombreapellido":nombree,"contraseniaa":contraseniaaa,"email":correo,"check":opcion,"interes":interesss,"moneda":euro,"file":file,"rango":rango};
        var listadonuevo = [persona]
    }else{
        let persona = {"id":listaAntiguo.length,"nombreapellido":nombree,"contraseniaa":contraseniaaa,"email":correo,"check":opcion,"interes":interesss,"moneda":euro,"file":file,"rango":rango};
        var listadonuevo = [...listaAntiguo,persona]
    }

    console.log(listadonuevo)
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    
    cargarTabla(listadonuevo)
}



var obtenerDatos = ()=>{
    let listadoAntiguoStr = localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}
document.getElementById("Enviar").addEventListener("click",registro)
addEventListener('load',obtenerDatos)






/* tenemos la funcion "Color", en ella el identificador "BtnColor", el cual esta en html, luego entra al condicional el cual es if y si el 
valor == a "0", este ejecutara el color con la variable "Rojo", luego incluye la variable "Azul" utilizando "classList.add", luego se elimina la 
clase "Rojo" con "class.remove", esto hace que cada vez que se aprete el boton pase de la variable Rojo a la Azul y con sus colores correspondientes */


//------------Cambio de color del fondo------------------------
var Color =()=> {
    let btn = document.getElementById("btnColor");
    if(btn.value == "0"){
        let elements = document.getElementsByClassName("Rojo");
        elements[0].classList.add("Azul");
        elements[0].classList.remove("Rojo");
        btn.value = "1";
    }
    else if(btn.value =="1"){
        let elements = document.getElementsByClassName("Azul");
        elements[0].classList.add("Rojo");
        elements[0].classList.remove("Azul");
        btn.value = "0";
    }
}



/* Esto cambia el tamañao de la letra mediante las variables "chico","mediano","largo", cada vez que se apreta el boton, empieza de chico a mediano y por ultimo  a largo. */


//-----------Cambio de Tamaño--------------------------------------
var letra = ()=>{
    let btn = document.getElementById("btnLetra");
    if (btn.value == "0"){
        let elements = document.getElementsByClassName("chico");
        const largo = elements.length;
        for(let i = 0; i < largo; i++){
            const element=elements[0];
            element.classList.add("mediano")
            element.classList.remove("chico")
        }
        btn.value = "1"
    }
    else if (btn.value == "1"){
        let elements = document.getElementsByClassName("mediano");
        const largo = elements.length;
        for (let i = 0; i < largo; i++){
            let element=elements[0];
            element.classList.replace("mediano","largoo")
        }
        btn.value = "2"
    }
    else if(btn.value=="2"){
        const elements = document.getElementsByClassName("largoo");
        const largo = elements.length;
        for(let i =0; i <largo; i++){
            const element = elements[0];
            element.classList.add("chico")
            element.classList.remove("largoo")
        }
        btn.value="0"
    }
}

document.getElementById("btnColor").addEventListener("click",Color);
document.getElementById("btnLetra").addEventListener("click",letra);





















