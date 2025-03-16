"use client";
import { Typography, Container, Card, CardMedia, CardContent, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import mangaList from "../mangaList";


const MangaDetails = () =>{
    const { id } = useParams();
    const manga = mangaList.find((m) => m.id === Number(id));
  
    if (!manga) {
      return <Typography variant="h4" align="center">Manga not found</Typography>;
    }
  
    return (
      <Container>
        <Card sx={{ maxWidth: 800, margin: "auto", boxShadow: 3 }}>
          <CardMedia component="img" height="400" image={manga.image} alt={manga.title} sx={{objectFit: 'contain'}} />
          <CardContent>
            <Stack spacing={2}>
            <Typography variant="h4">{manga.title}</Typography>
            <Typography variant="body1" align="justify">{manga.description}</Typography>
            <Typography variant="body1">{manga.genre}</Typography>
            <Typography variant="body1">{manga.rating} ★</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    );
  }

export default MangaDetails;