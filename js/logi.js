if (localStorage.username) {
        var oUsername = document.querySelector('a[name=username]');
        var oLogout = document.querySelector('.logout');      
        var oimg=document.querySelector('#oimg');     
        oUsername.innerText = localStorage.username;
        oUsername.style.display = 'inline';
        oLogout.style.display = 'inline';
        oimg.src='./resource/imges/25.gif';
        if (oimg.src='./resource/imges/25.gif') {
        	var reg_ht=document.querySelector('#reg_ht');
        	var log_in=document.querySelector('#log_in');
        	reg_ht.style.display='none';
        	log_in.style.display='none';
        }
      } else {
        var oRegister = document.querySelector('.register');
        var oLogin = document.querySelector('.login');
        oRegister.style.display = 'inline';
        oLogin.style.display = 'inline';
      }
      













