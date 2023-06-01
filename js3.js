function formulario(){
    let eName= document.getElementById("nombreapellido")
    let name= eName.value;
    console.log(name)

    let eContra= document.getElementById("contraseniaa")
    let contrasenia= eContra.value;
    console.log(contrasenia)

}
document.getElementById("enviar").addEventListener("click",formulario)





var registro=()=>{
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
        listadoantiguo.push(persona)
        listadonuevo =[...listadoantiguo]
    }
    

    console.log(persona)
    console.log(listadoantiguo)
    console.log(listadonuevo)
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
}
    document.getElementById("enviar").addEventListener("click", registro)
