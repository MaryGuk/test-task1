import { MessageWrapper } from "./styled";


const ResultMessages = ({ result }) => {
  return (
    <MessageWrapper>
      <div>{result.currentDirection}</div>
      <div>{result.journeyTime}</div>
      <div>{result.journeyStart}</div>
      <div>{result.journeyFinish}</div>
      <div>{result.cost}</div>
    </MessageWrapper>
  );
};

export default ResultMessages;
