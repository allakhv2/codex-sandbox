# codex-sandbox
 Test projects for Codex Cloud

1) Landing page for startup teams 
Что сейчас умеет landing page
Hero-блок с основным value proposition
На первом экране есть главный заголовок и подзаголовок про быстрый запуск product pages на React+TS, плюс визуальный бейдж “Built for startup teams”. Это ядро позиционирования страницы. 

Два CTA для конверсии
В Hero уже есть две кнопки: Start free и Book demo — классическая primary/secondary CTA-модель. 

Feature-секция из 3 карточек
Ниже Hero выводятся карточки преимуществ:

A/B tests in 5 min
Mobile-first blocks

Privacy-aware analytics
Это уже готовый блок «почему выбрать нас». 

Mobile-first и адаптивная верстка на Tailwind
Используются sm:/lg: брейкпоинты, сетка меняется от 1 колонки к 2 и 3, Hero-кнопки тоже адаптивные (column → row). 

Базовое покрытие тестами уже есть

Unit: проверяется ключевой заголовок и один feature-текст. 

E2E (Playwright): проверка видимости заголовка и CTA “Start free”. 
--------
The visual framework and basic tests are already in place, but the conversion path is still static (the buttons don’t yet have product logic behind them).
