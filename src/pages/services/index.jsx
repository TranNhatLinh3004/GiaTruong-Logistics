import React from "react";
import "./services.css";
import Layout from "@/components/Layout";
import Sidebar from "@/components/sidebar/Sidebar";
import FAQAccordion from "@/components/accordion/FAQAccordion";
function Services(props) {
  const infoItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      title: "Container Support",
      description:
        "Let's start with the obvious: As you can probably guess, one of the most basic factors to calculate freight costs for any type of transportation mode is good.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Time to Delivery",
      description:
        "Seasonal demand for commodities is also a key factor in calculating train freight rates. Because of the tight supply and demand, certain commodities become more expensive to ship during their peak seasons.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "World Wide Service",
      description:
        "Shipping is a global industry, but not every country uses the same currency. We will not discuss the economics of rail over-media, but currency exchange rates greatly impact on ocean freight rates, too. Even though the U.S. Dollar is the most accepted currency for the international U.S.",
    },
  ];
  return (
    <Layout>
      <main>
        <header
          className="page-header services h-[560px] flex justify-center items-center flex-col "
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-white text-4xl uppercase" data-aos="fade-right">
            Vận chuyển xe ô tô Bắc Nam{" "}
          </h1>
          <p className="text-[20px]" data-aos="fade-right">
            Chuyên nghiệp – Uy tín – Giá tốt
          </p>
        </header>

        <div className="w-full mt-2rem flex pl-[20px] pr-[20px]  md:pl-[120px] md:pr-[120px]  pt-10">
          <main className="main-content w-full">
            <div className="max-w-[100%] mx-auto p-6">
              {/* Header */}
              <h1
                className="text-3xl font-bold text-[#fbab24] mb-2"
                data-aos="fade-right"
              >
                Tại sao nên chọn dịch vụ của chúng tôi?
              </h1>

              {/* Description */}
              <p className="text-black mb-8 text-[18px] leading-7">
                - An toàn và đảm bảo: Xe của bạn sẽ được bảo vệ tối đa, vận
                chuyển bằng xe chuyên dụng, có bạt che chắn kỹ lưỡng.
                <br />
                - Chi phí cạnh tranh: Cam kết mức giá hợp lý, tối ưu chi phí
                nhưng vẫn đảm bảo chất lượng dịch vụ.
                <br />
                - Đội ngũ chuyên nghiệp: Nhân viên giàu kinh nghiệm, tận tâm hỗ
                trợ khách hàng trong suốt quá trình vận chuyển.
                <br />
                - Bảo hiểm đầy đủ: Xe được bảo hiểm trong suốt hành trình, giúp
                bạn an tâm tuyệt đối.
                <br />- Linh hoạt về thời gian và địa điểm: Nhận xe tận nơi và
                giao xe đúng thời gian cam kết.
              </p>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-8 h-80 mb-[75%]">
                {/* Ảnh lớn bên trái */}
                <div className="h-80 relative">
                  <img
                    src="/images/bai.jpg"
                    alt="Warehouse Worker"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Hai ảnh nhỏ bên phải */}
                <div className="grid grid-rows-2 gap-4 h-80">
                  <img
                    src="/images/xe6.jpg"
                    alt="Forklift Operations"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src="/images/nhanvien.jpg"
                    alt="Logistics Team"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Header */}
              <h1
                className="text-3xl font-bold text-[#fbab24] mb-2"
                data-aos="fade-right"
              >
                Hình thức vận chuyển
              </h1>

              <p className="text-black mb-2 text-[18px] leading-7">
                - Vận chuyển bằng xe lồng chuyên dụng: Đảm bảo an toàn cao, giảm
                thiểu rủi ro.
                <br />
                - Vận chuyển bằng container: Phù hợp với xe cao cấp, hạn chế tác
                động môi trường bên ngoài.
                <br />
                - Đội ngũ chuyên nghiệp: Nhân viên giàu kinh nghiệm, tận tâm hỗ
                trợ khách hàng trong suốt quá trình vận chuyển.
                <br />- Vận chuyển bằng tàu hỏa: Chi phí thấp, an toàn, thời
                gian ổn định.
              </p>
            </div>

            <FAQAccordion />
          </main>

          <Sidebar />
        </div>
      </main>
    </Layout>
  );
}

export default Services;
