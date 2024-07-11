"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";

function Pagination({
  prevDisabled,
  nextDisabled,
}: {
  prevDisabled: boolean;
  nextDisabled: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  const handleIncrease = () => {
    router.push(`posts/?page=${+currentPage + 1}`);
  };
  const handleDecrease = () => {
    if (currentPage == 1) return;
    router.push(`posts/?page=${+currentPage - 1}`);
  };

  return (
    <div className={styles.wrapper}>
      <button disabled={!prevDisabled} onClick={handleDecrease}>
        Prev
      </button>
      <h2>Current page: {currentPage}</h2>
      <button disabled={!nextDisabled} onClick={handleIncrease}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
