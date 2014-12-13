#pragma strict

var prefab : GameObject;
var prefab2 : GameObject;
var prefab3 : GameObject;
var amount : int = 10;
var stop : boolean = false;

function Start () {
	
	var x = [-17, -10, -3, 4, 11, 18];
	
	for(var i=0;i<amount;i++) {
		
		if(stop == false) {
			var r = Quaternion.identity;
			r.eulerAngles = new Vector3(0, 0, Random.Range(-30, 30));
			
			var obj : GameObject = Instantiate(prefab, new Vector2(x[Random.Range(0, x.Length)], 16), r);
			obj.name = "enemy";
			
			yield WaitForSeconds(.5);
			
			var obj2 : GameObject = Instantiate(prefab2, new Vector2(x[Random.Range(0, x.Length)], 16), r);
			obj2.name = "enemy2";
			
			yield WaitForSeconds(.5);
			
			var obj3 : GameObject = Instantiate(prefab3, new Vector2(x[Random.Range(0, x.Length)], 16), r);
			obj3.name = "enemy3";
			
			yield WaitForSeconds(.5);
		}
	}
}