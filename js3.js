var cargarTabla = (listadonuevo)=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eTabla = document.getElementById("tabla");
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    
    render = "<table>"
    render+= "<tr><th> Nombre_Apellido </th><th> Contraseña </th><th> Email </th><th> Check </th><th> Intereses </th><th> Moneda </th></tr>"
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
            
        })
    }
}



var modificar = (listadonuevo)=>{
    
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    let eBtneditar = document.getElementById("btnEditar");

    let nombreapellido = enombre.value;
    let contraseniaa = econtrasena.value;
    let email = eemail.value;
    let check = echeckbox.value;
    let interes = eintereses.value;
    let moneda = edolar.value;
    let indice = eBtneditar.value;

    listadonuevo[indice].nombreapellido = nombreapellido;
    listadonuevo[indice].contraseniaa = contraseniaa;
    listadonuevo[indice].email = email;
    listadonuevo[indice].check = check;
    listadonuevo[indice].interes = interes;
    listadonuevo[indice].moneda = moneda;
    
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


var registro=()=>{
    
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");

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

    console.log(nombree)
    console.log(contraseniaaa)
    console.log(correo)
    console.log(opcion)
    console.log(interesss)
    console.log(euro)
    
    let listadoAntiguoStr= localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);

    console.log(listaAntiguo)

    if(listaAntiguo==null){
        let persona = {"id":0,"nombreapellido":nombree,"contraseniaa":contraseniaaa,"email":correo,"check":opcion,"interes":interesss,"moneda":euro};
        var listadonuevo = [persona]
    }else{
        let persona = {"id":listaAntiguo.length,"nombreapellido":nombree,"contraseniaa":contraseniaaa,"email":correo,"check":opcion,"interes":interesss,"moneda":euro};
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





















