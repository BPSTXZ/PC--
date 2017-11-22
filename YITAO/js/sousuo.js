//搜索按钮
var sousuobt=document.querySelector("#sousuobt");
//console.log(sousuobt)
var sousuoneirong=document.querySelector("#sousuoneirong");

sousuobt.onclick=function(){
//	console.log(sousuoneirong.value);
    var str=sousuoneirong.value;
//  location.href="搜索界面.html?"+str;
    window.open("搜索界面.html?search_text="+str);
}
