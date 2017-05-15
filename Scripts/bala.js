#pragma strict
var velocidadeBala : float;

function Start () {
	
}

function Update () {
velocidadeBala = 30*Time.deltaTime;
transform.Translate(0,0, velocidadeBala);
}

function OnCollisionEnter(collision : Collision)
{
	Destroy(gameObject);
}