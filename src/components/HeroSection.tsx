import { Movie } from "@/data/movies";
import { Button } from "@/components/ui/button";
import { Play, Info, Star } from "lucide-react";
import heroImage from "@/assets/hero-cinema.jpg";

interface HeroSectionProps {
  movie: Movie;
}

export const HeroSection = ({ movie }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinema Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Featured Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Featured Movie</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {movie.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-accent text-accent" />
              <span className="font-semibold text-foreground">{movie.rating}</span>
            </div>
            <span>{movie.year}</span>
            <span>{movie.duration} min</span>
            <div className="flex gap-2">
              {movie.genre.map((genre) => (
                <span key={genre} className="px-3 py-1 bg-secondary/50 rounded-full text-sm backdrop-blur-sm">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {movie.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Now
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 backdrop-blur-sm">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};