
# Connect Your Tribe - Visitekaartje

## Visitekaartje met NodeJS

Redesign je visitekaartje met NodeJS en data uit de [whois.fdnd.nl](https://whois.fdnd.nl) API.

## Aanpak

In deze opdracht bouw je eerst jouw visitekaartje in NodeJS, daarvoor moet je NodeJS installeren en ga je bestanden op je NodeJS server plaatsen. Daarna ga je je visitekaartje met een REST API en JSON te (her)ontwerpen, bouwen en publiceren. 

## 1. Visitekaartje in NodeJS

In deze eerste ronde bouw je op basis van een voorbeeld jouw visitekaartje uit Sprint 1 exact na, maar dan op een NodeJS server. Je besteedt dus geen aandacht aan een herontwerp, dat komt later.

NodeJS is server-side software waarmee je dynamische websites kan maken. 

Voor je kan beginnen moet je NodeJS installeren zodat je op je laptop aan de slag kan. 

### Inrichten ontwikkelomgeving

1. Navigeer naar nodejs.org en installeer de Node ontwikkelomgeving. Kies voor _Node 22.13.1 with long-term support_, download de benodigde bestanden en doorloop het installatieproces.
  - Maak het ‘Hello World’ voorbeeld via de [Getting Started Guide](https://nodejs.org/en/docs/guides/getting-started-guide/).
  - (Windows) Volg het [‘Hello World’ voorbeeld](https://medium.com/@mohammedijas/hello-world-in-node-js-b333275ddc89)
  - (Optioneel, technisch) Lees de eerste vijf delen van [Introduction to Node](https://nodejs.dev/en/learn/) als je een meer in-depth introductie wilt met de Node ontwikkelomgeving.
2. Fork deze leertaak van [connect-your-tribe-profile-card](https://github.com/fdnd-task/connect-your-tribe-profile-card) en *clone* deze op jouw computer.
3. Open deze leertaak in jouw editor (bijv. Visual Studio Code).
4. Open de terminal door de toetscombinatie `` ^` `` (control + `) te gebruiken. Er opent een terminalscherm in de hoofdmap van jouw project.
5. Voer in de terminal het commando `npm install` uit door het in te typen en op enter te drukken. Je gebruikt NPM, de Node Package Manager om een express inclusief alle afhankelijkheden te installeren.
  - (Optioneel) Na de installatie is het mapje node_modules gevuld met alle afhankelijke packages. Scroll eens door deze map heen, vele honderden *open source* ontwikkelaars hebben de packages die je ziet gebouwd en die mag je gratis gebruiken. Ontwikkelen in Node is *standing on the shoulders of giants*.
6. Start het voorbeeld visitekaartje op door in de terminal het commando `npm start` uit te voeren. Als het goed is komt een melding te staan over het opstarten van de server: Application started on http://localhost:8000, open deze url in je browser.
7. Als het werkt zet je je server weer uit door in de terminal de toetscombinatie `^c` (control + c) in te voeren. Deze toetsencombinatie wordt in de terminal gebruikt om de huidige taak te stoppen en *controle* (vandaar de c) terug te krijgen van het programma.

#### Bronnen

- [Nodejs.org](https://nodejs.org/en/), voor de installatie van Node op jouw systeem, kies voor Node 22.13.1 Long Term Support. Dit is de meest stabiele versie van Node welke ondersteund wordt met goede documentatie.
- [VSCode How To Open Terminal](https://www.youtube.com/watch?v=OmQhOnBzg_k), om iemand de terminal te zien openen en gebruiken op Youtube.
- [Introduction to Node](https://nodejs.dev/en/learn/), voor een in depth introductie met de Node ontwikkelomgeving op Nodejs. Let op: dit is best een technisch verhaal. De eerste zes pagina’s zijn interessant.


### Overzetten van jouw visitekaartje naar Node

1. Kopieer de CSS bestanden en alle afbeeldingen van jouw visitekaartje uit sprint 1 naar de `/public` map. Als je dat nodig vindt richt je mappen in onder `/public`, bijvoorbeeld `/public/style` voor je stylesheets en `/public/images` voor je afbeeldingen. Zoals in het college is uitgelegd zijn bestanden in de `/public/` map bij het opstarten van jouw Node/Express omgeving bereikbaar op `http://localhost:8000`. Als je straks vanuit jouw HTML verwijst dan doe je dat dus naar `/style/style.css` als je CSS bestand in het mapje `/public/style/style.css` staat.
2. Je gaat jouw HTML broncode uit elkaar halen en in drie delen opsplitsen: De hele `<head>` sectie, inclusief de `<body>` openen tag komen in `/views/partials/head.ejs` te staan. De `</body>` en `</html>` tags komen in `/views/partials/foot.ejs` te staan. Deze delen zetten we apart neer omdat ze op elke pagina in een site hetzelfde zijn. Met *Embedded JavaScript (EJS)* kunnen we deze delen *includen* en hoeven we onszelf minder te herhalen.. DRY FTW!
3. Zet de rest van de HTML van jouw visitekaartje in `/views/index.ejs`. Let op: overschrijf bij het kopiëren de eerste en laatste regel niet! De opdracht die je hier ziet is de EJS manier om bestanden te *includen*: `<%- include('./partials/head') %>` zegt zoveel als, neem de inhoud van het `head.ejs` bestand en plaats dat hier.
4. Ga na of er eventueel extra code is die je als include wilt opnemen omdat het op meerdere pagina’s herhaald wordt, bijvoorbeeld een menu. Maak een extra bestand aan aan voor je menu `/views/partials/menu.ejs` en *include* het op dezelfde manier als bij (3).

#### Bronnen

- [Client-Server Overview](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview), voor als je het verhaal over client-server systemen nog eens rustig wilt nalezen op MDN.
- [Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction), voor als je het verhaal over server side programming nog eens rustig wilt nalezen op MDN.
- [Express/node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), voor als je het verhaal over Node en Express nog eens rustig wilt nalezen op MDN.


### Testen Localhost

1. Start je visitekaartje op door in de terminal het commando `npm start` uit te voeren. Als het goed is, komt een melding te staan over het opstarten van de server: Application started on http://localhost:8000, open deze url in je browser.
2. Laat als het werkt met gepaste trots jouw oude visitekaartje zien aan een klasgenoot. Geef ook even een seintje aan je docent.
3. Als alles werkt, zet je je server weer uit door in de terminal de toetscombinatie `^c` (control + c) in te voeren. 
4. Besef dat je net de eerste stappen in Node/Express/EJS hebt gezet, hier begint jouw serverside avontuur! Ontspan even, we gaan woensdag verder met het maken van jouw visitekaartje met een REST API en JSON.



## 2. Visitekaartje ontwerpen, bouwen en publiceren met REST API en JSON


Voor je aan de slag kunt met het herontwerpen en bouwen van je visitekaartje moet je jouw gegevens in de WHOIS API aanvullen, daarna bepaal je hoe je te werk gaat.

### WHOIS API 

1. Ga naar de whois FDND API: https://whois.fdnd.nl
2. Zoek jouw *id* op in de person lijst: https://whois.fdnd.nl/docs/person.
3. Gebruik jouw *id* in het admin formulier en vul de ontbrekende gegevens in: https://whois.fdnd.nl/admin. In het ‘bio’ veld kan je ook HTML elementen gebruiken. 
4. Ga naar de GET person pagina om jouw gegevens in JSON te bekijken: https://whois.fdnd.nl/docs/person



### Visitekaartje ontwerpen

Het doel en resultaat van dit project is het opnieuw ontwerpen en ontwikkelen van jouw visitekaartje. Enerzijds leer je nieuwe technieken inzetten, je maakt jouw visitekaartje met Node/Express/EJS gebaseerd op een REST API met JSON. Anderzijds maak je na een half jaar oefening een kaartje wat beter representeert wie jij bent als frontender.


1. Maak een schets voor jouw visitekaartje nieuwe stijl, denk aan alle lessen uit *Semester 1: The Static Web*.
2. Maak een *breakdown* met goede HTML tags en wat hints over CSS en eventueel JS voor interactie.
3. Geef met een afwijkende kleur aan welke gegevens uit whois.fdnd.nl komen.



### Visitekaartje Bouwen

1. Maak de nieuwe HTML versie van jouw visitekaartje door de `.ejs` bestanden in `/views/` en misschien`/views/partials` aan te passen. Zet de verwijzing naar CSS even uit en check door je server te starten met `npm start` even of je wijzigingen goed doorgevoerd zijn.
2. Maak de nieuwe CSS versie van jouw visitekaartje door de `.css` bestanden aan te passen en check even of je wijzigingen goed doorgevoerd zijn.
3. Pas op basis van de uitleg in het college, met behulp van de `Fetch API` de aanroep naar `whois.fdnd.nl` in `server.js` aan, en check of er geen foutmeldingen ontstaan.
4. Voer stapje voor stapje de gegevens uit de REST API door in jouw visitekaartje, check na elke stap of alles nog werkt.
5. Blijf stapje voor stapje werken, stel vragen aan klasgenoten, op discord of aan een docent als je er niet uit komt.

#### Bronnen

- [Using the Fetch API @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Documentatie voor res.render() @ expressjs.com](https://expressjs.com/en/4x/api.html#res.render)
- [Embedded JavaScript templating @ ejs.co](https://ejs.co/)


### Visitekaartje Publiceren 

Als je helemaal klaar bent en alles lokaal werkt ga je verder met het publiceren van jouw project op internet. Omdat we met Node werken is dit iets ingewikkelder dan voorheen, er moet namelijk een serveromgeving opgestart worden. Wij gebruiken cyclic.sh als hostingpartij maar je mag natuurlijk je eigen voorkeur volgen als die anders is.


1. Check nog een laatste keer of alles lokaal werkt door je server op te starten.
2. *Commit* en *Push* jouw project naar GitHub
3. Meld je met behulp van GitHub aan bij [cyclic.sh](https://www.cyclic.sh/)
4. Klik op [Deploy](https://app.cyclic.sh/#/deploy) en selecteer het tabblad *Link Your Own* om jouw project te publiceren.
5. Zoek de juiste repository, *connect-your-tribe-profile-card* als je niets hernoemd hebt. Cyclic importeert jouw code en voert `npm start` uit.
6. Er wordt een unieke naam voor jouw project gegenereerd, de naam van het voorbeeld is `https://wandering-hare-overshirt.cyclic.app/`.
7. Open je visitekaartje in je browser, check of alles werkt en voer daarna deze url in bij jouw repository op GitHub. Op deze manier kan je snel naar jouw visitekaartje navigeren.


#### Bronnen

- [Cyclic Hosting](https://www.cyclic.sh/)
