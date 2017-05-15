#pragma strict
static var armasHeroi : GameObject[];
static var nomeArmas: String[];
static var contMuniArma: int[];
var posicaoArma: Transform;
var armaAtual : GameObject;
var municao: GUIText;
var qualArma: int;
static var indice : int;
function Start () {

armasHeroi      = new GameObject[3];
nomeArmas       = new String[3];
arma.contMuni = 10;
arma2.contMuni = 100;

indice=0;

}

function Update () {

if(Input.GetKeyDown("1"))
{
Destroy(armaAtual);
armaAtual = Instantiate(armasHeroi[0],transform.position+(posicaoArma.position - transform.position),transform.rotation);
armaAtual.transform.parent = transform;
qualArma =1;
}
if(Input.GetKeyDown("2"))
{
Destroy(armaAtual);
armaAtual = Instantiate(armasHeroi[1],transform.position+(posicaoArma.position - transform.position),transform.rotation);
armaAtual.transform.parent = transform;
qualArma=2;
}

/*if (qualArma==1)
{
municao.text = "Quantidade de MuniÃ§Ã£o 1: "+contMunicaoArma[0];
}
if (qualArma==2)
{
municao.text = "Quantidade de MuniÃ§Ã£o 2: "+contMunicaoArma[1];
}*/
}