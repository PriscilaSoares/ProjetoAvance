using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class vidapersonagem : MonoBehaviour {

	public float barraCheia = 100f;
	public float barraAtual;
	public GameObject bar;

	// Use this for initialization
	void Start () {

		barraCheia = barraAtual;
	}

	void OnCollisionEnter(Collision Collision){
	
		if(Collision.gameObject.tag == "inimigo1")
		{
			barraAtual = barraCheia - 10;
		}
	}





	void Update () {




	}

}