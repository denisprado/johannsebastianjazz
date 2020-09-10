import i18next from "i18next";

var my_keys = [
  "player",
  "video",
  "press",
  "photos",
  "diary",
  "diary_fecha",
  "diary_ciudad",
  "diary_local",
  "about__text",
  "about__biografias__bio_alexis",
  "about__biografias__bio_salvador",
  "contacto__title"
];

i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          player: "House of Mirrors",
          video: "video",
          press: "press",
          photos: "galery",
          diary: "calendary",
          diary_local: "Place",
          diary_ciudad: "City",
          diary_fecha: "Date",
          contacto__title: "contact",
          about__text:
          "<p class='capital' lang='en'>Johann Sebastian Jazz are a piano formed in 2014 by Iñaki Salvador and Alexis Delgado. Since then, they have played in the most important festivals in Spain, including Jazzaldia (the San Sebastian Jazz Festival and the Madrid International Jazz Festival. They have also played at emblematic venues such as the Café Central and classical venues like La Fundación Juan March. In 2019, the duo plan to launch their second album, with new Bach renditions and a more mature and profound revision of the repertoire they have offered in recent years.</p><p>***</p><p>Johann Sebastian Jazz is a \"musical game\" in which to discover, like in chess, the infinite musical possibilities offered by the contrapuntal and harmonious web of Bach. Because the genius and singularity of Bach’s music lie in its ability to be simple and complex at the same time.The themes are short and simple; however, the manner in which they can all be performed and arranged leads to infinite games, infinite musical works. Within this musical universe, the classical and jazz musician, in inspired dialogue, can navigate, play, suggest, create and recreate, offering the audience a new way of living and listening to Bach.</p>",
          about__biografias__bio_alexis:
          "<h4>Alexis Delgado Burdalo</h4><p class='capital'>  Born in Madrid, he started studying piano with Carmen Rosa Capote and Toni Millán. He would go on to study with the maestro Ramón Coll at the Conservatory del Liceu in Barcelona. In 1995, he received a grant from the Corporation of London to study at the Guildhall School of Music in London, with masters Andrew Ball and Graham Johnson. He was played a number of recitals as both a soloist and as an accompanist in Spain, Italy, England, France, Switzerland, Israel, Venezuela, and Japan. </p><p>He has taken part in international festivals, including the Musik Festival Davos (Switzerland, 2002), The Felicja Blumental International Music Festival (Tel Aviv, 2003), Festival Internacional de Piano de Lucena (Córdoba, 2004, 2007, 2008, 2009, and 2010), VII Festival Internacional de Piano Rafael Orozco (Córdoba, 2008), Festival Venezuela- España (Caracas, 2009), Quincena Musical de San Sebastián (2010 and 2011) among many others. </p><p>In London, he received the Maisie Lewis Award and, on 7 April 2003, he made his debut at Wigmore Hall. On 3 February 2009, he debuted at the Teatro de la Zarzuela in Madrid, performing the Goldberg Variations in the fifth annual Ciclo de Jóvenes Intérpretes de Scherzo. In 2010, he published the book La flor del vacío (“The Flower in the Emptiness”, Amargord Ediciones). He is a regular soloist at the Teatro Real (Madrid) in different educational productions.<p>",
          about__biografias__bio_salvador:
          "<h4>Iñaki Salvador</h4> <p class='capital'> Pianist, composer, and music arranger, who virtually taught himself modern music and jazz. A fundamentally jazz musician. Iñaki Salvador has edited thirteen albums as a lead or co-lead, the last two being Johann Sebastian Jazz, together with Alexis Delgado, and Beau Soir, a fusion album with lyrical soprano Isabel Álvarez and the renowned saxophonist and flutist, Andreas Prittwitz.</p><p>He has worked on many concerts and recordings with the most prominent jazz musicians in Spain, including Perico Sambeat, Pedro Iturralde, Javier Colina, David Xirgu, David Gómez, Mario Rossy, Jorge Rossy, Raynald Colom, Mikel Andueza, Gonzalo Tejada, and Joaquín Chacó. He has also collaborated with reputable artists from around the world, such as Allan Skidmore, Jean Toussaint, Jesse Davis, Charles Tolliver, and Alvin Queen.</p><p>He has taken part in both domestic and international jazz festivals in places like Barcelona, San Sebastián, Getxo, Madrid, Seville, Málaga, Seoul, Bayonne, Bucharest, Manchester, Rabat, and many others. He has received awards such as the First Tete Montoliú Award. He composes music for films, theater, television, and dance, and collaborates regularly with Mikel Laboa, Mikel Markez, Imanol, Javier Ruibal, and others. With the release of his most recent album, he has been currently touring as part of a duo. He teaches jazz piano at the Centro Superior de Música del País Vasco (Musikene) and has taught modern music and jazz for many years, having worked at prestigious schools like the Aula de Música Moderna y Jazz de Barcelona and the Taller de Músics, both in Barcelona.</p>"
        }
      },
      es: {
        translation: {
          player: "House of Mirrors",
          video: "video",
          press: "prensa",
          photos: "galeria",
          diary: "Agenda",
          diary_local: "Local",
          diary_ciudad: "ciudad",
          diary_fecha: "Fecha",
          contacto__title: "contacto",
          about__text:
          "<p class='capital' lang='en'>Johann Sebastian Jazz es un dúo de pianos creado en 2014 por Iñaki Salvador y Alexis Delgado. Desde entonces, ha tocado en eventos musicales tan importantes como Jazzaldia (Festival de Jazz de San Sebastián), el Festival Internacional de Jazz de Madrid, y en salas emblemáticas de jazz, como el madrileño Café Central, o clásicas como La Fundación Juan March. El dúo tiene proyectado lanzar su segundo álbum en otoño de 2019, con nuevas piezas de Bach y una profunda revisión del repertorio ofrecido a lo largo de estos años.</p><p>***</p><p>Johann Sebastian Jazz es un “juego musical” mediante el cual ir descubriendo, como en el ajedrez, las infinitas posibilidades que ofrece la telaraña contrapuntística y armónica de Bach. Porque lo que hace tan genial y singular a la música de Bach es su sencillez y complejidad extremas. Los temas que Bach utiliza son pocos y sencillos, pero su desarrollo, y las posibles combinaciones de todos ellos, permiten que surjan infinitas obras musicales. Dentro de este universo sonoro, el músico clásico y de jazz, en inspirado diálogo, pueden navegar, jugar, sugerir, creary recrear, ofreciendo al auditorio una nueva forma de vivir y escuchar a Bach.</p>",
          about__biografias__bio_alexis:
          '<h4>Alexis Delgado Burdalo</h4><p class="capital">  Nace en Madrid y comienza sus estudios de piano con Carmen Rosa Capote y Toni Millán. Posteriormente desarrolla su aprendizaje  con el maestro Ramón Coll en el Conservatorio del Liceo de Barcelona. En 1995 recibe una beca de la Corporation of London para estudiar en la Guildhall School of Music de Londres, con los maestros Andrew Ball, y Graham  Johnson.</p><p>  Ha ofrecido numerosos recitales como solista así como en calidad de pianista acompañante en España, Italia, Inglaterra, Francia,  Suiza, Israel, Venezuela y Japón. Ha participado en festivales internacionales como Musik Festival Davos (Suiza,  2002), The Felicja Blumental International Music Festival (Tel Aviv, 2003), Festival Internacional de Piano   de Lucena (Córdoba, 2004, 2007, 2008, 2009, 2010), VII Festival Internacional de Piano Rafael Orozco (Córdoba,  2008), Festival Venezuela- España (Caracas, 2009), Quincena Musical de San Sebastian (2010 y 2011).</p><p>  Galardonado con el Maisie Lewis Award Competition de Londres, el 7 de abril de año 2003 hizo su debut en la Sala Wigmore  Hall de Londres. El 3 de febrero del año 2009 debutó en el Teatro de la Zarzuela de Madrid, interpretando las  Variaciones Goldberg de Bach dentro del VII Ciclo de Jóvenes Intérpretes de Scherzo. En el año 2010 publica  el libro La flor del vacío (Amargor Ediciones). Participa regularmente como músico solista para el Teatro Real  de Madrid en diversas producciones pedagógicas.</p></p>',
          about__biografias__bio_salvador:
          '<h4>Iñaki Salvador</h4><p class="capital">Pianista, compositor, arreglista de piano, armonía y composición, siendo básicamente autodidacta en lo referido  a la música moderna y el jazz. Músico vinculado fundamentalmente a la música de Jazz. Ha editado trece discos  como lider o co-lider, siendo los dos últimos el titulado Johann Sebastian Jazz en dúo con Alexis Delgado y  un trabajo de fusión, Beau Soir, junto a la soprano lírica Isabel Alvarez y el prestigioso saxofonista y flautista  Andreas Prittwitz.</p><p>  Ha colaborado en conciertos y grabaciones con los principales músicos de jazz de España, entre los que se encuentran Perico  Sambeat, Pedro Iturralde, Javier Colina, David Xirgu, David Gómez, Mario Rossy, Jorge Rossy, Raynald Colom,  Mikel Andueza, Gonzalo Tejada, Joaquín Chacón y muchos otros… Asimismo es importante el listado de sus colaboraciones  internacionales, con nombres como Allan Skidmore, Jean Toussaint, Jesse Davis, Charles Tolliver y Alvin Queen.</p><p>  Ha participado en festivales de jazz nacionales e internacionales como los de Barcelona, San Sebastián, Getxo, Madrid, Sevilla,  Málaga, Seúl, Bayona, Bucarest, Manchester, Rabat y muchos otros. Ha recibido galardones como el “I premio  Tete Montoliú”. Compone música para cine, teatro, televisión y danza y ha sido y es colaborador habitual de  cantautores como Mikel Laboa, Mikel Markez, Imanol, Javier Ruibal, etc… Con éste último trabaja asiduamente  en la actualidad ofreciendo algunos conciertos en formato de dúo. Es profesor de piano de jazz en el Centro  Superior de Música del País Vasco (Musikene) y cuenta con una larga experiencia docente en el ámbito de la  música moderna y el jazz habiendo enseñado en importantes escuelas como el “Aula de Música Moderna y Jazz de  Barcelona” y el “Taller de Musics” de la misma ciudad.</p>'
        }
      }
    }
  },
  function (err, t) {
    // init set content
    keys(my_keys);
  }
);

function updateContent(element, index) {
  var elements = document.getElementsByClassName(element);
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i18next.t(element);
  }
}

function keys(my_keys) {
  my_keys.forEach(updateContent);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  keys(my_keys);
});

document.getElementById("lang").addEventListener("click", function () {
  if (document.getElementById("lang").value == "es") {
    i18next.changeLanguage("es");

    document.getElementById("lang").innerHTML = "en";
    document.getElementById("lang").value = "en";
    document.documentElement.lang = "en";
  } else if (document.getElementById("lang").value == "en") {
    i18next.changeLanguage("en");
    document.getElementById("lang").innerHTML = "es";
    document.getElementById("lang").value = "es";
    document.documentElement.lang = "es";
  }
});
