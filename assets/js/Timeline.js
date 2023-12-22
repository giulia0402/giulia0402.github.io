const timelineArray = [ 
	{ 
		year: "1995", 
		eventt: 
"JavaScript Introduced by Brendan Eich at Netscape", 
	}, 
	{ 
		year: "1997", 
		eventt: 
"ECMAScript created to Standardize JavaScript", 
	}, 
	{ 
		year: "1999", 
		eventt: 
"ECMAScript3: Introduction of RegEx, try-catch", 
	}, 
	{ 
		year: "2009", 
		eventt: 
"ECMAScript5: strict mode, Object method", 
	}, 
	{ 
		year: "2015", 
		eventt: 
"ES6: introduced classes, Arraow functons, let/const variables ", 
	}, 
	{ 
		year: "2016 Onwards", 
		eventt: 
"introducing features like async/await, spread/rest operators etc.", 
	}, 
]; 

function gfg() { 
	timelineArray.map((e, i) => { 
		let clss = "right"; 
		let dot = "dotRight"; 
		if (i % 2 == 0) { 
			clss = "left"; 
			dot = "dotLeft"; 
		} 
		const year = document.createElement("h3"); 
		year.innerText = e.year; 
		const eventt = document.createElement("p"); 
		eventt.innerText = e.eventt; 
		const item = document.createElement("div"); 
		item.appendChild(year); 
		item.appendChild(eventt); 
		item.classList.add("card"); 
		const contain = document.createElement("div"); 
		const li = document.createElement("li"); 
		contain.classList.add(dot); 
		contain.appendChild(item); 
		li.appendChild(contain); 
		li.classList.add(clss); 
		document.getElementById("menu").appendChild(li); 
	}); 
} 
gfg();
