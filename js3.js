function formulario(){
    let eName= document.getElementById("nombreapellido")
    let name= eName.value;
    console.log(name)

    let eContra= document.getElementById("contraseniaa")
    let contrasenia= eContra.value;
    console.log(contrasenia)

}
//document.getElementById("enviar").addEventListener("click",formulario)





var registro=()=>{
    let eTabla = document.getElementById("tabla");
    let enombre = document.getElementById("nombreapellido");
    let econtraseña = document.getElementById("contraseniaa");
    let eemail = document.getElementById("email");
    let echeckbox = document.getElementById("check");
    let eintereses = document.getElementById("interes");
    let edolar = document.getElementById("moneda");

    let nombree = enombre.value;
    let contraseniaaa = econtraseña.value;
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
        listadonuevo =[persona]
    }else{
        //listadoantiguo.push(persona)
        listadonuevo =[...listadoantiguo,persona]
    }
    

    console.log(persona)
    console.log(listadoantiguo)
    console.log(listadonuevo)
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    //document.getElementById("enviar").addEventListener("click", registro)

    render ="<table>"
    render+= "<tr><th>nombreyApellido</th><th>contraseña</th><th>contraseña</th><th>Email</th><th>Pregunta</th><th>intereses</th><th>moneda</th><th>accion</th></tr>"
    for (let i =0; i < listadonuevo.length; i++) {
        const element= listadonuevo[i];
        //console.log(element)
        render+="<tr>"
        render+="<td>"+element.nombreapellido+"</td>"
        render+="<td>"+element.contrasenia+"</td>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.check+"</td>"
        render+="<td>"+element.interes+"</td>"
        render+="<td>"+element.moneda+"</td>"
        render+="<td>"
        render+="<button id='btneditar"+i+"'>editar</button>"
        render+="<button>eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render += "</table>";
    eTabla.innerHTML = render;
    for(let i = 0; i < listadonuevo.length; i++){
    var eEnviar = document.getElementById("btneditar"+i);
    let element = listadonuevo[i]
    eEnviar.addEventListener("click",()=>{alert("Holaaaa"+element.nombreapellido+" "+element.contrasenia+" "+element.email+" "+element.check+" "+element.interes+" "+element.moneda)})
    }

}
    document.getElementById("Enviar").addEventListener("click",registro);
