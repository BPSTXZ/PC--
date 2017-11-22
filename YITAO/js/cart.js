var oTable = document.querySelector('table');
    var oSum = document.querySelector('#sum');
    myajax.get('http://h6.duchengjiu.top/shop/api_cart.php', {token: localStorage.token}, function(err, responseText){
      var json = JSON.parse(responseText);
      console.log(json);
      var data = json.data;
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        sum += obj.goods_price * obj.goods_number;
        oTable.innerHTML += `
                          <tr>  
                         	<td name="goods_id">${obj.goods_id}</td>	
                            <td><img src="${obj.goods_thumb}" ></td>
                            <td class="td2">${obj.goods_name}</td>
                            <td ><input data-id="${obj.goods_id}" type="number" name="number" value="${obj.goods_number}" class="td4"/></td>
                            <td class="td3">${obj.goods_price}</td>
                            <td name="sum" class="td3">${obj.goods_price*obj.goods_number}</td>
                            <td><input data-id="${obj.goods_id}" type="button" name="delete" value="删除" class="td5"></td>
                          </tr>
                          `;
      }
      getSum();
    });

    oTable.onchange = function(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.name === 'number') {
        console.log(target.value, target.dataset.id);
        var goods_id = target.dataset.id;
        var number = target.value;
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id, number},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            // alert('更新购物车成功');
            //修改总价和小计
            var goods_price = parseInt(target.parentNode.nextElementSibling.innerText);
            target.parentNode.nextElementSibling.nextElementSibling.innerText = parseInt(target.value) * goods_price;
            getSum();
          }
        })
      }
    }

    oTable.addEventListener('click', function(event){
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.name === 'delete') {
        if (!confirm('确认要删除吗')) { //当你选择的是取消则不执行任何事情
          return;
        }
        //得到商品ID
        var goods_id = target.dataset.id;
        var number = 0;
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id, number},
        (err, responseText) => {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            // alert('更新购物车成功');
            //删除整个TR
            var tr = target.parentNode.parentNode;
            tr.parentNode.removeChild(tr);
            //显示总价
            getSum();
          }
        })
      }
    });

//	var butn=document.querySelector('.butn');
//	console.log(butn);
//	butn.addEventListener('click',function(){
//		myajax.post('http://h6.duchengjiu.top/shop/api_cart.php',
//    {}, function(error, responseText){
//      var json = JSON.parse(responseText);      
//      if (localStorage.backurl) {
//        location.href = localStorage.backurl;            
//      } else if(json.message!="购物车数据获取成功"){
//      	console.log(json.message);
//        alert(json.message+" " +"请添加商品");
//      }else{
//     		location.href = 'checkout.html';
//     		alert(json.message);      		
//      }
//    });
//	})


    var oClearCart = document.querySelector('#clear-cart');
    oClearCart.onclick = () => {
      if (!confirm('确认要清空整个购物车吗？')) {
        return;
      }
      //得到所有的商品ID
      var oGoodsIds = document.querySelectorAll('td[name=goods_id]');
     console.log(oGoodsIds);
      for (var i = 0; i < oGoodsIds.length; i++) {
        var td = oGoodsIds[i];
        var goods_id = parseInt(td.innerText);
        var number = 0;
        (function(td){
          myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
          {goods_id, number},
          (err, responseText) => {
            var json = JSON.parse(responseText);
            console.log(json);
            if (json.code === 0) {
              // alert('更新购物车成功');
              //删除整个TR
              var tr = td.parentNode;
              tr.parentNode.removeChild(tr);
              //显示总价
              getSum();
            }
          });
        })(td);
      }
    }

    //显示出总价
    function getSum() {
      var oSums = document.querySelectorAll('td[name=sum]');
      var sum = 0;
      for (var i = 0; i < oSums.length; i++) {
        sum += parseInt(oSums[i].innerText);
      }
      oSum.innerText = sum;
    }