"use client";

import { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";
import { tags } from "../../lib/api";

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
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes?tag=${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
