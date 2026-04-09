import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{margin:0,fontFamily:"Arial"}}>

        <nav style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"15px 30px",
          background:"#fff",
          borderBottom:"1px solid #eee"
        }}>

          <h2 style={{color:"#09b1ba"}}>Bibani Boutique</h2>

          <div>
            <a href="/" style={{marginRight:"20px"}}>Home</a>
            <a href="/sell" style={{marginRight:"20px"}}>Sell</a>
            <a href="/panier" style={{marginRight:"20px"}}>Panier</a>
            <a href="/commande" style={{marginRight:"20px"}}>Commandes</a>
            <a href="/profil">Profil</a>
          </div>

        </nav>

        <div style={{padding:"20px"}}>
          {children}
        </div>

      </body>
    </html>
  );
}
