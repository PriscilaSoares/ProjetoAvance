#pragma strict
var vidaHeroi : int;
static var pontuacao : int;

function Start () {
		vidaHeroi = 100;
		pontuacao = 0;

}

function Update () {
	print(vidaHeroi);
}
function OnCollisionEnter(collision : Collision)
{
if(collision.gameObject.tag == "inimigo")
	{
	vidaHeroi = vidaHeroi - 10;
	
}
}

