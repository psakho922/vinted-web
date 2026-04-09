"use client";

export default function Login(){

  const login = () => {
    localStorage.setItem("user","connected");
    alert("Connexion réussie ✅");
  };

  return(

    <div>

      <h2>Connexion</h2>

      <button
        onClick={login}
        style={{
          padding:"10px",
          background:"#09b1ba",
          color:"#fff",
          border:"none",
          borderRadius:"5px"
        }}
      >
        Se connecter
      </button>

    </div>

  );

}
