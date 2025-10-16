function login(){
  //  var nome = document.getElementById("nome").value
   // var senha = document.getElementById("senha").value
    var nome = $("#nome").val()
    var senha = $("#senha").val()

  if(nome && senha && nome === "cueca" && senha === "jojo"){
    const user ={
        name:nome,
        dataEntrada: new Date(),
        id: Math.floor(Math.random() * 100000)

    }
    localStorage.setItem("usuario",JSON.stringify(user))
    window.location.href ="../loja"
  }else{
    document.getElementById("error-modal").style.display ="flex"
    document.getElementById("nome").style.borderBottom = "2xp solid  rgba(255, 0, 0, 1)"
    document.getElementById("senha").style.borderBottom = "2xp solid  rgba(255, 0, 0, 1)"
  }

}  




function showPassword(){
    var inputsenha  = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    console.log(inputsenha,img_eye)


    if(inputsenha.getAttribute("type") === "password"){
        inputsenha.setAttribute("type","text")
        img_eye.setAttribute("src","/login/images/invisible.png")
    }else{
    inputsenha.setAttribute("type","password")
        img_eye.setAttribute("src","/login/images/show.png")
    }
}



function fecharError(){
            document.getElementById("error-modal").style.display = "none"
        document.getElementById("nome").style.borderBottom = "2px solid  rgba(0, 0, 0, 1)"
        document.getElementById("senha").style.borderBottom = "2px solid  rgba(0, 0, 0, 1)"
}
