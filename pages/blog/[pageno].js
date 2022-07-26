import styles from "../../styles/blog.module.css";


export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((items) => {
    return {
      params: { 
        pageno: items.id.toString(),
       },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}; 

function postdata({data}) {

  return (
    <>
      <h3 style={{textAlign: 'center', paddingTop: '2em'}}>Blog Post Data</h3>
      <div key={data.id} className={styles.perticularPost}>
            <div className={styles.perticularID}>
              <h3>{data.id}</h3>
            </div>
            <div className={styles.perticularBodyPost}>
              <h2 className={styles.perticulartitle}>{data.title}</h2>
              <p>{data.body}</p>
            </div>
          </div>
    </>
  );
}

export default postdata;
