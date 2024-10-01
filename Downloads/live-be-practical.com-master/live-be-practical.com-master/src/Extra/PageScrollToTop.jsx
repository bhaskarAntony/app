import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]);

  return null;
};

export default PageScrollToTop;
