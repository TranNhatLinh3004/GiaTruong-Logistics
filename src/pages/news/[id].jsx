import Layout from "@/components/Layout";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegBookmark,
  FaRegThumbsUp,
  FaRegCommentDots,
  FaRegShareSquare,
} from "react-icons/fa";

const NewsDetail = () => {
  return (
    <Layout>
      <div className="py-8 w-full bg-white px-8 md:px-28 mt-44 wrapper-news">
        {/* Category + Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Logistics
          </span>
          <span className="text-gray-500 text-sm">
            Đăng ngày 24 tháng 2, 2025
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🚗 DỊCH VỤ CỨU HỘ XE Ô TÔ 24/7 – AN TOÀN, NHANH CHÓNG, TẬN TÂM
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Author"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">Lương Văn Hoàng</h3>
            <p className="text-sm text-gray-500">Trưởng phòng kinh doanh</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 mb-8">
          <img
            src="/images/xe1.jpg"
            alt="AI in Logistics"
            className="w-full h-full object-cover rounded-xl"
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Hệ thống điều phối cứu hộ hiện đại giúp xác định vị trí sự cố nhanh
            chóng, rút ngắn thời gian hỗ trợ và đảm bảo an toàn tối đa cho khách
            hàng.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-[18px] leading-relaxed text-gray-700 mb-8">
            Trong bối cảnh xã hội hiện đại, nhu cầu sử dụng ô tô ngày càng phổ
            biến và trở thành phương tiện di chuyển không thể thiếu đối với
            nhiều cá nhân, gia đình và doanh nghiệp. Tuy nhiên, trong quá trình
            sử dụng, không ai có thể lường trước được những sự cố bất ngờ như xe
            chết máy, tai nạn, nổ lốp, hết ắc quy hay ngập nước. Chính vì thế,
            dịch vụ cứu hộ xe ô tô đã ra đời để kịp thời hỗ trợ người dùng khi
            gặp sự cố – đặc biệt là trong những tình huống khẩn cấp hoặc ở khu
            vực xa trung tâm. Chúng tôi tự hào là đơn vị tiên phong trong lĩnh
            vực cứu hộ xe ô tô tại Việt Nam, với hơn 50 đầu xe chuyên dụng hiện
            đại, đội ngũ kỹ thuật viên lành nghề và dịch vụ hoạt động 24/7 không
            nghỉ, kể cả ngày lễ và Tết. Không chỉ cung cấp giải pháp cứu hộ,
            chúng tôi còn đồng hành như một người bạn tin cậy trên mọi nẻo đường
            – luôn sẵn sàng hỗ trợ khi bạn cần, bất kể thời gian hay địa điểm.
          </p>

          <h2 className="mb-4">Dịch vụ cứu hộ xe ô tô bao gồm:</h2>
          <p className="lead text-[18px] leading-relaxed text-gray-700 mb-8">
            🔧 Kéo xe và vận chuyển xe gặp sự cố về garage, trung tâm bảo dưỡng
            hoặc địa điểm yêu cầu.
            <br />
            🔋 Kích nổ bình ắc quy khi xe không thể khởi động, đặc biệt hữu ích
            trong mùa đông hoặc sau thời gian dài không sử dụng.
            <br /> 🛞 Thay lốp khẩn cấp khi xe bị thủng lốp, nổ lốp giữa đường.
            <br />⛽ Tiếp nhiên liệu tận nơi nếu bạn hết xăng giữa đường hoặc
            trong khu vực không có trạm xăng gần đó. <br />
            🌊 Cứu hộ xe ngập nước, đưa xe về nơi an toàn, hạn chế tối đa hư
            hỏng động cơ và hệ thống điện.
            <br /> 🚨 Hỗ trợ tai nạn giao thông, đảm bảo đưa xe rời khỏi hiện
            trường một cách nhanh chóng, an toàn và tuân thủ pháp luật.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8 h-[300px] mb-40">
            <img
              src="/images/cuuho.jpg"
              alt="Warehouse Management"
              className="rounded-lg w-full h-full"
            />
            <img
              src="https://images.pexels.com/photos/20045152/pexels-photo-20045152/free-photo-of-h-i-c-ng-n-c-d-c-hang-hoa-cong-nghi-p.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="AI Analytics"
              className="rounded-lg w-full h-full"
            />
          </div>

          <h2 className="mb-4 mt-8">Tại sao chọn chúng tôi?</h2>
          <p className="lead text-[18px] leading-relaxed text-gray-700 ">
            ✅ Đội ngũ kỹ thuật viên chuyên nghiệp Chúng tôi sở hữu đội ngũ nhân
            viên được đào tạo bài bản, giàu kinh nghiệm và có trách nhiệm cao
            trong công việc. Mỗi tình huống cứu hộ đều được xử lý một cách
            chuyên nghiệp, an toàn và hiệu quả.
            <br /> ✅ Phủ sóng toàn quốc, có mặt nhanh chóng Với hệ thống xe cứu
            hộ được phân bổ rộng khắp các tỉnh thành, chúng tôi cam kết có mặt
            tại hiện trường trong vòng 15 - 30 phút sau khi nhận được yêu cầu.
            Dù bạn đang ở trung tâm thành phố hay vùng ngoại ô, chúng tôi đều có
            mặt kịp thời để hỗ trợ.
            <br /> ✅ Trang thiết bị hiện đại, xe chuyên dụng đầy đủ loại hình
            Từ xe kéo sàn trượt, xe cẩu gập, xe chở ô tô đến xe tiếp nhiên liệu
            – tất cả đều được đầu tư hiện đại nhằm phục vụ mọi tình huống với độ
            an toàn và chính xác cao.
            <br /> ✅ Dịch vụ 24/7 – không nghỉ lễ, Tết Hiểu rằng sự cố có thể
            xảy ra bất cứ lúc nào, chúng tôi cam kết trực chiến 24/24, kể cả ban
            đêm hay ngày lễ lớn. <br />✅ Giá cả minh bạch, không phát sinh Mọi
            mức giá đều được công khai, minh bạch và thỏa thuận rõ ràng trước
            khi triển khai. Không có tình trạng ép giá hay thu phí bất hợp lý
            như một số đơn vị nhỏ lẻ khác trên thị trường. <br />✅ Chăm sóc
            khách hàng tận tâm, hỗ trợ từ A-Z Chúng tôi không chỉ cứu hộ mà còn
            tư vấn, hướng dẫn khách hàng cách xử lý tạm thời và bảo vệ tài sản
            khi chờ đợi. Bạn không bao giờ đơn độc khi có chúng tôi đồng hành.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
            #AI
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
            #Logistics
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200">
            #SupplyChain
          </span>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-gray-600">Chia sẻ bài viết:</span>
          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 border-0  flex items-center justify-center">
            <FaFacebookF className="w-5 h-5" />
          </button>
          <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 border-0">
            <FaTwitter className="w-5 h-5" />
          </button>
          <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 border-0">
            <FaLinkedinIn className="w-5 h-5" />
          </button>
        </div>

        {/* Related Posts */}
        <div className="border-t pt-8">
          <h3 className="text-2xl font-bold mb-2">Bài viết liên quan</h3>
          <div className="w-20 h-1 bg-gray-400 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <img
                  src="https://images.pexels.com/photos/7128920/pexels-photo-7128920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Related post"
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                />
                <h4 className="text-[20px] font-bold text-gray-900 group-hover:text-blue-600 mb-2 cursor-pointer">
                  10 Xu hướng Logistics cần biết trong năm 2025
                </h4>
                <p className="text-sm text-gray-500">
                  15 phút đọc • 20 tháng 2, 2025
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
