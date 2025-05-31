"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number | null>(null);
  const today = new Date().getDate();
  const now = new Date();
  const totalDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const daysInMonth = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={"/hero2.jpg"}
        alt="Hero Image"
        width={4500}
        height={4500}
        className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center h-screen absolute top-0 left-0 w-full bg-black/80"
      >
        <h1 className="text-9xl font-mono">HAKU</h1>
      </motion.div>
      <div className="h-screen"></div>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 p-4 md:p-8 w-full">
        {/* Text Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 p-4 md:p-12 h-full col-span-1 row-span-1 md:row-span-1">
          <div className="col-span-1 md:col-span-2 mb-4 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-mono">Haku</h1>
            <p className="text-xl md:text-3xl font-sans text-gray-500">
              Purity in Every Bite
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col items-end md:items-end justify-end mt-6 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-mono">ハク</h1>
            <p className="text-xl md:text-3xl font-sans text-gray-500">
              一口ごとの純粋さ
            </p>
          </div>
        </div>

        {/* Main Images */}
        <div className="flex flex-col justify-center h-full col-span-1 md:row-span-3">
          <Image
            src={"/sushi2.jpg"}
            alt="Sushi"
            width={3500}
            height={3500}
            className="w-full h-[250px] md:h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center h-full col-span-1 md:row-span-3">
          <Image
            src={"/sushi3.jpg"}
            alt="Sushi"
            width={3500}
            height={3500}
            className="w-full h-[250px] md:h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center h-full col-span-1">
          <Image
            src={"/sushi1.jpg"}
            alt="Sushi"
            width={3500}
            height={3500}
            className="w-full h-[200px] md:h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center h-full col-span-1">
          <Image
            src={"/sushi4.jpg"}
            alt="Sushi"
            width={3500}
            height={3500}
            className="w-full h-[200px] md:h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="min-h-screen p-8 flex items-start justify-start flex-col w-full gap-12">
        <h1 className="text-3xl font-mono mt-12">
          Timeless Favorites, Crafted to Perfection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ImageCard
            src="/prop1.jpg"
            alt="Exquisite Sushi Plate"
            title="Velvet Salmon Roll"
            description="Buttery salmon embraces a creamy filling, topped with radish for a crisp contrast."
          />
          <ImageCard
            src="/prop2.jpg"
            alt="Sushi Assortment"
            title="White Orchid Roll"
            description="Delicately wrapped in white fish, balanced with crisp asparagus and a silky sauce finish"
          />
          <ImageCard
            src="/prop3.jpg"
            alt="Premium Sushi"
            title="Silken Salmon Sashimi"
            description="A delicate cut of the finest salmon, served with a subtle sesame touch."
          />
        </div>
      </div>
      <div className="min-h-screen px-8 py-24 flex items-center justify-center w-full ">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl">
          {/* Image */}
          <Image
            src="/chef.jpg"
            alt="Haku Chef"
            width={4500}
            height={4500}
            className="w-full max-h-[80vh] object-cover rounded-2xl shadow-2xl"
          />

          {/* Text */}
          <div className="w-full">
            {/* Japanese Title */}
            <h1 className="text-5xl font-mono text-[var(--yellow)] mb-2 tracking-widest">
              純粋さ・精密さ・完璧さ
            </h1>

            {/* English Subtitle */}
            <h2 className="text-2xl font-mono mb-6 text-[var(--yellow)] tracking-wide opacity-50">
              Purity. Precision. Perfection.
            </h2>

            {/* Paragraph */}
            <p className="text-2xl font-sans tracking-widest leading-relaxed mb-6">
              Simplicity is the ultimate sophistication. At{" "}
              <span className="font-mono text-3xl">HAKU</span>, sushi is more
              than just food—it’s an art form. Every ingredient is carefully
              selected for its purity, every cut is executed with precision, and
              every roll is crafted to achieve perfection.
            </p>

            {/* Stamp */}
            <div className="flex justify-end mt-4 opacity-30">
              <h1 className="text-xl bg-[var(--red)] rounded-full p-6 border-[var(--yellow)] border-4">
                ハク
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen px-8 py-24 flex items-center justify-center w-full ">
        <div className="flex md:flex-col lg:flex-row items-center gap-12 w-full max-w-7xl flex-col-reverse">
          {/* Text */}
          <div className="w-full">
            {/* Japanese Title */}
            <h1 className="md:text-6xl text-3xl font-mono text-[var(--yellow)] mb-4 tracking-widest">
              特別な美食の旅があなたを待っています
            </h1>

            {/* English Subtitle */}
            <h2 className="md:text-3xl text-xl font-mono mb-6 text-[var(--yellow)] tracking-wide opacity-50">
              An Exclusive Culinary Journey Awaits
            </h2>

            {/* Dummy Form Sections */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-lg font-sans text-[var(--yellow)] mb-2">
                  Name
                </label>
                <input
                  className="w-full border border-[var(--yellow)] rounded-lg py-2 px-4 focus:ring-2 focus:ring-[var(--yellow)]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label className="block text-lg font-sans text-[var(--yellow)] mb-2">
                  Phone Number
                </label>
                <input
                  className="w-full border border-[var(--yellow)] rounded-lg py-2 px-4 focus:ring-2 focus:ring-[var(--yellow)]"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Select a Day (Clickable divs) */}
              <div className="space-y-6">
                {/* Select a Day */}
                <div>
                  <label className="block text-lg font-sans text-[var(--yellow)] mb-2">
                    Select a Day
                  </label>
                  <div className="grid grid-cols-7 gap-2">
                    {daysInMonth.map((day) => (
                      <div
                        key={day}
                        className={`cursor-pointer border border-[var(--yellow)] rounded-lg py-2 px-4 flex items-center justify-center transition ${
                          selectedDay === day
                            ? "bg-[var(--yellow)] text-black font-bold"
                            : day < today
                            ? "opacity-50 cursor-not-allowed" // Disable past days
                            : "hover:bg-[var(--yellow)] hover:text-black"
                        }`}
                        onClick={() => day >= today && setSelectedDay(day)} // Prevent selection of past days
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Number of Chairs */}
                <div>
                  <label className="block text-lg font-sans text-[var(--yellow)] mb-2">
                    Select Your Seat
                  </label>
                  <div className="flex gap-4 flex-wrap">
                    {[1, 2, 3, 4, 5, 6].map((seat) => (
                      <div
                        key={seat}
                        className={`cursor-pointer border border-[var(--yellow)] rounded-lg py-3 px-6 text-center transition ${
                          selectedSeats === seat
                            ? "bg-[var(--yellow)] text-black font-bold"
                            : "hover:bg-[var(--yellow)] hover:text-black"
                        }`}
                        onClick={() => setSelectedSeats(seat)}
                      >
                        {seat} Seat{seat > 1 ? "s" : ""}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Display Selection */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (selectedDay && selectedSeats) {
                      alert(
                        `Reservation made for ${selectedSeats} seat(s) on day ${selectedDay}.`
                      );
                      setSelectedDay(null);
                      setSelectedSeats(null);
                    }
                  }}
                  className="flex justify-center items-center bg-[var(--yellow)] rounded h-full p-6 cursor-pointer"
                >
                  <h1 className="text-black text-2xl font-mono select-none">
                    Reserve Your Experience
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Image */}
          <Image
            src="/table.jpg"
            alt="Haku Table"
            width={4500}
            height={4500}
            className="md:w-2/5 max-h-[80vh] object-cover rounded-2xl"
          />
        </div>
      </div>
      <footer>
        <div className="flex flex-col justify-center items-center py-8 bg-black text-white">
          <p className="text-lg font-sans">
            © {new Date().getFullYear()} Haku. All rights reserved.
          </p>
          <p className="text-lg font-sans">Made by Ahmet Tutsak</p>
        </div>
      </footer>
    </div>
  );
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const overlayVariants = {
  rest: { opacity: 0, y: 30 },
  hover: { opacity: 1, y: 0 },
};

const ImageCard = ({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    animate="rest"
    className="relative overflow-hidden rounded-2xl"
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      variants={imageVariants}
      transition={{ duration: 0.5 }}
    />
    <motion.div
      variants={overlayVariants}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0"
    >
      <h3 className="text-4xl font-mono text-white">{title}</h3>
      <p className="text-md font-sans text-gray-200">{description}</p>
    </motion.div>
  </motion.div>
);
