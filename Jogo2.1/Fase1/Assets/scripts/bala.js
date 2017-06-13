#pragma strict
var rB : Rigidbody;

function Start () {
	rB = transform.GetComponent(Rigidbody);
}

function Update () {
rB.velocity = transform.forward*100;
/*velocidadeBala = 10*Time.deltaTime;
transform.Translate(0,0, velocidadeBala);*/
Destroy(gameObject, 100);

if(Physics.Raycast(transform.position,transform.forward,1)){
//print(Destroi(gameObject,"Foi o Ray"));
}
}

function OnCollisionEnter(collision : Collision)
{
	//print(Destroi(gameObject, "Foi o col"));
}
function Destroi(quem: GameObject, frase: String): String
{
Destroy(quem);
return frase;
}