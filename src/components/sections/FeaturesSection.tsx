import { motion } from "framer-motion"
import { Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const catalog = [
  { name: "Арматура", desc: "А400, А500С. Диаметр 6–40 мм. Мерная и немерная длина.", tons: "от 1 т" },
  { name: "Уголок", desc: "Равнополочный и неравнополочный. Сталь 3 и ст. 09Г2С.", tons: "от 500 кг" },
  { name: "Швеллер", desc: "Горячекатаный, гнутый. № 5–40. ГОСТ 8240-97.", tons: "от 500 кг" },
  { name: "Труба профильная", desc: "Квадратная, прямоугольная. Стенка 1.5–10 мм.", tons: "от 500 кг" },
  { name: "Листовой прокат", desc: "Горячекатаный, холоднокатаный, рифлёный. Толщина 1–60 мм.", tons: "от 1 т" },
  { name: "Балка двутавровая", desc: "Горячекатаная. № 10–60. ГОСТ 8239-89.", tons: "от 1 т" },
]

const advantages = [
  {
    icon: "Truck",
    title: "Быстрая доставка",
    desc: "Собственный автопарк. Доставка по Москве — от 1 дня. По России — от 3 дней.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия качества",
    desc: "Вся продукция сертифицирована. Поставляем только ГОСТ-материалы с паспортами качества.",
  },
  {
    icon: "Package",
    title: "Большой склад",
    desc: "Склад 10 000 м² в Москве. Более 500 позиций в постоянном наличии.",
  },
  {
    icon: "Clock",
    title: "Работаем 24/7",
    desc: "Принимаем заявки круглосуточно. Менеджер перезвонит в течение 15 минут.",
  },
]

export function FeaturesSection() {
  return (
    <>
      {/* Catalog Section */}
      <section id="catalog" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Продукция</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Металлопрокат в наличии
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-balance">
              Широкий ассортимент металлопроката на складе в Москве. Отгрузка в день заказа.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {catalog.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                        <Layers className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                      </div>
                      <p className="font-heading font-semibold text-zinc-100">{item.name}</p>
                    </div>
                    <p className="text-zinc-500 text-sm flex-1 mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-600 bg-zinc-800 px-3 py-1 rounded-full">
                        Мин. заказ: {item.tons}
                      </span>
                      <span className="text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">
                        Уточнить цену →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="px-6 py-24 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Преимущества</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Почему выбирают МЕТАЛЛТОР
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-balance">
              Работаем с 2009 года. За это время выстроили надёжную цепочку поставок и сервис, которому доверяют.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group h-full border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-zinc-700 transition-colors">
                      <Icon name={adv.icon} size={22} className="text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-zinc-100 mb-1">{adv.title}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}