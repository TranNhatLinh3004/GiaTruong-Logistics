import React from "react";
import "./services.css";
import Layout from "@/components/Layout";
import Sidebar from "@/components/sidebar/Sidebar";
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
          className="page-header services"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-white text-4xl uppercase">
            Vận chuyển xe ô tô Bắc Nam{" "}
          </h1>
          <p className="text-[20px]">Chuyên nghiệp – Uy tín – Giá tốt</p>
        </header>

        <div className="container-fluid mt-2rem flex">
          <main className="main-content">
            <div className="max-w-6xl mx-auto p-6">
              {/* Header */}
              <h1 className="text-[25px] font-bold text-[#fbab24] mb-4">
                TRAIN FREIGHT SHIPMENT
              </h1>

              {/* Description */}
              <p className="text-white mb-8 leading-6 text-[18px]">
                Rail freight transport is the use of railways and trains to
                transport cargo as opposed to human passengers. A freight train
                or goods train is a group of freight cars (US) or goods wagons
                (International Union of Railways) hauled by one or more
                locomotives on a railway, transport.
                <br />
                <br />
                Rail freight transport is the use of railways and trains to
                transport cargo as opposed to human passengers. A freight train
                or goods train is a group of freight cars (US) or goods wagons
                (International Union of Railways) hauled by one or more
                locomotives on a railway, transport.
              </p>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 h-72">
                {/* Ảnh lớn bên trái */}
                <div className="h-72 relative">
                  <img
                    src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Warehouse Worker"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Hai ảnh nhỏ bên phải */}
                <div className="grid grid-rows-2 gap-4 h-72">
                  <img
                    src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Forklift Operations"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Logistics Team"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1  gap-6">
                {infoItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg shadow-sm"
                  >
                    <div className="text-orange-500">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white text-[18px] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white text-[18px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <Sidebar />
        </div>
      </main>
    </Layout>
  );
}

export default Services;
