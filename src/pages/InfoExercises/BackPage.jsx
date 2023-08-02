import React from "react";
//images
import back from "../../assets/infoExercise/back.gif";
import back2 from "../../assets/infoExercise/back2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";

const pageInfo = [
  {
    id: 2,
    image: back,
    image2: back2,
    alt: "back",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для спины",
    inst: "Обеспечивает правильную циркуляцию крови",
    inst2: "Профилактика искривления позвоночника",
    inst3: "Повышает тонус мыш",
    time: "3-5 минут",
  },
];

const articles = [
  {
    id: 2,
    article:
      "Сидя за столом, расположить ладони под подбородком. Считая от 1 до 10, давим на ладони подбородком как можно сильнее. Повторить с перерывом 3 раза.",
    article2:
      "Стоя прямо или сидя. Голову склоняем на левое плечо, упираясь основанием ладони правой руки чуть выше уха. С силой давим на голову ладонью и, преодолевая сопротивление, возвращаем ее в исходное положение. Затем делаем то же самое, наклоняя голову вправо. 3 раза по 5 секунд в каждую сторону.",
  },
];
const BackPage = () => {
  return (
    <>
      <div className="container">
        <div className="infoExercise">
          {pageInfo.map((item) => (
            <div className={item.className} key={item.id}>
              <div className="infoExercise_image">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="infoExercise_text">
                <div className="text_name">
                  <h3>{item.title}</h3>
                  <img src={timer} alt="timer" />
                  <p>{item.time}</p>
                </div>
                <Timer />
              </div>
            </div>
          ))}
          <div className="infoExercise_article">
            {articles.map((title) => (
              <p>{title.article}</p>
            ))}
          </div>
        </div>

        <div className="infoExercise">
          {pageInfo.map((item) => (
            <div className={item.className} key={item.id}>
              <div className="infoExercise_image">
                <img src={item.image2} alt={item.alt} />
              </div>
              <div className="infoExercise_text">
                <div className="text_name">
                  <h3>{item.title}</h3>
                  <img src={timer} alt="timer" />
                  <p>{item.time}</p>
                </div>
                <Timer />
              </div>
            </div>
          ))}
          <div className="infoExercise_article">
            {articles.map((title) => (
              <p>{title.article2}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackPage;
