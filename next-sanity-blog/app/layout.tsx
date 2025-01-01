import AlertBanner from "./(blog)/alert-banner";


export const metadata = {
  title: "blog",
  description: "A description for my app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       
        {children}
      </body>
    </html>
  );
}
