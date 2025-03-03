import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import "./home.css";
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import BannerSlider from "@/components/banner/BannerSlider";
import ServiceSlider from "@/components/slider/ServiceSlider";
import CustomerSlider from "@/components/slider/CustomerSlider";
import NewsSlider from "@/components/slider/NewsSlider";
export default function Home() {
  return (
    <Layout>
      <main>
        <BannerSlider />

        <section class="freight-section ">
          <div class="content-wrapper " data-aos="fade-right">
            <h2 class="section-title ">TẠI SAO CHỌN VẬN TẢI GIA TRƯỜNG </h2>
            <div class="section-line "></div>
            <p class="section-description ">
              Vận Tải Gia Trường là đơn vị vận chuyển hàng hóa chuyên nghiệp, uy
              tín và đáng tin cậy. Với nhiều năm kinh nghiệm trong ngành, chúng
              tôi cam kết mang đến cho khách hàng dịch vụ vận tải nhanh chóng,
              an toàn và tiết kiệm chi phí.
            </p>
            <h3 class="benefits-title ">Lợi ích:</h3>
            <ul class="benefits-list ">
              <li>Dịch vụ uy tín, chuyên nghiệp</li>
              <li>Đa dạng phương tiện vận chuyển</li>
              <li>Thời gian giao hàng nhanh chóng</li>
              <li>Chi phí hợp lý, minh bạch</li>
              <li>Hỗ trợ khách hàng tận tâm 24/7</li>
            </ul>
            <Link href="/about" class="read-more ">
              Xem thêm
            </Link>
          </div>
          <div class="image-wrapper ">
            <div className="image-wrapper">
              <Image
                width={800}
                height={500}
                src="/images/Picture5.png"
                alt="Red Freight Truck"
                className="drop-shadow-[10px_10px_15px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </section>

        <ServiceSlider />
        <CustomerSlider />

        <section class="section-map ">
          <h2>Chi nhánh Gia Trường Star</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11141.183999418374!2d108.61333392988631!3d15.42982849589794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169c7d96f382d1f%3A0x8e60ba4383a44609!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gR0lBIFRSxq_hu5xORyBTVEFSIChHSUEgVFLGr-G7nE5HIExPR0lTVElDUyk!5e1!3m2!1svi!2s!4v1739865074260!5m2!1svi!2s "
            width="600 "
            height="450 "
            allowfullscreen=" "
            loading="lazy "
            referrerpolicy="no-referrer-when-downgrade "
          ></iframe>
        </section>

        <NewsSlider />
      </main>
    </Layout>
  );
}
