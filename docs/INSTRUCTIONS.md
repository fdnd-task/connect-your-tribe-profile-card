

# Visitekaartje
Redesign je visitekaartje met Node en data uit de [whois.fdnd.nl](https://whois.fdnd.nl) API.

## Context
Deze leertaak hoort bij sprint 7 "Connect Your Tribe". Dit is een leertaak die je individueel uitvoert.

In het S07W1-01-Node en S07W1-02-API-en-JSON wordt stap voor stap behandeld wat je moet doen.

## Briefing
Elke frontender bij FDND stelt zichzelf binnen de tribe voor door middel van een visitekaartje. De data voor het visitekaartje staat in een database die bereiken is via de API op [whois.fdnd.nl](https://whois.fdnd.nl). Met deze data ga je jouw visitekaartje redesignen.

## Doel van deze opdracht
Je leert met Node jouw visitekaartje server-side te maken.

## Werkwijze
Voor deze opdracht doorloop je twee keer verschillende fases van de development-lifecycle. Eerst ga je je [visitekaartje in Node-code bouwen](#1-visitekaartje-in-node), daarna doorloop je nog een keer de DLC om je visitekaartje met een [API en JSON te ontwerpen en bouwen](#2-visitekaartje-met-rest-api-en-json). 


## 1. Visitekaartje in Node
Eerst ga je je visikaartje in Node bouwen.

## Analyseren
In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren en formuleer je een aantal uitgangspunten waar je ontwerp aan moet voldoen. Voordat je met deze leertaak kan beginnen moet je Node instaleren en testen. 

### Aanpak inrichten ontwikkelomgeving

1. Navigeer naar nodejs.org en installeer de Node ontwikkelomgeving. Kies voor Node 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces.
  - (Optioneel) Maak het ‘Hello World’ voorbeeld via de [Getting Started Guide](https://nodejs.org/en/docs/guides/getting-started-guide/).
  - (Optioneel, windows) Volg het [‘Hello World’ voorbeeld](https://medium.com/@mohammedijas/hello-world-in-node-js-b333275ddc89)
  - (Optioneel, technisch) Lees de eerste vijf delen van [Introduction to Node](https://nodejs.dev/en/learn/) als je een meer in-depth introductie wilt met de Node ontwikkelomgeving.
2. Fork deze leertaak van [connect-your-tribe-profile-card](https://github.com/fdnd-task/connect-your-tribe-profile-card) en *clone* deze op jouw computer.
3. Open deze leertaak in jouw editor (bijv. Visual Studio Code).
4. Open de terminal door de toetscombinatie `` ^` `` (control + `) te gebruiken. Er opent een terminalscherm in de hoofdmap van jouw project.
5. Voer in de terminal het commando `npm install` uit door het in te typen en op enter te drukken. Je gebruikt NPM, de Node Package Manager om een express inclusief alle afhankelijkheden te installeren.
  - (Optioneel) Na de installatie is het mapje node_modules gevuld met alle afhankelijke packages. Scroll eens door deze map heen, vele honderden *open source* ontwikkelaars hebben de packages die je ziet gebouwd en die mag je gratis gebruiken. Ontwikkelen in Node is *standing on the shoulders of giants*.
6. Start het voorbeeld visitekaartje op door in de terminal het commando `npm start` uit te voeren. Als het goed is komt een melding te staan over het opstarten van de server: Application started on http://localhost:8000, open deze url in je browser.
<!-- 7. Als het gelukt is vraag je een docent om jouw installatie te checken door het visitekaartje in je browser te laten zien. -->

### Materiaal

- [Nodejs.org](https://nodejs.org/en/), voor de installatie van Node op jouw systeem, kies voor Node 18.14.0 LTS (Long Term Support). Dit is de meest stabiele versie van Node.
- [Introduction to Node](https://nodejs.dev/en/learn/), voor een in depth introductie met de Node ontwikkelomgeving op Nodejs. Let op: dit is best een technisch verhaal, laat je niet afschrikken.
- [VSCode How To Open Terminal](https://www.youtube.com/watch?v=OmQhOnBzg_k), om iemand de terminal te zien openen en gebruiken op Youtube.


## Bouwen
In de bouwfase ga je je visiekaartje overzetten naar Node.

### Aanpak overzetten van jouw visitekaartje naar Node

1. Kopieren de CSS en afbeeldingen van je visitekaartje uit sprint 1 naar /public (evt /public/style en /public/images)
2. Uit elkaar trekken van de HTML in head, foot en midden
3. In .ejs bestanden neerzetten

### Materiaal

- [Client-Server Overview](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview), voor als je het verhaal over client-server systemen nog eens rustig wilt nalezen op MDN.
- [Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction), voor als je het verhaal over server side programming nog eens rustig wilt nalezen op MDN.
- [Express/node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), voor als je het verhaal over Node en Express nog eens rustig wilt nalezen op MDN.








## 2. Visitekaartje met REST API en JSON

## Analyseren
Voordat je aan de slag kan met het redesign van je visitekaartje moet je je gegevens in de WHOIS API aanvullen.

### Aanpak WHOIS API 

1. Ga naar de whois FDND API: https://whois.fdnd.nl
1. Zoek jouw *id* op in de members lijst: https://whois.fdnd.nl/docs/members.
2. Gebruik jouw *id* in het admin formulier en vul de ontbrekende gegevens in: https://whois.fdnd.nl/admin. In het ‘bio’ veld kan je ook HTML elementen gebruiken. 
3. Sla jouw gegevens op. (Na het opslaan duurt het een paar minuten voordat jouw gegevens te zien zijn)
4. Ga naar de GET member pagina op jouw gegevens in JSON te bekijken: https://whois.fdnd.nl/docs/member


## Ontwerpen
Bij de start van de ontwerpfase weet je wat het doel en het resultaat van je project zijn. In de ontwerpfase neem je ontwerp- beslissingen en zorg je dat je precies weet wat je moet gaan bouwen.

### Aanpak ontwerpfase

Tekening maken van het visitekaartje

1. Uitleg
<!--
3. <<< Breakdown maken met goede HTML (hebben ze nodig voor de bouwfase als ze met JSON beginnen)
4. <<< Ook iets doen in de breakdown welke gegevens van de whois komen en welk 'hard coded' zijn?
-->

Plannen redesign voor jouw visitekaartje 
<!--
<<< leidt dit niet te veel af van klussen met node?
-->
- Projects aanzetten in GitHub
- Issues aanmaken voor: schets, wireframe, breakdown
- Beginnen met de ontwerpfase
- 


## Bouwen
In de bouwfase realiseer je de beslissingen uit de ontwerpfase in Node, HTML en CSS.

### Aanpak bouwfase
- aanpassen van de opzet voor jouw visitekaartje aan de hand van de werkgroep 
<!-- 
<<< wat betekent dit?
-->
- verwerken van jouw eigen gegevens in het visitekaartje via de persoonlijke route: https://whois.fdnd.nl/api/v1/member?id=cldczhjad16yh0av08jxscp0a (dat is Justus’ id, zoek je eigen id op via de /api/v1/members eindpoint, misschien moet je met *skip* en *first* spelen om je naam te vinden ;)) 
<!-- 
<<< dit kan weg denk ik? Doen ze nu ni de analyse fase
<<< Hier een stappenplan over JSON en daar HTML van maken?  
-->


### Materiaal bouwfase

- 
<!--
<<< Over JSON
<<< Over ejs? templating?
-->


## Integreren
In de integratiefase voer je de aanpassingen door zodat iedereen ze kan zien.

### Aanpak integreerfase

Code naar cyclic.sh zetten?

1. Nog een keertje lokaal checken
2. Pushen naar je GitHub
2. Inloggen met GitHub op cyclic.sh
3. Selecteren van de juiste repository uit jouw GitHub
4. Build controleren
5. URL overnemen en op GitHub invoeren


## Testen

In de testfase controleer je of jouw aanpassingen werken zoals bedoeld. 

### Aanpak testfase

1. Laat jouw visitekaartje testen door een paar klasgenoten.
2. Maak aantekeningen van de test.
3. Ben je tevreden met het resultaat? Zo niet herhaal dan bovenstaande stappen.

#### a11y test 
<!-- 
<<< Dit kan misschien weg? Focus op node. Dit doen we in sprint 8 of 9 weer uitgebreid
<<< Misschien wel een HTML validate test doen W3C? We hebben het nog steeds over HTML 
-->
1. Lighthouse en handmatige tests uitvoeren
2. Documenteren in je wiki


## Criteria

Focus sprint 7 - De focus in deze sprint ligt op teambuilding, samenwerken en hoe je een dynamische website kan maken waar bezoekers ook iets achter kunnen laten.

Doel van deze opdracht:
* Je leert met Node je visitekaart server-side te maken. 

Voor deze leertaak gelden de gedragscriteria: 
* M: Je combineert aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving
* S: Je daagt verantwoording voor eigen resultaten, verwerkt ontvangen feedback en wijst teamleden op hun verantwoording

Deze opdracht is done als:
- [ ] Je hebt je visistekaartje met Node
- [ ] Je kaartje gebruikt gegevens uit de API van whois.fdnd.nl
- [ ] Je kaartje is gepubliceerd via cyclic.sh
- [ ] Het eindresultaat gedocumenteerd in de Readme aan de hand van de DLC
