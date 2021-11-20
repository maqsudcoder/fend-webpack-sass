function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;

  Client.checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:8081/test')
    .then((res) => {
      console.log('res is recieved');
      return res.json();
    })
    .then(function (data) {
      console.log('inner html ');
      document.getElementById('results').innerHTML = data.message;
    });
}

export { handleSubmit };
