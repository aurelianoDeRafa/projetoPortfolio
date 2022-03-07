function abrirModal3(){
    let modal = document.querySelector('.modal-img-projetos');

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden';

  
}


function fecharModalSilder(){

        let modal = document.querySelector('.modal-img-projetos')
    
        if (typeof modal == 'undefined' || modal === null)
            return;
    
            modal.style.display = 'none'
            document.body.style.overflow = '';

    
    }
