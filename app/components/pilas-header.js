import Component from '@ember/component';

export default Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-default'],
  mostrarDialogoAyuda: false,
  store: Ember.inject.service(),
  router: Ember.inject.service(),

  didInsertElement() {
    this.fileInputProyecto().change((event) => {
      let archivo = event.target.files[0];

      if (archivo) {
        this.leerSolucionWeb(archivo)
          .then((contenido) => this.cargarProyecto(contenido))
          .catch(alert);
      }

      this.limpiarInput(this.fileInputProyecto()); // Fuerza a que se pueda cargar dos o más veces el mismo archivo
      return false;
    });
  },

  leerSolucionWeb(archivo) {
    var reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = (err) => reject(err);
      reader.onload = (event) => resolve(event.target.result);
      reader.readAsText(archivo);
    })
  },

  cargarProyecto(contenido){
    var desafio = JSON.parse(contenido);
    desafio.id = 666;
    this.store.createRecord('desafio', desafio);
    this.router.transitionTo('desafio', '666');
  },

  fileInputProyecto() {
    return this.$("#cargarProyectoInput");
  },

  limpiarInput(input) {
    input.value = null;
  },

  actions: {
    abrirAyuda() {
      this.set('mostrarDialogoAyuda', true);
    },

    importarProyecto(){
      this.fileInputProyecto().click();
    },
  }
});
