"use client"; 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputBase, IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import CustomButton from "../buttonComponent/customButton";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`); // Redirects to the search page
    }
  };

  return (
    <Paper 
      component="form" 
      onSubmit={handleSearch} 
      sx={{
        display: "flex",
        alignItems: "center",
        background: "white",
        borderRadius: 5,
        padding: "2px 8px",
        boxShadow: 1,
      }}
    >
      <InputBase
        placeholder="Search manga..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ ml: 1, flex: 1, color: "black" }}
      />
      <CustomButton onClick={(e) => handleSearch(e)} icon={<Search />} isIconButton={true} color="inherit"/>
    </Paper>
  );
};

export default SearchComponent;