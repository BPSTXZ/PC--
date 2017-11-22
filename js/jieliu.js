
       function jieliu(fun,delay){
       	   clearTimeout(fun.id);
       	   fun.id=setTimeout(function(){
       	   	    fun&&fun();
       	   },delay)
       }
       
