import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>

        <nav style={{
          display:"flex",
          justifyContent:"space-between",
          padding:"15px",
          background:"#09b1ba",
          color:"#fff"
        }}>
          <h3>Bibani Boutique</h3>

          <div>
            <a href="/" style={{marginRight:"15px", color:"#fff"}}>Home</a>
            <a href="/sell" style={{marginRight:"15px", color:"#fff"}}>Sell</a>
            <a href="/panier" style={{marginRight:"15px", color:"#fff"}}>Panier</a>
            <a href="/profil" style={{color:"#fff"}}>Profil</a>
          </div>
        </nav>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
