import { MainLayout } from "./styled";
import ExcursionCard from "./components/ExcursionCard";

function App() {
  return (
    <MainLayout>
      {[
        {
          title:
            "АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
          price: 900,
          labelText: "НОВИНКА",
          imageSrc:
            "https://github.com/MaryGuk/test-task1/blob/master/test-task1/public/resources/img1.png?raw=true",
          timings: ["12:00", "12:00", "12:00", "12:00"],
        },
        {
          title:
            "АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
          price: 2900,
          labelText: "НОВИНКА",
          labelColor: "#099CE8",
          imageSrc:
            "https://github.com/MaryGuk/test-task1/blob/master/test-task1/public/resources/img1.png?raw=true",
          timings: ["12:00", "12:00", "12:00", "12:00"],
        },
        {
          title:
            "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
          price: 900,
          labelText: "НОВИНКА",
          labelColor: "#7553FF",
          imageSrc:
            "https://github.com/MaryGuk/test-task1/blob/master/test-task1/public/resources/image2.png?raw=true",
          timings: ["12:00", "12:00", "12:00"],
        },
        {
          title:
            "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
          price: 900,
          labelText: "КРУГЛЫЙ ГОД",
          imageSrc:
            "https://github.com/MaryGuk/test-task1/blob/master/test-task1/public/resources/image3.png?raw=true",
          timings: ["12:00", "12:00", "12:00", "12:00"],
        },
        {
          title:
            "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
          price: 900,
          imageSrc:
            "https://github.com/MaryGuk/test-task1/blob/master/test-task1/public/resources/image4.png?raw=true",
          timings: ["12:00", "12:00", "12:00", "12:00", "12:00"],
        },
      ].map(
        ({ title, price, labelText, labelColor, imageSrc, timings }, idx) => (
          <ExcursionCard
            key={idx}
            timings={timings}
            title={title}
            price={price}
            labelText={labelText}
            labelColor={labelColor}
            imageSrc={imageSrc}
          />
        )
      )}
    </MainLayout>
  );
}

export default App;
