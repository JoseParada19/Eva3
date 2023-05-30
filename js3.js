function formulario(){
    let eName= document.getElementById("nombreapellido")
    let name= eName.value;
    console.log(name)

    let eContra= document.getElementById("contraseniaa")
    let contrasenia= eContra.value;
    console.log(contrasenia)

    let eHombre= document.getElementById("hombre")
    let hombre= eHombre.Checked;
    console.log(hombre)

    let eMujer= document.getElementById("mujer")
    let mujer= eMujer.Checked;
    console.log(mujer)

    let eOtro= document.getElementById("otro")
    let otro= eOtro.Checked;
    console.log(otro)
}
document.getElementById("enviar").addEventListener("click",formulario)





var registro=()=>{
    let enombre = document.getElementById("nombreapellido");
    let econtraseña = document.getElementById("contraseniaa");
    let nombree = enombre.value;
    let contraseniaaa = econtraseña.value;

    console.log(nombree)
    console.log(contraseniaaa)
    
    let persona ={"nombreapellido":nombree,"contraseniaaa":contraseniaaa}
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
