import CommentsList from "@/app/_components/CommentsList";
import PostCard from "@/app/_components/PostCard";
import Spinner from "@/app/_components/Spinner";
import { getPost } from "@/app/_lib/data-servise";

import { Suspense } from "react";

export async function generateMetadata({ params }: any) {
  const post = await getPost(params.postId);

  return {
    title: post.title,
    body: post.body,
  };
}

function page({ params }: any) {
  return (
    <Suspense fallback={<Spinner />}>
      <PostCard postId={params.postId} />
      <CommentsList postId={params.postId} />
    </Suspense>
  );
}

export default page;
