import { useRouter } from "next/router"

function Error() {
  const router = useRouter();
  return (
    <>
      <div className="p-5 text-center">
        <h1>404</h1>
        <p>We are sorry, Page not found.</p>
        <button onClick={() => router.push('/')}>Back to Home</button>
      </div>
    </>
  )
}

export default Error