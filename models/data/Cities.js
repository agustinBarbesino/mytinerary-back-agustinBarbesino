import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"

const cities = [{
    id: 0,
    name: "Paris",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
    country: "France",
    continent: "Europe",
    description: "Known as the 'City of Light', Paris is famous for its art, fashion, gastronomy, and culture. Iconic landmarks include the Eiffel Tower, Notre-Dame, and the Louvre.",
    currency: "Euro (EUR)"
  },
  {
    id: 1,
    name: "New York",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/New_York_City_at_night_HDR.jpg",
    country: "United States",
    continent: "America",
    description: "New York City is known as the 'Big Apple', a global hub for finance, culture, and entertainment, home to landmarks like the Statue of Liberty and Times Square.",
    currency: "US Dollar (USD)"
  },
  {
    id: 2,
    name: "Tokyo",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Tokyo_Tower_and_Tokyo_Skyline.jpg",
    country: "Japan",
    continent: "Asia",
    description: "Tokyo is Japan's bustling capital, blending ultramodern skyscrapers with historic temples, known for its neon-lit streets, shopping districts, and culinary scene.",
    currency: "Japanese Yen (JPY)"
  },
  {
    id: 3,
    name: "London",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
    country: "United Kingdom",
    continent: "Europe",
    description: "London is a leading global city in arts, commerce, and education, featuring landmarks such as Big Ben, the Tower of London, and Buckingham Palace.",
    currency: "British Pound (GBP)"
  },
  {
    id: 4,
    name: "Rome",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
    country: "Italy",
    continent: "Europe",
    description: "Rome, the 'Eternal City', is rich in history, boasting ancient ruins like the Colosseum, the Roman Forum, and Vatican City, a cultural and religious hub.",
    currency: "Euro (EUR)"
  },
  {
    id: 5,
    name: "Sydney",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Sydney_skyline_from_the_water.jpg",
    country: "Australia",
    continent: "Oceania",
    description: "Sydney is known for its iconic Opera House, Harbour Bridge, and stunning beaches, combining a vibrant city life with beautiful natural surroundings.",
    currency: "Australian Dollar (AUD)"
  },
  {
    id: 6,
    name: "Dubai",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Dubai_Skyline_2020.jpg",
    country: "United Arab Emirates",
    continent: "Asia",
    description: "Dubai is famous for its futuristic architecture, luxury shopping, and vibrant nightlife, home to the towering Burj Khalifa and expansive desert landscapes.",
    currency: "UAE Dirham (AED)"
  },
  {
    id: 7,
    name: "Berlin",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Berlin_Skyline_Fernsehturm_2015.jpg",
    country: "Germany",
    continent: "Europe",
    description: "Berlin is a city with a tumultuous history, known for its art scene, modern landmarks, and historical sites such as the Berlin Wall and Brandenburg Gate.",
    currency: "Euro (EUR)"
  },
  {
    id: 8,
    name: "Buenos Aires",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Buenos_Aires_-_Plaza_de_Mayo_1.jpg",
    country: "Argentina",
    continent: "America",
    description: "Buenos Aires, the vibrant capital of Argentina, is known for its European-style architecture, tango dance, and its lively cultural scene.",
    currency: "Argentine Peso (ARS)"
  },
  {
    id: 9,
    name: "Rio de Janeiro",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Rio_de_Janeiro_Brazil.jpg",
    country: "Brazil",
    continent: "America",
    description: "Rio de Janeiro is famed for its beaches, Christ the Redeemer statue, and its annual Carnival festival, one of the largest in the world.",
    currency: "Brazilian Real (BRL)"
  },
  {
    id: 10,
    name: "Cancun",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cancun_Mexico_Beach.jpg",
    country: "Mexico",
    continent: "America",
    description: "Cancún is a popular tourist destination known for its white-sand beaches, vibrant nightlife, and proximity to the ancient ruins of the Mayan civilization.",
    currency: "Mexican Peso (MXN)"
  },
  {
    id: 11,
    name: "Beijing",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Beijing_skyline_as_seen_from_CCTV_Headquarters.jpg",
    country: "China",
    continent: "Asia",
    description: "Beijing, the capital of China, is a city steeped in history, known for its imperial palaces like the Forbidden City and cultural landmarks such as the Great Wall.",
    currency: "Chinese Yuan (CNY)"
  },
  {
    id: 12,
    name: "Amsterdam",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Amsterdam_Canal_View.jpg",
    country: "Netherlands",
    continent: "Europe",
    description: "Known for its artistic heritage, elaborate canal system, and narrow houses, Amsterdam is a city of culture, history, and vibrant nightlife.",
    currency: "Euro (EUR)"
  },
  {
    id: 13,
    name: "Cape Town",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/50/View_of_Cape_Town_from_Table_Mountain.jpg",
    country: "South Africa",
    continent: "Africa",
    description: "Cape Town is famous for its stunning harbor, Table Mountain, and as a hub for African culture and history, offering scenic beauty and rich diversity.",
    currency: "South African Rand (ZAR)"
  },
  {
    id: 14,
    name: "Vancouver",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Downtown_Vancouver.jpg",
    country: "Canada",
    continent: "America",
    description: "Surrounded by mountains and ocean, Vancouver is a thriving west coast city known for its art, theater, and outdoor activities.",
    currency: "Canadian Dollar (CAD)"
  }]

City.insertMany(cities)