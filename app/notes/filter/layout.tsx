// app/notes/filter/layout.tsx
import SidebarNotes from "./@sidebar/SidebarNotes";
import styles from "./SidebarNotes.module.css"; // опціонально для стилізації

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SidebarNotes />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
