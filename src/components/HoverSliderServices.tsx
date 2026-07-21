"use client"

import * as React from "react"
import Link from "next/link"
import { HTMLMotionProps, MotionConfig, motion } from "motion/react"
import { cn } from "@/lib/utils"
import styles from "./HoverSliderServices.module.css"
import { SERVICES_DATA as SHARED_SERVICES_DATA } from "./services/serviceData"

interface TextStaggerHoverProps {
  text: string
  index: number
  className?: string
}

interface HoverSliderImageProps {
  index: number
  imageUrl: string
  className?: string
}

interface HoverSliderProps {
  className?: string
  children: React.ReactNode;
}

interface HoverSliderContextValue {
  activeSlide: number
  changeSlide: (index: number) => void
}

function splitText(text: string) {
  const words = text.split(" ").map((word) => word.concat(" "))
  const characters = words.map((word) => word.split("")).flat(1)

  return {
    words,
    characters,
  }
}

const HoverSliderContext = React.createContext<
  HoverSliderContextValue | undefined
>(undefined)

function useHoverSliderContext() {
  const context = React.useContext(HoverSliderContext)
  if (context === undefined) {
    throw new Error(
      "useHoverSliderContext must be used within a HoverSliderProvider"
    )
  }
  return context
}

const servicesContainerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: 0.15,
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export const HoverSlider = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & HoverSliderProps
>(({ children, className, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = React.useState<number>(0)
  const changeSlide = React.useCallback(
    (index: number) => setActiveSlide(index),
    [setActiveSlide]
  )
  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <section ref={ref} className={cn(styles.sliderWrapper, className)} {...props}>
        <motion.div
          className={styles.sliderContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={servicesContainerVariants}
        >
          {children}
        </motion.div>
      </section>
    </HoverSliderContext.Provider>
  )
})
HoverSlider.displayName = "HoverSlider"

export const TextStaggerHover = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & TextStaggerHoverProps
>(({ text, index, children, className, ...props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSliderContext()
  const { characters } = splitText(text)
  const isActive = activeSlide === index
  const handleMouse = () => changeSlide(index)
  return (
    <span
      className={cn(styles.staggerContainer, className)}
      {...props}
      ref={ref}
      onMouseEnter={handleMouse}
    >
      {characters.map((char, charIdx) => (
        <span
          key={`${char}-${charIdx}`}
          className={styles.charWrapper}
        >
          <MotionConfig
            transition={{
              delay: charIdx * 0.015,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <motion.span
              className={cn(styles.charBase, isActive && styles.charBaseActive)}
              initial={{ y: "0%" }}
              animate={isActive ? { y: "-110%" } : { y: "0%" }}
            >
              {char}
              {char === " " && charIdx < characters.length - 1 && <>&nbsp;</>}
            </motion.span>

            <motion.span
              className={styles.charHover}
              initial={{ y: "110%" }}
              animate={isActive ? { y: "0%" } : { y: "110%" }}
            >
              {char}
              {char === " " && charIdx < characters.length - 1 && <>&nbsp;</>}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  )
})
TextStaggerHover.displayName = "TextStaggerHover"

export const imageVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    zIndex: 2,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    }
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    zIndex: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    }
  },
}

export const HoverSliderImageWrap = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(styles.imageWrap, className)}
      {...props}
    />
  )
})
HoverSliderImageWrap.displayName = "HoverSliderImageWrap"

export const HoverSliderImage = React.forwardRef<
  HTMLImageElement,
  HTMLMotionProps<"img"> & HoverSliderImageProps
>(({ index, imageUrl, children, className, ...props }, ref) => {
  const { activeSlide } = useHoverSliderContext()
  const isActive = activeSlide === index
  return (
    <motion.img
      className={cn(styles.sliderImg, className)}
      src={imageUrl}
      variants={imageVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      ref={ref}
      {...props}
    />
  )
})
HoverSliderImage.displayName = "HoverSliderImage"

const SERVICES_DATA = SHARED_SERVICES_DATA.map((service) => ({
  id: service.id,
  title: service.title,
  imageUrl: service.imageUrl,
  description: service.description,
}));

function HoverSliderContent() {
  const { activeSlide, changeSlide } = useHoverSliderContext()

  return (
    <>
      <motion.div className={styles.sliderHeader} variants={fadeInUp}>
        <span className={`label-bold ${styles.sliderLabel}`}>Engineered Capabilities</span>
        <h2 className={`headline-xl ${styles.sliderTitle}`}>
          Our <span className={styles.sliderTitleHighlight}>Services</span>
        </h2>
        <p className={`body-lg ${styles.sliderDesc}`}>
          Proven industrial expertise delivering safety, precision, and compliance with the Kingdom&apos;s energy standards.
        </p>
      </motion.div>

      <div className={styles.sliderGrid}>
        {/* Left Side: Services Text List */}
        <motion.div className={styles.leftColumn} variants={fadeInUp}>
          <div className={styles.serviceList}>
            {SERVICES_DATA.map((service, index) => {
              const formattedNum = String(index + 1).padStart(2, "0")
              const isActive = activeSlide === index
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className={cn(styles.serviceItem, isActive && styles.serviceItemActive)}
                  onMouseEnter={() => changeSlide(index)}
                  style={{ textDecoration: "none" }}
                >
                  <span className={styles.serviceItemNum}>
                    {formattedNum}
                  </span>

                  <div className={styles.titleAndIndicator}>
                    <TextStaggerHover
                      text={service.title}
                      index={index}
                      className={styles.serviceItemTitle}
                    />
                    <div className={styles.indicatorLine} />
                  </div>

                  <span className={cn("material-symbols-outlined", styles.arrowIcon)}>
                    arrow_forward
                  </span>
                </Link>
              )
            })}
          </div>
        </motion.div>

        {/* Right Side: Interactive Image Showcase */}
        <motion.div className={styles.rightColumn} variants={fadeInUp}>
          <div className={styles.showcaseOuter}>
            <div className={styles.technicalGridPattern} />
            <div className={styles.decorCornerLt} />
            <div className={styles.decorCornerRb} />

            <HoverSliderImageWrap className={styles.imageShowcaseWrapper}>
              {SERVICES_DATA.map((service, index) => (
                <HoverSliderImage
                  key={index}
                  index={index}
                  imageUrl={service.imageUrl}
                  alt={service.title}
                  className={styles.showcaseImg}
                />
              ))}
            </HoverSliderImageWrap>

            {/* Premium Details Glass Card */}
            <div className={styles.descriptionCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>
                  CAPABILITY {String(activeSlide + 1).padStart(2, "0")}
                </span>
                <h4 className={`headline-lg ${styles.cardTitle}`}>
                  {SERVICES_DATA[activeSlide].title}
                </h4>
              </div>
              <p className={`body-md ${styles.cardText}`}>
                {SERVICES_DATA[activeSlide].description}
              </p>
              <div className={styles.cardDecorLine} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default function HoverSliderServices() {
  return (
    <HoverSlider>
      <HoverSliderContent />
    </HoverSlider>
  )
}
