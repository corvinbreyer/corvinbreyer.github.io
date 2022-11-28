
/* --------------------------------------- */
/* ------- HIER WERTE BEARBEITEN! -------- */
/* --------------------------------------- */


// Veranstaltung und Pause
let name = "Veranstaltungsnams";
let untertitel = "Ein cooler Untertitel des Programms";
let beginn = 2800;
let pause = 2915;
let pause_dauer = 20;
let ende = 2230;


// Weitere Veranstaltungen #1
let kategorie_1 = "Kabarett & Comedy";
let titel_1 = "Toller Titel der Vorstellung";
let datum_1 = "Mittwoch, 25.1.2023, 20 Uhr";

// Weitere Veranstaltungen #2
let kategorie_2 = "Kabarett & Comedy";
let titel_2 = "Toller Titel der Vorstellung";
let datum_2 = "Mittwoch, 25.1.2023, 20 Uhr";

// Weitere Veranstaltungen #3
let kategorie_3 = "Kabarett & Comedy";
let titel_3 = "Toller Titel der Vorstellung";
let datum_3 = "Mittwoch, 25.1.2023, 20 Uhr";

// Weitere Veranstaltungen #4
let kategorie_4 = "Kabarett & Comedy";
let titel_4 = "Toller Titel der Vorstellung";
let datum_4 = "Mittwoch, 25.1.2023, 20 Uhr";


/* --------------------------------------- */
/* --- AB HIER NICHTS MEHR BEARBEITEN! --- */
/* --------------------------------------- */




pause += "";document.getElementById('cKiwdauer').innerHTML = pause_dauer;beginn += "";document.getElementById('cKiwdauerb').innerHTML = pause_dauer;document.getElementById('cKiwdauerc').innerHTML = pause_dauer;pause = pause.substring(0, 2) + ":" + pause.substring(2);document.getElementById('cKiwpause').innerHTML = pause;document.getElementById('cKiwpauseb').innerHTML = pause;document.getElementById('cKiwpausec').innerHTML = pause;beginn = beginn.substring(0, 2) + ":" + beginn.substring(2);ende += "";document.getElementById('dJFSstart').innerHTML = beginn;document.getElementById('dJFSstartb').innerHTML = beginn;ende = ende.substring(0, 2) + ":" + ende.substring(2);document.getElementById('cKiwende').innerHTML = ende;document.getElementById('cKiwendeb').innerHTML = ende;document.getElementById('cKiwendec').innerHTML = ende;document.getElementById('dJFStitel').innerHTML = name;document.getElementById('dJFStitelb').innerHTML = name;document.getElementById('dJFSsub').innerHTML = untertitel;document.getElementById('dJFSsubb').innerHTML = untertitel;document.getElementById('akat').innerHTML = kategorie_1;document.getElementById('atitel').innerHTML = titel_1;document.getElementById('adate').innerHTML = datum_1;document.getElementById('nYDakat').innerHTML = kategorie_2;document.getElementById('nYDatitel').innerHTML = titel_2;document.getElementById('nYDadate').innerHTML = datum_2;document.getElementById('upaHkat').innerHTML = kategorie_3;document.getElementById('upaHtitel').innerHTML = titel_3;document.getElementById('upaHdate').innerHTML = datum_3;document.getElementById('jIVDkat').innerHTML = kategorie_4;document.getElementById('jIVDtitel').innerHTML = titel_4;document.getElementById('jIVDdate').innerHTML = datum_4;
