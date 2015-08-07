import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['nw-zoom'],
  zoomValue: 100,
  zoom: Ember.inject.service(),

  canZoomIn: Ember.computed('zoomValue', function() {
    return this.get('zoomValue') < 120;
  }),

  canZoomOut: Ember.computed('zoomValue', function() {
    return this.get('zoomValue') > 80;
  }),

  cambiarZoom: Ember.observer('zoomValue', function() {
    var gui = window.requireNode('nw.gui');
    var win = gui.Window.get();
    this.get('zoom').setValue(this.get('zoomValue'));

    win.zoomLevel = (this.get('zoomValue') - 100) / 10;
  }),

  onStart: Ember.on('init', function() {
    this.set('zoomValue', this.get('zoom').getValue());
    this.cambiarZoom();
  }),

  actions: {
    zoomIn() {
      this.set('zoomValue', this.get('zoomValue') + 10);
    },
    zoomOut() {
      this.set('zoomValue', this.get('zoomValue') - 10);
    },
    zoomRestore() {
      this.set('zoomValue', 100);
    }
  },

});
