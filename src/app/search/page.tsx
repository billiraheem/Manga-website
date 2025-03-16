"use client";
import { useSearchParams } from "next/navigation";
import { Container, Typography, Grid2 } from "@mui/material";
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
  
        <Grid2 container spacing={3}>
          {filteredManga.length > 0 ? (
            filteredManga.map((manga) => (
              <Grid2 item key={manga.id} xs={12} sm={6} md={4}>
                <MangaCard {...manga} />
              </Grid2>
            ))
          ) : (
            <Typography>No manga found.</Typography>
          )}
        </Grid2>
      </Container>
    );
  }
