import React from "react";

export const KvadratRaznosti = () => {
  return (
    <div>
      <div className="centered">
        <b>Квадрат разности</b>
      </div>
      <div>
        <div>
          <strong>Квадрат разности двух выражений</strong> равен квадрату
          первого, минус удвоенное произведение первого и второго, плюс квадрат
          второго:
        </div>
        <div className="centered">
          (a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup>
        </div>
        <div className="centered">Применение формулы квадрата разности</div>
      </div>
      <div>
        <div>Формулу квадрата разности удобно использовать:</div>
        <ul>
          <li>для раскрытия скобок</li>
          <li>для упрощения выражений</li>
          <li>
            для вычисления квадратов больших чисел, не используя калькулятор или
            умножение в столбик
          </li>
        </ul>
      </div>
      <div>
        <div>Примеры задач на применение формулы куба суммы</div>
        <ol>
          <li>
            Раскрыть скобки (x - 3)<sup>2</sup>
          </li>
          <li>
            Раскрыть скобки (2x - 3y<sup>2</sup>)<sup>2</sup>
          </li>
          <li>
            Упростить выражение (9x<sup>2</sup> – 6x + 1)/(3x – 1)
          </li>
        </ol>
      </div>
      <div>
        <div>Решение:</div>
        <ol>
          <li>
            (x - 3)<sup>2</sup> = x<sup>2</sup> - 2·3·x + 3<sup>2</sup> = x
            <sup>2</sup>- 6x + 9
          </li>
          <li>
            (2x - 3y<sup>2</sup>)<sup>2</sup> = (2x)<sup>2</sup> - 2·(2x)·(3y
            <sup>2</sup>) + (3y<sup>2</sup>)<sup>2</sup> = 4x<sup>2</sup>- 12xy
            <sup>2</sup> + 9y<sup>4</sup>
          </li>
          <li>
            (9x<sup>2</sup> – 6x + 1)/(3x – 1)=((3x - 1)<sup>2</sup>)/((3x -
            1))=3x-1
          </li>
        </ol>
        <div>
          <b>
            <i>
              Заметим, что с помощью формулы квадрата разности легко находить
              квадраты больших чисел, не используя калькулятор или умножение в
              столбик.
            </i>
          </b>
        </div>
        <ol>
          <li>
            Вычислить 69<sup>2</sup>
          </li>
          <li>
            69<sup>2</sup> = (70 - 1)<sup>2</sup> = 70<sup>2</sup> - 2·70·1 + 1
            <sup>2</sup> = 4900 - 140 + 1 = 4761
          </li>
        </ol>
      </div>
      <div>
        <div className="centered">
          <b>Куб суммы двух выражений </b>
        </div>
        <div>
          <b>Куб суммы двух выражений</b> равен кубу первого, плюс утроенное
          произведение квадрата первого выражения и второго выражения, плюс
          утроенное произведение квадрата второго выражения и первого выражения,
          плюс куб второго выражения.
        </div>
      </div>
      <div>
        <div className="centered">
          <b>Вывод формулы куба суммы</b>
        </div>
        <div>
          Для доказательства справедливости формулы куба суммы достаточно
          перемножить выражения раскрыв скобки:
        </div>
        <div className="centered">
          (a + b)<sup>3</sup> = (a + b)·(a + b)<sup>2</sup> = = (a + b)·(a
          <sup>2</sup> + 2ab + b<sup>2</sup>) = = a<sup>3</sup> + 2a<sup>2</sup>
          b + ab<sup>2</sup> + ba<sup>2</sup> + 2b<sup>2</sup>a + b<sup>3</sup>{" "}
          = = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup>
        </div>
      </div>
      <div>
        <div className="centered">Применение формулы куба суммы</div>
        <ul>
          <li>для раскрытия скобок</li>
          <li>для упрощения выражений</li>
        </ul>
        <div>Примеры задач на применение формулы куба суммы</div>
        <ol>
          <li>
            Раскрыть скобки (2x + 3y<sup>2</sup>)<sup>3</sup>
          </li>
          <li>
            Упростить выражение (27x<sup>3</sup> + 27x<sup>2</sup> + 9x +1)/(9x
            <sup>2</sup> + 6x + 1){" "}
          </li>
        </ol>
        <div>Решение:</div>
        <ol>
          <li>
            (2x + 3y<sup>2</sup>)<sup>3</sup> = (2x)<sup>3</sup> + 3·(2x)
            <sup>2</sup>·(3y<sup>2</sup>) + 3·(2x)·(3y<sup>2</sup>)<sup>2</sup>{" "}
            + (3y<sup>2</sup>)<sup>3</sup> = 8x<sup>3</sup> + 36x<sup>2</sup>y
            <sup>2</sup> + 54xy<sup>4</sup> + 27y<sup>6</sup>
          </li>
          <li>
            Можно заметить, что выражение в числителе - это разложенный куб
            суммы, а в знаменателе - квадрат суммы
            <div className="centered">
              (27x<sup>3</sup> + 27x<sup>2</sup> + 9x +1)/(9x<sup>2</sup> + 6x +
              1)=(3x + 1)<sup>3</sup>/(3x + 1)<sup>2</sup> =3x + 1
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};
