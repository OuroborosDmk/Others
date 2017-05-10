window.onload=function(){
	document.getElementById("nav1").onmouseover=function(){
			var newdiv=document.createElement("div");
			newdiv.style.backgroundColor="black";
			newdiv.style.width="100%";
			newdiv.style.height="160px";
			newdiv.id="newdivid";
			var body_one=document.getElementById("body_one");
			document.body.insertBefore(newdiv,body_one);
			var picbox=document.getElementById("picbox");
			picbox.style.top="340px";
			var newli=document.getElementById("nav1");
			newli.className+=(newli.className.length>0?" ":"")+"get";
		}
		document.getElementById("nav1").onmouseout=function(){
			var newdivid=document.getElementById("newdivid");
			newdivid.style.backgroundColor="black";
			var remove=document.body.removeChild(newdivid);
			var picbox=document.getElementById("picbox");
			picbox.style.top="180px";
			var newli=document.getElementById("nav1")
			newli.className=newli.className.replace("get","");
			
		}
		document.getElementById("nav2").onmouseover=function(){
			var newdiv=document.createElement("div");
			newdiv.style.backgroundColor="black";
			newdiv.style.width="100%";
			newdiv.style.height="160px";
			newdiv.id="newdivid";
			var body_one=document.getElementById("body_one");
			document.body.insertBefore(newdiv,body_one);
			var picbox=document.getElementById("picbox");
			picbox.style.top="340px";
			var newli=document.getElementById("nav2");
			newli.className+=(newli.className.length>0?" ":"")+"get";
		}
		document.getElementById("nav2").onmouseout=function(){
			var newdivid=document.getElementById("newdivid");
			newdivid.style.backgroundColor="black";
			var remove=document.body.removeChild(newdivid);
			var picbox=document.getElementById("picbox");
			picbox.style.top="180px";
			var newli=document.getElementById("nav2");
			newli.className=newli.className.replace("get","");
		}
		document.getElementById("change_button").onclick=function(){
			var newdiv=document.createElement("div");
			newdiv.style.width="100%";
			newdiv.style.height="350px";
			newdiv.id="newdivid";
			var body_one=document.getElementById("body_change");
			document.body.insertBefore(newdiv,body_one);
		}
		document.getElementById("picbox_button1").onmouseout=function(){
			var photos=document.getElementById("photos");
			photos.style.marginLeft="0px";
		}
		document.getElementById("picbox_button2").onmouseout=function(){
			var photos=document.getElementById("photos");
			photos.style.marginLeft="-850px";
		}
		document.getElementById("picbox_button3").onmouseout=function(){
			var photos=document.getElementById("photos");
			photos.style.marginLeft="-1700px";
		}
	}