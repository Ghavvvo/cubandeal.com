"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    // Formspree: crea formulario gratis en formspree.io y pega tu ID
    const fd = new FormData();
    fd.append("email", email);
    const res = await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    }).catch(() => null);
    setState(res?.ok ? "ok" : "error");
  }

  if (state === "ok")
    return (
      <p className="mt-8 text-teal-400 font-medium">
        ¡Listo! Te avisaremos cuando abramos.
      </p>
    );

  return (
    <form
      onSubmit={submit}
      className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        className="w-full sm:w-72 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-teal-400"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-lg bg-teal-400 px-6 py-3 font-semibold text-gray-950 hover:bg-teal-300 disabled:opacity-50"
      >
        {state === "sending" ? "Enviando…" : "Avísame"}
      </button>
      {state === "error" && (
        <p className="text-sm text-red-400 sm:self-center">
          No pudo enviarse. Intenta de nuevo.
        </p>
      )}
    </form>
  );
}
