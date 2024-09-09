import { Inter } from "next/font/google";
import "./globals.css";
import { StyledEngineProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <StyledEngineProvider injectFirst>
        {children}
        </StyledEngineProvider>
        </body>
    </html>
  );
}
