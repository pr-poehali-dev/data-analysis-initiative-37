const footerLinks = {
  catalog: [
    { label: "Арматура", href: "#catalog" },
    { label: "Уголок", href: "#catalog" },
    { label: "Швеллер", href: "#catalog" },
    { label: "Труба профильная", href: "#catalog" },
    { label: "Листовой прокат", href: "#catalog" },
    { label: "Балка двутавровая", href: "#catalog" },
  ],
  company: [
    { label: "О компании", href: "#" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ],
  docs: [
    { label: "Сертификаты", href: "#" },
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-semibold text-zinc-100">
              МЕТАЛЛТОР
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Металлопрокат оптом и в розницу. Склад в Москве. Доставка по всей России с 2009 года.
            </p>
            <p className="mt-4 text-sm font-medium text-zinc-300">+7 (495) 123-45-67</p>
            <p className="text-xs text-zinc-600">Пн–Пт 8:00–20:00, Сб 9:00–17:00</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Каталог</h4>
            <ul className="space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Документы</h4>
            <ul className="space-y-3">
              {footerLinks.docs.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} МЕТАЛЛТОР. Все права защищены.</p>
          <p className="text-sm text-zinc-600">ООО «Металлтор» · ИНН 7700000000 · ОГРН 1090000000000</p>
        </div>
      </div>
    </footer>
  )
}
