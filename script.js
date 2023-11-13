const inputs=document.querySelectorAll('input') ;
const res = document.querySelector('#res')
const arr=['bumaga','nojnici', 'kamen']
inputs.forEach((input) => {
    input.addEventListener('click' , (e) =>{
        const random = Math.floor(Math.random() * 2)
        if ( e.target.value === 'nojnici' && random === 2) {
            res.innerHTML =`
            <h2>Вы выграли </h2>
            <img src="./assets/makas.png" alt="">
            `
        } else if ( e.target.value === 'kamen' && random === 0) {
            res.innerHTML =`
            <h2>Вы выграли </h2>
            <img src="./assets/tas.png" alt="">
            `
        } else if ( e.target.value === 'bumaga' && random === 1) {
            res.innerHTML =`
            <h2>Вы выграли </h2>
            <img src="./assets/kagıt.png" alt="">
            `
        } else if ( e.target.value === 'nojnici' && random === 0) {
            res.innerHTML =`
            <h2>ничья </h2>
            <img src="./assets/makas.png" alt="">
            `
        }  else if ( e.target.value === 'bumaga' && random === 2) {
            res.innerHTML =`
            <h2>ничья </h2>
            <img src="./assets/kagıt.png" alt="">
            `
        }  else if ( e.target.value === 'kamen' && random === 1 ) {
            res.innerHTML =`
            <h2>ничья </h2>
            <img src="./assets/tas.png" alt="">
            ` }
    })
})