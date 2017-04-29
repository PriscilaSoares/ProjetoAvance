#pragma strict
var projetil : GameObject;
static var contMuni : int;
function Start () {
	//Renderer.material.color = Color.red;
}

function Update () {
	//print(contMuni);
	if(Input.GetKey("i"))
	{
		if (contMuni > 0 )
		{
		Instantiate(projetil,transform.position,transform.rotation);
		contMuni = contMuni - 1;
		}
	}
}
