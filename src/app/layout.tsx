import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { tusker, neue, migra, maelstrom } from "./fonts";

export const metadata = {
  title: "Christopher Bedis",
  description: "Portfolio of Your Name",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${tusker.variable} ${neue.variable} ${migra.variable} ${maelstrom.variable}`}
    >
      <body className="h-full bg-transparent">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
