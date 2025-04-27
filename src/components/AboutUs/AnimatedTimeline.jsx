"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function AnimatedTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef(null)
  const maxProgressRef = useRef(0) // To track maximum progress

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate how far down the page we've scrolled
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
      const currentProgress = Math.min(100, scrollPercentage)

      // Only update if current progress is greater than max progress
      if (currentProgress > maxProgressRef.current) {
        maxProgressRef.current = currentProgress
        setScrollProgress(currentProgress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={timelineRef} className="container mx-auto px-4 pt-16 py-4 max-w-6xl relative">
      {/* Main timeline line that grows as you scroll */}
      <div
        className="absolute left-[calc(32%+1rem)] sm:left-1/2 w-1 bg-blue-600 origin-top z-0 -translate-x-1/2"
        style={{
          top: 0,
          height: `${scrollProgress * 0.90}%`,
          transition: "height 0.1s ease-out",
        }}
      />

      <TimelineSection
        number="1"
        title="Hashedin"
        badges={[{ text: "500+ Employee Strength" }]}
        description="Founded Hashedin as a bootstrapped, 'Born In Cloud' company recognized by AWS. Known for product development services, worked with enterprises and unicorns. Our unique learning culture was recognized by GPTW. Built several products, including one acquired by RedisLabs."
        scrollProgress={scrollProgress}
        triggerPoint={10}
        showNumber={true}
        isLast={false}

      />

      <TimelineSection
        number="2"
        title="Hashedin By Deloitte"
        badges={[{ text: "2500+ Employee Strength" }, { text: "600+ AI Strength" }]}
        description="Post-acquisition, we scaled Hashedin 5x to a team of 2500, making it Deloitte's largest and most successful acquisition in history. We also built the core team for the GenAI CoE."
        scrollProgress={scrollProgress}
        triggerPoint={40}
        showNumber={true}
        isLast={false}

      />

      <TimelineSection
        number="3"
        title="Think41"
        badges={[{ text: "70+ Employee Strength" }, { text: "250+ By 2026" }]}
        description="Developing GenAI agents for businesses. Serving as advisors to Deloitte on engineering and innovation."
        scrollProgress={scrollProgress}
        triggerPoint={70}
        showNumber={true}          // now showing 3
        gradientNumber={false}      // apply gradient
        isLast={true}

      />
    </div>
  )
}

function TimelineSection({
  number,
  title,
  badges,
  description,
  scrollProgress,
  triggerPoint,
  showNumber = true,
  gradientNumber = false,
  isLast = false
}) {
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  // Start animation when scroll progress passes the trigger point
  useEffect(() => {
    if (scrollProgress >= triggerPoint && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [scrollProgress, triggerPoint, controls, hasAnimated])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.5 },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.5, delay: 0.1 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex  gap-4 md:gap-8 mb-24 relative"
    >
      {/* Number */}
      {showNumber ? (
        <motion.div
          variants={numberVariants}
          className={`text-9xl font-bold flex justify-end items-start pt-4 font-[Montserrat] min-w-1/4 sm:w-1/2 ${
            gradientNumber
              ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              : "text-gray-200"
          }`}
        >
          {number}
        </motion.div>
      ) : (
        <div />
      )}

      {/* Timeline dot */}
      <div className="relative flex justify-center w-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="absolute top-8 w-3 h-3 bg-blue-600 rounded-full z-10 "
        />
      </div>

      {/* Content */}
      <div className="pt-4 text-left w-3/4 sm:w-1/2">
        <motion.h2 variants={contentVariants} className="text-xl sm:text-[24px] font-montserrat font-bold text-gray-800 mb-4 text-left">
          {title}
        </motion.h2>

        <motion.div variants={contentVariants} className="flex flex-wrap gap-4 mb-4 text-left">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <span className="font-medium font-roboto text-xs">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.p variants={contentVariants} className="font-[300] text-left text-[16px] font-roboto">
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}