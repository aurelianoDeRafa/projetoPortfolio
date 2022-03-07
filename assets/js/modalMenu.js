function abrirMobile(){
    document.querySelector('#modal').style.display ='flex'
    document.body.style.overflowY = 'hidden';


}

function fecharMenu(){
  
        document.querySelector('#modal').style.display ='none'
         document.body.style.overflowY = 'scroll';

    
}