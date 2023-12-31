//images
import eyes from "../../assets/infoExercise/eyes.gif";
import eyes2 from "../../assets/infoExercise/eyes2.gif";
import back from "../../assets/infoExercise/back.png";
import back2 from "../../assets/infoExercise/back2.png";
import hands from "../../assets/infoExercise/hands.png";
import hands2 from "../../assets/infoExercise/hands2.png";
import legFoot from "../../assets/infoExercise/legFoot.png";
import legFoot2 from "../../assets/infoExercise/legFoot2.png";
import shoulderNeck from "../../assets/infoExercise/shoulderNeck.png";
import shoulderNeck2 from "../../assets/infoExercise/shoulderNeck2.png";
import timer from "../../assets/categories/timer.png";
import line from "../../assets/infoExercise/line.png";
import Timer from "../../components/timer/Timer";

const pageInfo = [
  // {
  //   id: 1,
  //   image: shoulderNeck,
  //   image2: shoulderNeck2,
  //   alt: 'shoulderNeck',
  //   className: 'infoExercise_without-flex-direction',
  //   title: 'Разминка для шеи и плеч',
  //   inst: 'Расслабляет мышцы спины, плеч и шеи',
  //   inst2: 'Снимает нагрузку',
  //   inst3: 'Регулирует кровеносное давление',
  //   time: '5 минут'
  // },
  // {
  //   id: 2,
  //   image: back,
  //   image2: back2,
  //   alt: 'back',
  //   className: 'infoExercise_without-flex-direction',
  //   title: 'Разминка для спины',
  //   inst: 'Обеспечивает правильную циркуляцию крови',
  //   inst2: 'Профилактика искривления позвоночника',
  //   inst3: 'Повышает тонус мыш',
  //   time: '3-5 минут'
  // },
  // {
  //   id: 3,
  //   image: hands,
  //   image2: hands2,
  //   alt: 'hands',
  //   className: 'infoExercise_without-flex-direction',
  //   title: 'Разминка для кистей рук',
  //   inst: 'Повышает подвижность суставов',
  //   inst2: 'Восстанавливает кровообращение',
  //   inst3: 'Облегчает болевые ощущения',
  //   time: '3-5 минут'
  // },
  // {
  //   id: 4,
  //   image: legFoot,
  //   image2: legFoot2,
  //   alt: 'legFoot',
  //   className: 'infoExercise_without-flex-direction',
  //   title: 'Разминка для ног и ступней',
  //   inst: 'Улучшает метаболизм',
  //   inst2: 'Обеспечивает приток кислорода',
  //   inst3: 'Улучшает кровообращение',
  //   time: '5-8 минут'
  // },
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
  // {
  //    id: 1,
  //    article: 'Начинаем офисную гимнастику с разминки шеи. Простое упражнение с выведением головы вперед мягко разминает мышцы шеи, убирает напряжение в шее и верхней части спины, избавляет от двойного подбородка.',
  //    article2: 'Продолжаем разминать шею. Делаем повороты шеи полукругом и в пиковой точке поднимаем голову, вытягивая вверх подбородок. Упражнение полезно для разминки шейно-воротниковой зоны, а также для избавления от второго подбородка.'
  // },
  // {
  //     id: 2,
  //     article: 'Сидя за столом, расположить ладони под подбородком. Считая от 1 до 10, давим на ладони подбородком как можно сильнее. Повторить с перерывом 3 раза.',
  //     article2: 'Стоя прямо или сидя. Голову склоняем на левое плечо, упираясь основанием ладони правой руки чуть выше уха. С силой давим на голову ладонью и, преодолевая сопротивление, возвращаем ее в исходное положение. Затем делаем то же самое, наклоняя голову вправо. 3 раза по 5 секунд в каждую сторону.'
  // },
  // {
  //     id: 3,
  //     article: 'У офисных работников нередко возникает боль или неприятные ощущения в области кистей из-за длительной работы с мышкой или клавиатурой. Вращения кистями помогают размять лучезапястный сустав и избавиться от ограниченной подвижности.',
  //     article2: 'Сцепите руки в замок и на выдохе потянитесь вперед, выворачивая ладони тыльной стороной наружу. На вдохе вернитесь в исходное положение и расцепите руки. Старайтесь наклониться как можно ниже, чтобы почувствовать, как растягиваются мышцы спины и вытягивается позвоночник. Отличное упражнение для осанки можно выполнять в офисе, чтобы расслабить поясницу, разгрузить плечи и снять эмоциональное напряжение.'
  // },
  // {
  //     id: 4,
  //     article: 'Положите ладони на колени, стопы поставьте на пол. Поставьте правую ногу на носок, оставляя левую стоять на полу. Затем правую опустите, а левую поставьте на носок, максимально вытягивая стопу, чтобы растянуть мышцы. Выполняйте шаги ритмично, не задерживая дыхания. Упражнение отлично разминает голеностоп, снимает усталость с ног, а также улучшает крово- и лимфоток, предотвращая варикоз.',
  //     article2: 'Поставьте ноги под прямым углом, руки положите на сидение стула. На выдохе поднимите правое колено вверх, на вдохе – опустите. На следующем выдохе поменяйте ногу. Поднимайте ногу как можно выше, чтобы стимулировать отток крови. Выполняйте это упражнение в офисе, чтобы предотвратить боль в коленях от долгого сидения, улучшить кровообращение и предотвратить отечность к концу дня.'
  // },
  {
    id: 5,
    article:
      'На вдохе медленно поверните глаза вправо ("до упора", но без сильного напряжения). Не задерживаясь, на выдохе, верните глаза в исходное положение. Таким же образом поверните глаза влево.\n' +
      "Для начала выполняйте один цикл, затем два (через две-три недели), и, в конце концов, выполняйте три цикла. После выполнения упражнения закройте глаза на несколько секунд. Повторите упражнение 10 раз.",
    article2:
      "Глубоко и медленно вдыхая (желательно, животом), посмотрите в межбровье, задержите глаза в этом положении на несколько секунд. Медленно выдыхая, верните глаза в исходное положение и закройте на несколько секунд. Со временем, постепенно (не раньше, чем через 2–3 недели), задержку в верхнем положении можно увеличить (через полгода до нескольких минут). Повторите упражнение 10 раз.\n",
  },
];

export const InfoExercises = () => {
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
