import { Movie } from "@/data/movies";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div
      className="group cursor-pointer transition-all duration-300 ease-smooth hover:scale-105"
      onClick={onClick}
    >
      <div className="relative bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
        {/* Movie Poster */}
        <div className="aspect-[2/3] relative overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            {movie.rating}
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>{movie.year}</span>
            <span>{movie.duration} min</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {movie.genre.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};