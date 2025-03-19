"use client"; 
import { Card, CardContent, CardMedia, CardActions, Typography, Button, IconButton, Container, Stack  } from "@mui/material";
import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { SyntheticEvent, useEffect, useState } from 'react'
import { Mangatype } from "@/app/manga/mangaList";
import Link from "next/link";
import { useBookmarks } from "@/app/contexts/bookmarksContext";
import CustomButton from "../buttonComponent/customButton";


const MangaCard: React.FC<Mangatype> = ({ id, title, image, rating, description}) => {
    const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.src = '/images/placeholder-cover.jpg'
    }

    const { bookmarks, toggleBookmark } = useBookmarks();
    const isBookmarked = bookmarks.some((manga) => manga.id === id);
  
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
              <CustomButton variant="text" size="small" color="secondary">
                About
              </CustomButton> 
            </Link>
            <CustomButton
              onClick={() => toggleBookmark({ id, title, image, description, rating })}
              icon={isBookmarked ? <Bookmark /> : <BookmarkBorder />}
              isIconButton={true}
              color={isBookmarked ? "secondary" : "inherit"}
            />
          </Stack>
        </CardActions>
      </Card>
    
    );
  };
  
export default MangaCard