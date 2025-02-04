
# Connect Your Tribe - Visitekaartje

## REST API en JSON

Over het maken van je visitekaart met JSON, NodeJS, Express en Liquid.


### Aanpak

Vanochtend gaan we oefenen met het nieuwe gereedschap dat we tot onze beschikking hebben. We gaan samen een nieuwe pagina bouwen, waarop we als herhaling onze eigen naam gaan tonen. We gaan de datum van vandaag erbij zetten. Vervolgens maken we een overzicht van wie er op dit moment bij je aan tafel zit. Niet met statische HTML, zoals in Semester 1, maar met dynamische data.

Hiermee leren we wat meer over _Routing_, _Views_, _Express_, _Liquid_, _JSON_ en onze _API_ (Directus).


### Oefenen met Routes en Views

In Semester 1 kon je een nieuwe pagina toevoegen door een nieuw HTML bestand aan te maken. In Express werkt dit net even anders. We moeten hiervoor een nieuwe _Route_ aanmaken in onze Express server.

Routes zijn de stukjes achter de URL waar je site op draait. Een nieuwe route toevoegen, doe je in `server.js`.

Zoek in dat bestand op waar de route naar je visitekaartje staat (waarschijnlijk is dat nog `/`, op regel 41, als je alleen je `personID` aangepast hebt tot nu toe):

Routes kun je koppelen aan _Views_, door een _callback function_. (Van een functie zou je door het volgen van de JS fundamentals deeltaak in Sprint 5 en 6 inmiddels moeten weten wat het is, en zo niet, dan wordt het tijd om _dagelijks_ aan die taak te gaan werken.) Elke keer dat een bezoeker een bepaalde route bezoekt, wordt de callback function uitgevoerd. In die functie wordt een view _gerenderd_. In dit geval wordt op de root URL (`/`) de view `index.liquid` gerenderd. Aan die view wordt een JSON object meegegeven, met de data uit de API.

Maak eerst een nieuw leeg bestand aan in de map `views`, genaamd `oefenen.liquid`.

Maak daarna in `server.js` een extra route aan voor de URL `/oefenen`, en zorg dat `oefenen.liquid` gerenderd wordt als die URL bezocht wordt. Kopieer hiervoor de paar regels van de `/` route, en pas deze aan. Meestal zet je routes bij elkaar in de buurt, zodat je snel terug kunt vinden welke routes er allemaal voor je website aangemaakt zijn.

(Her)start je lokale server door `npm start` uit te voeren; voor elke wijziging in `server.js` moet je dit doen. Open http://localhost:8000/oefenen in je browser, en controleer of je een lege pagina krijgt. Als je een foutmelding krijgt, laat het dan even weten :)

#### Bronnen

- [Routes in Express, met `app.get(..., ...)`](https://expressjs.com/en/5x/api.html#app.get.method)


### Spelen met Liquid filters

Voeg aan `oefenen.liquid` de volgende code toe:

```liquid
<h1>Data-Driven Web</h1>
<p>Ik ben dus {{ person.name }}</p>
```

Controleer of je ook op deze pagina je eigen naam te zien krijgt, door de pagina te verversen (voor een wijziging in de frontend code hoef je de server niet opnieuw op te starten).

Krijg je niet je naam te zien, dan heb je waarschijnlijk wat van de stappen van [maandag](visitekaartje-met-nodejs.md) gemist. (We gaan er ondertussen wel van uit dat je zelfstandig instructies kunt doornemen (Hi! Leuk dat je meeleest! Een mens is dit nu aan het typen, verfrissend tussen al het ChadGPT geweld he?!)), maar laat het even weten als dit je nog niet gelukt is. We zijn er om je te helpen een goede frontender te worden.

Voeg vervolgens deze code toe aan je pagina:

```liquid
<p>Het is vandaag {{ 'now' | date }}</p>
```

En ververs de pagina. Waarschijnlijk niet helemaal wat je gehoopt had, en waarschijnlijk ook niet wat je bezoekers willen lezen.

Zorg er met de documentatie van het Liquid `date` _filter_ voor dat de datum in een iets vriendelijke formaat getoond wordt. Niet door de datum keihard in je HTML neer te zetten, maar door de dynamische datum om te zetten naar wat anders.

Als dat gelukt is, en je hebt in de whois database je eigen geboortedatum ingevuld, laat die dan ook zien op deze pagina. (Heb je geen idee waar dit over gaat, volg dan nog even de [Sprint planning van maandag](sprint-planning.md).) Gebruik het `date` filter ook om deze gebruiksvriendelijk neer te zetten.

Als je niet meer weet hoe die _property_ van het `person` object heet (was het nou `birthdate` of `birth_date`?): zet `{{ person | json }}` in je code, en bekijk het antwoord in je pagina.

💡 Pro-tip: zorg dat je tijdens het bouwen en debuggen standaard ergens op je pagina een fixed positioned `<details>` element hebt, met daarin een `<pre>` element en een `{{ person | json:4 }}`

#### Bronnen

- [Liquid date filter](https://liquidjs.com/filters/date.html)
- [Liquid json filter](https://liquidjs.com/filters/json.html)

<!--
Dan voor de iets meer gevorderde:

in de view een heading maken: "<h2>Bij mij aan tafel zitten nu:</h2>"
in die nieuwe route de info van de mensen aan je tafel fetchen, id's even met elkaar uitwisselen dus => concept van de API herhalen, en JSON, uitstapje naar filters in Directus misschien (of al te geavanceerd?)
https://fdnd.directus.app/items/person?filter={"_or":[{"id":67},{"id":65}]}

in de view een loop maken van iedereen die aan je tafel zit, inclusief hun naam => al iets meer advanced, maar dan zien ze pas de kracht van dynamische data
daarna voor die personen geboortedatum ook toevoegen, en dan zien ze hopelijk het nut van templates in (1 aanpassing -> 3 extra <p>'tjes)
Eigenlijk ook al een beetje ter voorbereiding op de squad page.
-->