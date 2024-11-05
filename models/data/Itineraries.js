import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../Itinerary.js"

const itineraries = [
    {
      id: 0,
      userName: "Emma Watson",
      userImg: "https://cdn.britannica.com/29/215029-050-84AA8F39/British-actress-Emma-Watson-2017.jpg",
      price: 4,
      duration: 120,
      likes: 0,
      hashtags: ["#EiffelTower", "#CityOfLight", "#ParisFashion"],
      comments: ["Great views!", "Magical experience!"],
      city: "Paris"
    },
    {
      id: 1,
      userName: "Leonardo DiCaprio",
      userImg: "https://static.wikia.nocookie.net/doblaje/images/1/14/LeonardoDiCaprio.jpg/revision/latest?cb=20241008044345&path-prefix=es",
      price: 3,
      duration: 180,
      likes: 0,
      hashtags: ["#Louvre", "#ArtLover", "#MonaLisa"],
      comments: ["A masterpiece of art!", "Incredible history!"],
      city: "Paris"
    },
    {
      id: 2,
      userName: "Taylor Swift",
      userImg: "https://cdn.britannica.com/86/182086-050-5FB81069/singer-Taylor-swift-2013.jpg",
      price: 5,
      duration: 240,
      likes: 0,
      hashtags: ["#StatueOfLiberty", "#NYCViews", "#TimesSquare"],
      comments: ["So vibrant!", "Great for photos!"],
      city: "New York"
    },
    {
      id: 3,
      userName: "Ryan Reynolds",
      userImg: "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
      price: 4,
      duration: 150,
      likes: 0,
      hashtags: ["#Broadway", "#NYCNightlife", "#Theater"],
      comments: ["Fantastic energy!", "Broadway at its best!"],
      city: "New York"
    },
    {
      id: 4,
      userName: "Scarlett Johansson",
      userImg: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
      price: 2,
      duration: 210,
      likes: 0,
      hashtags: ["#ShibuyaCrossing", "#Tokyo", "#SushiTime"],
      comments: ["Loved every moment!", "Tokyo is surreal!"],
      city: "Tokyo"
    },
    {
      id: 5,
      userName: "Keanu Reeves",
      userImg: "https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/4:3/w_2664,h_1998,c_limit/Keanu-Reeves.jpg",
      price: 3,
      duration: 180,
      likes: 0,
      hashtags: ["#CherryBlossoms", "#TokyoLife", "#Tradition"],
      comments: ["Beautiful and peaceful!", "Unforgettable!"],
      city: "Tokyo"
    },
    {
      id: 6,
      userName: "Benedict Cumberbatch",
      userImg: "https://hips.hearstapps.com/hmg-prod/images/benedict-cumberbatch-attends-the-afi-awards-luncheon-at-news-photo-1689749804.jpg?crop=0.453xw:0.680xh;0.360xw,0.0660xh&resize=1200:*",
      price: 5,
      duration: 160,
      likes: 0,
      hashtags: ["#BigBen", "#Thames", "#LondonHistory"],
      comments: ["A city rich in history!", "Stunning views!"],
      city: "London"
    },
    {
      id: 7,
      userName: "Tom Hiddleston",
      userImg: "https://cdn.britannica.com/12/215012-050-19D71F2D/English-actor-Tom-Hiddleston-2018.jpg",
      price: 4,
      duration: 130,
      likes: 0,
      hashtags: ["#BuckinghamPalace", "#RoyalTour", "#LondonLife"],
      comments: ["Such a regal experience!", "A must-see!"],
      city: "London"
    },
    {
      id: 8,
      userName: "Chris Hemsworth",
      userImg: "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
      price: 2,
      duration: 180,
      likes: 0,
      hashtags: ["#SydneyOpera", "#BondiBeach", "#AussieLife"],
      comments: ["Incredible coastline!", "Sydney is beautiful!"],
      city: "Sydney"
    },
    {
      id: 9,
      userName: "Natalie Portman",
      userImg: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/71364_v9_bb.jpg",
      price: 3,
      duration: 200,
      likes: 0,
      hashtags: ["#HarbourBridge", "#SydneySights", "#Nature"],
      comments: ["The views are stunning!", "Loved every minute!"],
      city: "Sydney"
    },
    {
      id: 10,
      userName: "Russell Crowe",
      userImg: "https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_.jpg",
      price: 5,
      duration: 160,
      likes: 0,
      hashtags: ["#Colosseum", "#AncientRome", "#HistoryBuff"],
      comments: ["Truly iconic!", "Rome is amazing!"],
      city: "Rome"
    },
    {
      id: 11,
      userName: "Monica Bellucci",
      userImg: "https://wallpapers.com/images/featured/monica-bellucci-qdn3zm0234dy4vg0.jpg",
      price: 3,
      duration: 140,
      likes: 0,
      hashtags: ["#VaticanCity", "#RomanArt", "#ItalianCulture"],
      comments: ["So much to see!", "Absolutely gorgeous!"],
      city: "Rome"
    },
    {
      id: 12,
      userName: "Will Smith",
      userImg: "https://img2.rtve.es/im/6467488/?w=900",
      price: 4,
      duration: 170,
      likes: 0,
      hashtags: ["#BerlinWall", "#BrandenburgGate", "#BerlinVibes"],
      comments: ["Powerful history!", "Amazing experience!"],
      city: "Berlin"
    },
    {
      id: 13,
      userName: "Natalie Dormer",
      userImg: "https://media.gq.com.mx/photos/640ca213bb07f0d0131b3ee8/4:3/w_2664,h_1998,c_limit/New%20Project%20(3).jpg",
      price: 2,
      duration: 120,
      likes: 0,
      hashtags: ["#MuseumIsland", "#ArtScene", "#BerlinCulture"],
      comments: ["Berlin is full of surprises!", "Loved it!"],
      city: "Berlin"
    },
    {
      id: 14,
      userName: "Madonna",
      userImg: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2019%2F05%2F14130549%2FMadonna-1920.jpg?auth=a369427bf5bbe712af6a5f3150cfb1a5758d3272a1c532780650f415bd7a7e1b&smart=true&width=1200&height=900&quality=85",
      price: 4,
      duration: 180,
      likes: 0,
      hashtags: ["#Tango", "#BuenosAires", "#Music"],
      comments: ["Amazing cultural experience!", "Full of energy!"],
      city: "Buenos Aires"
    },
    {
      id: 15,
      userName: "Shakira",
      userImg: "https://upload.wikimedia.org/wikipedia/commons/0/0b/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2901.jpg",
      price: 3,
      duration: 160,
      likes: 0,
      hashtags: ["#Nightlife", "#Argentina", "#CityVibes"],
      comments: ["Fantastic energy!", "Great place to visit!"],
      city: "Buenos Aires"
    },
    {
      id: 16,
      userName: "Jason Momoa",
      userImg: "https://media.glamour.es/photos/616f921cc16487e5fd1bd1ff/master/w_1600%2Cc_limit/623375.jpeg",
      price: 2,
      duration: 200,
      likes: 0,
      hashtags: ["#ChristTheRedeemer", "#RioLife", "#Brazil"],
      comments: ["Loved the views!", "Beautiful landscapes!"],
      city: "Rio de Janeiro"
    },
    {
      id: 17,
      userName: "Anitta",
      userImg: "https://umomag.com/wp-content/uploads/2019/04/entrevista-anitta-02-umomag.jpg",
      price: 5,
      duration: 220,
      likes: 0,
      hashtags: ["#Carnival", "#Samba", "#RioDeJaneiro"],
      comments: ["Such a fun experience!", "Can't wait for next time!"],
      city: "Rio de Janeiro"
    }
  ];

  Itinerary.insertMany(itineraries)