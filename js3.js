
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
        const element = listadonuevo[i];
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEditarUp = document.getElementById("btnEditar");
            console.log(eBtnEditarUp)
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))


            enombre.value = element.nombreapellido;
            econtrasena.value = element.contraseniaa;
            eemail.value = element.email;
            echeckbox = element.check;
            eintereses = element.intere;
            edolar.value = element.moneda;
        })




        var eBtnEliminar = document.getElementById("btnEliminar"+i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp)
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo)) 
       
       
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
    let ccheck = echeckbox.value;
    let interesss = eintereses.value;
    let euro = edolar.value;
   
    console.log(nombree)
    console.log(contraseniaaa)
    console.log(correo)
    console.log(ccheck)
    console.log(interesss)
    console.log(euro)
    
    let listadoAntiguoStr= localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if(listaAntiguo==null){
        let persona = {"id":0,"nombreapellido":nombree,"contraseniaa":contraseniaaa,"email":eemail,"check":echeckbox,"interes":eintereses,"moneda":edolar};
        var listadoNuevo = [persona]
    }else{
        let persona = {"id":listaAntiguo.length,"id":0,"nombreapellido":nombree,"contraseniaa":contraseniaaa,"email":eemail,"check":echeckbox,"interes":eintereses,"moneda":edolar};
        var listadoNuevo = [...listaAntiguo,persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
    
    cargarTabla(listadoNuevo)
    
    
    
    
}


var obtenerDatos = ()=>{
    let listadoAntiguoStr = localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}
document.getElementById("Enviar").addEventListener("click",registro)
addEventListener('load',obtenerDatos)



























