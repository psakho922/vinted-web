"use client";

import { useRouter } from "next/navigation";

export default function PaiementPage(){

const router = useRouter();

function confirmer(){

alert("Commande confirmée !");

router.push("/commande/test");

}

return(

<div style={{padding:40}}>

<h1>Paiement</h1>

<p>Paye avec Wave ou Orange Money :</p>

<h2>Numéro : 77 353 66 13</h2>

<p>Nom : Bibani Boutique</p>

<br/>

<p>1️⃣ Ouvre Wave ou Orange Money</p>

<p>2️⃣ Envoie le montant</p>

<p>3️⃣ Clique sur confirmer</p>

<br/>

<button
onClick={confirmer}
style={{
padding:15,
background:"green",
color:"white",
border:"none",
borderRadius:5
}}
>

J'ai payé

</button>

</div>

)

}
