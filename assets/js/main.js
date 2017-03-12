console.log("Hello World from main.js!");

var allContainers = document.querySelectorAll(".work-container");

// function populateImages() {
// 	for (var i = allContainers.length - 1; i >= 0; i--) {
// 			allContainers[i].style.display = "inherit";
// 		}	
// }

function populatePage() {
	TweenMax.staggerFromTo(".work-container", 1, 
	{
	display: "none",
	opacity: 0,
	},
	{
		display: "inherit",
		opacity: 1,
	}, 0.5
	);
}

populatePage();


// TweenMax.command(".class-name", 
// 			#, 	
// 			{css: "style2", css: "style1"}
// );

// # is the duration in seconds