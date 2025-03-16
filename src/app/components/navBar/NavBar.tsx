"use client";
import { AppBar, Toolbar, Typography, Button, Container, IconButton, InputBase } from "@mui/material";
import { Search, Bookmark } from '@mui/icons-material'
import Link from "next/link";
import { ReactNode } from "react";
import SearchComponent from "../searchComponent/Search";

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
          <Button color="inherit">
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </Button>
          
          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <Search sx={{ mr: 1 }} />
            <InputBase placeholder="Search manga..." />
          </div> */}

          <SearchComponent />
          
          <IconButton color="inherit" component={Link} href="/bookmarks">
            <Bookmark />
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>

    // <Container maxWidth="xl" sx={{ py: 4 }}>
    // {children}
    // </Container>

    // <footer style={{ textAlign: 'center', padding: '20px' }}>
    // <Typography>© 2025 MangaExplorer. All rights reserved.</Typography>
    // </footer>

  );
}

export default Navbar;