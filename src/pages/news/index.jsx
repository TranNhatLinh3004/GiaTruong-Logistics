import Layout from "@/components/Layout";
import React from "react";
import "./news.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
function News(props) {
  const newsData = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3856433/pexels-photo-3856433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "15 Tháng 2, 2025",
      category: "Tin tức công ty",
      title: "Khai trương chi nhánh mới tại Đà Nẵng",
      excerpt:
        "Nhằm mở rộng mạng lưới và phục vụ khách hàng tốt hơn, Trường Nam Logistics chính thức khai trương chi nhánh mới tại Đà Nẵng...",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "10 Tháng 2, 2025",
      category: "Tin ngành",
      title: "Xu hướng logistics xanh trong năm 2025",
      excerpt:
        "Ngành logistics đang chứng kiến sự chuyển mình mạnh mẽ với xu hướng xanh hóa chuỗi cung ứng...",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "5 Tháng 2, 2025",
      category: "Sự kiện nội bộ",
      title: "Hội nghị khách hàng 2025",
      excerpt:
        "Trường Nam Logistics tổ chức hội nghị khách hàng thường niên nhằm tri ân và lắng nghe ý kiến đóng góp từ quý đối tác...",
    },
  ];

  return (
    <Layout>
      <main class="main-content flex pl-8 pr-8  md:pl-[120px] md:pr-[120px] mb-20">
        <div className="">
          <div class="featured-news">
            <div class="slide active">
              <img
                src="https://images.pexels.com/photos/358622/pexels-photo-358622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured News"
              />
              <div class="slide-content">
                <h2>Gia Trường Logistics mở rộng đội xe container</h2>
                <p>
                  Công ty vừa đầu tư thêm 50 xe container mới nhằm nâng cao năng
                  lực vận chuyển...
                </p>
              </div>
            </div>
            <div class="slider-dots">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>

          <div className="news-list">
            {newsData.map((news) => (
              <article className="news-card" key={news.id}>
                <img src={news.image} alt={news.title} />
                <div className="news-content">
                  <div className="news-meta">
                    <span>{news.date}</span>
                    <span>{news.category}</span>
                  </div>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-excerpt line-clamp-2 md:line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link href={`/news/${news.id}`} className="read-more news">
                    Đọc tiếp →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Sidebar />
      </main>
    </Layout>
  );
}

export default News;
