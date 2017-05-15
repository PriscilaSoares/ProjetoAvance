#pragma strict
var posiX : float;
var posiY : float;
var altura : float;
var largura : float;

var perSkin : GUISkin;

var controlePause : boolean;
function Start () {
altura = 50;
largura = 90;

	posiX = Screen.width/2 - largura/2;
	posiY = Screen.height/2 - altura/2 + 90;
	controlePause = true;

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape))
	{

	if (controlePause)
	{
	Time.timeScale= 0;
	controlePause = false;
	}
	else
	{
		Time.timeScale = 1;
		controlePause = true;
		}
		}	
}
	function OnGUI()
	{
	GUI.skin = perSkin;
	if (!controlePause)
	{
		GUI.Box(Rect(0,0,Screen.width,Screen.height)," ");
		GUI.Label(Rect(posiX,posiY -100,largura,altura),"Score : "+ corpo.pontuacao);
		if(GUI.Button(Rect(posiX,posiY,largura,altura),"Recomeçar"))
		{
		 Time.timeScale = 1;
		 controlePause = true;
		 }
		 if(GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Sair"))
		{
			Application.Quit();
		 }

	 }
	 }
