window.scroll({
    top: 0,
    behavior: 'smooth'
})
window.scrollTo({
    top: 0,
    behavior: 'smooth'
})

//Primeiro projeto na area portfolio
function abriPro1(){
    let modal = document.querySelector('.area-modal--pro');
    let backImg = document.querySelector('.video-bloco--video--pro ');
    let link = document.querySelector('.bloco-video-pro--botao button a');
    let descricao = document.querySelector('.conteudo-mineDescri-sobdescri--pro p')
    

    let mudaIcon1 = document.querySelector('.pro-img--modo-1 img')
    let mudaIcon2 = document.querySelector('.pro-img--modo-2 img')
    let mudaIcon3 = document.querySelector('.pro-img--modo-3 img')
    let mudaIcon4 = document.querySelector('.pro-img--modo-4 img')
    

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden';
        /* nome do projeto*/
        document.querySelector('.conteudo-mineDescri-titulo--pro h1').innerHTML ='Site Vegeta';
        /* imagem inicial do projeto*/
        backImg.style.backgroundImage = "url('assets/images/imgSite/Site-vegeta.png')"
        backImg.style.backgroundSize = 'contain';
        backImg.style.backgroundRepeat =  'round'
        /*descriçao do projeto/site */
        
        descricao.innerHTML = "Esse projeto foi criando para estudos, para estudar as tecnologias HTML, CSS E JAVASCRIPT. <br/> As mudança de abas desse projeto são feito com css usando (display:flex e display:none).  <br/><br/> <strong>Design do projeto: </strong> Rafael Aureliano"
        /*a nome da class que o projeto vai receber */
        /*link.classList.add('primeiro');*/

        /*ira manda para o github*/
        link.href = "https://github.com/rafael16k/projeto-vegeta--dragon-ball"
        /*link.addEventLisener('click', ()=>{
            let modals = document.querySelector('.modal-img-projetos');

            if (typeof modals == 'undefined' || modals === null)
                return;
        
                modals.style.height = '100vh'
                document.body.style.overflow = 'hidden';
                document.querySelector('.im1').style.backgroundImage = "url('assets/images/imgSite/s1.png')"
                document.querySelector('.im2').style.backgroundImage = "url('assets/images/imgSite/s4.png')"
                document.querySelector('.im3').style.backgroundImage = "url('assets/images/imgSite/s3.png')"
                document.querySelector('.im4').style.backgroundImage =  "url('assets/images/imgSite/g2.jpeg')"

                document.querySelector('.im5').style.backgroundImage = "url('assets/images/imgSite/s1.png')"

                document.querySelector('.slider-item').style.width = ''
    


        })*/

        mudaIcon1.src = "assets/images/icon/html5.png "
        mudaIcon2.src = "assets/images/icon/css3.png "
        mudaIcon3.src = "assets/images/icon/js.png "
        mudaIcon4.src = " "
}

//segundo projeto na area portflio
function abriPro2(){
    let modal = document.querySelector('.area-modal--pro');
    let backImg = document.querySelector('.video-bloco--video--pro ');
    let link = document.querySelector('.bloco-video-pro--botao button a');
    let descricao = document.querySelector('.conteudo-mineDescri-sobdescri--pro p')

    let mudaIcon1 = document.querySelector('.pro-img--modo-1 img')
    let mudaIcon2 = document.querySelector('.pro-img--modo-2 img')
    let mudaIcon3 = document.querySelector('.pro-img--modo-3 img')
    let mudaIcon4 = document.querySelector('.pro-img--modo-4 img')

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden';
        /* nome do projeto*/
        document.querySelector('.conteudo-mineDescri-titulo--pro h1').innerHTML ='Site Culinarias';
        /* imagem inicial do projeto*/
        backImg.style.backgroundImage = "url('assets/images/imgSite/site-culinarias.png')";
        backImg.style.backgroundSize = 'cover';
        backImg.style.backgroundRepeat =  'inherit'
        /*descriçao do projeto/site */
        descricao.innerHTML = "Esse projeto é um projeto fictício, criei esse site para estududa a tecnologia (DOM)javascript. <br/><br/> <strong>Design do projeto: </strong> Rafael Aureliano"
        /*/*ira manda para o github*/
        link.href = "https://github.com/rafael16k/projeto-vegeta--dragon-ball"


        mudaIcon1.src = "assets/images/icon/html5.png "
        mudaIcon2.src = "assets/images/icon/css3.png "
        mudaIcon3.src = "assets/images/icon/js.png "
        mudaIcon4.src = " "
}

//terceiro projeto na area portflio
function abriPro3(){
    let modal = document.querySelector('.area-modal--pro');
    let backImg = document.querySelector('.video-bloco--video--pro ');
    let link = document.querySelector('.bloco-video-pro--botao button a');
    let descricao = document.querySelector('.conteudo-mineDescri-sobdescri--pro p')

    let mudaIcon1 = document.querySelector('.pro-img--modo-1 img')
    let mudaIcon2 = document.querySelector('.pro-img--modo-2 img')
    let mudaIcon3 = document.querySelector('.pro-img--modo-3 img')
    let mudaIcon4 = document.querySelector('.pro-img--modo-4 img')

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden';
        /* nome do projeto*/
        document.querySelector('.conteudo-mineDescri-titulo--pro h1').innerHTML ='Site curso';
        /* imagem inicial do projeto*/
        backImg.style.backgroundImage = "url('assets/images/imgSite/site-cursoHTMLCSS.png')";
        backImg.style.backgroundSize = 'cover';
        backImg.style.backgroundRepeat =  'inherit'
        /*descriçao do projeto/site */
        descricao.innerHTML = "Projeto criando no curso B7Web. <br/> Esse projeto foi criando para finalizar o curso HTML e CSS"
        /*/*ira manda para o github*/
        link.href = "https://github.com/rafael16k/projeto-vegeta--dragon-ball"


        mudaIcon1.src = "assets/images/icon/html5.png "
        mudaIcon2.src = "assets/images/icon/css3.png "
        mudaIcon3.src = "assets/images/icon/js.png "
        mudaIcon4.src = " "
}

//quarto projeto na area portflio
function abriPro4(){
    let modal = document.querySelector('.area-modal--pro');
    let backImg = document.querySelector('.video-bloco--video--pro ');
    let link = document.querySelector('.bloco-video-pro--botao button a');
    let descricao = document.querySelector('.conteudo-mineDescri-sobdescri--pro p')

    let mudaIcon1 = document.querySelector('.pro-img--modo-1 img')
    let mudaIcon2 = document.querySelector('.pro-img--modo-2 img')
    let mudaIcon3 = document.querySelector('.pro-img--modo-3 img')
    let mudaIcon4 = document.querySelector('.pro-img--modo-4 img')

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden';
        /* nome do projeto*/
        document.querySelector('.conteudo-mineDescri-titulo--pro h1').innerHTML ='Site Starbucks';
        /* imagem inicial do projeto*/
        backImg.style.backgroundImage = "url('assets/images/imgSite/site-starbucks.png')";
        backImg.style.backgroundSize = 'cover';
        backImg.style.backgroundRepeat =  'inherit'
        /*descriçao do projeto/site */
        descricao.innerHTML = "Projeto criando no curso B7Web. <br/> Esse projeto foi criando para estuda a (Grid) uma tecnologia do css."
        /*/*ira manda para o github*/
        link.href = "https://github.com/rafael16k/projeto-vegeta--dragon-ball"


        mudaIcon1.src = "assets/images/icon/html5.png "
        mudaIcon2.src = "assets/images/icon/css3.png "
        mudaIcon3.src = "assets/images/icon/js.png "
        mudaIcon4.src = " "
}







let fechar = document.querySelector('.fechar--pro');
fechar.addEventListener('click', ()=>{
    document.querySelector('.area-modal--pro').style.display = "none";
    document.body.style.overflowY = 'scroll';
})




function clearF(){
    let modals = document.querySelector('.modal-img-projetos ')

        modals.style.height = '0px'

}

