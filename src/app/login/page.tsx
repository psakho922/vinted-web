"use client";

export default function Login(){

  const login = () => {

    const user = {
      name: "Penda",
      email: "user@gmail.com"
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Connexion réussie ✅");
  };

  return(

    <div>

      <h2>Connexion</h2>

      <button onClick={login}>
        Se connecter
      </button>

    </div>

  );

}
