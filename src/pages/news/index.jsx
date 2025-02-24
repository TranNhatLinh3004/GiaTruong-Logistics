import Layout from "@/components/Layout";
import React from "react";
import "./news.css";
import Sidebar from "@/components/sidebar/Sidebar";
function News(props) {
  return (
    <Layout>
      <main class="main-content flex pl-[120px] pr-[120px] mb-20">
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

          <div class="news-list">
            <article class="news-card">
              <img
                src="https://images.pexels.com/photos/3856433/pexels-photo-3856433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="News 1"
              />
              <div class="news-content">
                <div class="news-meta">
                  <span>15 Tháng 2, 2025</span>
                  <span>Tin tức công ty</span>
                </div>
                <h3 class="news-title">
                  Khai trương chi nhánh mới tại Đà Nẵng
                </h3>
                <p class="news-excerpt">
                  Nhằm mở rộng mạng lưới và phục vụ khách hàng tốt hơn, Trường
                  Nam Logistics chính thức khai trương chi nhánh mới tại Đà
                  Nẵng...
                </p>
                <a href="#" class="read-more news">
                  Đọc tiếp →
                </a>
              </div>
            </article>

            <article class="news-card">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="News 2"
              />
              <div class="news-content">
                <div class="news-meta">
                  <span>10 Tháng 2, 2025</span>
                  <span>Tin ngành</span>
                </div>
                <h3 class="news-title">
                  Xu hướng logistics xanh trong năm 2025
                </h3>
                <p class="news-excerpt">
                  Ngành logistics đang chứng kiến sự chuyển mình mạnh mẽ với xu
                  hướng xanh hóa chuỗi cung ứng...
                </p>
                <a href="#" class="read-more news">
                  Đọc tiếp →
                </a>
              </div>
            </article>
            <article class="news-card">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="News 2"
              />
              <div class="news-content">
                <div class="news-meta">
                  <span>10 Tháng 2, 2025</span>
                  <span>Tin ngành</span>
                </div>
                <h3 class="news-title">
                  Xu hướng logistics xanh trong năm 2025
                </h3>
                <p class="news-excerpt">
                  Ngành logistics đang chứng kiến sự chuyển mình mạnh mẽ với xu
                  hướng xanh hóa chuỗi cung ứng...
                </p>
                <a href="#" class="read-more news">
                  Đọc tiếp →
                </a>
              </div>
            </article>
          </div>
        </div>

        <Sidebar />
      </main>
    </Layout>
  );
}

export default News;
