const Eat = ({
  uname,
  age,
  onFinishEat,
}: {
  uname: string;
  age: string;
  onFinishEat: () => void;
}) => {
  return (
    <>
      <h1>
        {uname} - {age} 님이 식사를 시작합니다.
      </h1>
      <button onClick={onFinishEat}>식사완료</button>
    </>
  );
};

export default Eat;
