import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import { ArrowRight, Package } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <Package className="w-4 h-4 text-zinc-400" />
          <span className="text-sm text-zinc-400">Металлопрокат оптом и в розницу — от производителя</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Металл любого</span>
          <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            сечения и марки.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          МЕТАЛЛТОР — надёжный поставщик металлопроката в Москве и регионах. Арматура, уголок, швеллер, труба, лист — всё в наличии на складе. Доставка от 1 тонны.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact">
            <LiquidCtaButton>Получить прайс-лист</LiquidCtaButton>
          </a>
          <a
            href="#catalog"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Смотреть каталог</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          {[
            { value: "15+", label: "лет на рынке" },
            { value: "5 000+", label: "клиентов по всей России" },
            { value: "50 000 т", label: "металла в год" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-zinc-100">{stat.value}</span>
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
