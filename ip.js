const url = 'https://bunkerbd.000webhostapp.com/salvar.php';

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const formData = new FormData();
    formData.append('ip', ip);

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        console.log('Endereço IP salvo com sucesso');
      } else {
        console.error('Erro ao salvar o endereço IP');
      }
    })
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
