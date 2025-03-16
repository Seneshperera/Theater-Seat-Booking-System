const movies = [
  {
    id: 1,
    title: "Interstellar",
    image: "/api/assets/Interstellar.jfTf", // Updated path to use the API endpoint
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    price: 12.99,
    duration: "2h 49m",
    genre: "Sci-Fi, Adventure",
    rating: "PG-13",
    showTimes: ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM']
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "/api/placeholder/300/450?text=The+Dark+Knight", // Added movie title to placeholder
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    price: 11.99,
    duration: "2h 32m",
    genre: "Action, Crime, Drama",
    rating: "PG-13",
    showTimes: ['11:00 AM', '2:30 PM', '6:00 PM', '9:30 PM']
  },
  {
    id: 3,
    title: "Inception",
    image: "/api/placeholder/300/450?text=Inception", // Added movie title to placeholder
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    price: 12.99,
    duration: "2h 28m",
    genre: "Action, Adventure, Sci-Fi",
    rating: "PG-13",
    showTimes: ['10:30 AM', '1:45 PM', '5:15 PM', '8:45 PM']
  },
  {
    id: 4,
    title: "Parasite",
    image: "/api/placeholder/300/450?text=Parasite", // Added movie title to placeholder
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    price: 13.99,
    duration: "2h 12m",
    genre: "Comedy, Drama, Thriller",
    rating: "R",
    showTimes: ['12:00 PM', '3:15 PM', '6:30 PM', '9:45 PM']
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    image: "/api/placeholder/300/450?text=The+Shawshank+Redemption", // Added movie title to placeholder
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    price: 10.99,
    duration: "2h 22m",
    genre: "Drama",
    rating: "R",
    showTimes: ['11:30 AM', '2:45 PM', '6:15 PM', '9:00 PM']
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    image: "/api/placeholder/300/450?text=Avengers+Endgame", // Added movie title to placeholder
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    price: 14.99,
    duration: "3h 1m",
    genre: "Action, Adventure, Drama",
    rating: "PG-13",
    showTimes: ['10:15 AM', '2:00 PM', '5:45 PM', '9:15 PM']
  }
];

export { movies };
export default movies;