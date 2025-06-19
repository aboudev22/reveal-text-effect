import { motion } from "framer-motion";

export default function App() {
  const texts = { "01": "HOME", "02": "PHOTOS", "03": "CONTAC" };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        {Object.entries(texts).map(([key, value]) => (
          <motion.div
            whileHover="Hover"
            className="overflow-hidden cursor-pointer h-12"
          >
            <motion.div
              variants={{ Hover: { y: "-100%" } }}
              className="text-5xl font-extrabold flex gap-2 cursor-pointer"
              key={key}
            >
              <p className="text-gray-500">{key}</p>
              <p className="text-white">{value}</p>
            </motion.div>
            <motion.div
              variants={{ Hover: { y: "-100%" } }}
              className="text-5xl font-extrabold flex gap-2 cursor-pointer"
              key={key}
            >
              <p className="text-gray-500">{key}</p>
              <p className="text-white">{value}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
