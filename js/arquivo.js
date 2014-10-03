document.addEventListener("deviceready", onDeviceReady, false);

 function onDeviceReady() {

$("#btOk").click(function(){
 var nome = $("#txtNome").val();
 if(nome.length == 0) {

alert("preencha seu nome no campo apresentado na tela.");

}
 else
 {

alert("Boas Vindas "+nome+"!!");


}
});
}