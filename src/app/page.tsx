"use client";
import { Box, Container, Typography } from "@mui/material";
import mangaList from "./manga/mangaList";
import MangaCard from "./components/mangaCards/MangaCards";

export default function Home() {
  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        Manga Collection
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={3} justifyContent="left">
        {
          mangaList.map((manga) => (
            <Box key={manga.id} p={1}>
              <MangaCard {...manga} />
            </Box>
          ))
        }
      </Box>
    </Container>
  );
}
