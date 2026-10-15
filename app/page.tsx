import WaitlistForm from "./waitlist-form";

const features = [
  {
    title: "Todo tipo de artículos",
    text: "Electrónica, ropa, autos, herramientas y más. Publica en minutos, vende directo.",
  },
  {
    title: "Propiedades",
    text: "Casas, apartamentos y locales. Busca por zona y precio, sin intermediarios.",
  },
  {
    title: "Vendedor ↔ Cliente",
    text: "Conectamos a quien tiene con quien necesita. Trato claro, precio justo.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-teal-400">
          Próximamente
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-balance">
          Cubandeal
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 text-balance">
          El marketplace que conecta vendedores y clientes de todo tipo de
          artículos y propiedades en Cuba.
        </p>

        <WaitlistForm />

        <div className="mt-20 grid gap-8 text-left sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <h2 className="font-semibold text-white">{f.title}</h2>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-20 text-sm text-gray-600">
          © 2026 cubandeal.com
        </footer>
      </div>
    </main>
  );
}
