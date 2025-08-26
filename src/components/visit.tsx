import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Church, Book, Landmark } from "lucide-react";

// Add these fonts in your index.html or _app.tsx (Next.js):
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Merriweather:ital@0;1&display=swap" rel="stylesheet">


type Verse = {
  bookname: string;
  chapter: string;
  verse: string;
  text: string;
};

const TimeAndVerse: React.FC = () => {


  const [time, setTime] = useState(new Date());


   const features = [
    {
      icon: <Church className="w-12 h-12 text-black" />,
      title: "Worship God",
      description:
        "We gather together to praise, worship, and glorify God as one family in Christ.",
    },
    {
      icon: <Book className="w-12 h-12 text-black" />,
      title: "Listen to His Word",
      description:
        "We learn and grow in faith by listening to the Word of God through sermons and teachings.",
    },
    {
      icon: <Landmark className="w-12 h-12 text-black" />,
      title: "Pray for People",
      description:
        "We pray for one another, our community, and the world, trusting in God’s power to heal and provide.",
    },
  ];




  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24-hour format
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short", // Mon
    day: "numeric",   // 8
    month: "long",    // September
  });
//   const [time, setTime] = useState(new Date());
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomVerse = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      const data: Verse[] = await res.json();
      setVerse(data[0]);
    } catch (err) {
      console.error("Error fetching verse:", err);
      setVerse(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchRandomVerse();
  }, []);

  return (
    <>
    <div className="max-w-md mx-auto rounded-2xl p-8 text-center space-y-6">
      {/* Time */}
         <div className="text-center font-[Inter] text-gray-900">
      <div className="text-4xl font-bold">{formattedTime}</div>
      <div className="text-lg text-gray-600">{formattedDate}</div>
    </div>

      {/* Verse Section */}
      <div className="min-h-[120px] flex flex-col justify-center">
        {loading && (
          <motion.div
            className="text-indigo-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          >
            Loading verse…
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {verse && !loading && (
            <motion.div
              key={verse.text}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div
                className="text-gray-800 italic text-lg leading-relaxed"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                “{verse.text}”
              </div>
              <div
                className="text-sm font-semibold text-gray-600"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                — {verse.bookname} {verse.chapter}:{verse.verse}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!verse && !loading && (
          <div className="text-red-500">Could not load verse.</div>
        )}
      </div>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={fetchRandomVerse}
        disabled={loading}
        className="px-6 py-3 bg-black text-white font-medium  shadow-md hover:bg-gray-700 transition disabled:opacity-50"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        New Verse
      </motion.button>
    </div>
     <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative">
              {/* Circle background behind icon */}
              <div className="absolute inset-0 bg-red-100 rounded-full w-14 h-14 -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 max-w-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default TimeAndVerse;
