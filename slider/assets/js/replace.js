let
/* --------------------------------------- */
/* ------- HIER WERTE BEARBEITEN! -------- */
/* --------------------------------------- */


// Veranstaltung und Pause
name = "Veranstaltungsnams",
untertitel = "Ein cooler Untertitel des Programms",
beginn = 2000,
pause = 2115,
pause_dauer = 20,
ende = 2230,


// Weitere Veranstaltungen #1
kategorie_1 = "Kabarett & Comedy",
titel_1 = "Toller Titel der Vorstellung",
datum_1 = "Mittwoch, 25.1.2023, 20 Uhr",

// Weitere Veranstaltungen #2
kategorie_2 = "Kabarett & Comedy",
titel_2 = "Toller Titel der Vorstellung",
datum_2 = "Mittwoch, 25.1.2023, 20 Uhr",

// Weitere Veranstaltungen #3
kategorie_3 = "Kabarett & Comedy",
titel_3 = "Toller Titel der Vorstellung",
datum_3 = "Mittwoch, 25.1.2023, 20 Uhr",

// Weitere Veranstaltungen #4
kategorie_4 = "Kabarett & Comedy",
titel_4 = "Toller Titel der Vorstellung",
datum_4 = "Mittwoch, 25.1.2023, 20 Uhr";


/* --------------------------------------- */
/* --- AB HIER NICHTS MEHR BEARBEITEN! --- */
/* --------------------------------------- */




pause += "";document.getElementById('cKiwdauer').innerHTML = pause_dauer;beginn += "";document.getElementById('cKiwdauerb').innerHTML = pause_dauer;document.getElementById('cKiwdauerc').innerHTML = pause_dauer;pause = pause.substring(0, 2) + ":" + pause.substring(2);document.getElementById('cKiwpause').innerHTML = pause;document.getElementById('cKiwpauseb').innerHTML = pause;document.getElementById('cKiwpausec').innerHTML = pause;beginn = beginn.substring(0, 2) + ":" + beginn.substring(2);ende += "";document.getElementById('dJFSstart').innerHTML = beginn;document.getElementById('dJFSstartb').innerHTML = beginn;ende = ende.substring(0, 2) + ":" + ende.substring(2);document.getElementById('cKiwende').innerHTML = ende;document.getElementById('cKiwendeb').innerHTML = ende;document.getElementById('cKiwendec').innerHTML = ende;document.getElementById('dJFStitel').innerHTML = name;document.getElementById('dJFStitelb').innerHTML = name;document.getElementById('dJFSsub').innerHTML = untertitel;document.getElementById('dJFSsubb').innerHTML = untertitel;document.getElementById('akat').innerHTML = kategorie_1;document.getElementById('atitel').innerHTML = titel_1;document.getElementById('adate').innerHTML = datum_1;document.getElementById('nYDakat').innerHTML = kategorie_2;document.getElementById('nYDatitel').innerHTML = titel_2;document.getElementById('nYDadate').innerHTML = datum_2;document.getElementById('upaHkat').innerHTML = kategorie_3;document.getElementById('upaHtitel').innerHTML = titel_3;document.getElementById('upaHdate').innerHTML = datum_3;document.getElementById('jIVDkat').innerHTML = kategorie_4;document.getElementById('jIVDtitel').innerHTML = titel_4;document.getElementById('jIVDdate').innerHTML = datum_4;