//los scrips que tendran la informacion que se llenara siguiendo el molde del modelo para ser enviado a la base de datos.

import "dotenv/config.js" //Importamos para que use variables de entorno y reconozca el archivo .env donde esta guardada la URI.
import "../../config/database.js" //Para que el archivo cities.js se pueda conectar con la base de datos.
import City from "../City.js" //Importamos para conectamos al model Cities.js.


let cities = [
    {
        name: "Paris",
        photo: "https://st.depositphotos.com/1038117/1246/i/450/depositphotos_12462950-stock-photo-color-of-autumn-in-paris.jpg",
        country: "France",
        continent: "Europe",
        description: "Paris is renowned for its world-famous landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. Visitors enjoy a romantic ambiance filled with historical sites, art galleries, and cafes. Paris is also known for its haute couture and exquisite cuisine, making it a dream destination.",
        isVisaRequired: false,
        currency: "Euro",
        language: "French",
        averageHotelCost: 150,
        averageTemperature: 15
    },
    {
        name: "Tokyo",
        photo: "https://viajes.nationalgeographic.com.es/medio/2023/12/28/shutterstock-623610230_06551847_231228125020_800x800.jpg",
        country: "Japan",
        continent: "Asia",
        description: "Tokyo offers a unique blend of ultra-modern skyscrapers and traditional temples. Tourists explore the vibrant Shibuya and Shinjuku districts, visit historic temples, and enjoy world-class dining. The city is also a hub for tech innovation and pop culture, making it a must-see destination for any traveler.",
        isVisaRequired: true,
        currency: "Yen",
        language: "Japanese",
        averageHotelCost: 120,
        averageTemperature: 18
    },
    {
        name: "Sydney",
        photo: "https://viajeaustralia.com/wp-content/uploads/2020/06/que-ver-en-sidney-1280x720.jpg",
        country: "Australia",
        continent: "Australia",
        description: "Sydney is famed for its Opera House and Harbour Bridge, both set against the backdrop of its iconic harbour. With beautiful beaches like Bondi, world-class dining, and vibrant culture, Sydney offers visitors a perfect blend of urban and natural attractions, making it a top destination for international tourists.",
        isVisaRequired: false,
        currency: "Australian Dollar",
        language: "English",
        averageHotelCost: 200,
        averageTemperature: 22
    },
    {
        name: "Rome",
        photo: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/E6C8/production/_96908095_gettyimages-539115110.jpg.webp",
        country: "Italy",
        continent: "Europe",
        description: "Rome, Italy's capital, is a city steeped in history, from the Roman Colosseum to the Vatican. Tourists come to see iconic landmarks, enjoy traditional Italian cuisine, and explore the rich cultural heritage of the Eternal City. Rome offers a timeless experience for those who seek history, art, and vibrant street life.",
        isVisaRequired: false,
        currency: "Euro",
        language: "Italian",
        averageHotelCost: 140,
        averageTemperature: 17
    },
    {
        name: "Rio de Janeiro",
        photo: "https://gentemayorista.com.co/wp-content/uploads/2024/07/Brasil-Rio-de-Janeiro-e1720537691152-1536x1024.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Rio de Janeiro is known for its iconic landmarks like Christ the Redeemer, Sugarloaf Mountain, and its world-renowned Carnival. The city offers a vibrant mix of beach life, samba music, and outdoor adventure. Visitors can explore famous beaches like Copacabana and Ipanema while immersing themselves in Brazil's lively culture.",
        isVisaRequired: false,
        currency: "Brazilian Real",
        language: "Portuguese",
        averageHotelCost: 100,
        averageTemperature: 26
    },
    {
        name: "Cape Town",
        photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=1200&h=-1&s=1",
        country: "South Africa",
        continent: "Africa",
        description: "Cape Town is famous for its stunning natural beauty, with Table Mountain providing an incredible backdrop to the city. Tourists explore the vibrant waterfront, historical Robben Island, and take trips to nearby vineyards. Cape Town offers a mix of urban sophistication and easy access to some of the most breathtaking scenery in Africa.",
        isVisaRequired: false,
        currency: "South African Rand",
        language: "English",
        averageHotelCost: 110,
        averageTemperature: 20
    },
    {
        name: "Cairo",
        photo: "https://images2.bovpg.net/fw/media/1/2/9/8/7/298761.jpg",
        country: "Egypt",
        continent: "Africa",
        description: "Cairo is a historical treasure trove, home to ancient wonders like the Great Pyramids of Giza and the Sphinx. Visitors can explore bustling bazaars, the Egyptian Museum, and sail along the Nile River. Cairo is a must-visit for history enthusiasts and those seeking to experience the cradle of civilization.",
        isVisaRequired: true,
        currency: "Egyptian Pound",
        language: "Arabic",
        averageHotelCost: 90,
        averageTemperature: 28
    },
    {
        name: "Bangkok",
        photo: "https://www.vietnamstay.es/DataUpload/Attractions/201932822432-bangkok-overview-aerial-view-2.jpg",
        country: "Thailand",
        continent: "Asia",
        description: "Bangkok, Thailand’s capital, is a vibrant city known for its bustling streets, ornate temples, and rich cultural heritage. Visitors flock to see the Grand Palace, Wat Pho, and the famous floating markets. Bangkok is a lively hub for street food, shopping, and nightlife, attracting millions of tourists each year.",
        isVisaRequired: false,
        currency: "Thai Baht",
        language: "Thai",
        averageHotelCost: 60,
        averageTemperature: 30
    },
    {
        name: "Dubai",
        photo: "https://www.viajar-dubai.com/img/guia-viaje-dubai.jpg",
        country: "UAE",
        continent: "Asia",
        description: "Dubai is a top destination known for its ultramodern architecture, luxury shopping, and lively nightlife. The Burj Khalifa, Palm Jumeirah, and Dubai Mall are some of the city's most iconic attractions. Dubai offers visitors a blend of futuristic urban experiences with desert safaris and pristine beaches.",
        isVisaRequired: true,
        currency: "UAE Dirham",
        language: "Arabic",
        averageHotelCost: 180,
        averageTemperature: 35
    },
    {
        name: "London",
        photo: "https://assets.voxcity.com/uploads/blog_images/Is-london-a-nice-place-to-visit-image-main_original.jpg",
        country: "UK",
        continent: "Europe",
        description: "London is one of the most visited cities in the world, known for its rich history, vibrant culture, and iconic landmarks like Big Ben, Buckingham Palace, and the British Museum. The city is a global hub for art, fashion, and politics, offering a wide range of activities and sights for every visitor.",
        isVisaRequired: false,
        currency: "Pound Sterling",
        language: "English",
        averageHotelCost: 230,
        averageTemperature: 11
    },
    {
        name: "Istanbul",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/ac/5a.jpg",
        country: "Turkey",
        continent: "Europe/Asia",
        description: "Istanbul, straddling Europe and Asia, is famous for its rich history, vibrant markets, and stunning mosques such as the Blue Mosque and Hagia Sophia. Tourists are drawn to its unique cultural blend, lively bazaars, and rich Ottoman heritage. Istanbul offers an exciting mix of the ancient and the modern.",
        isVisaRequired: true,
        currency: "Turkish Lira",
        language: "Turkish",
        averageHotelCost: 80,
        averageTemperature: 16
    },
    {
        name: "Los Angeles",
        photo: "https://turismo.encolombia.com/wp-content/uploads/2019/12/Turismo-en-Los-Angeles.jpg",
        country: "USA",
        continent: "North America",
        description: "Los Angeles is the entertainment capital of the world, home to Hollywood, famous beaches like Santa Monica, and iconic landmarks like the Hollywood Sign. Visitors can explore art galleries, world-class shopping, and enjoy a variety of outdoor activities under the California sun. LA is a diverse and vibrant city.",
        isVisaRequired: true,
        currency: "USD",
        language: "English",
        averageHotelCost: 220,
        averageTemperature: 20
    },
    {
        name: "Beijing",
        photo: "https://content.r9cdn.net/rimg/dimg/62/28/22c46ab3-city-3286-164700d5d0b.jpg?width=1366&height=768&xhint=1506&yhint=1211&crop=true",
        country: "China",
        continent: "Asia",
        description: "Beijing is the capital of China and a cultural hub known for its ancient architecture, including the Forbidden City, the Great Wall, and the Temple of Heaven. As a modern metropolis, it also boasts cutting-edge technology and innovation. Visitors can immerse themselves in centuries of history and enjoy exquisite Chinese cuisine.",
        isVisaRequired: true,
        currency: "Yuan",
        language: "Mandarin",
        averageHotelCost: 90,
        averageTemperature: 14
    },
    {
        name: "Singapore",
        photo: "https://www.viajarsingapur.com/img/que-visitar.jpg",
        country: "Singapore",
        continent: "Asia",
        description: "Singapore is a modern city-state known for its cleanliness, high quality of life, and stunning attractions such as Marina Bay Sands and Gardens by the Bay. Visitors enjoy its cultural diversity, world-class dining, and shopping experiences. Singapore is a hub of innovation and a gateway to Southeast Asia.",
        isVisaRequired: false,
        currency: "Singapore Dollar",
        language: "English",
        averageHotelCost: 170,
        averageTemperature: 28
    },
    {
        name: "Moscow",
        photo: "https://img.freepik.com/fotos-premium/catedral-san-basilio-plaza-roja-moscu-hermosa-manana-otono_248906-1130.jpg",
        country: "Russia",
        continent: "Europe/Asia",
        description: "Moscow, the capital of Russia, is known for its rich history, architecture, and cultural landmarks like the Kremlin and Red Square. Visitors can experience the blend of imperial history and modern urban life, with world-class museums, theaters, and an expanding culinary scene.",
        isVisaRequired: true,
        currency: "Russian Ruble",
        language: "Russian",
        averageHotelCost: 70,
        averageTemperature: 5
    }
];

City.insertMany(cities) //De mongoose, insertar todo.