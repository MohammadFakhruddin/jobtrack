import React from 'react';
import { useLoaderData, Link } from 'react-router';

const BlogDetail = () => {
  const blog = useLoaderData();

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-[#FFF8F5] dark:bg-[#1A1A1A] rounded-lg shadow-md border border-[#FFD19C] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#FF725E] mb-4">{blog.title}</h1>

          {blog.description && (
            <p className="text-gray-700 dark:text-gray-200 text-base mb-6">
              {blog.description}
            </p>
          )}

          <article className="text-gray-800 dark:text-gray-300 leading-relaxed space-y-4">
            {blog.content?.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          {blog.tips && (
            <div className="mt-8 p-5 bg-[#FFF3D7] border-l-4 border-[#FFB84C] rounded shadow">
              <h2 className="text-xl font-semibold text-[#FF725E] mb-2">Tips:</h2>
              <ul className="list-disc list-inside text-[#5c4a2c]">
                {blog.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <Link
              to="/blogs"
              className="inline-block bg-[#FF725E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
