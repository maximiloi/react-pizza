# react-pizza
 Archakov Blog | React Pizza — разработка интернет-магазина (for junior)

#1: React Pizza — разработка интернет-магазина (for junior)
00:00 Самое начало
08:25 - Начало
09:37 - Описание курса
11:22 - Сценарий курса
13:41 - Разбор макета
18:53 - Live пример(https://dodopizza.ru/)
20:45 - Про опыт разработки с нуля
21:55 - Github репозиторий(https://github.com/Archakov06/react-p...)
22:53 - Начало проекта
23:08 - Для чего нужен Node.js
24:42 - Для чего нужен Webpack
25:08 - Установка Node.js(https://nodejs.org/en/download/)
27:42 - Проверяем, что Node.js установлен(node -v)
28:41 - Git + GitBash(https://git-scm.com/downloads)
29:26 - Что такое npx
30:35 - Создание проекта через npx(npx create-react-app react-pizza) 
31:30 - Почему без TypeScript'a
32:10 - Установка VSCode(https://code.visualstudio.com/)
32:55 - Разбор CRA проекта
37:25 - NPM vs Yarn(https://yarnpkg.com/getting-started/i...)
54:00 - Чистим проект
55:50 - Что такое StrictMode в React
1:00:15 - Что такое JSX
1:02:45 - Как работает JSX
1:06:42 - Virtual DOM
1:07:33 - React Plain Objects(https://reactjs.org/blog/2015/12/18/r...)
1:09:21 - Преимущества Virtual DOM
1:15:49 - React-верстка
1:19:14 - Перенос верстки
1:22:45 - Prettier(https://marketplace.visualstudio.com/...)
1:28:47 - Добавляем SCSS(yarn add node-sass || npm install node-sass)
1:29:23 - Опционально: Достаем настройки CRA проекта(yarn eject || npm run eject)(ответ на вопрос про PostCSS в React'e)

#2: React Pizza — разработка интернет-магазина (for junior)
5:45 - StrictMode и двойной rerender(https://github.com/facebook/react/issues/15074)
11:07 - Сценарий #2
13:11 - Компоненты и компонентный подход
18:30 - Button component
25:27 - .jsx vs .js
26:55 - Header component
30:28 - Как работает сборка в Webpack'e
43:30 - Виды компонентов(functional, class, container a.k.a smart, dumb a.k.a presentational)
53:50 - componentDidMount
56:05 - componentDidUpdate
57:30 - React lifecycle methods(https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ || http://blogs.innovationm.com/react-component-lifecycle/)
1:00:17 - Что такое props
1:07:15 - 'this' в class'e
1:10:35 - props.children
1:12:37 - Пустые props'ы
1:15:56 - Динамическое изменение className(Ternary operation)
1:16:35 - Динамическое изменение className(Template string)
1:18:45 - библиотека classnames(yarn add classnames || npm install classnames)
1:28:20 - props в функциональном компоненте

!!! => 1:29:58 - Второй объект после props - это ComponentState, это type stat'a компонента, проще говоря, интерфейс для state.
1) https://fettblog.eu/typescript-react/components/ - см. пример с классом Clock.
2) https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript - см. ответ на вопрос.

#3: React Pizza — разработка интернет-магазина (for junior)
10:15 - Начало
16:08 - Обработка onClick
17:25 - Про camelCase
32:00 - Деструктуризация
39:00 - Хуки
49:00 - export всех компонентов из ./components/index.js
53:52 - export "as"(https://javascript.info/import-export)
58:15 - map для props(https://reactjs.org/docs/lists-and-keys.html)
1:06:19 - list keys
1:10:50 - Почему не нужно использовать index из map как key
1:15:51 - Как работают обработчики событий
1:24:15 - state в классовом компоненте
1:34:23 - this.forceUpdate(https://reactjs.org/docs/react-component.html#forceupdate)
1:34:49 - Почему не нужно изменять state без setState
1:34:40 - useState
2:05:13 - Проверка наличия props'a
2:12:12 - Ответы на вопросы

!!! => Разница между функциональными и классовыми компонентами с примерами кода после Babel: https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108

#4: React Pizza — разработка интернет-магазина (for junior)
7:40 - Начало
11:45 - Popup сортировки
28:17 - Именованные функции vs анонимные:
  https://www.matthewgerstman.com/tech/performance-testing-anonymous-functions/
33:45 - useEffect:
  1) https://reactjs.org/docs/hooks-effect.html
  2) https://overreacted.io/a-complete-guide-to-useeffect/
48:55 - Исправляем верстку
53:15 - useRef:
  https://reactjs.org/docs/hooks-reference.html#useref
1:30:40 - Добавляем вращение для иконки popup'a
1:34:35 - React Router(https://reactrouter.com/)
(yarn add react-router-dom || npm i react-router-dom)

! Хуки и другие элементы React можно импортировать с деструктуризацией.
Вместо:
import React from 'react'
...
const [...] = React.useState();
Использовать:
import React, { useState } from 'react'
...
const [...] = useState();
#5: React Pizza — разработка интернет-магазина (for junior)
6:55 - Начало
9:20 - Сценарий #5
15:38 - Mock API
23:20 - fetch
  https://javascript.info/fetch
41:10 - Компонент PizzaBlock
1:25:50 - Про TypeScript
1:31:50 - Axios(yarn add axios || npm i axios)
  https://www.npmjs.com/search?q=axios
1:34:10 - fetch vs axios
  https://www.pluralsight.com/guides/axios-vs-fetch
1:37:30 - props-types(npm i prop-types || yarn add prop-types)
  https://www.npmjs.com/package/prop-types
2:05:30 - Ответы на вопросы

#6: React Pizza — разработка интернет-магазина (for junior)
5:10 - Начало
6:37 - Что такое Redux?
  1) https://redux.js.org/
  2) https://github.com/rajdee/redux-in-russian
8:25 - Зачем нужен Redux?
  https://www.quora.com/What-problem-is-React-Redux-solving?share=1
14:10 - Жизненный цикл Redux'a
  https://cutt.ly/PpP9Fyz
16:15 - Reducer
  * Чистые функции: https://habr.com/ru/post/437512/
33:30 - Middleware
  https://redux.js.org/advanced/middleware/
41:05 - Установка Redux(yarn add redux || npm i redux)
1:02:10 - React-Redux(yarn add react-redux || npm i react-redux)
1:03:20 - Provider
  https://react-redux.js.org/api/provider
1:29:50 - combineReducers
  https://redux.js.org/api/combinereducers/
1:38:40 - Redux Devtools
  1) https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  2) https://github.com/reduxjs/redux-devtools
1:50:00 - connect
  https://react-redux.js.org/api/connect
2:24:24 - Ответы на вопросы

#7: React Pizza — разработка интернет-магазина (for junior)

