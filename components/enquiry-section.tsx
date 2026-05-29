import Image from "next/image";
import EnquiryForm from "@/components/enquiry-form";

export default function EnquirySection() {
  return (
    <section className="grid min-h-[32rem] md:grid-cols-2">
      <div className="relative flex min-h-[18rem] items-end p-8 md:min-h-0 md:p-10 lg:p-12">
        <Image
          src="/enquiry/reception-hero.webp"
          alt="Knockout Math reception area at Bukit Timah"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative max-w-md">
          <h2 className="font-heading text-4xl font-black uppercase text-white md:text-5xl">
            Enquire Now
          </h2>
          <p className="font-body mt-4 text-base leading-relaxed text-white/95 md:text-lg">
            Get in touch with us to find out about our latest class slots, ongoing promotions
            and activities down at our Bukit Timah classrooms.
          </p>
        </div>
      </div>

      <div className="flex items-center bg-[#3d4555] px-6 py-10 md:px-10 md:py-12 lg:px-14">
        <div className="w-full max-w-xl">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
