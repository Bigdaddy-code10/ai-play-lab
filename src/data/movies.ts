export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  description: string;
  poster: string;
  backdrop: string;
  director: string;
  duration: number;
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stellar Odyssey",
    year: 2024,
    genre: ["Sci-Fi", "Adventure"],
    rating: 8.7,
    description: "An epic journey through distant galaxies where humanity discovers they are not alone in the universe. A breathtaking visual spectacle that redefines space exploration cinema.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Alex Rivera",
    duration: 142,
    featured: true
  },
  {
    id: 2,
    title: "Neon Dreams",
    year: 2024,
    genre: ["Thriller", "Cyberpunk"],
    rating: 8.4,
    description: "In a dystopian future where memories can be extracted and sold, a detective must solve a case that threatens to unravel reality itself.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Maya Chen",
    duration: 118
  },
  {
    id: 3,
    title: "The Last Guardian",
    year: 2023,
    genre: ["Fantasy", "Action"],
    rating: 8.9,
    description: "A mystical warrior must protect the last remaining magic in a world where technology has consumed everything. Epic battles and stunning practical effects.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "David Kim",
    duration: 156
  },
  {
    id: 4,
    title: "Ocean's Heart",
    year: 2024,
    genre: ["Drama", "Romance"],
    rating: 7.8,
    description: "A marine biologist discovers an ancient underwater civilization while fighting to save the world's oceans from climate disaster.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Isabella Cruz",
    duration: 124
  },
  {
    id: 5,
    title: "Quantum Paradox",
    year: 2023,
    genre: ["Sci-Fi", "Mystery"],
    rating: 8.2,
    description: "When a physicist's experiment goes wrong, she finds herself jumping between parallel universes, each more dangerous than the last.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Robert Zhang",
    duration: 134
  },
  {
    id: 6,
    title: "Midnight Train",
    year: 2024,
    genre: ["Thriller", "Mystery"],
    rating: 8.1,
    description: "A psychological thriller aboard a luxury train where passengers start disappearing one by one during a cross-country journey.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Emma Thompson",
    duration: 108
  },
  {
    id: 7,
    title: "Solar Winds",
    year: 2023,
    genre: ["Adventure", "Family"],
    rating: 7.9,
    description: "A group of young explorers must navigate treacherous solar storms to save their space station home from destruction.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Michael Park",
    duration: 98
  },
  {
    id: 8,
    title: "The Digital Crown",
    year: 2024,
    genre: ["Action", "Cyberpunk"],
    rating: 8.3,
    description: "In a world where virtual reality is indistinguishable from real life, a hacker must infiltrate the most secure digital fortress ever created.",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1920/1080",
    director: "Sarah Wilson",
    duration: 127
  }
];

export const getFeaturedMovie = () => movies.find(movie => movie.featured) || movies[0];
export const getPopularMovies = () => movies.filter(movie => !movie.featured);