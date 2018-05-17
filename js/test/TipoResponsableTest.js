import TipoResponsableResource from "../boundary/TipoResponsableResource.js";

let trr = new TipoResponsableResource();

describe('findAll',async () => {
    it('get list of tipo responsable',async () => {

        let resultado = trr.findAll();
        chai.assert.isArray(resultado);
        console.log(resultado);

    });
});





