import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/NavBar";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#dd33fa', 
//     },
//   },
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        {/* <ThemeProvider theme={theme}>
          <CssBaseline> */}
            <NavBar />
            {children}
          {/* </CssBaseline>
        </ThemeProvider> */}
      </body>
    </html>
  );
}
