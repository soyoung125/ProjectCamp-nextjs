interface IProfileCardProps {
  bgImage: string;
  userImage: string;
  userName: string;
  instagramId: string;
  onClickHandler: () => void;
}
const ProfileCard = ({
  bgImage,
  userName,
  userImage,
  instagramId,
  onClickHandler,
}: IProfileCardProps) => {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bgImage} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={userImage} alt="profile-pic" />
          <h3 className="alias">{userName}</h3>
          <p className="username">{instagramId}</p>
          <button onClick={onClickHandler}>Follow</button>
        </div>
      </article>
    </>
  );
};

export default ProfileCard;
