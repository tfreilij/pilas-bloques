/* globals ElCangrejoAguafiestas */
import bloques from 'pilas-engine-bloques/actividades/bloques';

var {Procedimiento} = bloques;


var actividadElCangrejoAguafiestas = {
  nombre: 'El cangrejo aguafiestas',
  id: 'ElCangrejoAguafiestas',
  enunciado: 'A definir.',
  consignaInicial: 'A definir.',

  escena: ElCangrejoAguafiestas,
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,
  procedimientos: [Procedimiento],

  // TODO: aca irian atributos iniciales que se desean para un personaje
  variables: [],

  control: [],
  expresiones: [],
  acciones: [],
  sensores: []
};

export default actividadElCangrejoAguafiestas;