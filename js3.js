//function formulario(){
    //let eName= document.getElementById("nombreapellido")
    //let name= eName.value;
    //console.log(name)
//
    //let eContra= document.getElementById("contraseniaa")
    //let contrasenia= eContra.value;
    //console.log(contrasenia)

//}
//document.getElementById("enviar").addEventListener("click",formulario)

var modificar = (listadonuevo)=>{
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    let eBtneditar = document.getElementById("BtnEditar");

   let nombree = enombre.value;
   let contraseniaaa = econtrasena.value;
   let correo = eemail.value;
   let ccheck = echeckbox.value;
   let interesss = eintereses.value;
   let euro = edolar.value;
   let indice = eBtneditar.value;

   listadonuevo[indice].nombree = nombree;
   listadonuevo[indice].contraseniaaa = contraseniaaa;
   listadonuevo[indice].correo = correo;
   listadonuevo[indice].ccheck = ccheck;
   listadonuevo[indice].interesss = interesss;
   listadonuevo[indice].euro = euro;
   
   localStorage.setItem("personas",JSON.stringify(listadonuevo));
   
   cargarTabla(listadonuevo)
}


var eliminar = (listadonuevo)=>{
    let eBtneliminar = document.getElementById("BtnEliminar");
    let indice = eBtneliminar.value;
    console.log(listadonuevo)
    lista = listadonuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return {...p,'id':index}})
    console.log(lista)
    localStorage.setItem("personas",JSON.stringify(lista));
    cargarTabla(lista)
}


var cargarTabla = (listadonuevo)=>{
    let eTabla = document.getElementById("tabla");
    let enombre = document.getElementById("nombreapellido");
    let econtrasena = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");
    
    render = "<table>"
    render+= "<tr><th> Nombre_Apellido </th><th> Contraseña </th><th> Email </th><th> Check </th><th> Intereses </th><th> Moneda </th></tr>"
    for (let i = 0; i <listadonuevo.length; i++) {
        const element = listadonuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombreapellido+"</td>"
        render+="<td>"+element.contraseniaaa+"</td>"
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
    render += "</table>";
    eTabla.innerHTML = render;
    for (let i = 0; i < listadonuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i);
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadonuevo[i]
        eBtn.addEventListener("click",()=>{
            enombre.value = element.nombreapellido;
            econtrasena.value = element.contraseniaa;
            eemail.value = element.email;
            echeckbox = element.check;
            eintereses = element.interes;
            edolar.value = element.moneda;

            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";

            let tablaboton = document.getElementById("tablaBtn");
            tablaboton.innerHTML = sEditar;

            let eBtneditarr = document.getElementById("btnEditar");
            eBtneditarr.addEventListener("click",()=>modificar(listadonuevo))
        })
        eBtn2.addEventListener("click",()=>{
            enombre.value = element.nombreapellido;
            econtrasena.value = element.contraseniaa;
            eemail.value = element.email;
            echeckbox = element.check;
            eintereses = element.interes;
            edolar = element.moneda;
            
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button";
            let tablaboton = document.getElementById("tablabtn");
            tablaboton.innerHTML = sEliminar;
            let eBtnEliminar = document.getElementById("btnEliminar");
            eBtnEliminar.addEventListener("click",()=>eliminar(listadonuevo))


        })
    }
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
    let ccheck = echeckbox.value;
    let interesss = eintereses.value;
    let euro = edolar.value;
   
    console.log(nombree)
    console.log(contraseniaaa)
    console.log(correo)
    console.log(ccheck)
    console.log(interesss)
    console.log(euro)
    
    let persona ={"nombreapellido":nombree,"contraseniaaa":contraseniaaa,"email":correo,"check":ccheck,"interes":interesss,"moneda":euro}
    let listadopersonas=localStorage.getItem("personas");
    let listadoantiguo=JSON.parse(listadopersonas);



    if(listadoantiguo==null){
        let persona ={"id":0,"nombre":nombreapellido,"contraseniaa":contraseniaa,"email":email,"check":ccheck,"interes":interess,"moneda":euro}
        listadonuevo =[persona]
    }else{
        //listadoantiguo.push(persona)
        listadonuevo =[...listadoantiguo,persona]
    }
    

    console.log(persona)
    console.log(listadoantiguo)
    console.log(listadonuevo)
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    
    cargarTabla(listadoNuevo)
    
}


var cargarDatos = ()=>{
    let listadoPersonas = localStorage.getItem("personas");
    let listadoantiguo = JSON.parse(listadoPersonas);
    cargarTabla(listadoantiguo)
}



document.getElementById("Enviar").addEventListener("click",registro);

addEventListener("load",cargarDatos)










//-------------------------------------------------------------------------

//var registrar = ()=>{
    let enombre = document.getElementById("nombreapellido");
    let econtraseña = document.getElementById("contraseniaa");

    let nombre = enombre.value;
    let contraseña = econtraseña.value;

    console.log(nombre);
    console.log(contraseña);

    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);

    if(listadoAntiguo==null){
        let persona = {"id": 0,"nombre":nombre,"contraseña":contraseña}
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        let persona = {"id": listadoAntiguo.length,"nombre":nombre,"contraseña":contraseña}
        listadoNuevo = [...listadoAntiguo,persona]
    }

    //console.log(persona)

    console.log(listadoAntiguo)
    console.log(listadoNuevo);
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));

    //eContenedorTabla.innerHTML = ""+listadoNuevo.length;
    //tabla

    cargarTabla(listadoNuevo)

    //
    
//}

//document.getElementById("Enviar").addEventListener("click",registro);

















