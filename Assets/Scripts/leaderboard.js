#pragma strict

var scores: int [] = [0, 0, 0, 0, 0, 0];

function Start () {
	for(var i=0;i<5;i++)
	{
		scores[i] = PlayerPrefs.GetInt("top"+(i+1));
	}
	scores[5] = PlayerPrefs.GetInt("score");
	
	var temp : int;
	for(var j=0;j<scores.Length;j++){
		for(var k=0;k<scores.Length;k++){
			if(scores[j]>scores[k]){
				temp = scores[j];
				scores[j]=scores[k];
				scores[k]=temp;
			}
		}
	}
	
	PlayerPrefs.SetInt("top1", scores[0]);
	PlayerPrefs.SetInt("top2", scores[1]);
	PlayerPrefs.SetInt("top3", scores[2]);

	
	transform.Find("no1").Find("Text").GetComponent(Text).text = scores[0].ToString();
	transform.Find("no2").Find("Text").GetComponent(Text).text = scores[1].ToString();
	transform.Find("no3").Find("Text").GetComponent(Text).text = scores[2].ToString();

}

/*
function Update () {

}*/