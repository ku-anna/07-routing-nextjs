import { fetchNotes } from "@/lib/api";
import PostsClient from "./Notes.client";

interface PostsPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function PostsPage({ params }: PostsPageProps) {
  const { slug } = await params;
  const tagNote = slug[0] === "All" ? "" : slug[0];
  const initialData = await fetchNotes("", 1, tagNote);

  return <PostsClient initialData={initialData} initialTag={tagNote} />;
}
