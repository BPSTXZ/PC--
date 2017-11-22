var btn=document.querySelector("#J_AgreementBtn");
var mot=document.querySelector("#mot");
var boy=document.querySelector("#boy");
var img=document.querySelector("#imgs");
console.log(btn);
btn.addEventListener("click",toggle);
  function toggle(){
  	mot.style.display='none';
  	boy.style.display='block';
  	img.style.display='none';
 };


var oUsername = document.querySelector('#denglu');
var oPassword = document.querySelector('#mima');
var oBtn = document.querySelector('#ipt');
console.log(oBtn);
oBtn.onclick = function(){
      myajax.post('http://h6.duchengjiu.top/shop/api_user.php',
    {
      status: 'register',
      username: oUsername.value,
      password: oPassword.value
    }, function(err, responseText){
      var json = JSON.parse(responseText);
      console.log(json);
      alert(json.message);
    });
  }



































