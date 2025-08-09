import Link from "next/link";
import css from "./sidebar.module.css";

const NotesSidebar = async () => {
  const localTags = ["Work", "Todo", "Personal", "Meeting", "Shopping"];

  return (
    <ul className={css.sidebar}>
      <li key="all" className={css.sidebarItem}>
        <Link href={`/notes/filter/all`} className={css.sidebarLink}>
          All notes
        </Link>
      </li>
      {localTags.map((tag) => (
        <li key={tag} className={css.sidebarItem}>
          <Link href={`/notes/filter/${tag}`} className={css.sidebarLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
