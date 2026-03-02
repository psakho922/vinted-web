const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.access_token);
      alert("Login successful");
      window.location.reload();
    } else {
      alert(data.message || "Erreur login");
    }
  } catch (error) {
    console.error(error);
    alert("Erreur serveur");
  }
};
