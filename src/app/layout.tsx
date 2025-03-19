import "./globals.css";
import NavBar from "./components/navBar/NavBar";
import { BookmarkProvider } from "./contexts/bookmarksContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
            <NavBar children={undefined} />
            <BookmarkProvider>
              {children}
            </BookmarkProvider>
      </body>
    </html>
  );
}
