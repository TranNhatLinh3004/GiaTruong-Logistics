import React, { useState } from "react";
import AccordionItem from "../accordionitem/AccordionItem ";

function FAQAccordion(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "Giá cước vận chuyển xe ô tô được tính như thế nào?",
      content:
        "Giá cước vận chuyển xe ô tô phụ thuộc vào nhiều yếu tố như: khoảng cách, loại xe, trọng lượng xe, và dịch vụ đi kèm. Gia Trường Star sẽ báo giá cụ thể sau khi nhận được thông tin chi tiết từ khách hàng.",
    },
    {
      title: "Các phương thức để giao nhận xe như thế nào?",
      content:
        "Gia Trường Star cung cấp hai phương thức giao nhận: tận nơi (door-to-door) hoặc tại bãi xe của công ty. Khách hàng có thể lựa chọn phương thức phù hợp với nhu cầu và ngân sách.",
    },
    {
      title: "Gửi ô tô bằng đường bộ mất khoảng bao lâu?",
      content:
        "Thời gian vận chuyển xe ô tô Bắc Nam hai chiều Hà Nội và TP Hồ Chí Minh thường từ 40 - 60 giờ. Khách hàng cũng có thể chọn lựa theo các gói khác nhau của Gia Trường Star.",
    },
    {
      title: "Thủ tục giao và nhận xe ra sao?",
      content:
        "Thủ tục giao nhận xe tại Gia Trường Star đơn giản gồm: kiểm tra tình trạng xe, ký biên bản bàn giao, cung cấp giấy tờ xe (bản sao), và thanh toán phí dịch vụ theo thỏa thuận.",
    },
    {
      title: "Xe được vận chuyển có được bọc không?",
      content:
        "Vâng, tất cả các xe được vận chuyển bởi Gia Trường Star đều được bọc bảo vệ cẩn thận để tránh trầy xước và hư hại trong quá trình vận chuyển. Chúng tôi sử dụng vật liệu bọc chuyên dụng an toàn cho lớp sơn của xe.",
    },
    {
      title: "Có dịch vụ hỗ trợ nào không? Chi phí ra sao?",
      content:
        "Gia Trường Star cung cấp dịch vụ hỗ trợ như: theo dõi hành trình, bảo hiểm vận chuyển, và hỗ trợ thủ tục. Chi phí các dịch vụ này sẽ được thông báo cụ thể khi quý khách yêu cầu.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto pl-6">
      <h1
        className="text-3xl font-bold mb-2 text-[#fbab24]"
        data-aos="fade-right"
      >
        Các câu hỏi thường gặp khi dùng dịch vụ vận chuyển ô tô từ miền Bắc đến
        miền Nam
      </h1>
      <p className="mb-8 text-black text-[18px]">
        Khi quyết định sử dụng dịch vụ vận tải xe ô tô đi Bắc Nam, Hẳn khách
        hàng sẽ đặt ra những câu hỏi khác nhau. Vậy nên, hãy nắm ngay kinh
        nghiệm với những giải đáp sau đây:
      </p>

      <div className="border border-gray-200  overflow-hidden">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

export default FAQAccordion;
