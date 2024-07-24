interface IButtonProps {
  children: React.ReactNode;
  color: string;
  textColor: string;
  width: string;
}

const Button = ({ children, color, textColor, width }: IButtonProps) => {
  return (
    <>
      <button
        className={`px-5 py-3.5 rounded-lg font-medium text-[${textColor}] bg-[${color}] w-[${width}]`}
        // tailwind는 백틱과 표현식으로 일부분만 바꾸려고 할 때 안되는 경우가 있음
        // 사용하려면 일부분이 아니라 완전하게 바꾸게 ${color? bg-[#484848] : bg-[#ffffff]} 이런식으로 적성해야 함.
      >
        {children}
      </button>
    </>
  );
};
export default Button;
