const ListItem = ({ name, age }: { name: string; age: number }) => {
  return (
    <>
      <li>
        {name} - {age}
      </li>
    </>
  );
};
export default ListItem;
