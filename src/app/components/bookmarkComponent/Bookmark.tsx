"use client";
import { Container, Typography, Box } from "@mui/material";
import MangaCard from "../mangaCards/MangaCards";
import { useBookmarks } from "@/app/contexts/bookmarksContext";

const BookmarkComponent = () => {
  const { bookmarks } = useBookmarks();
  
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          My Bookmarks
        </Typography>
  
        {bookmarks.length > 0 ? (
          <Box display="flex" flexWrap="wrap" gap={3} justifyContent="left">
            {bookmarks.map((manga) => (
              <Box key={manga.id} p={1}>
                <MangaCard {...manga} />
              </Box>
            ))}
          </Box>
        ) : (
          <Typography align="center" color="textSecondary">
            No bookmarks yet.
          </Typography>
        )}
      </Container>
    );
  
};

export default BookmarkComponent;