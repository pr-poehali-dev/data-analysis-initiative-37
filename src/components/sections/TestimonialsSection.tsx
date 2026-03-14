import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Работаем с МЕТАЛЛТОРОМ уже 4 года. Цены стабильные, качество арматуры всегда соответствует ГОСТ. Никаких сюрпризов при приёмке.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Прохоров",
    role: "Прораб, СК «СтройМастер»",
  },
  {
    text: "Заказывали листовой прокат под срочный объект. Отгрузили в тот же день, привезли на следующий. Отличная логистика.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Савельев",
    role: "Снабженец, ООО «Промстрой»",
  },
  {
    text: "Очень удобно, что менеджер всегда на связи и оперативно присылает документы. Бухгалтерия довольна — всё чисто и вовремя.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Ирина Белова",
    role: "Главный бухгалтер, ЗАО «ТехноДом»",
  },
  {
    text: "Швеллер и двутавр по хорошей цене, большой склад. Несколько раз брали нестандартные позиции — всегда находили нужное.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Виктор Жданов",
    role: "Директор, ИП Жданов",
  },
  {
    text: "Сотрудничаем уже третий год. Рекомендую как надёжного поставщика. Цена и качество — оптимальное соотношение на рынке Москвы.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Орлова",
    role: "Руководитель тендерного отдела, ГК «Альфастрой»",
  },
  {
    text: "Брали трубу профильную для каркасного строительства. Качество хорошее, порезка точная, доставка без опозданий.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Сергей Малышев",
    role: "Технический директор, ООО «МеталлКонструкция»",
  },
  {
    text: "Особо отмечу работу менеджеров: всегда подскажут аналог, если нужного размера нет в наличии. Экономит кучу времени.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Андрей Климов",
    role: "Инженер-конструктор, ПКФ «СтальПроект»",
  },
  {
    text: "Постоянный клиент. Нравится, что предоставляют сертификаты на металл. Для госзаказов это обязательное требование.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Кузнецова",
    role: "Специалист по закупкам, МУП «ГорСтрой»",
  },
  {
    text: "Брали уголок и арматуру на большой объём. Сделали хорошую скидку, упаковали грамотно. Очень доволен сотрудничеством.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Евгений Тарасов",
    role: "Владелец, ООО «СтройБаза Плюс»",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["СтройМастер", "Промстрой", "ТехноДом", "Альфастрой", "МеталлКонструкция", "СтальПроект", "ГорСтрой"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят клиенты
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Более 5 000 компаний по всей России выбирают МЕТАЛЛТОР.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нам доверяют строительные и производственные компании</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" } }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
