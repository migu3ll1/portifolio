//animacão da caixa 1
setInterval(()=>{
    const txtEmbreve= window.document.querySelector('.embreve1')
    const projeto1= window.document.querySelector('.pj1')
    const titulo1= window.document.querySelector('.t1') 
    projeto1.classList.remove('reset')
    projeto1.classList.add('abertura')
    titulo1.classList.add('txtsome')
    if(projeto1.classList.contains('abertura')){
        txtEmbreve.classList.add('embrevesec')
    }
},5000)
setInterval(()=>{
    const txtEmbreve= window.document.querySelector('.embreve1')
    const projeto1= window.document.querySelector('.pj1')
    const titulo1= window.document.querySelector('.t1') 
    projeto1.classList.remove('abertura')
    projeto1.classList.add('reset')
    titulo1.classList.remove('txtsome')
    titulo1.classList.add('txtsec')
    if(projeto1.classList.contains('reset')){
        txtEmbreve.classList.remove('embrevesec')
    }
},8000)

//animação caixa 2
setInterval(()=>{
    const projeto2= window.document.querySelector('.pj2')
    const titulo2= window.document.querySelector('.t2') 
    const txtEmbreve= window.document.querySelector('.embreve2')
    projeto2.classList.remove('reset')
    projeto2.classList.add('abertura')
    titulo2.classList.add('txtsome')
    if(projeto2.classList.contains('abertura')){
        txtEmbreve.classList.add('embrevesec')
    }
},5000)
setInterval(()=>{
    const projeto2= window.document.querySelector('.pj2')
    const titulo2= window.document.querySelector('.t2') 
    const txtEmbreve= window.document.querySelector('.embreve2')
    projeto2.classList.remove('abertura')
    projeto2.classList.add('reset')
    titulo2.classList.remove('txtsome')
    titulo2.classList.add('txtsec')
    if(projeto2.classList.contains('reset')){
        txtEmbreve.classList.remove('embrevesec')
    }
},8000)

//animação caixa 3
setInterval(()=>{
    const projeto3= window.document.querySelector('.pj3')
    const titulo3= window.document.querySelector('.t3')
    const txtEmbreve= window.document.querySelector('.embreve3') 
    projeto3.classList.remove('reset')
    projeto3.classList.add('abertura')
    titulo3.classList.add('txtsome')
    if(projeto3.classList.contains('abertura')){
        txtEmbreve.classList.add('embrevesec')
    }

},5000)
setInterval(()=>{
    const projeto3= window.document.querySelector('.pj3')
    const titulo3= window.document.querySelector('.t3') 
    const txtEmbreve= window.document.querySelector('.embreve3')
    projeto3.classList.remove('abertura')
    projeto3.classList.add('reset')
    titulo3.classList.remove('txtsome')
    titulo3.classList.add('txtsec')
    if(projeto3.classList.contains('reset')){
        txtEmbreve.classList.remove('embrevesec')
    }
},8000)

