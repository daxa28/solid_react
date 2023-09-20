import React from "react";
import TodosPageBefore from "./s_single_responsibility_principle/Before";
import TodosPageAfter from "./s_single_responsibility_principle/After";
import InputBefore from "./o_open_closed_principle/Before";
import InputAfter from "./o_open_closed_principle/After";
import ButtonBefore from "./l_liskov_substitution/After";
import ButtonAfter from "./l_liskov_substitution/After";

function App() {
  function consoleText() {
    console.log("Hello");
  }

  return (
    <>
      <div id="single_responsibility" className="block">
        <h3>Single Responsibility principle</h3>
        <h4>Принцып единой ответсвенности</h4>
        <p>
          Для каждого класса/функции/компонента должно быть определено
          единственное название.
        </p>
        <div className="flex">
          <TodosPageBefore />
          <TodosPageAfter />
        </div>
      </div>
      <div id="open_closed" className="block">
        <h3>Open/Closed principle</h3>
        <h4>Принцип открытости/закрытости</h4>
        <p>
          Программные сущности (класс/функция/компонент) должны быть открыты для
          расширений и закрыты для модификаций.
        </p>
        <div className="flex">
          <InputBefore children={"number.."} />
          <InputAfter childrenInput={"number.."} childrenLeftInput={"+ 7"} />
        </div>
      </div>
      <div id="liskov_substitution" className="block">
        <h3>Liskov Substitution</h3>
        <h4>Принцип потсановки Лисков</h4>
        <p>
          Функции которые используют базовый тип, должны иметь возможность
          использовать подтипы базового типа не зная об этом.
        </p>
        <div className="flex">
          <ButtonBefore icon="Hello" onClick={consoleText} />
          <ButtonAfter icon="Hello" onClick={consoleText} />
        </div>
      </div>
    </>
  );
}

export default App;
