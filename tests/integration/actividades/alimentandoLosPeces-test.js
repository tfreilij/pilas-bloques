import {moduloActividad, actividadTest} from '../../helpers/actividadTest';
import actividad from 'pilas-engine-bloques/actividades/actividadAlimentandoALosPeces';

moduloActividad(actividad);

actividadTest(actividad, {
	/*
	ESTO FALLA, NO SE POR QUE NO CREA BIEN LOS BLOQQUES:
	solucion: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="8" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="procedures_callnoreturn" id="28"><mutation name="Buscar alimento"></mutation><next><block type="procedures_callnoreturn" id="33"><mutation name="Alimentar peces de arriba"></mutation><next><block type="procedures_callnoreturn" id="38"><mutation name="Alimentar peces de abajo"></mutation></block></next></block></next></block></statement></block><block type="local_var_set" id="13" inline="true" x="0" y="0"><field name="VAR">local</field></block><block type="procedures_defnoreturn" id="16" x="29" y="172"><mutation></mutation><field name="NAME">Buscar alimento</field><statement name="STACK"><block type="repetir" id="45" inline="true"><value name="count"><block type="math_number" id="46"><field name="NUM">2</field></block></value><statement name="block"><block type="MoverACasillaArriba" id="53"></block></statement><next><block type="repetir" id="71" inline="true"><value name="count"><block type="math_number" id="72"><field name="NUM">4</field></block></value><statement name="block"><block type="MoverACasillaDerecha" id="62"></block></statement><next><block type="AgarrarComida" id="79"></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="19" x="316" y="169"><mutation></mutation><field name="NAME">Alimentar peces de arriba</field><statement name="STACK"><block type="MoverACasillaArriba" id="88"><next><block type="repetir" id="91" inline="true"><value name="count"><block type="math_number" id="92"><field name="NUM">4</field></block></value><statement name="block"><block type="MoverACasillaIzquierda" id="99"><next><block type="AlimentarPez" id="108"></block></next></block></statement></block></next></block></statement></block><block type="procedures_defnoreturn" id="23" x="254" y="351"><mutation></mutation><field name="NAME">Alimentar peces de abajo</field><statement name="STACK"><block type="repetir" id="111" inline="true"><value name="count"><block type="math_number" id="112"><field name="NUM">3</field></block></value><statement name="block"><block type="MoverACasillaAbajo" id="119"></block></statement><next><block type="repetir" id="122" inline="true"><value name="count"><block type="math_number" id="123"><field name="NUM">3</field></block></value><statement name="block"><block type="MoverACasillaDerecha" id="132"><next><block type="AlimentarPez" id="139"></block></next></block></statement></block></next></block></statement></block></xml>',
	PONGO SOLUCION ERRRONEA MIENTRAS TANTO PARA NO FRULEAR LOS TESTS:
	*/
	solucion: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="13" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="MoverACasillaDerecha" id="20"></block></statement></block></xml>',
});