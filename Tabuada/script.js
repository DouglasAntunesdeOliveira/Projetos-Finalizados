document.querySelector("body").style.background = "url('foto-noite-grande.jpg')"
function tabuada(){
    let ini = document.getElementById('txti')
    let res = document.getElementById('res')
    
    var tabuada='';
    if(ini.value.length == 0){
        //window.alert ("[ERRO] Verifique seus dados")
    }else{ 
        let i = Number(ini.value)
        let r = 1
        dados.innerHTML = 'Tabuado ' + i
        res.innerHTML=''
    
    for( r = 1; r <= 10 ; r ++){ 
        res.innerHTML += `${i} x ${r} = ${i*r} <br>`
        
        }
    }
        
}


    //for(var count=1; count<=10 ; count++)
    //res.innerHTML = `${i} x ${r} = ${i*r}` 
    //document.write(i + 'x' + r + '=' + (i*r) + '<br>')


    


