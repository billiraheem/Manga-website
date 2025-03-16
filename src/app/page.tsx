"use client";
import { Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css";
import mangaList from "./manga/mangaList";
import MangaCard from "./components/mangaCards/MangaCards";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        Manga Collection
      </Typography>
      <Grid2 container spacing={3}>
        {
          mangaList.map((manga) => (
            <Grid2 item key={manga.id} xs={12} sm={6} md={4}>
              <MangaCard {...manga} />
            </Grid2>
          ))
        }
      </Grid2>
    </Container>
  );
}
