#pragma strict
var TextoScore : GUIText;
var posiX : float;
var posiY : float;

var altura : float;
var largura : float;

var perSkin : GUISkin;

function Start () {
altura = 50;
largura = 70;

	posiX = Screen.width/2 - largura/2 - 50;
	posiY = Screen.height/2 - altura/2 + 110;


}
function Update () {
	
}
function OnGUI()
	{
	GUI.skin = perSkin;
	TextoScore.text = "Score : "+ corpo.pontuacao;
	if(GUI.Button(Rect(posiX,posiY,largura,altura),"Recomeçar"))
	{
		Application.LoadLevel("terreno");
		}
		 if(GUI.Button(Rect(posiX + 100,posiY,largura,altura),"Sair"))
		{
			Application.Quit();
		 }
		}