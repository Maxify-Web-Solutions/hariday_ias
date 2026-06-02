import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { getSingleBlog, getAllBlogs } from "../Redux/Slicer/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "../components/ScrollToTop";

const BlogDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { singleBlog, loading, error, blogs } = useSelector(
        (state) => state.blog
    );

    useEffect(() => {
        if (id) {
            dispatch(getSingleBlog(id));
            dispatch(getAllBlogs());
        }
    }, [dispatch, id]);

    const handleMoreArticleClick = (articleId) => {
        navigate(`/blog/${articleId}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Show loading state
    if (loading && !singleBlog) {
        return (
            <div className="flex items-center justify-center min-h-screen text-xl text-gray-600">
                Loading...
            </div>
        );
    }

    // Show error state
    if (error && !singleBlog) {
        return (
            <div className="flex items-center justify-center min-h-screen text-xl text-red-600">
                Error: {error}
            </div>
        );
    }

    // Show not found state
    if (!singleBlog) {
        return (
            <div className="flex items-center justify-center min-h-screen text-xl text-gray-600">
                Blog not found
            </div>
        );
    }

    return (
        <section className="w-full min-h-screen bg-[#F3E6DD] py-10 px-2 md:px-10 lg:px-20 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* LEFT SIDE - MAIN BLOG (70%) */}
                <div className="lg:w-[70%] w-full bg-[#FFFAF3] p-3 shadow-md overflow-hidden rounded-lg">
                    {/* Image */}
                    <div className="w-full h-[250px] md:h-[450px]">
                        <img
                            src={singleBlog.image}
                            alt={singleBlog.title}
                            className="w-full h-full object-cover rounded-md"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/800x450?text=No+Image";
                            }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                        {singleBlog.highlight && (
                            <button className="bg-[#F5E6D3] text-[#6B0F0F] px-4 py-2 rounded-md text-sm font-medium">
                                {singleBlog.highlight}
                            </button>
                        )}

                        <h1 className="text-2xl md:text-4xl font-bold text-[#6B0F0F] mt-5 leading-tight">
                            {singleBlog.title}
                        </h1>

                        <div className="flex items-center gap-2 mt-4 text-[#7C5A4F]">
                            <MdOutlineDateRange className="text-2xl" />
                                                {new Date(singleBlog.date).toLocaleDateString("en-GB")}
                        </div>

                        <p className="text-[#7C5A4F] text-lg leading-relaxed mt-6">
                            {singleBlog.description}
                        </p>

                        <p className="text-[#7C5A4F] text-base md:text-lg leading-loose mt-8">
                            {singleBlog.fullContent}
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE - OTHER BLOGS (30%) */}
                <div className="lg:w-[30%] w-full flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-[#6B0F0F] mb-2">
                        More Articles
                    </h2>

                    {blogs && blogs.length > 0 ? (
                        blogs
                            .filter(item => item._id !== singleBlog._id)
                            .slice(0, 6)
                            .map((item) => (
                                <div
                                    key={item._id}
                                    onClick={() => handleMoreArticleClick(item._id)}
                                    className="bg-white p-3 shadow rounded-md hover:shadow-md transition-all cursor-pointer flex gap-3 items-start hover:scale-[1.02] duration-500"
                                >
                                    {/* Image Left */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-20 w-20 object-cover rounded-md flex-shrink-0 hidden md:block"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/80x80?text=No+Image";
                                        }}
                                    />

                                    {/* Content Right */}
                                    <div className="flex flex-col flex-1">
                                        <h3 className="text-sm font-semibold text-[#6B0F0F] line-clamp-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs text-gray-600 line-clamp-2 break-all overflow-hidden">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center gap-1 mt-2 text-[#7C5A4F]">
                                            <MdOutlineDateRange className="text-sm" />
                                            <p className="text-xs">
                                                {new Date(item.date).toLocaleDateString("en-GB")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                    ) : (
                        // Loading state for sidebar
                        <div className="bg-white p-4 rounded-md shadow">
                            <p className="text-[#7C5A4F] text-center">Loading more articles...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogDetailPage;