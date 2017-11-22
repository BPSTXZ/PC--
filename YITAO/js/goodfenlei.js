//				
//				myajax.get("http://h6.duchengjiu.top/shop/api_cat.php",{},function(error,datajson){
//					var obj=JSON.parse(datajson).data;
//	//				console.log(obj)
//	                var fenleiul=document.querySelector(".section ul");
//	                for (var i=0;i<obj.length;i++) {
//	                	fenleiul.innerHTML+=
//	                	`<li class="fenlei"><a href="index.html?cat_id=${obj[i].cat_id}">${obj[i].cat_name}</a></li>`
//	                }
//				})

		var oCat = document.querySelector('#cat');
		  myajax.get('http://h6.duchengjiu.top/shop/api_cat.php', {}, function(error, responseText){
		      var json = JSON.parse(responseText);//返回的整个json对象
		      var data = json.data;//json对象当中的data是一个数组
		      for (var i = 0; i < data.length; i++) {
		        var obj = data[i];//数组里面的每一项是一个商品分类的对象
		        oCat.innerHTML += `<li class="fenlei"><a href="index.html?cat_id=${obj.cat_id}" class="cat">${obj.cat_name}</a></li>`;
		      }
		  });
