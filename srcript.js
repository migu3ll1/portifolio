//faz as tecnologias aparecerem quando o mouse entra na div
function tec(){
    let ico= window.document.querySelector('.ico_tec')
    let area= window.document.querySelector('.area2')
    let t1= window.document.querySelector('.titulo')
    let sbT1= window.document.querySelector('.subTitulo')
    area.classList.add('area_tecnologias')
    t1.classList.add('titulo_tecnologias')
    ico.classList.add('tecnologias')
    sbT1.innerHTML="passe o mouse para ver mais"
}
//animação do texto informativo de cada tecnologia
    //css
    function tecInformation1(){
        const txtcss= window.document.getElementById('txtcss')
        txtcss.classList.add('sobreTec')
    }
    function removeTecInformation1(){
        const txtcss= window.document.getElementById('txtcss')
        txtcss.classList.remove('sobreTec')
    }
    //html
    function tecInformation2(){
        const txtcss= window.document.getElementById('txthtml')
        txtcss.classList.add('sobreTec')
    }
    function removeTecInformation2(){
        const txtcss= window.document.getElementById('txthtml')
        txtcss.classList.remove('sobreTec')
    }
    //javascript
    function tecInformation3(){
        const txtcss= window.document.getElementById('txtjs')
        txtcss.classList.add('sobreTec')
    }
    function removeTecInformation3(){
        const txtcss= window.document.getElementById('txtjs')
        txtcss.classList.remove('sobreTec')
    }
    //node
    function tecInformation4(){
        const txtcss= window.document.getElementById('txtnode')
        txtcss.classList.add('sobreTec')
    }
    function removeTecInformation4(){
        const txtcss= window.document.getElementById('txtnode')
        txtcss.classList.remove('sobreTec')
    }
    //php
    function tecInformation5(){
        const txtcss= window.document.getElementById('txtphp')
        txtcss.classList.add('sobreTec')
    }
    function removeTecInformation5(){
        const txtcss= window.document.getElementById('txtphp')
        txtcss.classList.remove('sobreTec')
    }
    //matelab
    function tecInformation6(){
        const txtcss= window.document.getElementById('txtmat')
        txtcss.classList.add('sobreTec')
    }
    function removeTecInformation6(){
        const txtcss= window.document.getElementById('txtmat')
        txtcss.classList.remove('sobreTec')
    }

//footer dinamico ao dar scroll
$(window).on("load scroll", function(){
    var threshold = 25 // porcentagem da altura visível do elemento que aparecer na tela para iniciar a animação
     $(".mostrar").each(function(){
         var el = $(this)
         var eleHeight = el.outerHeight() // altura da div
         var eleTopo = el.offset().top // distancia da div ao topo do documento
         var scrlTopo = $(window).scrollTop() // quanto foi rolada a janela
         var distance = eleTopo-scrlTopo // distancia da div ao topo da janela
         var altJanela = window.innerHeight // altura da janela
         if(distance <= altJanela-(eleHeight/(threshold/10))) {
             el.animate({ 'opacity': 1 }, 1200) // 1200 = 1,2 segundo da animação. Quanto menor, mais rápido
         }
     })
 })

//botão de navbar responsivo
function navBar(){
    const menu= window.document.querySelector('.nav_mobile')//menu
    const links= window.document.querySelector('.nav_links')//links
    var bt= window.document.querySelector('#removeBT')//botão para abrir menu
    menu.classList.add('navMobileOpem')
    links.classList.add('links_navMB')
    bt.classList.add('removebt')
    
}
function navclose(){
    const menu= window.document.querySelector('.nav_mobile')//menu
    var bt= window.document.querySelector('#removeBT')//botão para abrir menu
    if(menu.classList.contains('navMobileOpem')){
        menu.classList.remove('navMobileOpem')
        bt.classList.remove('removebt')
    }
}

//efeito de blur na pagina
    //caixa 1
    function blurCaixa(){
        const area2= window.document.querySelector('.area2')//seleciona a area de tecnologias
        const caixa2=window.document.querySelector('.sub_ar2')// seleciona caixa de texto 2
        caixa2.classList.add('blurcx')
        area2.classList.add('blurcx')
    }
    function removeblur(){
        const area2= window.document.querySelector('.area2')//seleciona a area de tecnologias
        const caixa2=window.document.querySelector('.sub_ar2')// seleciona caixa de texto 2
        caixa2.classList.remove('blurcx')
        area2.classList.remove('blurcx')
    }
    //caixa 2
    function  blurCaixa2(){
        const caixa1= window.document.querySelector('.sub_ar1')//seleciona caixa de texto 1 
        const caixaTec= window.document.querySelector('.area2')//seleciona caixa de tecnologias
        caixa1.classList.add('blurcx')
        caixaTec.classList.add('blurcx')
    }
    function removeblur2(){
        const caixaTec= window.document.querySelector('.area2')//seleciona a area de tecnologias
        const caixa1=window.document.querySelector('.sub_ar1')// seleciona caixa de texto 1
        caixa1.classList.remove('blurcx')
        caixaTec.classList.remove('blurcx')
    }
    function caixablurTec(){
        const caixa1= window.document.querySelector('.sub_ar1')//seleciona caixa de texto 1 
        const caixa2=window.document.querySelector('.sub_ar2')// seleciona caixa de texto 2
        caixa1.classList.add('blurcx')
        caixa2.classList.add('blurcx')
    }
    function removeblurTec(){
        const caixa1= window.document.querySelector('.sub_ar1')//seleciona caixa de texto 1 
        const caixa2=window.document.querySelector('.sub_ar2')// seleciona caixa de texto 2
        caixa1.classList.remove('blurcx')
        caixa2.classList.remove('blurcx')
    }