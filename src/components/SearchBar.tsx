import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = "Search movies..." }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // Real-time search
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className="pl-10 bg-card/50 border-border/50 backdrop-blur-sm focus:bg-card/80 transition-colors"
        />
      </div>
    </form>
  );
};