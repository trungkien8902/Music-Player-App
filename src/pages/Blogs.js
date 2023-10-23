import React from "react";

export default function Blogs() {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <div className="p-4 rounded shadow hover:cursor-pointer bg-gray-200">
          <h3 className="text-xl font-bold">Blog Title 1</h3>
          <p>Published on: June 15, 2023</p>
          <p>
            This is the content of the first blog post. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow mt-4">
          <h3 className="text-xl font-bold">Blog Title 2</h3>
          <p>Published on: June 20, 2023</p>
          <p>
            This is the content of the second blog post. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Add more blog posts here */}
      </div>
    </div>
  );
}
