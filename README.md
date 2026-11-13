# ZASLON · Interface Motion

**Меньше визуального шума. Больше смысла, движения и внимания к деталям.**

[English](README.en.md) · [Сайт ZASLON](https://zelon.org/) · [Навык](skills/zaslon-interface-motion/SKILL.md)

Фирменный набор Кальтера для AI-разработчика: композиция продуктовой страницы, аккуратная анимация React и выбор доступных интерфейсных поведений. Создан при обновлении ZASLON; визуальные ориентиры — Slidshift и подборка Designbookmark Motion.

| Внутри | Для чего |
|---|---|
| `zaslon-interface-motion` | Превратить референс в оригинальный интерфейс |
| React hook | Появление элементов, очистка анимаций и reduced motion |
| UI SDK guide | Решить, нужна ли библиотека поведения, и проверить интеграцию |

## Установка навыка

```bash
npx skills add mrakBH/zaslon-interface-kit --skill zaslon-interface-motion
```

Либо скопируй папку `skills/zaslon-interface-motion` в каталог навыков своего агента. Нужен клиент, поддерживающий SKILL.md. Установка не добавляет GSAP или UI SDK в приложение автоматически.

## Плагин Claude Code

```text
/plugin marketplace add mrakBH/zaslon-interface-kit
/plugin install zaslon-interface-kit@zaslon-interface
```

Плагин содержит только навыки: без hooks, MCP, ключей и скрытых сетевых запросов.

## Просто дай ИИ ссылку

> Изучи https://github.com/mrakBH/zaslon-interface-kit и SKILL.md внутри. Примени подход к моему сайту: сначала зафиксируй текущий вид, сохрани факты и оплату, затем улучши композицию и движение. Проверь мобильную версию, клавиатуру и режим без анимации.

Ссылка передаёт контекст; сама по себе она ничего не устанавливает.

## В работе: ZASLON

| До | После |
|---|---|
| ![Главная до](https://zelon.org/assets/interface-kit/home-before.jpg) | ![Главная после](https://zelon.org/assets/interface-kit/home-after.jpg) |

[Разбор со скриншотами](https://zelon.org/blog/zaslon-motion-redesign-before-after/) · [UI SDK и поведение интерфейса](https://zelon.org/blog/ui-sdk-agent-interface-behaviors/)

## Границы

Это оригинальные инструкции ZASLON, **не форк и не официальный продукт Vercel**. UI SDK — отдельная beta-библиотека поведения под Apache-2.0. В этом пакете её код не распространяется. В ZASLON runtime UI SDK не установлен: текущая анимация реализована CSS и GSAP. Не обещаем конверсию или 60 fps без измерений.

Собственные инструкции и hook — MIT. GSAP и подключаемые зависимости имеют собственные условия. Чужие изображения, бренд и тексты Slidshift не входят в пакет.
