import "dotenv/config.js" //Importamos para que use variables de entorno y reconozca el archivo .env donde esta guardada la URI.
import "../../config/database.js" //Para que el archivo cities.js se pueda conectar con la base de datos.
import Itinerary from "../Itinerary.js"

let itineraries = [
    {
        name: "Scarlett Johansson",
        photo: "https://www.radioaspen.com.py/wp-content/uploads/2016/07/scarlett-johansson-fotos-prohibidas3.jpg",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["#AnimeCulture", "#ShibuyaCrossing", "#Technology", "#Sushi"],
        cityId: "67184ff7a871865fbf737dce"
    },
    {
        name: "Keanu Reeves",
        photo: "https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/1:1/w_2000,h_2000,c_limit/Keanu-Reeves.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#Temples", "#TokyoTower", "#ModernCity", "#NightLife"],
        cityId: "67184ff7a871865fbf737dce"
    },
    {
        name: "Tom Hanks",
        photo: "https://static.wikia.nocookie.net/universo-reynandez/images/1/15/Tom_Hanks.webp/revision/latest?cb=20221007071949&path-prefix=es",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#HistoricalSites", "#SushiExperience", "#SamuraiCulture", "#PopCulture"],
        cityId: "67184ff7a871865fbf737dce"
    },
    {
        name: "Sophia Loren",
        photo: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-71643263-copy.jpg",
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Colosseum", "#AncientHistory", "#ItalianCuisine", "#Piazzas"],
        cityId: "67184ff7a871865fbf737dd0"
    },
    {
        name: "Russell Crowe",
        photo: "https://media.vanityfair.com/photos/6426f3edc1dfdbcd961865d7/master/w_2560%2Cc_limit/1433796456",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#RomanEmpire", "#Vatican", "#ArtGalleries", "#StreetLife"],
        cityId: "67184ff7a871865fbf737dd0"
    },
    {
        name: "Monica Bellucci",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Monica_Bellucci%2C_Women%27s_World_Awards_2009_b.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#HistoricRome", "#GourmetExperience", "#TiberRiver", "#CultureWalks"],
        cityId: "67184ff7a871865fbf737dd0"
    },
    {
        name: "Gisele Bündchen",
        photo: "https://static.public.fr/wp-content/uploads/2024/03/Gisele-Bundchen-Une-vie-de-reve-loin-d-etre-toujours-simple-2.webp",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Copacabana", "#SambaDance", "#Carnival", "#BeachLife"],
        cityId: "67184ff7a871865fbf737dd1"
    },
    {
        name: "Pelé",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pele_by_John_Mathew_Smith.jpg/640px-Pele_by_John_Mathew_Smith.jpg",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#Football", "#BrazilianCulture", "#ChristTheRedeemer", "#LocalFlavors"],
        cityId: "67184ff7a871865fbf737dd1"
    },
    {
        name: "Alice Braga",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyS5snfICxVvrgQSOQixer53h019RjtxVZyW7MQaCHP1zINooPikCS662DGE0i1ZIIf0&usqp=CAU",
        price: 4,
        duration: 7,
        likes: 0,
        hashtags: ["#SugarloafMountain", "#Nature", "#Adventure", "#CityTour"],
        cityId: "67184ff7a871865fbf737dd1"
    },
    {
        name: "Will Smith",
        photo: "https://ca-times.brightspotcdn.com/dims4/default/cf72c85/2147483647/strip/true/crop/3600x2400+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fapinews.efeservicios.com%2Ffiles%2Fget%2FCfDJ8EY7bN1RQ31FtZk1KFk4cDHPwTBeaSGMuI7MbYPznJdAF259GnNffE8D9wLtJgoe7x_B9HeD-Y5f2mocPpxip8E7QVI59TsjNqIp-qmTTjxfTmqxKh31DjF7BN-b-95sFDnBnQkR7kcy5w_WeaOuz56HoXMgP6a-Z25cjJfO62P5vIWdKZaDIsy3adi1LVheFPI1es2UKA_loewtVTDDDQjC6JbhmHb1MrMaptUu9S_5",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#greatPyramids", "#ancientHistory", "#mystery"],
        cityId: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Angelina Jolie",
        photo: "https://static.wikia.nocookie.net/disney/images/9/90/Angelina_Jolie.jpg/revision/latest/scale-to-width-down/776?cb=20180915095952&path-prefix=it",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#sphinx", "#riverNile", "#adventure"],
        cityId: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Morgan Freeman",
        photo: "https://image.tmdb.org/t/p/w500/905k0RFzH0Kd6gx8oSxRdnr6FL.jpg",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#pharaoh", "#egyptianMuseum", "#artifacts"],
        cityId: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Tom Hanks",
        photo: "https://static.wikia.nocookie.net/universo-reynandez/images/1/15/Tom_Hanks.webp/revision/latest?cb=20221007071949&path-prefix=es",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#giza", "#pyramids", "#wonderOfTheWorld"],
        cityId: "67184ff7a871865fbf737dd3"
    },
    {
        name: "Jackie Chan",
        photo: "https://www.hollywoodreporter.com/wp-content/uploads/2012/07/chan_a.jpg?w=1440&h=810&crop=1",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#temples", "#nightMarket", "#streetFood"],
        cityId: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Chris Hemsworth",
        photo: "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#floatingMarket", "#riverCruise", "#watPho"],
        cityId: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Scarlett Johansson",
        photo: "https://www.radioaspen.com.py/wp-content/uploads/2016/07/scarlett-johansson-fotos-prohibidas3.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#grandPalace", "#templeTour", "#culture"],
        cityId: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Dwayne Johnson",
        photo: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/235135_v9_bc.jpg",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#shopping", "#nightlife", "#cuisine"],
        cityId: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Ryan Reynolds",
        photo: "https://ntvb.tmsimg.com/assets/assets/57282_v9_bc.jpg?w=360&h=480",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#tuktuk", "#historicalSites", "#markets"],
        cityId: "67184ff7a871865fbf737dd4"
    },
    {
        name: "Tom Cruise",
        photo: "https://hips.hearstapps.com/hmg-prod/images/tom-cruise-2019-1625218198.jpg?crop=1xw:1xh;center,top&resize=980:*",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#burjKhalifa", "#skyscrapers", "#desertSafari"],
        cityId: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Shah Rukh Khan",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sharukhan.jpg/220px-Sharukhan.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#palmJumeirah", "#luxuryShopping", "#atlantis"],
        cityId: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Vin Diesel",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LTHneEMAMN5k00R8c-SWh-i6oA4lZYjS0A&s",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#dubaiMall", "#nightlife", "#entertainment"],
        cityId: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Gal Gadot",
        photo: "https://www.jewishvirtuallibrary.org/jsource/images/People/galgadot.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#luxury", "#beach", "#modernArchitecture"],
        cityId: "67184ff7a871865fbf737dd5"
    },
    {
        name: "Emma Watson",
        photo: "https://media.glamour.es/photos/650d532784ed3b5574766bcc/1:1/w_2853,h_2853,c_limit/emma%20watson%20bow%20hair%20.jpg",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#bigBen", "#westminster", "#shopping"],
        cityId: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Daniel Craig",
        photo: "https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_FMjpg_UX1000_.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#towerBridge", "#historicalSites", "#thames"],
        cityId: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Idris Elba",
        photo: "https://static.wikia.nocookie.net/theoffice/images/8/83/Idris_Elba.jpg/revision/latest?cb=20191229175055",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#theatre", "#londonEye", "#cuisine"],
        cityId: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Keira Knightley",
        photo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#museum", "#buckingham", "#arts"],
        cityId: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Benedict Cumberbatch",
        photo: "https://media.revistagq.com/photos/61efe16afed8925d535f22b8/4:3/w_3000,h_2250,c_limit/GettyImages-1346067854.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#hydePark", "#royalPalaces", "#literature"],
        cityId: "67184ff7a871865fbf737dd6"
    },
    {
        name: "Robert Downey Jr.",
        photo: "https://www.lanacion.com.ar/resizer/v2/robert-downey-jr-dijo-que-demandara-a-hollywood-WRRL2LAKCRCYTDKGHCHOVYWRQU.jpg?auth=6bb5ff6c64d7b2582cd77c0c72d8b42810449dad0962201082a3387ea8aa02fd&width=420&height=280&quality=70&smart=true",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#hollywood", "#walkOfFame", "#entertainment"],
        cityId: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Chris Evans",
        photo: "https://s1.r29static.com/bin/entry/bd9/720x864,85/2151975/image.webp",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#beaches", "#santaMonica", "#california"],
        cityId: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Zoe Saldana",
        photo: "https://media.glamour.es/photos/64ae6b7d5ae47086e185a807/master/w_1600%2Cc_limit/zoe%2520saldan%25CC%2583a%2520lob%2520.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#veniceBeach", "#outdoor", "#shopping"],
        cityId: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Scarlett Johansson",
        photo: "https://www.radioaspen.com.py/wp-content/uploads/2016/07/scarlett-johansson-fotos-prohibidas3.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#themeParks", "#disney", "#universalStudios"],
        cityId: "67184ff7a871865fbf737dd8"
    },
    {
        name: "Jet Li",
        photo: "https://images.squarespace-cdn.com/content/v1/5fdb733c16ce5117405ea7d0/1608219656824-S4AWP9CS0JJS146FJWVI/jet-li.jpeg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#forbiddenCity", "#martialArts", "#ancientHistory"],
        cityId: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Jackie Chan",
        photo: "https://www.hollywoodreporter.com/wp-content/uploads/2012/07/chan_a.jpg?w=1440&h=810&crop=1",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#greatWall", "#actionScenes", "#historicViews"],
        cityId: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Gong Li",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Gong_Li_Cannes_2016.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#templeOfHeaven", "#culturalExperience", "#traditionalCrafts"],
        cityId: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Zhang Ziyi",
        photo: "https://cdn.britannica.com/12/215512-050-525E5339/Chinese-actress-Zhang-Ziyi-2019.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#summerPalace", "#lakeViews", "#imperialGardens"],
        cityId: "67184ff7a871865fbf737dd9"
    },
    {
        name: "Henry Golding",
        photo: "https://static.wikia.nocookie.net/gijoe/images/4/48/Henry_Golding.jpg/revision/latest?cb=20190815043343",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#marinaBaySands", "#citySkyline", "#luxuryExperience"],
        cityId: "67184ff7a871865fbf737dda"
    },
    {
        name: "Michelle Yeoh",
        photo: "https://ew.com/thmb/5MoeWGRKPhNWqAZ3rzQRg40-yKo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Michelle-Yeoh-0325201918-be6bd396f29141a1beee76dbed336c44.jpg",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#gardensByTheBay", "#nightSafari", "#botanicalWonders"],
        cityId: "67184ff7a871865fbf737dda"
    },
    {
        name: "Pierre Png",
        photo: "https://m.media-amazon.com/images/M/MV5BNjlmNGMxOWMtNWE2Yy00ZThmLTkxZTctM2RkYzA5YTUyODg1XkEyXkFqcGc@._V1_CR834,0,1149,1724_FMjpg_UX1000_.jpg",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#sentosaIsland", "#beachResorts", "#adventureActivities"],
        cityId: "67184ff7a871865fbf737dda"
    },
    {
        name: "hugh jackman",
        photo: "https://cdn.britannica.com/47/201647-050-C547C128/Hugh-Jackman-2013.jpg",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#orchardRoad", "#shoppingSpree", "#diningExperience"],
        cityId: "67184ff7a871865fbf737dda"
    }
]


Itinerary.insertMany(itineraries) //De mongoose, insertar todo.