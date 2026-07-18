"use client"

import * as React from "react"
import { HTMLMotionProps, MotionConfig, motion } from "motion/react"
import { cn } from "@/lib/utils"
import styles from "./HoverSliderServices.module.css"

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

const SERVICES_DATA = [
  {
    title: "Cathodic Protection Systems",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    description: "Design, installation, testing, commissioning, and maintenance of impressed current and sacrificial anode systems to protect pipelines, tanks, and buried metallic assets from corrosion."
  },
  {
    title: "LV & MV Overhead Power Lines",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200",
    description: "Construction of low- and medium-voltage overhead distribution networks, including poles, steel structures, conductor stringing, insulators, testing, and commissioning."
  },
  {
    title: "Underground Power Lines",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    description: "Installation of underground power cable systems including trenching coordination, duct banks, cable laying, jointing, terminations, testing, and commissioning."
  },
  {
    title: "Electrical & Instrumentation Works",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
    description: "Complete electrical and instrumentation solutions including cable installation, cable trays, panels, field instruments, control systems, testing, and commissioning."
  },
  {
    title: "Fiber Optic & OPGW Communications",
    imageUrl: "https://images.unsplash.com/photo-1551703599-6b3dbb57c24e?q=80&w=1200",
    description: "Supply, installation, splicing, OTDR testing, and commissioning of fiber optic and OPGW communication networks for industrial and utility applications."
  },
  {
    title: "Well Pad Fencing",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200",
    description: "Supply and installation of HCIS-compliant perimeter fencing systems including gates, posts, mesh panels, and associated security infrastructure."
  },
  {
    title: "Site Preparation Works",
    imageUrl: "https://images.unsplash.com/photo-1579847253570-9d62fd27a972?q=80&w=1200",
    description: "Site clearing, grading, leveling, earthworks, compaction, access roads, and groundwork preparation for industrial and infrastructure projects."
  },
  {
    title: "Pipeline Maintenance",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200",
    description: "Preventive and corrective maintenance, inspection support, coating repairs, corrosion mitigation, and integrity-related services for pipeline systems."
  }
]

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
                <div
                  key={index}
                  className={cn(styles.serviceItem, isActive && styles.serviceItemActive)}
                  onMouseEnter={() => changeSlide(index)}
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
                </div>
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
