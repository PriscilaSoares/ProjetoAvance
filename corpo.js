#pragma strict
var velocidadeFrente : float;
var velocidadeCima : float;
var velocidadeLado : float;
var velocidadeRotacao : float;
var vidaHeroi : int;
var textoVida : GUIText;

static var pontuacao : int;

static var posicaoHeroi : Vector3;

function Start () {
	vidaHeroi = 100;
	pontuacao = 0;
}

function Update () {
 textoVida.text = "Vida : " + vidaHeroi;
 //print(vidaHeroi);

velocidadeFrente = 8* Time.deltaTime;
velocidadeCima = 30*Time.deltaTime;
velocidadeLado = 8*Time.deltaTime;
velocidadeRotacao = 15*Time.deltaTime;

if(Input.GetKey("w"))
	{
	transform.Translate(0,0,velocidadeFrente);
	}

	if(Input.GetKey("s"))
	{
	transform.Translate(0,0,-velocidadeFrente);
	}

	if(Input.GetKey("a"))
	{
	transform.Translate(-velocidadeLado,0,0);
	}	
	if(Input.GetKey("d"))
	{
	transform.Translate(velocidadeLado,0,0);
	}
	if(Input.GetKey("j"))
	{
	transform.Rotate(0, -velocidadeRotacao, 0);
	}	
	if(Input.GetKey("l"))
	{
	transform.Rotate(0, velocidadeRotacao, 0);
	}
	posicaoHeroi = transform.position;

	if(vidaHeroi <= 0)
	{
		Application.LoadLevel("fimJogo");
	}
}
function OnCollisionEnter(collision : Collision)
{
if(collision.gameObject.tag == "Inimigo")
	{
	vidaHeroi = vidaHeroi - 10;
	
}
}
