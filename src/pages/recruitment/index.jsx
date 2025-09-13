import Layout from "@/components/Layout";
import React, { useState } from "react";
import "./recruitment.css";
import Link from "next/link";
function Recruitment(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  const jobs = [
    {
      id: 1,
      title: "Nhân viên kinh doanh",
      type: "Số lượng 2",
      salary: "Lương: Thỏa thuận",
      experience: "",
      description: [
        "Giới tính Nam",
        "Tốt nghiệp Trung cấp, Cao đẳng, Đại học (ngành kinh tế)",
        "Ưu tiên: Có kinh nghiệm làm việc trong lĩnh vực Logistics",
      ],
    },

    {
      id: 2,
      title: "Lái xe đầu kéo",
      type: "Số lượng 50",
      salary: "Lương: 20-35 triệu",
      experience: "1-2 năm kinh nghiệm",
      description: [
        "Bằng lái hạng FC trở lên",
        "Có kinh nghiệm lái xe đầu kéo từ 1–2 năm trở lên (ưu tiên)",
        "Tuổi: 25 – 55, có sức khỏe tốt",
        "Lý lịch rõ ràng, không có tiền án tiền sự",
      ],
    },
  ];
  return (
    <Layout>
      <main className="mt-32 md:mt-40">
        <div className="hero-section">
          <h1 data-aos="fade-right">Cơ Hội Nghề Nghiệp</h1>
          <p className="text-[18px]" data-aos="fade-right">
            Nhằm đáp ứng nhu cầu mở rộng quy mô kinh doanh trong lĩnh vực
            Logistics vận chuyển ô tô BẮC - NAM.
          </p>
        </div>

        <div className="job-listings">
          <div className="job-filters">
            <select className="filter-select">
              <option value="">Tất cả vị trí</option>
              <option value="driver">Tài xế</option>
              <option value="warehouse">Nhân viên kho</option>
              <option value="office">Nhân viên văn phòng</option>
            </select>
            <select className="filter-select">
              <option value="">Tất cả địa điểm</option>
              {/* <option value="hanoi">Hà Nội</option> */}
              {/* <option value="hcm">TP. Hồ Chí Minh</option> */}
              <option value="quangnam">Quảng Nam</option>
            </select>
            <select className="filter-select">
              <option value="">Tất cả hình thức</option>
              <option value="fulltime">Toàn thời gian</option>
              <option value="parttime">Bán thời gian</option>
            </select>
          </div>

          <div
            className="jobs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 "
            data-aos="fade-up"
          >
            {jobs.map((job) => (
              <div
                className="job-card"
                key={job.id}
                style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
              >
                <div className="job-header">
                  <h2 className="job-title">{job.title}</h2>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-details">
                  <div className="job-detail">
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <span>{job.salary}</span>
                  </div>
                  <div className="job-detail">
                    <i className="fa-solid fa-briefcase"></i>
                    <span>{job.experience}</span>
                  </div>
                </div>
                <div className="job-description">
                  <strong>Yêu cầu:</strong>
                  <ul>
                    {job.description.map((item, idx) => (
                      <li key={idx}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="job-hotline"
                  style={{ marginBottom: "10px", fontWeight: "bold" }}
                >
                  {" "}
                  Hotline: Mr. Lương - 0944455945
                </div>
                <button className="apply-button" onClick={toggleModal}>
                  <Link href="https://zalo.me/0944455945" target="_blank">
                    Ứng Tuyển Ngay
                  </Link>
                </button>
              </div>
            ))}
          </div>

          {isOpen && (
            <div className="application-modal" id="applicationModal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Ứng Tuyển Vị Trí: Tài Xế Container</h2>
                  <span className="close-modal" onclick="closeModal()">
                    &times;
                  </span>
                </div>
                <form className="application-form">
                  <div className="form-group">
                    <label>Họ và tên *</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input type="tel" required />
                  </div>
                  <div className="form-group">
                    <label>Kinh nghiệm làm việc *</label>
                    <textarea required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Tải lên CV của bạn *</label>
                    <div className="file-upload">
                      <p>Kéo thả file hoặc click để chọn file</p>
                      <input type="file" required style={{ display: "none" }} />
                    </div>
                  </div>
                  <button type="submit" className="apply-button">
                    Gửi Đơn Ứng Tuyển
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Recruitment;
