import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ data: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOfline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
