import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { movies, getFeaturedMovie, getPopularMovies } from "@/data/movies";
import { Movie } from "@/data/movies";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(getPopularMovies());

  const featuredMovie = getFeaturedMovie();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredMovies(getPopularMovies());
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
        movie.director.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      {!searchQuery && <HeroSection movie={featuredMovie} />}
      
      {/* Search Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-8 px-6 lg:px-8 pb-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Popular Movies"}
            </h2>
            <span className="text-muted-foreground">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
            </span>
          </div>
          
          {filteredMovies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No movies found</p>
              <p className="text-muted-foreground">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => console.log(`Selected movie: ${movie.title}`)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
