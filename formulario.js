document.addEventListener('submit', function procesar_registro(){
    event.preventDefault();

    let _datos = {
        nombre: "Juana",
        apellido: "Lopez", 
        fecha_nacimiento: "05031993"
      }

    _datos.nombre = document.getElementById("nombre").value;
    _datos.apellido = document.getElementById("apellido").value;
    _datos.fecha_nacimiento = document.getElementById("fecha_nacimiento").value;

    fetch('https://jsonplaceholder.typicode.com/users', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json));

  alert("Informacion enviada con exito");
  }

);