import { useState } from "react";
import css from "./TagsMenu.module.css";

const tags = [
  { name: "JavaScript", url: "/tags/javascript" },
  { name: "TypeScript", url: "/tags/typescript" },
  { name: "React", url: "/tags/react" },
];

const TagsMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Notes ▾
      </button>

      {open && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag.name} className={css.menuItem}>
              <a href={tag.url} className={css.menuLink}>
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
