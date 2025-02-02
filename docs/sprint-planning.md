
# Connect Your Tribe - Visitekaartje

## Sprint planning

Tijdens de Sprint Planning ga je leren waar sprint 7 en het semester Data-Drive Web over gaat. 


### Aanpak

Deze sprint ga je weer een visitekaartje ontwerpen en maken, net als in sprint 1. Maar dit keer met NodeJS en data uit de whois API van FDND.

Voordat we dat gaan doen gaan we bekijken waar het semester over gaat. Wat betekent het Data-Drive web? En wat is dat eigenlijk server-side en JSON data? 



<!-- Leren over Server-Side, JSON, Fetch en de WHOIS database -->


## Data-Driven Web

In het eerste semester heb je responsive websites gemaakt met statische data, alle content heb je toen in de HTML geschreven. In het data-driven web ga je dit met dynamische data doen. Dynamische data komt uit een database en kan bijvoorbeeld door een klant of opdrachtgever zelf aangepast worden. Teksten en plaatjes schrijf je dan niet in de HTML, maar haal je met een API uit een database. 

Bekijk op [programma.fdnd.nl](https://programma.fdnd.nl) alle sprints van semester 2. Lees de inleidende teksten op de sprint pagina's en noteer wat je interessant vindt, wat je moeilijk lijkt en/of wat je al kan. 

![](programma.fdnd.png)
_Op programma.fndn.nl staan alle sprints voor semester 2_

### Planning maken

Het programma is voller dan semster 1, dat komt omdat de tweedejaars op stage zijn. Hierom kunnen eerstejaars meer bij FDND werken en leren. 

Maandag- en dinsdagmiddag worden er dit semester practica aangeboden. Dit is voor beginnende en ervaren frontenders nuttig om snel NodeJS te leren, vragen te kunnen stellen en anderen te helpen.

Teken een weekschema op het whiteboard voor de komende 3 weken. Bekijk het programma van Sprint 7 en neem de belangrijke momenten en opdrachten uit het programma op in het schema. Wanneer ga je werken aan de JS deeltaak? Wanneer ga je 20* van je tijd bestenden aan je I Love Web?


## JSON

- op het whiteboard naam en id uit de API verzamelen
- iets leren over JSON, als een van de meestgebruikte formaten van data, misschien de json validator erbij halen (ook als tegenhanger/herhaling voor html validatie)
    
Om te gebruiken de studenten te leren over JSON: 
- Er is nu ook JSON voor de programma website. 
- En er is ook een JSON voor de niveau matrix.  

- op het whiteboard allemaal een voorbeeld JSON object over jezelf maken, met naam en squad
- allemaal alvast een custom property voor zichzelf bedenken, die ze toevoegen aan dat JSON voorbeeld 


## Fetch data

- ze daarna eerst met fetch() in de browser laten oefenen met dynamische json ophalen uit onze API (id 234 is een Dummy student), gewoon in een JS file met console logs
- ze hun eigen id laten gebruiken voor zo’n fetch, zodat ze leren dat ze URLs kunnen veranderen, met bijv let studentID = 234; let url = apiUrl + studentID, nog steeds gewoon via console log
- Daarna pas via de Whois admin hun eigen data aanpassen (ik heb op het custom json field validatie toegevoegd, dus ze kunnen hier meteen eigen data invullen)
- via client side JS controleren of dat gelukt is (wow momentje!)

