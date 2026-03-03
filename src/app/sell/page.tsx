const payload = JSON.parse(atob(token.split(".")[1]));
const userId = payload.userId;

const res = await fetch(
  process.env.NEXT_PUBLIC_API_URL + "/products",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      price: Number(price),
      image,
      userId,
    }),
  }
);
