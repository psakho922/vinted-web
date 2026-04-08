import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "Arial",
          padding: "20px",
          background: "#f5f5f5",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Bibani Boutique</h1>

        <nav style={{ marginBottom: "30px" }}>
          <Link href="/" style={{ marginRight: "15px" }}>
            Home
          </Link>

          <Link href="/sell" style={{ marginRight: "15px" }}>
            Sell
          </Link>

          <Link href="/panier" style={{ marginRight: "15px" }}>
            Panier
          </Link>

          <Link href="/profil">Profil</Link>
        </nav>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
