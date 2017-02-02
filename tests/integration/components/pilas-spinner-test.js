import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pilas-spinner', 'Integration | Component | pilas spinner', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{pilas-spinner}}`);
  assert.equal(this.$(".spinner")[0].className, 'spinner ', "Debe tener las clases normales del spinner");

  this.render(hbs`{{pilas-spinner centered=true}}`);
  assert.equal(this.$(".spinner")[0].className, 'spinner spinner-centered', "Deaabe tener las clases normales del spinner");

});
