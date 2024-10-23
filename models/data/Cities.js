import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"

const cities = [{
    id: 0,
    name: "Paris",
    img: "https://media.istockphoto.com/id/1145422105/es/foto/vista-a%C3%A9rea-de-la-torre-eiffel-par%C3%ADs.jpg?s=612x612&w=0&k=20&c=5m12kQp5USuEYJdD71E9jLA04Q0nzqcHHGx1pfTx_pA=",
    country: "France",
    continent: "Europe",
    description: "Known as the 'City of Light', Paris is famous for its art, fashion, gastronomy, and culture. Iconic landmarks include the Eiffel Tower, Notre-Dame, and the Louvre.",
    currency: "Euro (EUR)"
  },
  {
    id: 1,
    name: "New York",
    img: "https://media.istockphoto.com/id/1454217037/es/foto/estatua-de-la-libertad-y-horizonte-de-la-ciudad-de-nueva-york-con-el-distrito-financiero-de.jpg?s=612x612&w=0&k=20&c=1abPeg82iwNr0XbPc9eormGet3axsUdkaWgnXSM8e9g=",
    country: "United States",
    continent: "America",
    description: "New York City is known as the 'Big Apple', a global hub for finance, culture, and entertainment, home to landmarks like the Statue of Liberty and Times Square.",
    currency: "US Dollar (USD)"
  },
  {
    id: 2,
    name: "Tokyo",
    img: "https://media.istockphoto.com/id/1390815938/es/foto/ciudad-de-tokio-en-jap%C3%B3n.jpg?s=612x612&w=0&k=20&c=Vf3r1Qf3h-wRyrxOiZQBpZpzxjT3G3sLypwmbqgQxtU=",
    country: "Japan",
    continent: "Asia",
    description: "Tokyo is Japan's bustling capital, blending ultramodern skyscrapers with historic temples, known for its neon-lit streets, shopping districts, and culinary scene.",
    currency: "Japanese Yen (JPY)"
  },
  {
    id: 3,
    name: "London",
    img: "https://media.istockphoto.com/id/1347665170/es/foto/londres-al-atardecer.jpg?s=612x612&w=0&k=20&c=-Zryya7TOPkZahSQMIGfaRkwf0wsepYEgkrqeizgfuE=",
    country: "United Kingdom",
    continent: "Europe",
    description: "London is a leading global city in arts, commerce, and education, featuring landmarks such as Big Ben, the Tower of London, and Buckingham Palace.",
    currency: "British Pound (GBP)"
  },
  {
    id: 4,
    name: "Rome",
    img: "https://media.istockphoto.com/id/539115110/es/foto/colosseum-in-rome-italy-y-sol-de-la-ma%C3%B1ana.jpg?s=612x612&w=0&k=20&c=S2BE7bvASd4hm6Yp0VbtvaGnnqTR4p5HJ-6RfDjR-MQ=",
    country: "Italy",
    continent: "Europe",
    description: "Rome, the 'Eternal City', is rich in history, boasting ancient ruins like the Colosseum, the Roman Forum, and Vatican City, a cultural and religious hub.",
    currency: "Euro (EUR)"
  },
  {
    id: 5,
    name: "Sydney",
    img: "https://media.istockphoto.com/id/535455441/es/foto/vista-del-puerto-de-s%C3%ADdney-australia.jpg?s=612x612&w=0&k=20&c=X5CHDGqdXrf-lQywszCOKGadjwXdU5Leq-EAFxm5aME=",
    country: "Australia",
    continent: "Oceania",
    description: "Sydney is known for its iconic Opera House, Harbour Bridge, and stunning beaches, combining a vibrant city life with beautiful natural surroundings.",
    currency: "Australian Dollar (AUD)"
  },
  {
    id: 6,
    name: "Dubai",
    img: "https://media.istockphoto.com/id/1154761064/es/foto/el-panorama-de-palm-island-con-el-puerto-deportivo-de-dubai-en-la-antena-de-fondo.jpg?s=612x612&w=0&k=20&c=q-I6Eod1dJc6JWSKPbv5uG7M2jVmMRUxkkDUMgZdn04=",
    country: "United Arab Emirates",
    continent: "Asia",
    description: "Dubai is famous for its futuristic architecture, luxury shopping, and vibrant nightlife, home to the towering Burj Khalifa and expansive desert landscapes.",
    currency: "UAE Dirham (AED)"
  },
  {
    id: 7,
    name: "Berlin",
    img: "https://media.istockphoto.com/id/503874284/es/foto/edificios-de-la-ciudad-de-berl%C3%ADn-con-r%C3%ADo-spree-al-atardecer-alemania.jpg?s=612x612&w=0&k=20&c=K-A0S4gn-YRXNFH5NN0VGt_u55nNOqUPTfCox1_UfY8=",
    country: "Germany",
    continent: "Europe",
    description: "Berlin is a city with a tumultuous history, known for its art scene, modern landmarks, and historical sites such as the Berlin Wall and Brandenburg Gate.",
    currency: "Euro (EUR)"
  },
  {
    id: 8,
    name: "Buenos Aires",
    img: "https://media.istockphoto.com/id/1211804890/es/foto/buenos-aires-skyline.jpg?s=612x612&w=0&k=20&c=U1l5amCp1qAPQvnE5ji7y2Nqx3WX5zDTODDOrMka0I0=",
    country: "Argentina",
    continent: "America",
    description: "Buenos Aires, the vibrant capital of Argentina, is known for its European-style architecture, tango dance, and its lively cultural scene.",
    currency: "Argentine Peso (ARS)"
  },
  {
    id: 9,
    name: "Rio de Janeiro",
    img: "https://media.istockphoto.com/id/157185619/es/foto/cenital-de-r%C3%ADo-de-janeiro.jpg?s=612x612&w=0&k=20&c=Cw-n2AqdeaDdu-miwVPSlei63ea-PphwuKfKSSqu0BU=",
    country: "Brazil",
    continent: "America",
    description: "Rio de Janeiro is famed for its beaches, Christ the Redeemer statue, and its annual Carnival festival, one of the largest in the world.",
    currency: "Brazilian Real (BRL)"
  },
  {
    id: 10,
    name: "Cancun",
    img: "https://media.istockphoto.com/id/1391487796/es/foto/resort-en-canc%C3%BAn-durante-una-puesta-de-sol.jpg?s=612x612&w=0&k=20&c=oec8SGatzrnsRzycivwosERG7hhBL9pyaBOWmk5tu6w=",
    country: "Mexico",
    continent: "America",
    description: "Cancún is a popular tourist destination known for its white-sand beaches, vibrant nightlife, and proximity to the ancient ruins of the Mayan civilization.",
    currency: "Mexican Peso (MXN)"
  },
  {
    id: 11,
    name: "Beijing",
    img: "https://media.istockphoto.com/id/482334184/es/foto/por-la-noche-en-distrito-central-de-negocios-de-pek%C3%ADn-china-cityscape-edificios-de-la-ciudad.jpg?s=612x612&w=0&k=20&c=B0l6H6v4XmHGYVHt1ttobmhlzz8u1ts0255KkG71e40=",
    country: "China",
    continent: "Asia",
    description: "Beijing, the capital of China, is a city steeped in history, known for its imperial palaces like the Forbidden City and cultural landmarks such as the Great Wall.",
    currency: "Chinese Yuan (CNY)"
  },
  {
    id: 12,
    name: "Amsterdam",
    img: "https://media.istockphoto.com/id/1143539287/es/foto/canal-en-amsterdam-holanda-casas-del-r%C3%ADo-amstel.jpg?s=612x612&w=0&k=20&c=KioDio90Y2Z9Py5rd202ucHdf9R6F5Td7v7qrArJqCE=",
    country: "Netherlands",
    continent: "Europe",
    description: "Known for its artistic heritage, elaborate canal system, and narrow houses, Amsterdam is a city of culture, history, and vibrant nightlife.",
    currency: "Euro (EUR)"
  },
  {
    id: 13,
    name: "Cape Town",
    img: "https://media.istockphoto.com/id/620737858/es/foto/ciudad-del-cabo-y-los-12-apostels-desde-arriba.jpg?s=612x612&w=0&k=20&c=VJl9EMVoFguhyv137mmklifJ7cFBm8NL7foffQ510aY=",
    country: "South Africa",
    continent: "Africa",
    description: "Cape Town is famous for its stunning harbor, Table Mountain, and as a hub for African culture and history, offering scenic beauty and rich diversity.",
    currency: "South African Rand (ZAR)"
  },
  {
    id: 14,
    name: "Vancouver",
    img: "https://media.istockphoto.com/id/1453719521/es/foto/hermosa-vista-a%C3%A9rea-del-horizonte-del-centro-de-vancouver-columbia-brit%C3%A1nica-canad%C3%A1-al.jpg?s=612x612&w=0&k=20&c=1HLW6v1RhJK4wx8QnMtXKllUs8zaN3TbLlPEseH0-60=",
    country: "Canada",
    continent: "America",
    description: "Surrounded by mountains and ocean, Vancouver is a thriving west coast city known for its art, theater, and outdoor activities.",
    currency: "Canadian Dollar (CAD)"
  }]

City.insertMany(cities)