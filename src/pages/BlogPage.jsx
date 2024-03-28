import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading, theme } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div
      className={`py-24 max-w-2xl mx-auto ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Header />
      <div className="max-w-[720px] px-[25px]">
        <div>
          <button
            className="mb-6 border-2 rounded-md border-[#dfdfdf] py-1 px-4 hover:bg-[#efefef] transition-all"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
        {loading ? (
          <div>
            <p>Loading</p>
          </div>
        ) : blog ? (
          <div className="flex flex-col gap-y-10">
            <BlogDetails post={blog} />
            <h2 className="text-3xl font-bold">Related Blogs</h2>
            {relatedblogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>No Blogs Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
