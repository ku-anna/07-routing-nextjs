// app/notes/filter/layout.tsx
import SidebarNotes from "./@sidebar/SidebarNotes";
import styles from "@/app/notes/filter/layout.module.css";

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarNotes />
      <div className={styles.layout}>
        <aside className={styles.sidebar}></aside>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
