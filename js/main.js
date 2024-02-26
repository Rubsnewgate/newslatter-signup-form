const SUBMIT_BTN = document.querySelector('.submit-btn')

SUBMIT_BTN.addEventListener('click', (event) => {
	event.preventDefault()

	let email = document.getElementById('email').value
	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailPattern.test(email)) {
		document.querySelector('.email--error').style.display = 'block'
		document.getElementById('email').classList.remove('email-input')
		document.getElementById('email').classList.add('input--error')
	}
	else {
		document.querySelector('.email--error').style.display = 'none'
		document.getElementById('email').classList.remove('input--error')
		document.getElementById('email').classList.add('email-input')
		window.location.href = 'success-page.html'
	}
})
