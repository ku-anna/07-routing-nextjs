import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import NotesSidebar from "./filter/@sidebar/SidebarNotes";

export default async function Notes() {
  const initialQuery = "";
  const initialPage = 1;

  const initialData = await fetchNotes(initialQuery, initialPage);

  return (
    <>
      <NotesSidebar />
      <NotesClient
        initialData={initialData}
        initialQuery={initialQuery}
        initialPage={initialPage}
      />
    </>
  );
}
