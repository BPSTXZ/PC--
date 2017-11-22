
//              	var oGoods = document.querySelector('#hot-goods');
//					    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {}, function(err,responseText){
//					      var json = JSON.parse(responseText);
//					      console.log(json);
//					      var data = json.data;
//					      for (var i = 0; i < data.length; i++) {
//					        var obj = data[i];
//					        //点击直接进入"添加到购物里"
//					        oGoods.innerHTML += `<li><a href="goods.html?goods_id=${obj.goods_id}">
//					          <div class="oimg"><img src="${obj.goods_thumb}" /></div>
//					          <div class="good">${obj.goods_name}</div>
//					          <div class="price">${obj.price}</div></a>
//					        </li>`;
//					      }
//					    });
//              	
            var remenUl=document.querySelector(".remenshangping ul");
//		     	console.log(remen);
                var canshu=getQueryString("cat_id");
                myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{cat_id:canshu},function(error,datajson){
                	var obj=JSON.parse(datajson).data;
//              	console.log(canshu);
                    console.log(obj);
                    if(canshu!=null){
                    	var remenbiaoti=document.querySelector(".remenshangping>h1");
                    	remenbiaoti.style.display="none";
                    }
                    if(obj==false){
                    	remenUl.innerHTML=`<h1 id="meiyoushuju">我们的杜老师没给数据</h1>`
                    	return;
                    }
                    
                	for (var i=0;i<obj.length;i++) {
//              		console.log(obj[i]);
                		remenUl.innerHTML+=
                		`
                		<li class="remenli">
	                		 <a href="goods.html?goods_id=${obj[i].goods_id}" >	                		   
	                		   <div class="oimg"><img src="${obj[i].goods_thumb}"/></div>
	                		   <p class="remenlispan good">${obj[i].goods_name}</p>
	                		   <p class="remenprice price">￥${obj[i].price}</p>	                		 	
		                	 </a>		                	 
                		</li>
                		`
                	} 
                	function getQueryString(name) {
						  var search = location.search.substr(1);
						  //abc=123&a=&ccc=abc
						  //(^|&)   (&|$)
						  //abc=([^&]*)
						  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
						  var result = search.match(reg);
						  // if (result === null) return null;
						  // return decodeURIComponent(result[2]);
						  return result === null ? null : decodeURIComponent(result[2]);
		           }
                });
                

