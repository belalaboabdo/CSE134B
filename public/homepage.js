document.addEventListener("DOMContentLoaded", function(event) { 
	// for (const key of Object.keys(games)) {
	// 	var next = function(gameTitle) {
	// 		return function() {
	// 			document.getElementById("jumbo").style.backgroundImage = "url("+games[key].img+")";
	// 		}
	// 	};
	// 	setTimeout(next(games[key]), 5000);	
	// }


for (const key of Object.keys(games)) {
	document.getElementsByClassName("thumbnail").src = games[key];
}
	for (var i = 0; i <images.length; i++) {
    var tick = function(i) {
        return function() {
            document.getElementById("jumbo").style.backgroundImage = "url("+images[i]+")";
        }
    };
    setTimeout(tick(i), 5000 * i);
	}
});

function upload() {
	console.log("HERE");
	var title = document.getElementById("uploadTitle");
	var image = document.getElementById("uploadGame").files[0];
	var new_game = document.createElement("div");
	new_game.className += "col-md-4 col-sm-6 col-xs-12";
	var A = document.createElement("a");
	A.href = "#";
	var pic = document.createElement("IMG");
	pic.setAttribute("src", image.name);
	pic.className += "thumbnail img-responsive";
	A.appendChild(pic)
	new_game.appendChild( A );
	// Add it to the document body
	document.getElementById("imageGrid").appendChild( new_game );
}



let images = ["/zelda_botw.jpg", "/pubg.jpg", "/stardew.jpg", "/meat.png", "/cuphead.jpeg","/thieves.jpg"];
let games = {
	"botw": {
		"title": "Legend of Zelda Breadth of the Wild",
		"img": "/zelda_botw.jpg"
	},
	"pubg":{
		"title": "PlayerUnknown's BattleGround",
		"img": "/pubg.jpg"
	},
	"stardew": {
		"title": "Stardew Valley",
		"img": "/stardew.jpg"
	},
	"meat": {
		"title": "Super Meatboy",
		"img": "/meat.png"
	},
	"cup": {
		"title": "Cuphead",
		"img": "/cuphead.jpeg"
	}
}

