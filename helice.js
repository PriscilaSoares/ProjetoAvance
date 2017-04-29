#pragma strict
var velocidadeRotacao : float;
function Start () {
	
}

function Update () {
velocidadeRotacao = 360 * 8 * Time.deltaTime;
	transform.Rotate(0,velocidadeRotacao,0);
}
