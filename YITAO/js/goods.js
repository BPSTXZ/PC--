    
    
    
    
    
    
    var oGoods = document.querySelector('#goods');
    var goods_id = getQueryString('goods_id');
    console.log(goods_id);
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {
      goods_id: goods_id //ES5
//    goods_id //ES6
    }, function(err, responseText){
      var json = JSON.parse(responseText);
      var obj = json.data[0];
      console.log(json);
      oGoods.innerHTML = `
      <div class="good-one">
        <div class="good-img"><img src="${obj.goods_thumb}"></div>
        <div class="good-name">${obj.goods_name}</div>
        <div class="good-price">仅售${obj.price}</div>
        <div class="goods_desc">${obj.goods_desc}</div>
        <div ><input type="button" id="add-to-cart" class="good-button" value="添加到购物车"></div>
      </div>
      `;
    });

    document.body.onclick = function(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.id === 'add-to-cart') {
        if (!localStorage.token) {
          alert('请先登录再购买');
          //把当前商品的详细地址存储到localStorage.backurl
          localStorage.backurl = location.href
          //跳转到登录页
          location.href = "register.html";
          return;
        }
        console.log('添加到购物车');
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id, number:1},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            alert('添加到购物车成功');
          }
        })
      }
    }
    

