#pragma strict
var bala : GameObject;
var escape: Transform;

function Start () {
	
}

function Update () {

if(Input.GetKeyDown("i")){
Instantiate(bala,escape.position,transform.rotation);
}
	/*if(Input.GetKeyDown("i"))
	{
		if (contMuni > 0 )
		{ */
		//Instantiate(bala,escape.position,transform.rotation);
		//contMuni = contMuni - 1;
		//}
	//}
}
