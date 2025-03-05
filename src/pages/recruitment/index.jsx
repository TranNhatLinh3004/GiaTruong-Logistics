import Layout from "@/components/Layout";
import React, { useState } from "react";
import "./recruitment.css";
function Recruitment(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  const jobs = [
    {
      id: 1,
      title: "Tài Xế Container",
      type: "Toàn thời gian",
      salary: "15-20 triệu",
      experience: "2 năm kinh nghiệm",
      description:
        "Chúng tôi đang tìm kiếm tài xế container có kinh nghiệm để tham gia đội ngũ vận tải của công ty. Ứng viên cần có bằng lái xe hạng FC và kinh nghiệm lái xe container.",
    },
    {
      id: 2,
      title: "Tài Xế Container",
      type: "Toàn thời gian",
      salary: "15-20 triệu",
      experience: "2 năm kinh nghiệm",
      description:
        "Chúng tôi đang tìm kiếm tài xế container có kinh nghiệm để tham gia đội ngũ vận tải của công ty. Ứng viên cần có bằng lái xe hạng FC và kinh nghiệm lái xe container.",
    },
    {
      id: 3,
      title: "Tài Xế Container",
      type: "Toàn thời gian",
      salary: "15-20 triệu",
      experience: "2 năm kinh nghiệm",
      description:
        "Chúng tôi đang tìm kiếm tài xế container có kinh nghiệm để tham gia đội ngũ vận tải của công ty. Ứng viên cần có bằng lái xe hạng FC và kinh nghiệm lái xe container.",
    },
    {
      id: 4,
      title: "Tài Xế Container",
      type: "Toàn thời gian",
      salary: "15-20 triệu",
      experience: "2 năm kinh nghiệm",
      description:
        "Chúng tôi đang tìm kiếm tài xế container có kinh nghiệm để tham gia đội ngũ vận tải của công ty. Ứng viên cần có bằng lái xe hạng FC và kinh nghiệm lái xe container.",
    },
  ];
  return (
    <Layout>
      <main className="mt-32 md:mt-40">
        <div className="hero-section">
          <h1 data-aos="fade-right">Cơ Hội Nghề Nghiệp</h1>
          <p className="text-[18px]" data-aos="fade-right">
            Hãy tham gia đội ngũ của chúng tôi và cùng nhau phát triển trong
            ngành logistics. Chúng tôi luôn tìm kiếm những người tài năng và đam
            mê.
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
              <option value="hanoi">Hà Nội</option>
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="danang">Đà Nẵng</option>
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
                <p className="job-description">{job.description}</p>
                <button className="apply-button" onClick={toggleModal}>
                  Ứng Tuyển Ngay
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
