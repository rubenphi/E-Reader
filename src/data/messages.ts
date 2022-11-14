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
    portada: getImage(0),
    content: 
    '<p>Hace d&iacute;as que no recuerdo lo que sucedi&oacute;, pues mi vida no es la misma despu&eacute;s de lo ocurrido, no me puedo mirar ni en un espejo, miro mi reflejo y no s&eacute; qui&eacute;n es el que est&aacute; ah&iacute;, no me reconozco, un hombre mal oliente despeinado, en si un bastardo completo. Hace diez d&iacute;as que no salgo a la calle pues me da miedo ser reconocido.&nbsp;</p>' + 
    '<p>La verdadera pregunta aqu&iacute; es c&oacute;mo llegue a donde estoy, pues todo en 2000 pues fue el a&ntilde;o en el que ocurri&oacute; todo.&nbsp; <br /></p>' + 
    '<p><strong>D&iacute;a 1</strong>&nbsp;</p>' + 
    '<p>Ese d&iacute;a me dirig&iacute;a tranquilamente al supermercado, pues necesitaba conseguir unas cosas para mi departamento, tom&eacute; lo que necesitaba del estante y me dirig&iacute; a la caja, sin embargo, a la hora de pagar note algo, raro pues el cajero no pas&oacute; mis productos por la caja registradora, sino que simplemente me cobr&oacute;, sonar&iacute;a algo paranoico si no me hubiera dado cuenta de su sonrisa tan asustada. &nbsp;</p>' + 
    '<p>Sal&iacute; del lugar y de pronto sent&iacute; un gran golpe en mi cabeza....&nbsp;</p>' + 
    '<p>Despert&eacute; en una habitaci&oacute;n vac&iacute;a con demasiado mal olor, estaba atado. Los pensamientos llegaron a mi cabeza y no supe m&aacute;s que hacer que romper en llanto y gritar mientras tambaleaba la silla. En ese preciso momento se abre la puerta y una persona con una m&aacute;scara de cerdo me hace tomar un arma, me tapa los ojos y me obliga a jalar el gatillo mientras sonaban gritos de una mujer. Yo con l&aacute;grimas en los ojos lo hice, no pod&iacute;a ver lo que hab&iacute;a hecho. Pararon los gritos mientras ellos se burlaban de m&iacute;.&nbsp;&nbsp;</p>' + 
    '<p>Uno de ellos toma una jeringa y me la clava en la pierna....&nbsp;</p>' + 
    '<p><strong>D&iacute;a 2</strong>&nbsp;</p>' + 
    '<p>Despierto con un gran dolor en la cabeza, lo primero que se me ocurre es que fue un sue&ntilde;o, pero mientras abro los ojos me doy cuenta de que estoy lleno de sangre en un callej&oacute;n. Lo primero que hice fue gritar como un loco, ten&iacute;a demasiado miedo y me encontraba demasiado hist&eacute;rico. Llame r&aacute;pido a la polic&iacute;a desde mi tel&eacute;fono, mucho despu&eacute;s llego una patrulla, pero los polic&iacute;as me intentaron esposar, casi al instante mi instinto me inst&oacute; a salir corriendo, pero el callej&oacute;n no ten&iacute;a salida, as&iacute; que me sub&iacute; r&aacute;pido por las escaleras de un departamento mientras escuchaba a los polic&iacute;as accionar sus armas. Llegu&eacute; al &uacute;ltimo piso y solo me quedaban dos opciones: uno, entregarme a la polic&iacute;a; dos, saltar en ese momento. Para m&iacute; se detuvo el tiempo, salt&eacute;, mientras estaba en el aire una bala impacta en mi pie. Ca&iacute; en un edificio cercano, pero no pod&iacute;a hacer m&aacute;s que retorcerme de dolor, volv&iacute; a lanzarme, pero esta vez me agarr&eacute; de una baranda y entr&eacute; a un departamento vac&iacute;o&hellip;.&nbsp;</p>' + 
    '<p><strong>D&iacute;a 3</strong>&nbsp;</p>' + 
    '<p>Me despierto un d&iacute;a despu&eacute;s, mareado, result&oacute; que me desmay&eacute; por toda la sangre que derram&eacute;, no tuve m&aacute;s remedio que ir a la cocina agarrar un cuchillo y mientras mord&iacute;a mi camisa arrancarme la bala. Despu&eacute;s de eso me quede a descansar, tome un poco de ropa de la persona que viv&iacute;a ah&iacute;, a pesar de que me quedara muy grande. En ese momento estaba tan asustado que puse una silla en la puerta para evitar que fuera abierta, encend&iacute; el televisor y r&aacute;pidamente coloque las noticias, vi que yo estaba en los titulares. pues presuntamente yo era el asesino de 4 personas, al parecer mi ADN estaba en una de las armas, informaban que andaba suelto en la calle y era peligroso. Empec&eacute; a llorar por la impotencia de no poder hacer nada al respecto y de el enojo que ten&iacute;a golpe&eacute; al televisor. <br /></p>' + 
    '<p><strong>D&iacute;a 4</strong>&nbsp;</p>' + 
    '<p>Al d&iacute;a siguiente tom&eacute; un ba&ntilde;o, me cambi&eacute; de ropa, not&eacute; que en el apartamento hab&iacute;a fotos aqu&iacute; y all&aacute; de un hombre de edad, tal vez se encontraba al cuidado de su familia porque el apartamento parec&iacute;a desierto, convenientemente encontr&eacute; una silla de ruedas en la casa, decid&iacute; usarla para no ser reconocido y de paso disimular la marca de bala en mi pie. Mi plan era ir a mi departamento, pues no me iba a quedar de brazos cruzados como un imb&eacute;cil, juro que encontrar&eacute; al que me hizo esto y lo har&eacute; pagar. Solo quiero saber si mi familia est&aacute; bien, me encamin&eacute; hacia mi departamento con la silla de ruedas, mucha gente me ayudo a cruzar la calle, me sent&iacute;a mal al respecto, pero el &uacute;nico pensamiento que recorr&iacute;a mi cabeza era pensar que hab&iacute;an secuestrado a mi familia o que los estaban interrogando. Llegu&eacute;, pero no hab&iacute;a nadie y peor a&uacute;n no me dejaban pasar pues la zona estaba restringida, nadie pod&iacute;a entrar ni salir, le pregunt&eacute; al guardia por el nombre de mi esposa y no me dijeron nada al respecto. En ese momento abandon&eacute; el lugar y la necesidad de llorar se apoder&oacute; de m&iacute; simplemente necesitaba respuestas&hellip;. <br /></p>' + 
    '<p><strong>D&iacute;a 5</strong></p>' + 
    '<p>Hoy es el d&iacute;a donde mandare toda mi vida al carajo, estoy harto de esperar. Fui corriendo a la casa de mi vecino y salt&eacute; la valla para entrar al alcantarillado, intent&eacute; destaparlo, pero mi fuerza no era suficiente, as&iacute; que agarr&eacute; una barra de metal para hacer palanca y lograr abrirla. Entr&eacute; y a pesar del mal olor la adrenalina que sent&iacute;a lo anulaba por completo. Camin&eacute; algunos metros lejos para encontrar otra alcantarilla unos metros m&aacute;s all&aacute;, arroj&eacute; la barra de metal por all&iacute;, para hacer ruido y distraer hacia la direcci&oacute;n opuesta a la que me encontraba. Luego, a trav&eacute;s de los ductos logr&eacute; entrar a uno de los ba&ntilde;os, recorro el edificio evitando a los guardias, llego a mi piso. Mi apartamento sellado por cinta policial y fuera de all&iacute; varios investigadores. </p>' + 
    '<p>Tal como lo hab&iacute;a imaginado, los guardias estaban interrogando a mi vecino, ingres&eacute; ahora a los ductos de ventilaci&oacute;n, me arrastro en direcci&oacute;n a mi apartamento hasta que por fin encuentro un ducto que me permite entrar. Busco mi caja fuerte y logro sacar mi revolver. En aquel instante escucho como se abre la puerta. Llena de p&aacute;nico disparo, era un oficial, el ruido del arma alerta a los otros oficiales y en menos de 5 segundos ya hab&iacute;an entrado 5 de ellos. </p>' + 
    '<p>No hay salida, no hay escape, he matado a un hombre, solo una opci&oacute;n se me presenta, me apresuro y corro atravesando el sal&oacute;n, salto hacia la ventana, puedo sentir como el cristal se rompe, varios metros abajo puedo ver la piscina, estaba acabado, no hab&iacute;a escapatoria as&iacute; que acepte mi destino mientras ve&iacute;a un t&uacute;nel con una luz.&nbsp;</p>' + 
    '<p><strong>???</strong>&nbsp;</p>' + 
    '<p>Despert&eacute; en una habitaci&oacute;n &iquest;acaso me arrestaron? Fue lo &uacute;nico que pens&eacute;, pero en realidad estaba ileso, no ten&iacute;a marcas de balas, r&aacute;pidamente mir&eacute; mi antebrazo, estaba intacto. Empez&oacute; a sonar el tel&eacute;fono... ten&iacute;a miedo de contestar, pero &iquest;qu&eacute; pod&iacute;a hacer? no me quedaba de otra, r&aacute;pidamente contesto y alguien con voz rocosa me dice que me puede ayudar; &eacute;l sabe la forma de volver todo a la normalidad, me prometi&oacute; venganza&hellip;. yo con voz alterada pregunt&eacute; &iquest;por qu&eacute;? pero las palabras que me dijo fueron un martirio &ldquo;tu esposa est&aacute; muerta&rdquo; lagrima recorri&oacute; mi cara, no sab&iacute;a si gritar &eacute;l menciono que sab&iacute;a c&oacute;mo acabar con esto. Me dio un video, un arma y unas pastillas, me dijo que fuera al supermercado donde me secuestraron para interrogar al cajero.... se me hiso bastante raro que &eacute;l supiera de todo esto cuando yo nunca lo mencion&eacute;, pero no me quedaba de otra&nbsp;</p>' + 
    '<p><strong>Faltan 3 d&iacute;as</strong>&nbsp;</p>' + 
    '<p>&ldquo;Es momento&rdquo; me dec&iacute;a en mi cabeza mientras me dirig&iacute;a hacia al supermercado, cerca de la playa hab&iacute;a demasiados carteles de &ldquo;se busca&rdquo; con mi cara. Siento que hay miles de personas mir&aacute;ndome, y con el mero hecho de ver un polic&iacute;a siento demasiado p&aacute;nico. Tom&eacute; una de las pastillas del frasco, sin revisar qu&eacute; era la tom&eacute;. Mi alrededor se puso completamente blanco y negro a excepci&oacute;n de unas partes que se retorc&iacute;an entre colores, mientras que escuchaba</p>' + 
    '<p><s>No mereces, no lo mereces</s></p>' + 
    '<p>Veo demasiadas sombras a mi alrededor y como si se repitiera un caset veo todo lo que viv&iacute;, pero en un solo parpadeo y sin raz&oacute;n alguna aparezco en la tienda apunt&aacute;ndole al tendero en la cabeza, estoy seguro de que yo no plane&eacute; esto. Me encuentro all&iacute;, sin decir palabra, con el arma en la mano y el tendero me grita me grita&nbsp;</p>' + 
    '<p>- Se lo juro, no s&eacute; de qu&eacute; habla, no s&eacute; quienes son esos de los que me habla, se lo juro, por favor d&eacute;jeme ir. </p>' + 
    '<p>&iquest;C&oacute;mo llegu&eacute; aqu&iacute;? No recuerdo nada, dudo de lo que he hecho, dudo de m&iacute; mismo y del control de mi cuerpo. </p>' + 
    '<p>- T&uacute; sabes muy bien de qu&eacute; hablo. Digo sin saber c&oacute;mo, era como si viera a trav&eacute;s de los ojos de otra persona. </p>' + 
    '<p>Atemorizado el cajero escribe r&aacute;pidamente una direcci&oacute;n, me la entrega y huye: &ldquo;no, no puede escapar llamar&aacute; a la polic&iacute;a&rdquo; el miedo se apodera de m&iacute; y aprieto el gatillo, esta vez consciente de m&iacute;, temeroso, pero fui yo quien dispar&oacute;. </p>' + 
    '<p>Para su suerte la bala le da en un pie, las alarmas se encienden, ahora el que debe huir soy yo, salgo corriendo de la tienda tomo, una bicicleta que estaba en el lugar y me doy a la fuga. Recorro varias calles y busco en mi bolsillo &iexcl;Demonios deje la direcci&oacute;n en el mostrador! Pero al volver el lugar estaba lleno de polic&iacute;as, me escabull&iacute; por un lugar y agarr&eacute; el papel. un polic&iacute;a me descubri&oacute; me apunta voy girando lentamente, pero en cuanto el polic&iacute;a ve mi rostro, me dispara.&nbsp;</p>' + 
    '<p><strong>Faltan 2 d&iacute;as</strong></p>' + 
    '<p><s>Jajaja est&aacute;s bien</s></p>' + 
    '<p>Despierto como si hubiera sido una pesadilla y para sorpresa de nadie estoy intacto, con el papel en mi bolsillo, enciendo el televisor coloco las noticias. En el canal cuentan la historia de &ldquo;El carnicero&rdquo;, se refer&iacute;an a m&iacute;, hablan de como asesin&eacute; a un polic&iacute;a y escape del lugar, pero en su noticia m&aacute;s importante ten&iacute;an un testigo que se encontraba mal herido en un hospital &iexcl;Sab&iacute;a que ten&iacute;a que haber rematado ese maldito! Suena el timbre, el ruido me hace entrar en alerta y le levanto de golpe, acerco el ojo a la mirilla de la puerta, no hay nadie, abro y encuentro un paquete, lo abro con cuidado y encuentro un uniforme de m&eacute;dico, un carn&eacute;, un silenciador y una nota que dec&iacute;a: </p>' + 
    '<p>&ldquo;Supongo que ya sabes que tienes que hacer&rdquo;&nbsp;</p>' + 
    '<p>Me prepar&eacute;, llegu&eacute; al hospital utilic&eacute; el carn&eacute; para abrir la puerta, aliviado descubr&iacute; que funciona. Me dirig&iacute; hacia la habitaci&oacute;n, tom&eacute; una de las camillas y corr&iacute; fingiendo ir en camino a atender alguna urgencia. Me tom&eacute; una pastilla, todo a mi alrededor tomo color blanco y negro, los lugares donde hab&iacute;an guardias se tornaban de color azul y rojo por lo cual ten&iacute;a una mayor ventaja, estaba a punto de llegar a la puerta cuando un guardia me vio.&nbsp;</p>' + 
    '<p>- Manos arriba &ndash; Me grit&oacute; </p>' + 
    '<p>Yo sin controlar mi cuerpo saco la pistola con silenciador y asesino al guardia. Mi cuerpo lo ignora por completo, pero sabes que esta vez no le disparo por segunda y tercera vez hasta acabar con su vida. Entro a la habitaci&oacute;n y asfixio al testigo con la almohada, pero otra vez con un solo parpadeo estaba afuera&nbsp;</p>' + 
    '<p><strong>Falta 1 d&iacute;a</strong>&nbsp;</p>' + 
    '<p>Shhh silencio&nbsp;</p>' + 
    '<p><s>No tienes el control</s></p>' + 
    '<p>Esta noche estoy preparado, hoy sabre qui&eacute;n fue el maldito que ocasion&oacute; todo esto, por fin lo ver&eacute; a los ojos y le har&eacute; pagar por todo lo que me hizo. Miro la direcci&oacute;n </p>' + 
    '<p><em>&ldquo;Matadero de cabrera en 16301 MB 122nd Ave</em>&nbsp;</p>' + 
    '<p>Mientras caminaba hacia al lugar me fij&eacute; que, sin necesidad de tomar la pastilla, pod&iacute;a sentir sus efectos, mi visi&oacute;n de nuevo se torn&oacute; en blanco y negro, solo algunas zonas tomaban color. </p>' + 
    '<p>De pronto una figura aparece sobre el techo de un edificio, trato de ver mejor, pero su silueta se confunde con la noche, es un hombre, s&iacute;, puedo ver ahora que es un hombre, recorre el borde, temeroso, indeciso, s&eacute; lo que piensa hacer, pero antes de que pueda si quiera acercarme un poco veo como salta.&nbsp;</p>' + 
    '<p>-&ldquo;esto llamar&aacute;, la atenci&oacute;n, debo alejarme de aqu&iacute;&rdquo;- Pienso &ndash; &ldquo;hoy no es un buen d&iacute;a para algunos, quisiera estar en su lugar y ser yo quien se lace desde lo alto de aquel edificio&rdquo;- </p>' + 
    '<p>Dejo de pensar en aquel hombre&nbsp;</p>' + 
    '<p>- &ldquo;debo enfocarme&rdquo; - me digo&nbsp;</p>' + 
    '<p>Me dirijo hacia al lugar, pero veo que est&aacute; sellado, tomo una segueta que llevaba en mi mochila y corto la cadena. Al abrir la puerta siento un olor muy familiar a mi cabeza, pero no me queda tiempo para pen&hellip;. me siento mareado y siento un pinchazo en mi cuello&nbsp;</p>' + 
    '<p>qu.... est.... pasan....</p>' + 
    '<p><strong>Es hoy</strong></p>' + 
    '<p><s>Bienvenido</s></p>' + 
    '<p>Abro lentamente mis ojos y veo esa maldita mascara. </p>' + 
    '<p>-Ven aqu&iacute; maldito - grit&eacute; </p>' + 
    '<p>Ninguna palabra, ning&uacute;n movimiento, solo un mensaje en la pared &ldquo;M&aacute;tame, y ser&aacute;s lo que juraste destruir&rdquo; no me import&oacute;, para ese momento todo me val&iacute;a un carajo, en un arrebato de ira le dispar&eacute;, no pueden juzgarme, cualquiera lo habr&iacute;a hecho en mi lugar, pero al presionar el gatillo escuch&eacute; sus carcajadas.</p>' + 
    '<p><s>Jajaja bien hecho</s></p>' + 
    '<p>Me acerqu&eacute; para quitarle la m&aacute;scara, pero lo que vi me dej&oacute; at&oacute;nito, era mi esposa. Ahora todo cobraba m&aacute;s sentido, no hice m&aacute;s que llorar frente a tal escena, me mir&eacute; en un espejo y lo entend&iacute; todo. Mir&eacute; mis manos, mir&eacute; mis ropas, todo estaba manchado de sangre, de la nada todas mis heridas hab&iacute;an regresado, la etiqueta en las pastillas hab&iacute;a cambiado, las letras &ldquo;LSD&rdquo; pod&iacute;an leerse ahora claramente.</p>' + 
    '<p>Todas esas personas que me observaban no eran m&aacute;s que mis miedos, nunca existieron, solo fue un juego de mi mente. Cada que sal&iacute;a de mi casa y regresaba, hab&iacute;a sido movido por una alucinaci&oacute;n, por los efectos de esa maldita droga. No s&eacute; cu&aacute;nta gente mate sin darme cuenta, yo pens&eacute; que era la v&iacute;ctima, pero resulta que era al rev&eacute;s. Las veces que mor&iacute; eran falsas, y aquellas llamadas, aquellas misiones a cambio de una supuesta ayuda, no fueron m&aacute;s que las instrucciones del verdadero asesino, que me us&oacute; como un juguete para cubrir sus cr&iacute;menes, llev&aacute;ndome a m&iacute; a primera fila, eso explica porque me dijo que mi esposa hab&iacute;a muerto me convert&iacute; en lo que m&aacute;s odiaba&nbsp;</p>' + 
    '<p><s>Ahora est&aacute;s feliz</s></p>'
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