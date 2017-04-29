#pragma strict

function Start () {
	
}

function Update () {
	
}
function OnCollisionEnter(collision : Collision)
{
if(collision.gameObject.tag == "Jogador")
	{
	arma.contMuni = arma.contMuni + 10;
	Destroy(gameObject);
	
}

}