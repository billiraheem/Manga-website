"use client"; 
import { Card, CardContent, CardMedia, CardActions, Typography, Button, IconButton, Container, Stack  } from "@mui/material";
import { BookmarkAdd, Share } from '@mui/icons-material'
import { SyntheticEvent, useEffect, useState } from 'react'
import mangaList, { Mangatype } from "@/app/manga/mangaList";
import { useParams } from "next/navigation";
import Link from "next/link";


const MangaCard: React.FC<Mangatype> = ({ id, title, image, rating, description}) => {
    const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.src = '/images/placeholder-cover.jpg'
    }

    const [bookmarked, setBookmarked] = useState<boolean>(false);

    useEffect(() => {
      const savedBookmarks: Mangatype[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarked(savedBookmarks.some((manga) => manga.id === id));
    }, [id]);

    const toggleBookmark = () => {
      let savedBookmarks: Mangatype[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");

      if (bookmarked) {
        savedBookmarks = savedBookmarks.filter((manga) => manga.id !== id);
      } else {
        savedBookmarks.push({ id, title, image, description, rating });
      }

      localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
      setBookmarked(!bookmarked);
    };
  
    return (
        <Card sx={{ maxWidth: 300, margin: 2, ':hover': { transform: 'scale(1.02)' } }}>
        <CardMedia 
          component="img" 
          height="300" 
          image={image} 
          alt={title} 
          sx={{objectFit: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">{title}</Typography>
          <Typography variant="caption" color="text.secondary"> ★ {rating}</Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={10}>
            <Link href={`/manga/${id}`} style={{ textDecoration: "none", color: "inherit" }}> 
              <Button size="small" color="primary">About</Button>
            </Link>
            <Button onClick={toggleBookmark} color={bookmarked ? "secondary" : "primary"}>
              <BookmarkAdd />
              {/* {bookmarked ? "Remove Bookmark" : "Add Bookmark"} */}
            </Button>
          </Stack>
          {/* <IconButton>
            <BookmarkAdd />
          </IconButton> */}
          {/* <IconButton>
            <Share />
          </IconButton> */}
        </CardActions>
      </Card>
    
    );
  };

// const MangaDetails = () =>{
//   const { id } = useParams();
//   const manga = mangaList.find((m) => m.id === Number(id));

//   if (!manga) {
//     return <Typography variant="h4" align="center">Manga not found</Typography>;
//   }

//   return (
//     <Container>
//       <Card>
//         <CardMedia component="img" height="400" image={manga.image} alt={manga.title} />
//         <CardContent>
//           <Typography variant="h4">{manga.title}</Typography>
//           <Typography variant="body1">{manga.description}</Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }
  
export default MangaCard
// export default { MangaCard, MangaDetails };