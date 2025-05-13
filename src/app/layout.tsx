import "../styles/globals.scss";

export const metadata = {
  title: "My-UI-Project",
  description: "A Next.js project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

