import { Suspense } from "react";
import Pagination from "../_components/Pagination";
import PostsList from "../_components/PostsList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Posts",
};

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const currentPage = searchParams["page"] ?? 1;

  return (
    <div>
      <h2>Here`s all the available posts</h2>
      <Suspense fallback={<Spinner />}>
        <PostsList currentPage={+currentPage} />
      </Suspense>
    </div>
  );
}

export default page;
