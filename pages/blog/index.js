import styles from "../../styles/blog.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

function blog({ data }) {
  return (
    <div>
      <h1>Blog</h1>
      {data.slice(0, 10).map((items) => {
        return (
          <div key={items.id} className={styles.postStyle}>
            <div className={styles.itemId}>
              <h3>{items.id}</h3>
            </div>
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href={`/blog/${items.id}`}>
              <h2 className={styles.title}>{items.title}</h2>
            </Link>
          </div>
        );
      })}
      <style jsx>{`
        h1 {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default blog;
