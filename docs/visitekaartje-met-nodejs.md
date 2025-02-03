
# Connect Your Tribe - Visitekaartje

## Visitekaartje met NodeJS

Redesign je visitekaartje met NodeJS en data uit de [whois.fdnd.nl](https://whois.fdnd.nl) API.

## Aanpak

In de opdracht hieronder bouw je eerst jouw visitekaartje in NodeJS. Daarvoor moet je NodeJS installeren en ga je bestanden op je NodeJS server plaatsen. Daarna ga je je visitekaartje met een REST API en JSON (her)ontwerpen, bouwen en publiceren.

## Visitekaartje in NodeJS

In deze eerste ronde bouw je op basis van een voorbeeld jouw visitekaartje uit Sprint 1 exact na, maar dan op een NodeJS server. Je besteedt dus geen aandacht aan een herontwerp, dat komt later.

NodeJS is server-side software waarmee je dynamische websites kunt maken.

Voor je kan beginnen, moet je NodeJS installeren zodat je op je laptop aan de slag kunt.

### Inrichten ontwikkelomgeving

1. Navigeer naar nodejs.org en installeer de NodeJS ontwikkelomgeving. Kies voor _NodeJS 22.13.1 with long-term support_, download de benodigde bestanden en doorloop het installatieproces.
  - Maak het ‘Hello World’ voorbeeld via de [Getting Started Guide](https://nodejs.org/en/docs/guides/getting-started-guide/).
  - (Windows) Volg het [‘Hello World’ voorbeeld](https://medium.com/@mohammedijas/hello-world-in-node-js-b333275ddc89)
  - (Optioneel, technisch) Lees de eerste vijf delen van [Introduction to Node](https://nodejs.dev/en/learn/) als je een meer in-depth introductie wilt met de NodeJS ontwikkelomgeving.
2. Fork deze leertaak van [connect-your-tribe-profile-card](https://github.com/fdnd-task/connect-your-tribe-profile-card) en *clone* deze op jouw computer.
3. Open deze leertaak in Visual Studio Code.
4. Open de _Terminal_ in Visual Studio Code door de toetscombinatie `` ^` `` (control + `) te gebruiken. Er opent een terminalscherm in de hoofdmap van jouw project.
5. Voer in de terminal het commando `npm install` uit, door het in te typen en op enter te drukken. Je gebruikt _NPM_, de _NodeJS Package Manager_ om alle _afhankelijkheden_ voor dit project te installeren. NPM is een veelgebruikte package manager in frontend land. Voor dit project gebruiken we _Express_ (om een _server_ te maken) en _Liquid_ (om HTML te _renderen_).
  - (Optioneel) Na de installatie is de map `node_modules` aangemaakt, en gevuld met allerlei _packages_. Scroll eens door deze map heen; vele honderden *open source* ontwikkelaars hebben de packages die je ziet gebouwd en die mag je gratis gebruiken. Ontwikkelen in NodeJS is *standing on the shoulders of giants*.
6. Start het voorbeeld visitekaartje op door in de terminal het commando `npm start` uit te voeren. Als het goed is, komt een melding te staan over het opstarten van de server: Application started on http://localhost:8000 — Open deze URL in je browser.
7. Als het werkt, zet je je server weer uit door in de terminal de toetscombinatie `^c` (control + c) in te voeren. Deze toetsencombinatie wordt in de terminal gebruikt om de huidige taak te stoppen en *controle* (vandaar de c) terug te krijgen van het programma.

#### Bronnen

- [Nodejs.org](https://nodejs.org/en/), voor de installatie van NodeJS op jouw systeem, kies voor NodeJS 22.13.1 Long Term Support. Dit is de meest stabiele versie van NodeJS, welke ondersteund wordt met goede documentatie.
- [VSCode How To Open Terminal](https://www.youtube.com/watch?v=OmQhOnBzg_k), om iemand de terminal te zien openen en gebruiken op Youtube.
- [Introduction to NodeJS](https://nodejs.dev/en/learn/), voor een in depth introductie met de NodeJS ontwikkelomgeving. Let op: dit is best een technisch verhaal. De eerste zes pagina’s zijn interessant.


### Overzetten van jouw visitekaartje naar NodeJS

1. Kopieer de CSS bestanden en alle afbeeldingen van jouw visitekaartje uit Sprint 1 naar de `/public` map. Bestanden in de `/public` map kunnen door de browser geladen worden; dit zijn statische bestanden, net als in Semester 1. Als je straks vanuit jouw HTML verwijst naar bestanden, dan doe je dat dus naar de `/public` map. Verwijs je in je HTML bijvoorbeeld naar `/style/style.css`, dan wordt dat bestand in `/public/style/style.css` gezocht.
2. Je gaat jouw HTML broncode uit elkaar halen en in drie delen opsplitsen: De hele `<head>` sectie, inclusief de `<body>` open-tag komen in `/views/partials/head.liquid` te staan. De `</body>` en `</html>` tags komen in `/views/partials/foot.liquid` te staan. Deze delen zetten we apart neer, omdat ze vaak op elke pagina in een site hetzelfde zijn. Met *Liquid* kunnen we deze delen *renderen* (aan elkaar knopen) en hoeven we onszelf minder te herhalen. In je visitekaartje is dit voordeel misschien nog niet zo duidelijk, maar dat komt vanzelf.
3. Zet de rest van de HTML van jouw visitekaartje in `/views/index.liquid`. Let op: overschrijf bij het kopiëren de eerste en laatste regel niet! De opdracht die je hier ziet is de Liquid manier om bestanden te *renderen*: `{% render 'partials/head.liquid' %}` zegt zoveel als, neem de inhoud van het `head.liquid` bestand en plaats dat hier.
4. Zet op de plek waar jouw naam in de HTML staat `{{ person.name }}` neer. Dit is de dynamische data die uit de API komt en door Liquid wordt ingevuld tijdens het opbouwen van de pagina.


#### Bronnen

- [The Liquid Template Language](https://liquidjs.com/tutorials/intro-to-liquid.html)
- [Client-Server Overview](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview), voor als je het verhaal over client-server systemen eens rustig wilt nalezen op MDN.
- [Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction), voor als je het verhaal over server-side programming eens rustig wilt nalezen op MDN.
- [Express/NodeJS introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), voor als je het verhaal over NodeJS en Express eens rustig wilt nalezen op MDN.


### Testen Localhost

1. Start je visitekaartje op door in de terminal het commando `npm start` uit te voeren. Als het goed is, komt een melding te staan over het opstarten van de server: Application started on http://localhost:8000, open deze url in je browser.
2. Laat als het werkt met gepaste trots jouw oude visitekaartje zien aan een klasgenoot. Geef ook even een seintje aan je docent.
3. Als alles werkt, zet je je server weer uit door in de terminal de toetscombinatie `^c` (control + c) in te voeren.
4. Besef dat je net de eerste stappen in NodeJS, Express en Liquid hebt gezet. Hier begint jouw server-side avontuur!
5. Als je je afvraagt waarom jouw naam niet meer in je kaartje staat: dat komt doordat op regel 10 in `server.js` waarschijnlijk nog niet jouw eigen ID staat. De server laadt dus de verkeerde data in! Pas deze regel code aan met jouw ID (zie het whiteboard), start de server opnieuw (`npm start`), en kijk of je kaartje nu wel jouw naam toont in de browser.


### Visitekaartje Ontwerpen

Het doel en resultaat van dit project is het opnieuw ontwerpen en ontwikkelen van jouw visitekaartje. Enerzijds leer je nieuwe technieken inzetten; je maakt jouw visitekaartje met NodeJS, Express en Liquid, gebaseerd op een REST API met JSON. Anderzijds maak je na een half jaar oefening een kaartje wat beter laat zien wie jij bent als frontender.

1. Maak een schets voor jouw visitekaartje nieuwe stijl, denk aan alle lessen uit *Semester 1: The Static Web*.
2. Maak een *breakdown* met goede HTML tags en wat hints over CSS en eventueel JS voor interactie.
3. Geef met een afwijkende kleur aan welke gegevens uit whois.fdnd.nl komen.



### Visitekaartje Bouwen

1. Maak de nieuwe HTML versie van jouw visitekaartje door de `.liquid` bestanden in `/views/` en misschien`/views/partials` aan te passen. Zet de verwijzing naar CSS even uit en check door je server te starten met `npm start` even of je wijzigingen goed doorgevoerd zijn.
2. Maak de nieuwe CSS versie van jouw visitekaartje door de `.css` bestanden aan te passen en check even of je wijzigingen goed doorgevoerd zijn.
3. Voer stapje voor stapje de gegevens uit de FDND JSON API door in jouw visitekaartje, check na elke stap of alles nog werkt. Voeg eventueel extra data toe in de database, als jouw ontwerp dat nodig heeft.
4. Blijf stap voor stap werken, stel vragen aan klasgenoten, op discord of aan een docent als je er niet uit komt.

#### Bronnen

- [Using the Fetch API @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [The Liquid Template Language](https://liquidjs.com/tutorials/intro-to-liquid.html)
- [Express documentatie](https://expressjs.com/en/5x/api.html) (geavanceerd)


### Visitekaartje Integreren en Testen

Als je helemaal klaar bent en alles lokaal werkt, ga je verder met het publiceren van jouw project op Internet. Omdat we met NodeJS werken, is dit iets ingewikkelder dan voorheen met GitHub Pages. Er moet namelijk een serveromgeving opgestart worden. Wij gebruiken Render als hostingpartij, maar je mag natuurlijk je eigen voorkeur volgen als die anders is.

1. Check nog een laatste keer of alles lokaal werkt door je server op te starten.
2. *Commit* en *Push* jouw project naar GitHub.
3. Meld je met behulp van je GitHub account aan bij [Render](https://render.com/).
4. Klik op [+ New -> Web Service](https://dashboard.render.com/web/new).
5. Zoek de juiste repository (*connect-your-tribe-profile-card* als je niets hernoemd hebt) en volg de stappen om je project te _Deployen_. Render importeert jouw code vanaf GitHub, installeert de _dependencies_ via `npm install`, en voert `npm start` uit. Dit kan even duren.
6. Er wordt een unieke URL voor jouw project gegenereerd.
7. Open je visitekaartje in je browser, check of alles werkt en voer daarna deze url in bij jouw repository op GitHub. Op deze manier kan je snel naar jouw visitekaartje navigeren.

Omdat het hosten van NodeJS projecten complexer en duurder is dan het hosten van statische projecten, en we de gratis variant van Render gebruiken, stopt Render soms na een tijdje jouw project. Het kan daarna even duren voordat je NodeJS project weer opgestart is.


#### Bronnen

- [Render](https://render.com/)
