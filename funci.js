var click1=function()
{
	n=document.getElementById('hola1');
	n.className="hola11";
	boton=document.getElementById('boton1');
	boton.style.display="none";
	setTimeout(pasa,16000);
}
var pasa=function()
{
	window.location.href='pagina1.html';
	setTimeout(audiio,100);
}


var audiio=function()
{
	audion=document.getElementById('player');
	audion.play();
}