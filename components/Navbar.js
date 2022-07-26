import Link from "next/link";
import { useRouter, withRouter } from "next/router";
// import { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  // const [styleDisplay, setStyleDisplay] = useState(true);
  // const url = router.asPath;

  // useEffect(() => {
  //   const publicPaths = ["/login", "/register"];
  //   const path = url.split("?")[0];
  //   if (publicPaths.includes(path) === true) {
  //     setStyleDisplay(false);
  //   } else {
  //     setStyleDisplay(true);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  //   }
  // }, [url]);

  const handleLogout = () => {
    const result = confirm("Are you sure, Do you want to Logout?");
    if (result === true) {
      localStorage.removeItem("authToken");
      router.push("/login");
    }
  };
  return (
    <>
      {/* {styleDisplay && ( */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">Navbar</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link active" aria-current="page">
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link active" aria-current="page">
                      Contact US
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog">
                    <a className="nav-link active" aria-current="page">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/products">
                    <a className="nav-link active" aria-current="page">
                      products
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav d-flex">
                <li
                  className="nav-item"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  <a className="nav-link active" aria-current="page">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      {/* )} */}
    </>
  );
}

export default withRouter(Navbar);
