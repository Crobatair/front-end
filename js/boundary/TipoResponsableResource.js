import AbstractResource from "./AbstractResource.js";

class ResponsableResource extends AbstractResource {

    constructor() {
        super("TipoResponsable");
    }

    findByNameLike(name, first, pagesize) {
        if (name != null) {
            if (first > 0 && pagesize >= 0) {
                pagesize = pagesize == 0 ? 5 : pagesize;
                let url = this.baseURL + "/" + name + "/?pagesize=" + pagesize + "&first=" + first;

                fetch(url).
                    then(response => {
                        if (response.ok) {
                            console.log(response.json());
                            return response.json();
                        } else {
                            throw new Error("Not OK");
                        }

                    });
            } else {
                throw new Error("Error en el tamaño de pàgina y primer elemento")
            }
        } else {
            throw new Error("El nombre es nulo");
        }
    }


}
export default ResponsableResource;