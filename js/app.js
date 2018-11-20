/*
 * Archivo principal de JS
 */
 for(var i=0;i<6;i++)
 {
 	document.getElementById(i).onmouseover = function(){
 		var lupa = document.createElement("div");
 		lupa.className = "lupa";
 		lupa.innerHTML = "<span class='typcn typcn-zoom-in-outline' style='font-size:50px;display:inline'></span>";
 		this.appendChild(lupa);
 	}
 	document.getElementById(i).onmouseout = function(){
 		this.lastChild.className="no-lupa";
 	}
 }