import React from "react";

function Sidebar() {
  const categories = [
    { name: "Tin tức công ty", count: 15 },
    { name: "Tin ngành logistics", count: 23 },
    { name: "Tuyển dụng", count: 7 },
    { name: "Thông báo", count: 9 },
  ];

  const recentPosts = [
    {
      title: "Ứng dụng AI trong quản lý kho",
      date: "5 Tháng 2, 2025",
      image:
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Tối ưu hóa tuyến đường vận chuyển",
      date: "1 Tháng 2, 2025",
      image:
        "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const tags = [
    "Logistics",
    "Vận tải",
    "Container",
    "Kho bãi",
    "Xuất nhập khẩu",
    "Tuyển dụng",
  ];

  return (
    <aside className="w-80 rounded-lg p-4 shadow-sm">
      {/* Search Section */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4 border-b-2 border-red-500">
          Tìm kiếm
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Tìm kiếm tin tức..."
            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer border-0">
            Tìm
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4 border-b-2 border-red-500">
          Danh mục
        </h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center">
              <a href="#" className="text-gray-600 hover:text-red-500">
                {category.name}
              </a>
              <span className="text-gray-400">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4 border-b-2 border-red-500">
          Bài viết nổi bật
        </h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <article key={index} className="flex gap-3">
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-sm font-bold hover:text-blue-500">
                  <a href="#" className="text-black">
                    {post.title}
                  </a>
                </h3>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="mb-8 bg-white rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4 border-b-2 border-red-500">
          Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
