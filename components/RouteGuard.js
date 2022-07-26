import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function RouteGuard({children}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);
    
    // on route change start - hide page content by setting authorized to false  
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check 
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
        router.events.off('routeChangeStart', hideContent);
        router.events.off('routeChangeComplete', authCheck);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in 
    if (typeof window !== 'undefined') {
      const publicPaths = ['/login', '/register'];
      const path = url.split('?')[0];
      // Perform localStorage action
      const item = localStorage.getItem('authToken')
      if (item === null && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
          query: { returnUrl: router.asPath }
      });
      } else {
        setAuthorized(true);
      }
    }
  }
  
  return (authorized && children)
}

export default RouteGuard