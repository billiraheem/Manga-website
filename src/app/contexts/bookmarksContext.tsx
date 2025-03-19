"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Mangatype } from "../manga/mangaList"; 

interface BookmarkContextType {
  bookmarks: Mangatype[];
  toggleBookmark: (manga: Mangatype) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Mangatype[]>([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarks(savedBookmarks);
  }, []);

  const toggleBookmark = (manga: Mangatype) => {
    setBookmarks((prevBookmarks) => {
      let updatedBookmarks;

      if (prevBookmarks.some((m) => m.id === manga.id)) {
        updatedBookmarks = prevBookmarks.filter((m) => m.id !== manga.id);
      } else {
        updatedBookmarks = [...prevBookmarks, manga];
      }

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};