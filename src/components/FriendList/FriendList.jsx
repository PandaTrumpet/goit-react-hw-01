import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((el) => (
        <li className={clsx(css.listItem)} key={el.id}>
          <FriendListItem data={el} />
        </li>
      ))}
    </ul>
  );
}
