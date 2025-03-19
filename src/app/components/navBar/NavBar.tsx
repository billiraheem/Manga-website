"use client";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Bookmark } from '@mui/icons-material'
import Link from "next/link";
import { ReactNode } from "react";
import SearchComponent from "../searchComponent/Search";
import CustomButton from "../buttonComponent/customButton";

interface navProps {
    children: ReactNode
  }

const Navbar: React.FC<navProps> = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              Manga Explorer
            </Link>
          </Typography>

          <CustomButton variant="text" color="inherit" href="/">
            Home
          </CustomButton>

          <SearchComponent />
          
          <CustomButton icon={<Bookmark />} isIconButton={true} color="inherit" href="/bookmarks" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;