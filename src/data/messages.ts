import { Audio, getAudio } from '../data/audios';
import { Image, getImage } from '../data/portadas';

export interface Message {
  fromName: string;
  subject: string;
  id: number;
  audio: Audio | undefined;
  portada: Image | undefined; 
  content: string;
}

const messages: Message[] = [
  {
    fromName: 'Distorsión',
    subject: 'Juan Camilo Yate',
    id: 0,
    audio: undefined,
    portada: undefined,
    content: ""
  },
  {
    fromName: 'Venganza',
    subject: 'Any Rubio',
    audio: getAudio(1),
    portada: getImage(1),
    id: 1,
    content: '		<p>Era un día casual, como cualquier otro y la familia estaba reunida compartiendo, cuando de repente tocaron la puerta. El padre de María se levantó a ver quién era, cuando abrió la puerta eran unos hombres armados con trajes negros, sin decir nada empezaron a matar a sus padres, ella, al escuchar esto, se escondió en la nevera. Después, al no escuchar nada salió y vio a toda su familia muerta, en medio del temor llamo a su tía, quien al llegar momentos después empezó a llamar a la policía. La policía averiguó, pero nunca encontraron quién fue el asesino. María, una niña morena de cabello negro y ojos azules, siempre quedo con rencor.  ' + 
    '			<br/>' + 
    '			<br/>' + 
    'Al pasar los años ella se convirtió en una espía, no para ayudar a los demás, si no para lograr su objetivo, buscar a los que mataron a su familia. Una de las pistas que tenía era el recuerdo de un tatuaje que tenía uno de aquellos hombres de negro, por lo que decidió averiguar su significado, luego de investigar en muchos sitios se enteró que era el símbolo que usaba una pandilla cuyo nombre era Strey. Al revisar los diarios y las noticias supo que era una de las bandas más sanguinarias de la ciudad, esto la intrigó a un más, quiso saber por qué gente tan mala había escogido a su familia como víctimas; no tenían dinero y no se metían con nadie. ' + 
    '			<br/>' + 
    '			<br/>' + 
    'Pudo ver por sus investigaciones que aquella banda se centraba en matar gente adinerada, sin embargo, esto no tenía sentido para ella, ni para lo que había pasado con su familia, que no era precisamente una familia con mucho dinero. Se enteró tiempo después que habían capturado a varios integrantes de Strey por lo que ideó un plan, se metería en problemas para ser capturada, y así, durante la noche, escapaba de su celda para ajustar cuentas, uno a uno los fue eliminando hasta que por fin uno, entre golpes y torturas confesó algo: Un tal Drago había dado la orden, y todas las noches él asistía a un bar llamado Alcalá, de repente el ruido y los gritos del hombre alertaron a los guardias que rápidamente fueron a investigar. Ya en la celda no había nadie más que el prisionero mal herido que exhalaba su último aliento.  ' + 
    '			<br/>' + 
    '			<br/>' + 
    'Los cálculos de María fueron perfectos y logró escapar, ya tenía la información que quería, ahora solo era cuestión de encontrar el bar, sin embargo, no fue fácil, ni siquiera su amigo de confianza que era investigador experto sabía de ese lugar, pero luego de recabar algunos datos lo encontró; la razón por la que fue difícil es que era un bar clandestino, exclusivo de la mafia. Analizó la situación y solo encontró una opción: secuestró a una de las empleadas del bar, robó su uniforme y tomó su lugar; puso en la bebida de Drogo un narcótico y se lo llevó de allí.  ' + 
    '			<br/>' + 
    '			<br/>' + 
    'Unas horas después Drogo se despierta, ve que está atado y no hay forma de escapar. María al ver que su enemigo despierta lo interroga buscando una respuesta  ' + 
    '			<br/>' + 
    '			<br/>' + 
    ' - ¡¿por qué?! ¡¿por qué asesinó a mi familia?!  ' + 
    '			<br/>' + 
    '			<br/>' + 
    '- No sé de qué hablas muchacha – respondió él – he matado a muchas personas, muchas familias.   ' + 
    '			<br/>' + 
    '			<br/>' + 
    '-¡Maldito! Usted mata gente rica para quedarse con su dinero, pero mis padres eran pobres, ellos no tenían nada - Gritó mientras lo golpeaba una y otra vez. ' + 
    '			<br/>' + 
    '			<br/>' + 
    '-¡Basta!, está bien, te contaré la verdad. Tus padres no eran lo que tú creías, sí tenían dinero, eran una de las familias más ricas de la ciudad, lo que tú viviste fue una fachada, ellos sabían esconder el dinero, pero nadie se esconde de mí, menos cuando cuento con informantes como aquel amigo de tu familia que fue quien me contrató para matarlos y así poder quedarse con el dinero. ' + 
    '			<br/>' + 
    '			<br/>' + 
    'En ese momento sirenas empezaron a sonar, María sabía que no saldría bien librada de esto, no tenía otra salida, le disparó a él y luego se disparó, a fin de cuentas, el objetivo que se había planteado en la vida estaba completo. ' + 
    '		</p>' 
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);