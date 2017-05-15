#pragma strict
//aula14
var arma1 : GameObject;
var contador : int;
static var nome : String;
var existeI : boolean;
function Start () {
	nome = "arma2";
}

function Update () {
	
}
function OnCollisionEnter(collision : Collision)
{
	contador = 0;
	existeI = false;

if(collision.gameObject.tag == "Jogador")
	{
	while(contador < Inventario.indice){
		if (nome == Inventario.nomeArmas [contador]){
		existeI = true;
		break;
		}
		contador = contador + 1;
	}
	//respaw.contMaxInim = respaw.contMaxInim -1;
	//corpo.pontuacao = corpo.pontuacao + 5;
	if(existeI == false)
	{
	Inventario.armasHeroi[Inventario.indice] = arma1;
	Inventario.nomeArmas [Inventario.indice] = nome;
	Inventario.indice = Inventario.indice+1;
	Destroy(gameObject);
	}
}
}