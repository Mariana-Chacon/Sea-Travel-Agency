// Seleccionando el mostrador del precio de cada plan
const starter = document.querySelector('#starter')
const mid = document.querySelector('#mid')
const premium = document.querySelector('#premium')

// Seleccionando el input de cada plan
const starterInput = document.querySelector('#starter-input')
const midInput = document.querySelector('#mid-input')
const premiumInput = document.querySelector('#premium-input')

// precio de cada plan
const STARTER_COST = 12
const MID_COST = 25
const PREMIUM_COST = 40

// Mostrar el precio de cada plan
starter.innerHTML = `${STARTER_COST}`
mid.innerHTML = `${MID_COST}`
premium.innerHTML = `${PREMIUM_COST}`

starterInput.addEventListener('change', (e) => {
    // aca obtenemos el valor del input y lo convertimos a numero entero
    const input = parseInt(e.target.value)

    // aca checkeamos si el input tiene algo o es menor a 0 y retorna
    if(!input || input <= 0) return

    // sino, multiplica el valor del plan por la cantidad de personas y lo muestra
    starter.innerHTML = `${input * STARTER_COST}`
})

midInput.addEventListener('change', (e) => {
    const input = parseInt(e.target.value)

    if(!input || input <= 0) return

    mid.innerHTML = `${input * MID_COST}`
})

premiumInput.addEventListener('change', (e) => {
    const input = parseInt(e.target.value)

    if(!input || input <= 0) return

    premium.innerHTML = `${input * PREMIUM_COST}`
})