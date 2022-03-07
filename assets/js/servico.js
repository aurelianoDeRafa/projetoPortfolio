const verInfoServico = document.querySelector('#faco-info');
//const info = document.querySelector('.bloco-info')


const abriSabeMais = (evento) =>{
    abrirInfo[evento.target.id]();
}
const fecharSaibaMais = (evento) =>{
    fecharInfo[evento.target.id]();
}

const abrirInfo = {
   /* 'faco1': ()=>{

        document.querySelector('.bloco-info1').style.marginTop = "-29px";
        document.querySelector('.bloco-info1').innerHTML="Saber mais"

        
    },*/
    'faco2': ()=>{
        document.querySelector('.bloco-info2').style.marginTop = "-29px";
        document.querySelector('.bloco-info2').innerHTML="Saber mais"
    },
    'faco3': ()=>{
        document.querySelector('.bloco-info3').style.marginTop = "-29px";
        document.querySelector('.bloco-info3').innerHTML="Saber mais"
         
    },
    /*'faco4': ()=>{
        document.querySelector('.bloco-info4').style.marginTop = "-29px";
        document.querySelector('.bloco-info4').innerHTML="Saber mais"
         
    }*/
}

const fecharInfo = {
    /*'faco1': ()=>{
        document.querySelector('.bloco-info1').style.marginTop = "-0px";
        document.querySelector('.bloco-info1').innerHTML=""
        
        
    },*/
    'faco2': ()=>{
        document.querySelector('.bloco-info2').style.marginTop = "-0px";
        document.querySelector('.bloco-info2').innerHTML=""
    },
    'faco3': ()=>{
        document.querySelector('.bloco-info3').style.marginTop = "-0px";
        document.querySelector('.bloco-info3').innerHTML=""
         
    },
    /*'faco4': ()=>{
        document.querySelector('.bloco-info4').style.marginTop = "-0px";
        document.querySelector('.bloco-info4').innerHTML=""
         
    }*/
}




verInfoServico.addEventListener('mouseover', abriSabeMais)

verInfoServico.addEventListener('mouseout', fecharSaibaMais)



const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: false,
    Keyboard: true,
    setWrapperSize: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
          setWrapperSize: true
        },
        555: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          755: {
            slidesPerView: 3,
            setWrapperSize: true
          },
        768: {
            slidesPerView: 3,
            setWrapperSize: true
          },
          1024: {
            slidesPerView: 4,
            setWrapperSize: true
          },
          1300: {
            slidesPerView: 5,
            setWrapperSize: true
          }
      }
  })


