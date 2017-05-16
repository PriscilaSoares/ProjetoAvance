using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class proxima : MonoBehaviour
{
    public string prox;


    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.Z))
        {
            SceneManager.LoadScene("level2");

        }

    }
}
