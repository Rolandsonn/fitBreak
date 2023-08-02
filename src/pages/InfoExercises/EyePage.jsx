import React from "react";
import eyes from "../../assets/infoExercise/eyes.gif";
import eyes2 from "../../assets/infoExercise/eyes2.gif";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";
import idea from "../../assets/infoExercise/idea.svg";
const pageInfo = [
  {
    id: 5,
    image: eyes,
    image2: eyes2,
    alt: "eyes",
    className: "infoExercise_without-flex-direction",
    title: "Разминка для глаз",
    inst: "Снимает усталость",
    inst2: "Восстанавливает кровообращение в глазах",
    inst3: "Укрепляет глазные мышцы",
    time: "3-5 минут",
  },
];

const articles = [
  {
    id: 5,
    article:
      'На вдохе медленно поверните глаза вправо ("до упора", но без сильного напряжения). Не задерживаясь, на выдохе, верните глаза в исходное положение. Таким же образом поверните глаза влево.\n' +
      "Для начала выполняйте один цикл, затем два (через две-три недели), и, в конце концов, выполняйте три цикла. После выполнения упражнения закройте глаза на несколько секунд. Повторите упражнение 10 раз.",
    article2:
      "Глубоко и медленно вдыхая (желательно, животом), посмотрите в межбровье, задержите глаза в этом положении на несколько секунд. Медленно выдыхая, верните глаза в исходное положение и закройте на несколько секунд. Со временем, постепенно (не раньше, чем через 2–3 недели), задержку в верхнем положении можно увеличить (через полгода до нескольких минут). Повторите упражнение 10 раз.\n",
  },
];
const EyePage = () => {
  return (
    <>
      <div className="container">
        <h2 className="infoExercise_title">Упражнения и разминки</h2>
        <div className="infoExercise">
          {pageInfo.map((item) => (
            <div className={item.className} key={item.id}>
              <div className="infoExercise_text">
                <div className="text_name">
                  <h3>{item.title}</h3>
                  <img src={timer} alt="timer" />
                  <p>{item.time}</p>
                </div>
              </div>
              <div className="infoExercise_image">
                <img src={item.image} alt={item.alt} />
              </div>

              <Timer />
            </div>
          ))}
          <div className="infoExercise_article">
            {articles.map((title) => (
              <p>{title.article}</p>
            ))}
          </div>

          <div className="infoExercise_inner">
            <img src={idea} alt="" />
            <p>
              Для начала выполняйте один цикл, затем два (через две-три недели),
              и, в конце концов, выполняйте три цикла. После выполнения
              упражнения закройте глазана несколько секунд. Повторите упражнение
              10 раз.
            </p>
          </div>
        </div>

        <div className="infoExercise">
          {pageInfo.map((item) => (
            <div className={item.className} key={item.id}>
              <div className="infoExercise_text">
                <div className="text_name">
                  <h3>{item.title}</h3>
                  <img src={timer} alt="timer" />
                  <p>{item.time}</p>
                </div>
              </div>
              <div className="infoExercise_wrapper">
                <div className="infoExercise_image">
                  <img src={item.image2} alt={item.alt} />
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

          <div className="infoExercise_inner">
            <img src={idea} alt="" />
            <p>
              Для начала выполняйте один цикл, затем два (через две-три недели),
              и, в конце концов, выполняйте три цикла. После выполнения
              упражнения закройте глазана несколько секунд. Повторите упражнение
              10 раз.
            </p>
          </div>
        </div>
      </div>
      1
    </>
  );
};

export default EyePage;
