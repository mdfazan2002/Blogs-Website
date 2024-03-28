import "./App.css";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts, theme } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const prevPage = useRef(null);
  const prevTag = useRef(null);
  const prevCategory = useRef(null);

  useEffect(() => {
    const page = searchParams.get('page') ?? 1;
    let tag = null;
    let category = null;

    if (location.pathname.includes("tags")) {
      tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
    } else if (location.pathname.includes("categories")) {
      category = location.pathname.split("/").at(-1).replaceAll("-", " ");
    }

    if (
      page !== prevPage.current || 
      tag !== prevTag.current || 
      category !== prevCategory.current
    ) {
      fetchBlogPosts(Number(page), tag, category);
      prevPage.current = page;
      prevTag.current = tag;
      prevCategory.current = category;
    }
  }, [fetchBlogPosts, searchParams, location.pathname]);

  return (
    <div className={theme === 'dark' ? 'dark-mode' : ''}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}
