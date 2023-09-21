# SOLID в контексте React


## Single Responsibility Principle (SRP) - Принцып единой ответсвенности


> ### Для каждого класса/функции/компонента должно быть определено единственное название.


<b>&#10002;</b> ___«Функция имеет единственное название, если вы не можете осмысленно извлечь из неё другу функцию». Роберт Мартин «Чистый код»___

<u>Суть SRP</u>
- Один класс/функция/компонент - одно действие.
- Если что-то можно извлечь - извлекаем (без фанатизма).
- Относится как и к логике компонента, так и к разметке.

<u>Выгода SRP</u>
- Читаемость кода;
- Проще тестировать;
- Проще поддерживать;
- Проще дорабатывать.

<p># <b>Просто и кратко:</b> Одна сущность отвечать только за одну операцию.</p>
  


## Open/Closed Principle - Принцип открытости/закрытости

> ### Программные сущности (класс/функция/компонент) должны быть открыты для расширений и закрыты для модификаций.

<b>&#10002;</b> ___Код должен быть открыт для добавления новых фитч.___

<b>&#10002;</b> ___Добавление фитч должно происходить без необходимости переписываться части кодовой базы.___

<b>&#10002;</b> ___В контексте React-приложений это значит использовать композицию компонентов.___

### Варианты расширения React-компонентов:

1. Дополнительные пропсы;
2. Особый проп children
   - Утилита Children;
   - Метод cloneElement;
   - `Children.map(children, (child, index) => cloneElement(child, {prop1: value}))`;
3. Подход renderProps
   - `<MyComponent someProp={(data) => <h1>{data.title}</h1>} />`;
4. Передача в проспы готовую JSX-разметку
   - `<MyComponent icon={<EmailIcon color=«white» />} />`;
5. Паттерн compound components (составные компоненты).

<u>Суть Open/Closed</u>
- Сущности (фичи) остаются открытыми для расширения.
- Сущности (фичи) закрыты для модификации.
- Добавление сущности не должна повлиять на текущую работу системы.

<u>Выгода Open/Closed</u>
- Внедрение принципа позволяет избежать багов в участках приложения, где фича уже была использована.

<p># <b>Просто и кратко:</b> Делаем большие компоненты из маленьких. </p>



## Liskov Substitution Principle - Принцип потсановки Лисков

> ### Функции которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом.

<b>&#10002;</b> ___Базовый компонент имеет определенный интерфейс (пропсы) и ожидаемый функционал. Подкомпонент должен минимально иметь тот же интерфейс и поведение, что и базовый. Целью является консистентность при использовании компонент тов одного типа.___

<u>Суть Liskov Substitution</u>
- Базовая сущность (компонент) имеет конкретный интерфейс.
- Подтипы (типовые компоненты) наследуют интерфейс и дополняют его по необходимости.

<u>Выгода Liskov Substitution</u>
- Внедрение принципа позволяет сделать использование типовых компонентов предсказуемыми и заменять базовые сущности на подтипы.

<p># <b>Просто и кратко:</b> Согласованность при использовании компонентов одного типа. </p>



## Interface Segregation Principle (ISP) - Принцип разделения инерфейсов

> ### Много интерфейсов специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения.

<b>&#10002;</b> ___"Толстые" интерфейсы необходимо разделять на маленькие и специфические, чтобы программные сущности маленьких интерфейсов знали только о методах, которые необхдимы им в работе. В итоге, при изменении метода интерфейса не должны меняться программные сущности, которые этот метод не использует.___

<u>Суть Interface Segregation</u>
- Специфичные интерфейсы компонентов - только то, что необходимо.
- Компонент не должен зависеть от деталей родительского компонента.
- Изменение родительского компонента (или структуры данных) не должно влиять н дочерние компоненты.

<u>Выгода Interface Segregation</u>
- Минимизация зависимостей между компонентами;
- Низкая связность компонентов дает больше возможностей для повторного использования.

<p># <b>Просто и кратко:</b> React-компоненты не должны зависеть от пропсов, которые они не используют.</p>