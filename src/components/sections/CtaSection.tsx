import { ArrowRight, Phone } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"

export function CtaSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">Нужен металл?</h2>
        <p className="text-lg text-zinc-500 mb-10 text-balance">
          Оставьте заявку — менеджер свяжется в течение 15 минут, рассчитает стоимость и сроки доставки под ваш объект.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+74951234567">
            <LiquidCtaButton>Позвонить сейчас</LiquidCtaButton>
          </a>
          <a
            href="mailto:info@metaltor.ru"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Написать на почту</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { label: "Телефон", value: "+7 (495) 123-45-67", sub: "Пн–Пт 8:00–20:00, Сб 9:00–17:00" },
            { label: "Email", value: "info@metaltor.ru", sub: "Ответим в течение часа" },
            { label: "Адрес склада", value: "Москва, ул. Складская, 12", sub: "Отгрузка ежедневно" },
          ].map((item) => (
            <div key={item.label} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-zinc-100 font-medium text-sm mb-1">{item.value}</p>
              <p className="text-xs text-zinc-600">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
