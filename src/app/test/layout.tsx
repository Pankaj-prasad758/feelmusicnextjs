

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <h1>Inner Navbar</h1>
        {children}
      </body>
    </html>
  );
}
