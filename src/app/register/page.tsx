'use client';

import { useState } from 'react';
import { api } from '@/lib/api';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SUBMIT TRIGGERED");

    try {
      const response = await api.post('/auth/register', {
        email,
        password,
        name,
      });

      console.log("SUCCESS:", response.data);
      alert("Inscription réussie !");
    } catch (error) {
      console.error("ERROR:", error);
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Inscription</h1>

      {/* Test bouton */}
      <button
        type="button"
        onClick={() => console.log("CLICK WORKS")}
        style={{ marginBottom: 20 }}
      >
        Test Click
      </button>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: 20 }}>
          S'inscrire
        </button>
      </form>
    </div>
  );
}



