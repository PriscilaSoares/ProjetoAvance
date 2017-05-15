#pragma strict
var distHeroi : Vector3;
var velocidadeTranslate : float;
var distanciaMinima : float;
var normX : float;
var normZ : float;
var velocidadeRotacao : float;
var tempo : float;

function Start () {
	distanciaMinima = 10;
	tempo = 0;	
	}

function Update () {
	velocidadeTranslate = 6 * Time.deltaTime;
	distHeroi = corpo.posicaoHeroi - transform.position;
	normX = distHeroi.x;
	normZ = distHeroi.z;

	if (normX < 0 ) normX = -normX;
	if (normZ < 0 ) normZ = -normZ;
	if((normX<distanciaMinima)&& (normZ<distanciaMinima))
	{
	//Atacar
	//Inimigo ira para frente atras do heroi
	transform.rotation.y = 0;
	if (distHeroi.x > 0)transform.Translate(velocidadeTranslate,0,0);
	else transform.Translate(-velocidadeTranslate,0,0);

	if (distHeroi.z > 0)transform.Translate(0,0,velocidadeTranslate);
	else transform.Translate(0,0,-velocidadeTranslate);
	}
	else{
	//Movimento Aleatório
	transform.Translate(0,0,velocidadeTranslate);
	tempo = tempo + 1*Time.deltaTime;

	if(tempo > 3)
			{
			velocidadeRotacao = 360 * Random.value;
			transform.Rotate(0,velocidadeRotacao,0);
			tempo = 0;
			}
		}
}
function OnCollisionEnter(collision : Collision)
{
if(collision.gameObject.tag == "Bala")
	{
	//respaw.contMaxInim = respaw.contMaxInim -1;
	corpo.pontuacao = corpo.pontuacao + 5;
	Destroy(gameObject);
	
}
}