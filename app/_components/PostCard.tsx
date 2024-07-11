import Link from "next/link";
import styles from "./PostCard.module.css";
import { getPost } from "../_lib/data-servise";

async function PostCard({ post, postId }: any) {
  // Решил переиспользовать компонент при рендере отдельного поста, выглядит не очень
  if (!post) post = await getPost(postId);

  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <span>{post.body}</span>
      {!postId && (
        <Link href={`/posts/${post.id}`}>See related comments &#8594;</Link>
      )}
    </div>
  );
}

export default PostCard;
