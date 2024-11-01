import "dotenv/config.js" //Importamos para que use variables de entorno y reconozca el archivo .env donde esta guardada la URI.
import "../../config/database.js" //Para que el archivo cities.js se pueda conectar con la base de datos.
import Itinerary from "../Itinerary.js"

let itineraries = [
    {
        name: "Scarlett Johansson",
        photo: "https://example.com/scarlett_johansson.jpg",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["#AnimeCulture", "#ShibuyaCrossing", "#Technology", "#Sushi"],
        city: "67184ff7a871865fbf737dce"
    },
    {
        name: "Keanu Reeves",
        photo: "https://example.com/keanu_reeves.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#Temples", "#TokyoTower", "#ModernCity", "#NightLife"],
        city: "67184ff7a871865fbf737dce"
    },
    {
        name: "Tom Hanks",
        photo: "https://example.com/tom_hanks.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#HistoricalSites", "#SushiExperience", "#SamuraiCulture", "#PopCulture"],
        city: "67184ff7a871865fbf737dce"
    },
    {
        name: "Sophia Loren",
        photo: "https://example.com/sophia_loren.jpg",
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Colosseum", "#AncientHistory", "#ItalianCuisine", "#Piazzas"],
        city: "67184ff7a871865fbf737dd0"
    },
    {
        name: "Russell Crowe",
        photo: "https://example.com/russell_crowe.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#RomanEmpire", "#Vatican", "#ArtGalleries", "#StreetLife"],
        city: "67184ff7a871865fbf737dd0"
    },
    {
        name: "Monica Bellucci",
        photo: "https://example.com/monica_bellucci.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#HistoricRome", "#GourmetExperience", "#TiberRiver", "#CultureWalks"],
        city: "67184ff7a871865fbf737dd0"
    },
    {
        name: "Gisele Bündchen",
        photo: "https://example.com/gisele_bundchen.jpg",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Copacabana", "#SambaDance", "#Carnival", "#BeachLife"],
        city: "67184ff7a871865fbf737dd1"
    },
    {
        name: "Pelé",
        photo: "https://example.com/pele.jpg",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#Football", "#BrazilianCulture", "#ChristTheRedeemer", "#LocalFlavors"],
        city: "67184ff7a871865fbf737dd1"
    },
    {
        name: "Alice Braga",
        photo: "https://example.com/alice_braga.jpg",
        price: 4,
        duration: 7,
        likes: 0,
        hashtags: ["#SugarloafMountain", "#Nature", "#Adventure", "#CityTour"],
        city: "67184ff7a871865fbf737dd1"
    },
    {
        name: "Will Smith",
        photo: "https://example.com/will.jpg",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#greatPyramids", "#ancientHistory", "#mystery"],
        city: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Angelina Jolie",
        photo: "https://example.com/angelina.jpg",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#sphinx", "#riverNile", "#adventure"],
        city: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Morgan Freeman",
        photo: "https://example.com/morgan.jpg",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#pharaoh", "#egyptianMuseum", "#artifacts"],
        city: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Tom Hanks",
        photo: "https://example.com/tom.jpg",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#giza", "#pyramids", "#wonderOfTheWorld"],
        city: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Jackie Chan",
        photo: "https://example.com/jackie.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#temples", "#nightMarket", "#streetFood"],
        city: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Chris Hemsworth",
        photo: "https://example.com/chris.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#floatingMarket", "#riverCruise", "#watPho"],
        city: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Scarlett Johansson",
        photo: "https://example.com/scarlett.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#grandPalace", "#templeTour", "#culture"],
        city: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Dwayne Johnson",
        photo: "https://example.com/dwayne.jpg",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#shopping", "#nightlife", "#cuisine"],
        city: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Ryan Reynolds",
        photo: "https://example.com/ryan.jpg",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#tuktuk", "#historicalSites", "#markets"],
        city: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Tom Cruise",
        photo: "https://example.com/tomcruise.jpg",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#burjKhalifa", "#skyscrapers", "#desertSafari"],
        city: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Shah Rukh Khan",
        photo: "https://example.com/shahrukh.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#palmJumeirah", "#luxuryShopping", "#atlantis"],
        city: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Vin Diesel",
        photo: "https://example.com/vin.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#dubaiMall", "#nightlife", "#entertainment"],
        city: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Gal Gadot",
        photo: "https://example.com/gal.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#luxury", "#beach", "#modernArchitecture"],
        city: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Emma Watson",
        photo: "https://example.com/emma.jpg",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#bigBen", "#westminster", "#shopping"],
        city: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Daniel Craig",
        photo: "https://example.com/daniel.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#towerBridge", "#historicalSites", "#thames"],
        city: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Idris Elba",
        photo: "https://example.com/idris.jpg",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#theatre", "#londonEye", "#cuisine"],
        city: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Keira Knightley",
        photo: "https://example.com/keira.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#museum", "#buckingham", "#arts"],
        city: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Benedict Cumberbatch",
        photo: "https://example.com/benedict.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#hydePark", "#royalPalaces", "#literature"],
        city: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Robert Downey Jr.",
        photo: "https://example.com/robert.jpg",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#hollywood", "#walkOfFame", "#entertainment"],
        city: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Chris Evans",
        photo: "https://example.com/chris.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#beaches", "#santaMonica", "#california"],
        city: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Zoe Saldana",
        photo: "https://example.com/zoe.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#veniceBeach", "#outdoor", "#shopping"],
        city: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Scarlett Johansson",
        photo: "https://example.com/scarlett.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#themeParks", "#disney", "#universalStudios"],
        city: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Jet Li",
        photo: "https://example.com/jetli.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#forbiddenCity", "#martialArts", "#ancientHistory"],
        city: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Jackie Chan",
        photo: "https://example.com/jackie.jpg",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#greatWall", "#actionScenes", "#historicViews"],
        city: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Gong Li",
        photo: "https://example.com/gongli.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#templeOfHeaven", "#culturalExperience", "#traditionalCrafts"],
        city: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Zhang Ziyi",
        photo: "https://example.com/zhangziyi.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#summerPalace", "#lakeViews", "#imperialGardens"],
        city: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Henry Golding",
        photo: "https://example.com/henry.jpg",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#marinaBaySands", "#citySkyline", "#luxuryExperience"],
        city: "67184ff7a871865fbf737dda"
    },
    {
        name: "Michelle Yeoh",
        photo: "https://example.com/michelle.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#gardensByTheBay", "#nightSafari", "#botanicalWonders"],
        city: "67184ff7a871865fbf737dda"
    },
    {
        name: "Pierre Png",
        photo: "https://example.com/pierre.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#sentosaIsland", "#beachResorts", "#adventureActivities"],
        city: "67184ff7a871865fbf737dda"
    },
    {
        name: "Fann Wong",
        photo: "https://example.com/fann.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#orchardRoad", "#shoppingSpree", "#diningExperience"],
        city: "67184ff7a871865fbf737dda"
    }
]


Itinerary.insertMany(itineraries) //De mongoose, insertar todo.