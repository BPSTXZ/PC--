		 //  第一个轮播图 
		    var lunbobox=document.querySelector(".firstlunbo");
			//图片列表
			var circle=document.querySelectorAll(".firstlunboul2 li");
//			console.log(circle);
			var opicul=document.querySelector(".firstlunboul1");
			var opicli=document.querySelectorAll(".firstlunboul1 li");
			var opicture=document.querySelectorAll(".firstlunboul1 li img");
			//特效
			str="ExpoEaseOut";
			//列表最后添加图片
//			console.log(opicli.length);
			opicul.appendChild(opicli[0].cloneNode(true));
//          console.log(opicli.length);
           
			//当前图片信号量
			var index=0;
			//图片的长度应该是一样的，就是盒子的长度+左边框
			var length=225;
			//业务逻辑，移动图片
			function move(){
//                       console.log(index)
                       // 判断当前图片有没有运动,运动则不能点
                       if(animate.id){
                       	 return;
                       }
//                       changecircle();
				    	 animate(opicul,{
					     "left":-length*index
				        },1000,str,function(){
				         	if(index==opicli.length){
				    	        opicul.style.left="0px";
				          	    index=0;
//				          	    console.log(index);
				             }
//				         	changecircle();
				           }
				    	 );
			}
			//点击按钮
		   var leftbt = document.querySelector(".firstlunbospan1");
		   leftbt.onclick=function(){
		   	// 判断当前图片有没有运动,运动则不能点
              if(animate.id){
                 return;
              }		   	  
		   	  index--;
		   	  if(index<0){
		   	  	 index=opicli.length;
		   	  	 opicul.style.left=-length*index+"px";
		   	  	 index--;
		   	  	 move();
		   	  }
		   	  move();
		   }
		   var rightbt=document.querySelector(".firstlunbospan2");
//		   console.log(rightbt)
		   rightbt.onclick=function(){
		   	   // 判断当前图片有没有运动,运动则不能点
               if(animate.id){
                    return;
               }
		   	   index++;
		   	   move();
		   }
		   
		   //计时器
		   var timer1 =setInterval(function(){
		   	  // 判断当前图片有没有运动,运动则不能点
              if(animate.id){
                       	 return;
              }
		   	  index++
		   	  move();
		   },3000);
		 
		
		   //鼠标放入轮播图的时候
		   lunbobox.onmouseover=function(){
		   	   clearInterval(timer1);
		   }
		   
		   //鼠标移除轮播图的时候
		    lunbobox.onmouseout=function(){
		    	timer1 =setInterval(function(){
		   	    index++
		   	    move();
		        },3000);
		    }
		   
		   /*
		 //  根据信号量改变圆
		   function changecircle()
		   {    
		   	   //原点信号量
		   	   var t=index;
//		   	   console.log("index="+index)
		   	   if(t==opicli.length){
		   	   	   t=0;
		   	   }
//		   	   console.log(circle.length);
               for(var j=0;j<circle.length;j++){
               	 circle[j].className="";
               }
               console.log();
		   	   circle[t].className="firstcurrent";
		   }
		   
		   // 点击圆点
		   for (var h=0;h<circle.length;h++) {
		   	 (function(h){
		   	  	circle[h].onclick=function(){
//		   	  		console.log(h);
                    index=h;
                    changecircle();
                    opicul.style.left=-length*index+"px";
		   	  	}
		   	  })(h) ;
		   }
        */

//第二个轮播图
            var slunbobox=document.querySelector(".secondlunbo");
			//图片列表
			var scircle=document.querySelectorAll(".secondlunboul2 li");
//			console.log(circle);
			var sopicul=document.querySelector(".secondlunboul1");
			var sopicli=document.querySelectorAll(".secondlunboul1 li");
			var sopicture=document.querySelectorAll(".secondlunboul1 li img");
			//特效
			var sstr="ExpoEaseOut";
			//列表最后添加图片
//			console.log(opicli.length);
			sopicul.appendChild(sopicli[0].cloneNode(true));
//          console.log(opicli.length);
           
			//当前图片信号量
			var sindex=0;
			//图片的长度应该是一样的，就是盒子的长度+左边框
			var slength=750;
			//业务逻辑，移动图片
			function smove(){
//                       console.log(index)
                       // 判断当前图片有没有运动,运动则不能点
                       if(animate2.id){
                       	 return;
                       }
//                       schangecircle();
				    	 animate2(sopicul,{
					     "left":-slength*sindex
				        },1000,sstr,function(){
				         	if(sindex==sopicli.length){
				    	        sopicul.style.left="0px";
				          	    sindex=0;
//				          	    console.log(index);
				             }
//				         	changecircle();
				           }
				    	 );
			}
			//点击按钮
		   var sleftbt = document.querySelector(".secondlunbospan1");
		   sleftbt.onclick=function(){
		   	// 判断当前图片有没有运动,运动则不能点
              if(animate2.id){
                 return;
              }
		   	  
		   	  sindex--;
		   	  if(sindex<0){
		   	  	 sindex=sopicli.length;
		   	  	 sopicul.style.left=-slength*sindex+"px";
		   	  	 sindex--;
		   	  	 smove();
		   	  }
		   	  smove();
		   }
		   var srightbt=document.querySelector(".secondlunbospan2");
//		   console.log(rightbt)
		   srightbt.onclick=function(){
		   	   // 判断当前图片有没有运动,运动则不能点
               if(animate2.id){
                    return;
               }
		   	   sindex++;
		   	   smove();
		   }
		   
		   
		   //计时器
		   var timer2 =setInterval(function(){
		   	  // 判断当前图片有没有运动,运动则不能点
//		   	  console.log(2)
              if(animate2.id){
                    return;
              }
		   	  sindex++;
		   	  smove();
		   },3000);
		
		
		   //鼠标放入轮播图的时候
		   slunbobox.onmouseover=function(){
//		   	  console.log("鼠标放入");
		   	   clearInterval(timer2);
		   }
		   
		   //鼠标移除轮播图的时候
		    slunbobox.onmouseout=function(){
		    	timer2 =setInterval(function(){
		   	    sindex++
		   	    smove();
		        },3000);
		    }
		   
		      /*
		 //  根据信号量改变圆
		   function schangecircle()
		   {    
		   	   //原点信号量
		   	   var t=sindex;
		   	   if(t==sopicli.length){
		   	   	   t=0;
//		   	   	   console.log()
		   	   }
		   	   
//		   	   console.log(circle.length);
               for(var j=0;j<scircle.length;j++){
               	 scircle[j].className="";
               }
               
		   	   scircle[t].className="secondcurrent";
		   }
		   
		   // 点击圆点
		   for (var h=0;h<scircle.length;h++) {
		   	 (function(h){
		   	  	scircle[h].onclick=function(){
//		   	  		console.log(h);
                    sindex=h;
                    schangecircle();
                    sopicul.style.left=-slength*sindex+"px";
		   	  	}
		   	  })(h) ;
		   }
		   */
      
	 
