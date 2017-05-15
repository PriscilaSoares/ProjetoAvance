#pragma strict
var projetil : GameObject;
static var contMuni : int;
function Start () {
	
}

function Update () {
	//print(contMuni);
	if(Input.GetKeyDown("i"))
	{
		if (contMuni > 0 )
		{
		Instantiate(projetil,transform.position,transform.rotation);
		contMuni = contMuni - 1;
		}
	}
}
