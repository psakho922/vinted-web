import Link from "next/link";

export default function ProfilPage() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/profil">Profil</Link>
      </nav>

      <h1>Page Profil</h1>
      <p>Bienvenue sur ton profil</p>
    </div>
  );
}
