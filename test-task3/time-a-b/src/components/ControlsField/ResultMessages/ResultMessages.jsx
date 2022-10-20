import { MessageWrapper } from "./styled";

const ResultMessages = ({ result }) => {
  return (
    <MessageWrapper>
      <div>
        {`Вы выбрали ${result.countTickets} билета по маршруту ${result.currentDirection} стоимостью ${result.cost}р.`}
      </div>
      <div>{`Это путешествие займет у вас ${result.journeyTime} минут.`}</div>
      <div>
        {`Теплоход отправляется в ${result.journeyStart}, а прибудет в ${result.journeyFinish}.`}
      </div>
    </MessageWrapper>
  );
};

export default ResultMessages;
