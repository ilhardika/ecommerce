export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antial" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
