import Link from "next/link";
import css from "@/app/notes/filter/@sidebar/SidebarNotes.module.css";

const NotesSidebar = async () => {
  const localTags = ["Work", "Todo", "Personal", "Meeting", "Shopping"];

  return (
    <ul className={css.menuList}>
      <li key="all" className={css.sidebarItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {localTags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
