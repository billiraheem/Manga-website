"use client";
import { useState, useEffect } from "react";
import { Container, Typography, Grid2, Button } from "@mui/material";
import MangaCard from "../mangaCards/MangaCards";
import { Mangatype } from "@/app/manga/mangaList";

const BookmarkComponent = () => {
  const [bookmarkedManga, setBookmarkedManga] = useState<Mangatype[]>([]);

  useEffect(() => {
    const savedBookmarks: Mangatype[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarkedManga(savedBookmarks);
  }, []);

  const removeBookmark = (id: number) => {
    const updatedBookmarks = bookmarkedManga.filter((manga) => manga.id !== id);
    setBookmarkedManga(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        My Bookmarks
      </Typography>

      {bookmarkedManga.length > 0 ? (
        <Grid2 container spacing={3}>
          {bookmarkedManga.map((manga) => (
            <Grid2 item key={manga.id} xs={12} sm={6} md={4}>
              <MangaCard {...manga} />
              <Button onClick={() => removeBookmark(manga.id)} color="secondary">
                Remove Bookmark
              </Button>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography align="center" color="textSecondary">
          No bookmarks yet.
        </Typography>
      )}
    </Container>
  );
};

export default BookmarkComponent;