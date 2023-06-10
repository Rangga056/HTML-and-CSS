const submitButton = document.querySelector('.send-button');

submitButton.addEventListener('click', function () {
  const name  = document.querySelector('#name').value;
  const email  = document.querySelector('#email').value;
  const number  = document.querySelector('#number').value;
  const message = document.querySelector('#message').value;

  alert(`Pesan dari \n
 Nama: ${name},\n Email: ${email},\n No: ${number},\n Pesan: ${message}
  `)
})
