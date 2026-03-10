import "./globals.css";

export const metadata = {
  title: "Bibani Boutique",
  description: "Marketplace de vêtements au Sénégal"
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">

      <body
        style={{
          margin:0,
          fontFamily:"Arial",
          background:"#f6f6f6"
        }}
      >

        <nav
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"20px",
            background:"#ffffff",
            borderBottom:"1px solid #ddd"
          }}
        >

          <h2 style={{color:"#09b1ba"}}>

            Bibani Boutique

          </h2>

          <div
            style={{
              display:"flex",
              gap:"20px"
            }}
          >

            <a href="/">Home</a>

            <a href="/sell">Sell</a>

            <a href="/panier">Panier</a>

            <a href="/profile">Profil</a>

          </div>

        </nav>

        <main style={{padding:"40px"}}>

          {children}

        </main>

      </body>

    </html>
  );

}
