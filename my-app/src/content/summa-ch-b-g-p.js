import React from "react";

export const SummaChBGP = () => {
  return (
    <div>
      <div className="centered">
        <b>Сумма членов бесконечно убывающей геометрической прогрессии.</b>
      </div>
      <div>
        Бесконечно убывающая геометрическая прогрессия – это прогрессия, у
        которой |q| &lt; 1{" "}
      </div>
      <div>
        <div>Для нахождения суммы данной прогрессии используется формула </div>
        <div className="centered">
          S=b<small>1</small>/(1-q)
        </div>
      </div>
      <div>
        <div>Решим пример с данной геометрической прогрессией: </div>
        <div className="centered">12;4;4/3… </div>
        <div className="centered">q=3; b1=12 ; </div>
        <div className="centered">S = 12/(1+1/3)=9</div>
      </div>
      <div>
        <div>Найдите суммы следующих прогрессий: </div>
        <ol>
          <li>0,18;1,0018… </li>
          <li>-1/2;1/4;-1/8… </li>
        </ol>
      </div>
      <div>
        <div>Ответы: </div>
        <ol>
          <li>2/11</li>
          <li>-1/3</li>
        </ol>
      </div>
    </div>
  );
};
