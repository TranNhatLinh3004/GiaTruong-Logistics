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
      <div className="  py-8 w-full bg-white px-8 md:px-28">
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
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Ứng Dụng Công Nghệ AI Trong Quản Lý Chuỗi Cung Ứng Hiện Đại
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Author"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">Nguyễn Văn A</h3>
            <p className="text-sm text-gray-500">
              Chuyên gia Logistics & Supply Chain
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 mb-8">
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="AI in Logistics"
            className="w-full h-full object-cover rounded-xl"
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Hệ thống AI đang được ứng dụng rộng rãi trong quản lý kho vận hiện
            đại
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-xl text-gray-700 mb-8">
            Trong thời đại số hóa, Trí tuệ nhân tạo (AI) đang mang đến những
            thay đổi mang tính cách mạng trong cách thức quản lý và vận hành
            chuỗi cung ứng. Bài viết này sẽ đi sâu vào phân tích những ứng dụng
            quan trọng của AI trong ngành logistics hiện đại.
          </p>

          <h2 className="mb-4">1. AI trong Quản lý Kho</h2>
          <p className="lead text-xl text-gray-700 mb-8">
            Hệ thống AI hiện đại có khả năng dự đoán nhu cầu hàng hóa, tối ưu
            hóa việc sắp xếp kho bãi và tự động hóa quy trình kiểm kê. Điều này
            không chỉ giúp tiết kiệm thời gian mà còn nâng cao đáng kể độ chính
            xác trong quản lý hàng tồn kho. AI sử dụng các thuật toán học máy để
            phân tích dữ liệu lịch sử, từ đó đưa ra dự báo chính xác về lượng
            hàng hóa cần nhập kho trong từng giai đoạn. Điều này giúp doanh
            nghiệp tránh tình trạng thiếu hàng hoặc dư thừa hàng hóa, từ đó giảm
            thiểu lãng phí và tối ưu hóa chi phí lưu kho. Ngoài ra, AI có thể
            tích hợp với hệ thống cảm biến IoT để giám sát kho hàng theo thời
            gian thực. Cảm biến có thể phát hiện các thay đổi về nhiệt độ, độ ẩm
            hoặc phát hiện lỗi trong quá trình lưu trữ. Ví dụ, trong các kho
            hàng bảo quản thực phẩm hoặc dược phẩm, AI có thể cảnh báo nếu điều
            kiện môi trường không đạt chuẩn, giúp doanh nghiệp kịp thời điều
            chỉnh để tránh thiệt hại. Một ứng dụng khác của AI trong quản lý kho
            là sử dụng robot tự động để di chuyển, sắp xếp và lấy hàng hóa.
            Những robot này được lập trình để làm việc với độ chính xác cao,
            giúp giảm thiểu sai sót và tăng năng suất. Chúng có thể làm việc
            liên tục 24/7 mà không cần nghỉ ngơi, giúp doanh nghiệp vận hành kho
            hiệu quả hơn. AI cũng hỗ trợ tối ưu hóa bố cục kho bằng cách phân
            tích dữ liệu di chuyển của hàng hóa. Những mặt hàng có tần suất lấy
            hàng cao sẽ được đặt ở vị trí thuận tiện, trong khi các mặt hàng ít
            được sử dụng có thể được lưu trữ ở các khu vực xa hơn. Điều này giúp
            giảm thời gian lấy hàng và tăng tốc độ xử lý đơn hàng. Không chỉ
            dừng lại ở quản lý hàng hóa, AI còn có thể tự động hóa quy trình
            kiểm kê kho bằng cách sử dụng máy quét mã vạch thông minh hoặc công
            nghệ nhận dạng hình ảnh. Thay vì kiểm kê thủ công mất nhiều thời
            gian và dễ xảy ra sai sót, hệ thống AI có thể nhanh chóng quét và
            cập nhật dữ liệu kho một cách chính xác. Tóm lại, việc ứng dụng AI
            vào quản lý kho không chỉ giúp doanh nghiệp tiết kiệm chi phí và
            nâng cao hiệu quả vận hành mà còn giúp cải thiện trải nghiệm khách
            hàng. Khi hàng hóa được quản lý tốt hơn, quá trình giao hàng diễn ra
            nhanh chóng và chính xác hơn, từ đó nâng cao uy tín của doanh nghiệp
            trên thị trường.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8 h-[300px] mb-40">
            <img
              src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Warehouse Management"
              className="rounded-lg w-full h-full"
            />
            <img
              src="https://images.pexels.com/photos/20045152/pexels-photo-20045152/free-photo-of-h-i-c-ng-n-c-d-c-hang-hoa-cong-nghi-p.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="AI Analytics"
              className="rounded-lg w-full h-full"
            />
          </div>

          <h2 className="mb-4 mt-8">2. Tối Ưu Hoá Tuyến Đường</h2>
          <p className="lead text-xl text-gray-700 ">
            Các thuật toán AI có thể phân tích hàng nghìn biến số để đề xuất
            tuyến đường vận chuyển tối ưu nhất, giúp tiết kiệm nhiên liệu và
            thời gian giao hàng.
          </p>

          <blockquote className="mb-8 lead text-xl text-gray-700">
            "AI không chỉ là tương lai, mà là hiện tại của ngành logistics.
            Những doanh nghiệp không áp dụng AI sẽ dần tụt hậu trong cuộc đua
            chuyển đổi số." - Chuyên gia John Smith
          </blockquote>
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
