class AbstractResource {
  constructor(entity) {
    this.baseURL = "http://localhost:8080/mantenimiento-WEB/rs/" + entity + "/";
  }

  findAll() {
    fetch(this.baseURL + "?pagesize=0").then(
      response => {
        if (response.ok) {
          return response.json();
        } else {
          return "[]";
        }
      });
  }

  findByRange(first, pagesize) {
    if (first > 0 && pagesize >= 0) {
      let url = this.baseURL + "?pagesize=" + pagesize + "&first=" + first;

      fetch(url).then(function (respuesta) {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          throw new Error("Error al conectarse al servidor");
        }

      });
    } else {
      throw new Error("Parametros no validos");
    }
  }


}
export default AbstractResource;