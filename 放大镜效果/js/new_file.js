		window.onload=function(){
	
			var box=document.getElementById("box");
			var mask=document.getElementById("mask");
			var l_box=document.getElementById("l_box");
			var r_box=document.getElementById("r_box");
			var rectangle=document.getElementById("rectangle");
			var pic=r_box.getElementsByTagName('img')[0];
	
			mask.onmouseover=function(){
				r_box.style.display='block';
				rectangle.style.display='block';
			}
			
			mask.onmouseout=function(){
				r_box.style.display='none';
				rectangle.style.display='none';
			}
	
			mask.onmousemove=function(ev){
				
				var _event=ev||window.event;
				var left=_event.clientX-box.offsetLeft-l_box.offsetLeft-rectangle.offsetWidth/2;
				var top=_event.clientY-box.offsetTop-l_box.offsetTop-rectangle.offsetHeight/2;
				
				if(left<0){
					left=0;
				}else if (left>(box.offsetWidth-rectangle.offsetWidth)){
					left=box.offsetWidth-rectangle.offsetWidth;
				}
				
				if(top<0){
					top=0;
				}else if (top>(box.offsetHeight-rectangle.offsetHeight)){
					top=box.offsetHeight-rectangle.offsetHeight;
				}
				
				rectangle.style.left=left+'px';
				rectangle.style.top=top+'px';
				
				var percentX=left/(box.offsetWidth-rectangle.offsetWidth);
				var percentY=top/(box.offsetHeight-rectangle.offsetHeight);
				
				pic.style.left=-percentX*(pic.offsetWidth-r_box.offsetWidth)+'px';
				pic.style.top=-percentY*(pic.offsetHeight-r_box.offsetHeight)+'px';
			}
			
	
		}
