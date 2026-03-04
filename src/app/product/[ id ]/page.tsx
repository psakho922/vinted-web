export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    "https://vinted-api-clean.onrender.com/products/" + params.id,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p>Produit introuvable</p>;
  }

  const product = await res.json();

  return (
    <div style={{ padding: 40 }}>
      <h1>{product.title}</h1>
      <p>{product.price} FCFA</p>
      <img src={product.image} width="400" />
    </div>
  );
}
