$(document).ready(function() {
  $('#clienteFormulario').on('submit', function(event) {
      event.preventDefault();
      
      let nombre = $('#nombre').val();
      let apellido = $('#apellido').val();
      let correo = $('#correo').val();
      let genero = $('#genero').val();
      let fechaNacimiento = $('#fechaNacimiento').val();
      
      alert("Nombre: " + nombre + "\n" +
            "Apellido: " + apellido + "\n" +
            "Correo: " + correo + "\n" +
            "Género: " + genero + "\n" +
            "Fecha de Nacimiento: " + fechaNacimiento);
  });
});