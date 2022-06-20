let $ = e => document.querySelector(e)
let $$ = es => document.querySelectorAll(es)

let input = $('#display')
let btns = $$('.btn')

btns.forEach(b => {
    b.addEventListener('click', (e) => {
        if(e.target.textContent == '='){
            try{
                input.value = eval(input.value)
            }catch{}
        }
        else if(e.target.textContent == 'AC'){
            input.value = ''
        }
        else if(e.target.textContent == 'C'){
            input.value = input.value.substring(0, input.value.length - 1)
        }
        else{
            input.value += e.target.textContent.trim()
        }
    })
})
