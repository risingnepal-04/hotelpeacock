  /**
   To redirect the after submitting room form
   */
  var form = document.getElementById("room-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("room-form ");
    var data = new FormData(event.target);
    form.querySelector('.loading').classList.add('d-block');

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      form.querySelector('.loading').classList.remove('d-block');
      form.querySelector('.sent-message').classList.add('d-block');
      form.reset();
    }).catch(error => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      form.querySelector('.error-message').innerHTML = error;
      form.querySelector('.error-message').classList.add('d-block');
    });
  }
  form.addEventListener("submit", handleSubmit)


