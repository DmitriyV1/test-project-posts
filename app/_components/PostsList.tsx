import { getPosts } from "../_lib/data-servise";
import Pagination from "./Pagination";
import PostCard from "./PostCard";

async function PostsList({ currentPage }: { currentPage: number }) {
  const posts = await getPosts();
  const postsPerPage = 10;

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const displayedPosts = posts.slice(start, end);

  return (
    <div>
      {displayedPosts.length >= 1 ? (
        displayedPosts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <h3> Posts not found </h3>
      )}

      {displayedPosts.length > 0 && (
        <Pagination
          prevDisabled={start > 0}
          nextDisabled={end < posts.length}
        />
      )}
    </div>
  );
}

export default PostsList;
