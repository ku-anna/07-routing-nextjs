// app/@modal/(.)notes/[id]/page.tsx

import { fetchNoteById } from "@/lib/api";
import NotesPreviewClient from "./NotesPreview.client";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

type NoteModalPageProps = {
  params: { id: string };
};

export default async function NoteModalPage({ params }: NoteModalPageProps) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesPreviewClient />
    </HydrationBoundary>
  );
}
