import Layout from "@/components/Layout";
import React from "react";
import "./contact.css";
import { FaPhone, FaClock, FaHeadset } from "react-icons/fa";
function Contact(props) {
  return (
    <Layout>
      <main className="contact mt-32 md:mt-40">
        <div class="hero">
          <h1
            data-aos="fade-right"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            LIÊN HỆ VỚI CHÚNG TÔI
          </h1>
          <p
            className="text-[18px]"
            data-aos="fade-right"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Thông tin liên hệ chính thức của Công ty Vận Tải Gia Trường Star
          </p>
        </div>
        <div class="description">
          <p className="text-[18px]">
            Nếu quý khách hàng đang tìm kiếm dịch vụ vận chuyển hàng hóa, vận
            chuyển xe ô tô hoặc vận chuyển hàng hóa từ Bắc vào Nam, hãy liên hệ
            vớiCông ty vận chuyển Gia Trường Logistics ngay hôm nay để được hỗ
            trợ tốt nhất. Quý khách có thể xem thêm thông tin chi tiết về các
            dịch vụ và sản phẩm của Gia Trường Logistics TẠI ĐÂY. Chúng tôi rất
            mong được hợp tác và phục vụ quý khách hàng trong thời gian tới.
          </p>
        </div>
        <div className="contact-section bg-transparent" data-aos="fade-up">
          <div className="contact-form">
            <h2>GỬI TIN NHẮN CHO CHÚNG TÔI</h2>
            <form>
              <div class="form-group">
                <input type="text" placeholder="Họ tên...(*)" required />
              </div>
              <div class="form-group">
                <input type="tel" placeholder="Số điện thoại...(*)" required />
              </div>
              <div class="form-group">
                <input type="email" placeholder="Email..." />
              </div>
              <div class="form-group">
                <select required>
                  <option value="">Loại dịch vụ</option>
                  <option>Vận chuyển hàng hóa</option>
                  <option>Vận chuyển xe ô tô</option>
                  <option>Vận chuyển hàng hóa từ Bắc vào Nam</option>
                </select>
              </div>
              <div class="form-group">
                <textarea placeholder="Tin nhắn"></textarea>
              </div>
              <button type="submit" class="submit-btn">
                GỬI NGAY
              </button>
            </form>
          </div>

          <div className="contact-icon">
            <div className="info-item flex gap-4">
              <FaPhone size={44} color="black" />
              <div className="info-text">
                <h3>Hotline</h3>
                <p>0852.563.325</p>
              </div>
            </div>
            <div className="info-item flex gap-4">
              <FaClock size={44} color="black" />
              <div className="info-text">
                <h3>Thời gian</h3>
                <p>Hỗ trợ Quý khách 24/24h</p>
                <p>Từ thứ 2 - Chủ nhật</p>
              </div>
            </div>
            <div className="info-item flex gap-4">
              <FaHeadset size={44} color="black" />
              <div className="info-text">
                <h3>Liên hệ ngay với chúng tôi</h3>
                <p>Nhận tư vấn và hỗ trợ tốt nhất</p>
              </div>
            </div>
          </div>
        </div>
        <section class="section-map w-full pr-[120px] pl-[120px] mb-20 mt-16 md:mt-32">
          <h2 className="text-center text-2xl font-bold mb-4 text-black uppercase">
            Chi nhánh Gia Trường Star
          </h2>
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

export default Contact;
