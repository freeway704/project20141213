#pragma strict

import UnityEngine.UI;

var timeText : Text;
var timeLeft : float = 30f;
var timeOut : boolean = false;

function Start () {
	timeText = GameObject.Find("timer").GetComponent(Text);
}

function Update () {
	if(timeOut == false && timeLeft < 0) {
		GameObject.Find("spawner").GetComponent(spawner).stop = true;
		timeOut = true;
		
		var score : int = parseInt(GameObject.Find("score").GetComponent(Text).text);
		PlayerPrefs.SetInt("score",score);
		Application.LoadLevel(2);
	}
	else if(timeLeft>0) {
		timeLeft -= Time.deltaTime;
		timeText.text = Mathf.RoundToInt(timeLeft).ToString();
	}
}