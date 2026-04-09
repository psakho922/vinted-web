"use client";

export default function Login(){

  const login = () => {

    const user = {
      name: "Penda Sakho",
      email: "penda@gmail.com"
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Connexion réussie ✅");
  };

  return(

    <div style={{padding:"20px"}}>

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
