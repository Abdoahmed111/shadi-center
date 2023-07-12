import React from "react";
import services from "~/utils/services";
type Service = {
  title: string;
  details: string;
};

const Services = () => {
  return (
    <section
      className="pb-12 pt-20 font-elmessiri lg:pb-[90px] lg:pt-[120px]"
      dir="rtl"
    >
      <div className=" container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                خدماتنا
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                ماذا نقدم من خدمات
              </h2>
              <p className="text-body-color text-base">
                نقدم العديد من الخدمات الممتازة
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ title, details }: Service) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <h4 className="text-dark mb-3 text-xl font-semibold">{title}</h4>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
