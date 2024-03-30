import css from "./Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.fotoContainer}>
        <img src={image} alt="User avatar" className={css.foto} />
        <p className={css.username}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}> {location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listItemTitle}>Followers</span>
          <span className={css.components}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listItemTitle}>Views</span>
          <span className={css.components}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listItemTitle}>Likes</span>
          <span className={css.components}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
