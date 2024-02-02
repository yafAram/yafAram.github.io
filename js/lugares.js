var estados = {
    EstadosUnidos: ["California", "Texas"],
    Canada: ["Ontario", "Quebec"]
  };
  
  var municipios = {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Houston", "Dallas"],
    Ontario: ["Toronto", "Ottawa"],
    Quebec: ["Montreal", "Quebec City"]
  };
  
  var localidades = {
    "Los Angeles": ["Downtown", "Hollywood", "Santa Monica"],
    "San Francisco": ["Golden Gate", "Chinatown"],
    Houston: ["Downtown", "Galleria"],
    Dallas: ["Uptown", "Deep Ellum"],
    Toronto: ["Downtown", "Scarborough"],
    Ottawa: ["Centretown", "Kanata"],
    Montreal: ["Old Montreal", "Plateau Mont-Royal"],
    "Quebec City": ["Old Quebec", "Saint-Roch"]
  };
  
  
  function cargarEstados() {
    var paisSeleccionado = document.getElementById("pais").value;
    var estadoSelect = document.getElementById("estado");
    estadoSelect.innerHTML = "<option value='' selected>Seleccione Estado</option>";
  
    if (estados[paisSeleccionado]) {
      estados[paisSeleccionado].forEach(function (estado) {
        var option = new Option(estado, estado);
        estadoSelect.add(option);
      });
    }
  
    cargarMunicipios();
  }
  
  function cargarMunicipios() {
    var estadoSeleccionado = document.getElementById("estado").value;
    var municipioSelect = document.getElementById("municipio");
    municipioSelect.innerHTML = "<option value='' selected>Seleccione Municipio</option>";
  
    if (municipios[estadoSeleccionado]) {
      municipios[estadoSeleccionado].forEach(function (municipio) {
        var option = new Option(municipio, municipio);
        municipioSelect.add(option);
      });
    }
  
    cargarLocalidades();
  }
  
  function cargarLocalidades() {
    var municipioSeleccionado = document.getElementById("municipio").value;
    var localidadSelect = document.getElementById("localidad");
    localidadSelect.innerHTML = "<option value='' selected>Seleccione Localidad</option>";
  
    if (localidades[municipioSeleccionado]) {
      localidades[municipioSeleccionado].forEach(function (localidad) {
        var option = new Option(localidad, localidad);
        localidadSelect.add(option);
      });
    }
  }
  
  function mostrarDatos() {
    var pais = document.getElementById("pais").value;
    var estado = document.getElementById("estado").value;
    var municipio = document.getElementById("municipio").value;
    var localidad = document.getElementById("localidad").value;
  
    var datosSeleccionadosDiv = document.getElementById("datosSeleccionados");
    datosSeleccionadosDiv.innerHTML = "<h4>Datos Seleccionados:</h4>" +
      "<p><strong>País:</strong> " + pais + "</p>" +
      "<p><strong>Estado:</strong> " + estado + "</p>" +
      "<p><strong>Municipio:</strong> " + municipio + "</p>" +
      "<p><strong>Localidad:</strong> " + localidad + "</p>";
  }
  