"use client";
import { useSearchParams } from "next/navigation";
import { Container, Typography, Grid2, Box } from "@mui/material";
import MangaCard from "../components/mangaCards/MangaCards"; 
import mangaList from "../manga/mangaList";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  
    // Filter manga based on query
    const filteredManga = mangaList.filter((manga) =>
      manga.title.toLowerCase().includes(query?.toLowerCase() || "")
    );
  
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Search results for "{query}"
        </Typography>
  
        <Box display="flex" flexWrap="wrap" gap={3} justifyContent="left">
          {filteredManga.length > 0 ? (
            filteredManga.map((manga) => (
              <Box key={manga.id} p={1}>
                <MangaCard {...manga} />
              </Box>
            ))
          ) : (
            <Typography>No manga found.</Typography>
          )}
        </Box>
      </Container>
    );
  }
