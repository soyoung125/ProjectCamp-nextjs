const event = () => {
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event);
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(event.target.value); // text input, radio
    // console.log(event.target.checked); // checkbox
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본적으로 동작하는 이벤트 방지
    // 이메일 입력한 값 가져오기
    // 비밀번호 값 가져오기

    // API 통신을 통해 서버로 이메일과 비밀번호 전송
    // 서버에서 응답 받은 결과에 따라
    // 성공
    // 실패
    console.log("log-in");
  };

  return (
    <>
      <form action="" onSubit={login}>
        <input type="text" placeholder="이메일" />
        <input type="password" placeholder="password" />
        <button>전송</button>
      </form>
      <h1>App Component</h1>
      <input
        type="radio"
        value="male"
        name="gender"
        onChange={onChangeHandler}
      />
      male
      <input
        type="radio"
        value="female"
        name="gender"
        onChange={onChangeHandler}
      />
      female
      <input type="checkbox" onChange={onChangeHandler} />
      <input type="text" onChange={onChangeHandler} />
      <button onClick={(e) => onClickHandler(e)}>클릭</button>
      <select onChange={onChangeHandler}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Carror">Carror</option>
      </select>
    </>
  );
};
export default event;
