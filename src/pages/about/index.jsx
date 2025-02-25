import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import "./about.css";
function About(props) {
  const images = ["/images/xe3.jpg", "/images/Banner4.jpg", "/images/cang.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Xử lý click vào thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Tự động chuyển ảnh mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <main>
        <div
          className="hero h-[300px] flex justify-center items-center flex-col"
          //   style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center / cover;"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl text-white mb-4">VỀ CHÚNG TÔI</h1>
          <p className="text-[20px] text-white ">
            Tối ưu- An toàn- Nhanh chóng
          </p>
        </div>

        <section class="achievement-section">
          <div class="achievement-content">
            <h2 class="text-[25px]">Giới thiệu về Công ty</h2>
            <p className="text-[18px]">
              Gia Trường Star là đơn vị hàng đầu trong lĩnh vực vận tải và
              logistics, cung cấp giải pháp vận chuyển chuyên nghiệp, an toàn và
              hiệu quả. Với đội ngũ nhân sự giàu kinh nghiệm, phương tiện hiện
              đại và hệ thống quản lý tiên tiến, chúng tôi cam kết mang đến dịch
              vụ chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.
            </p>

            <h3 className="text-[25px] mb-[10px] text-[#ffcf32]">Tầm nhìn</h3>
            <p className="text-[18px]">
              Chúng tôi đặt mục tiêu trở thành công ty vận tải hàng đầu tại Việt
              Nam, cung cấp những giải pháp vận chuyển hàng hóa tối ưu, hiện đại
              và đáng tin cậy nhất. Với sự phát triển không ngừng của ngành
              logistics, chúng tôi không chỉ đáp ứng nhu cầu vận chuyển mà còn
              đóng vai trò là đối tác chiến lược, đồng hành cùng các doanh
              nghiệp trong quá trình mở rộng và phát triển.
              <br /> Chúng tôi cam kết ứng dụng công nghệ tiên tiến vào quy
              trình quản lý và vận hành, từ đó nâng cao hiệu suất, giảm thiểu
              chi phí và đảm bảo an toàn tuyệt đối cho hàng hóa. Tầm nhìn của
              chúng tôi không chỉ dừng lại ở phạm vi trong nước, mà còn hướng
              tới việc vươn tầm quốc tế, xây dựng mạng lưới vận tải mạnh mẽ, kết
              nối Việt Nam với thị trường toàn cầu.
            </p>

            <h3 className="text-[25px] mb-[10px] text-[#ffcf32]">Sứ mệnh</h3>
            <p className="text-[18px]">
              Với sứ mệnh trở thành cầu nối quan trọng trong chuỗi cung ứng, Gia
              Trường Logistics cam kết cung cấp các dịch vụ vận chuyển chuyên
              nghiệp, uy tín và hiệu quả nhất. Chúng tôi luôn đặt khách hàng làm
              trung tâm, không ngừng cải tiến để mang đến giải pháp vận tải linh
              hoạt, tối ưu và phù hợp với từng nhu cầu riêng biệt.
            </p>
            {/* <p className="text-[18px]">
              <span className="text-[#ffcf32] text-[20px]">Dịch vụ chính:</span>
              <br />- Vận chuyển hàng hóa nhanh chóng, an toàn.
              <br />- Dịch vụ logistics trọn gói, tối ưu chi phí. <br />- Quản
              lý, giám sát hành trình bằng công nghệ tiên tiến.
            </p> */}
            {/* <p className="text-[18px]">
              <span className="text-[#ffcf32] text-[20px]">
                {" "}
                Phương tiện & Cơ sở vật chất:
              </span>
              <br />
              - Đầu tư, nâng cấp phương tiện. <br />
              - Bảo trì, bảo dưỡng định kỳ. <br />- Giám sát hành trình, đảm bảo
              an toàn.
            </p>
            <p className="text-[18px]">
              <span className="text-[#ffcf32] text-[20px]">
                Chăm sóc khách hàng:
              </span>
              <br />
              - 3 tổng kho & 2 văn phòng trên toàn quốc. <br />- Phục vụ tận
              tình 24/24.
            </p>

            <p className="text-[18px]">
              <span className="text-[#ffcf32] text-[20px]">Nhân sự:</span>
              <br />
              - Môi trường làm việc thuận tiện. <br />
              - Đội ngũ quản lý năng động. <br />
              - Lái xe có kinh nghiệm, đạo đức, sức khỏe tốt. <br />- Gắn bó lâu
              dài với công ty.
            </p> */}
            {/* <a href="#" class="read-more">
              Read More
            </a> */}
          </div>

          <div className="w-full max-w-lg mx-auto p-4">
            {/* Main Image */}
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt={`Achievement ${currentIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-all duration-500"
              />
            </div>

            {/* Thumbnails */}
            <div className="w-full flex justify-center gap-3 mt-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-40 h-24 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                    index === currentIndex
                      ? "brightness-100 opacity-100"
                      : "brightness-65 opacity-65"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-2 space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </section>
        <section class="how-it-works">
          <div class="video-section">
            <h2 className="uppercase">Quy trình làm việc</h2>
            <div class="play-button">
              <div class="play-icon"></div>
            </div>
            <div class="video-text">
              <h3 className="uppercase">
                cung cấp những dịch vụ
                <span class="highlight uppercase"> Tốt nhất</span>
              </h3>
            </div>
            <p>Xem video ngay</p>
          </div>

          <div class="steps-section">
            <div class="step" id="step1">
              <div class="step-number">1</div>
              <h4 className="uppercase ">Dịch vụ chính</h4>
              <p className="text-start h-[50%]">
                <br />- Vận chuyển hàng hóa nhanh chóng, an toàn.
                <br />- Dịch vụ logistics trọn gói, tối ưu chi phí. <br />- Quản
                lý, giám sát hành trình bằng công nghệ tiên tiến.
              </p>
            </div>

            <div class="step" id="step2">
              <div class="step-number">2</div>
              <h4 className="uppercase  ">Phương tiện & Cơ sở vật chất</h4>
              <p className="text-start h-[45%]">
                - Đầu tư, nâng cấp phương tiện. <br />
                - Bảo trì, bảo dụng định kỳ. <br />- Giám sát hành trình, đảm
                bảo an toàn.
              </p>
            </div>

            <div class="step" id="step3">
              <div class="step-number">3</div>
              <h4 className="uppercase"> Chăm sóc khách hàng</h4>
              <p className="text-start h-[50%]">
                <br />
                - 3 tổng kho & 2 văn phòng trên toàn quốc. <br />- Phục vụ tận
                tình 24/24.
              </p>
            </div>
          </div>
        </section>
        <section class="section-map w-full pr-[120px] pl-[120px]">
          <h2>Chi nhánh Gia Trường Star</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11141.183999418374!2d108.61333392988631!3d15.42982849589794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169c7d96f382d1f%3A0x8e60ba4383a44609!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gR0lBIFRSxq_hu5xORyBTVEFSIChHSUEgVFLGr-G7nE5HIExPR0lTVElDUyk!5e1!3m2!1svi!2s!4v1739865074260!5m2!1svi!2s "
            width="100% "
            height="450 "
            allowfullscreen=" "
            loading="lazy "
            referrerpolicy="no-referrer-when-downgrade "
          ></iframe>
        </section>
      </main>
    </Layout>
  );
}

export default About;
