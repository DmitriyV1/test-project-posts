import { getComments } from "../_lib/data-servise";
import styles from "./CommentsList.module.css";

async function CommentsList({ postId }: { postId: number }) {
  const comments = await getComments(postId);
  return (
    <div>
      {comments.map((comment: any) => (
        <div className={styles.card} key={comment.id}>
          <h3> Posted by {comment.email}</h3>
          <span>{comment.body}</span>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
