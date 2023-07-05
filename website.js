const wrapper = document.querySelector('.wrapper')
console.log(wrapper)
const registerLink = document.querySelector('.register-link')
console.dir(registerLink)
const loginLink = document.querySelector('.login-link')
const btn = document.querySelector('.btnlogin-popup')
console.log(btn)
/* const closeIcon = document.querySelector('.icon-close') */
/* console.log(closeIcon) */
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

btn.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})

/* closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
}) */