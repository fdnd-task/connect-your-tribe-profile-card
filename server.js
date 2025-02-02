// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// Vul hier jouw eigen ID in (zie de instructies in de leertaak)
const studentID = 234

// Doe een fetch naar een URL op de WHOIS API, ga pas verder als de fetch gelukt is
const response = await fetch('https://fdnd.directus.app/items/person/' + studentID)

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const responseJson = await response.json()

// Controleer de data in je console (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(responseJson)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources (zoals CSS, JavaScript, afbeeldingen en fonts)
app.use(express.static('public'))


// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', function (request, response) {
   // Render index.liquid uit de views map en geef de opgehaalde data mee, in een variabele genaamd person
   response.render('index.liquid', {person: responseJson.data})
})

// Maak een POST route voor de index
app.post('/', function (request, response) {
  // Er is nog geen afhandeling van POST, stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
