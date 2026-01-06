export default function Footer() {
  return (
    <footer className="bg-[#CCABDA]">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        {/* Marca */}
        <h3 className="text-lg font-bold text-[#203131]/70">
          Nutre Bless
        </h3>

        {/* Frase */}
        <p className="mt-2 text-sm text-[#203131]/70 max-w-md mx-auto">
          Nutrición basada en ciencia, empatía y acompañamiento real
        </p>

        {/* Línea sutil */}
        <div className="h-px bg-[#203131]/20 my-4" />

        {/* Copyright */}
        <p className="text-xs text-[#203131]/60">
          © 2025 NutreBless — Salud y bienestar
        </p>

      </div>
    </footer>
  );
}
