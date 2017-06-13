#pragma strict
var Alvo: Transform;
var inimigo: Transform;
var E1: Transform;
var Mira: Transform;
var Distancia : float;
var tDelay : float;
var bala: GameObject;
var vTiro: float;
var tTiro : float;
function Start () {
	//Velocidade de Tiro
	tTiro = 0.5;
}
function Update () {
//Calcular delay para atirar dps de mirar
tDelay = tDelay + Time.deltaTime;

	if(!Alvo){
		Alvo = GameObject.Find("personagemPrincipal").transform;
	}
	else{
		//Mede distacia do personagemPrincipal
		Distancia = Vector3.Distance(transform.position, Alvo.position);
		if(Distancia < 100)
		{
		if(tDelay>1)
		  {
			MiraAlvo(Alvo,inimigo, E1, Mira,1);
			vTiro += Time.deltaTime;
				if(vTiro > tTiro){
					Atirar(Mira, E1);
					vTiro = 0;
				} 
			}
		else
		MiraAlvo(Alvo,inimigo, E1, Mira,Time.deltaTime*3);
	}
	else
	{
		tDelay = 0;
		vTiro = 0;
	}

	}
}

function MiraAlvo(Onde: Transform, inimigo: Transform, Eixo1: Transform, Mira: Transform, delay:float){
	Mira.LookAt(Onde);
	inimigo.rotation.eulerAngles.y = Mathf.Lerp(inimigo.rotation.eulerAngles.y,Mira.rotation.eulerAngles.y,delay);
	//Eixo1.rotation.eulerAngles.x = Mira.rotation.eulerAngles.x;
}

function Atirar(Mira: Transform, Eixo1: Transform){
	Instantiate(bala, Mira.position, Eixo1.rotation);
}
function OnCollisionEnter(collision : Collision)
{
if(collision.gameObject.tag == "bala")
	{
	//respaw.contMaxInim = respaw.contMaxInim -1;
	//inimigoIA.pontuacao = inimigoIA.pontuacao + 5;
	Destroy(gameObject);
	
}
}
