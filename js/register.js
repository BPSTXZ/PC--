
var td=document.querySelector("#loginBut");
var td2=document.querySelector("#loginBut2");
console.log(td2);
var div=document.querySelector("#qrcode");
var staticu=document.querySelector("#staticu");
var imagest=document.querySelector("#imagest");
var imagest2=document.querySelector("#imagest2");
var logintip=document.querySelector("#logintip");

td2.addEventListener("click",toggle,false);				
td.addEventListener("click",toggle,false);
				function toggle(){
				   var isShow=div.style.display;
				   var isdom=staticu.style.display;
				   var isimg=imagest.style.display;
				   var isimg2=imagest2.style.display;
				   var islog=logintip.style.display;
				   imagest.style.display=isimg=="none"?"":"none";
				   imagest2.style.display=isimg2=="block"?"":"block";
				   div.style.display=isShow=="none"?"":"none";
				   staticu.style.display=isdom=="block"?"":"block";
				   logintip.style.display=islog=="block"?"":"block";	
				}



    var oUsername = document.querySelector('#denglu');
    console.log(oUsername);
    var oPassword = document.querySelector('#mima');
    var oBtn = document.querySelector('#ipt');
    oBtn.onclick = function() {
      //js校验
      //直接调用登录的接口
      $.post('http://h6.duchengjiu.top/shop/api_user.php',
      {
        status: 'login',
        username: oUsername.value,
        password: oPassword.value
      }, function(json){
//      var json = JSON.parse(responseText);      
        localStorage.token = json.data.token;
        localStorage.username = json.data.username;
//      console.log(localStorage.token);
//      console.log(localStorage.username);
        
//        如果登录成功则跳转到首页,否则提示不成功
        if (localStorage.backurl) {
          location.href = localStorage.backurl;            
        } else if(json.message!="登录成功"){
        	console.log(json.message);
          alert(json.message+" " +"请先注册");
        }else{
       		location.href = 'index.html';
       		alert(json.message);      		
        }
      });
    }

















