"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { MapPin, Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

/**
 * Interactive Holographic Profile Card Component
 *
 * Features 3D animations, holographic effects, and interactive flip functionality
 */
export function ProfileCard() {
  // Card flip state - start with back side showing
  const [isFlipped, setIsFlipped] = useState(true)
  
  // Hover state for front side effects
  const [isHovered, setIsHovered] = useState(false)
  
  // Mouse position as percentage (0-100) for gradient calculations
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  
  // Current 3D tilt angles for back side (in degrees)
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 })
  
  // Target tilt angles for smooth interpolation
  const [targetTilt, setTargetTilt] = useState({ x: 0, y: 0 })
  
  // Prevents tilt effects during flip animation
  const [isFlipping, setIsFlipping] = useState(false)

  // Mobile detection for auto-animation
  const [isMobile, setIsMobile] = useState(false)

  // Refs for DOM elements and animation management
  const cardContainerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const lastUpdateTimeRef = useRef<number>(0)
  const autoAnimationTimeRef = useRef<number>(0)

  /**
   * Linear interpolation function for smooth animations
   */
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  /**
   * Detect mobile device on mount
   */
  useEffect(() => {
    const mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsMobile(mobile)
  }, [])

  /**
   * Smooth tilt animation using requestAnimationFrame
   */
  const updateTilt = useCallback(() => {
    const now = performance.now()
    const deltaTime = now - lastUpdateTimeRef.current
    lastUpdateTimeRef.current = now

    if (isFlipping) {
      setCardTilt({ x: 0, y: 0 })
      setTargetTilt({ x: 0, y: 0 })
      autoAnimationTimeRef.current = 0
      return
    }

    // Auto-animation when not being hovered (or on mobile always)
    const shouldAutoAnimate = isFlipped && (isMobile || !isHovered)

    if (shouldAutoAnimate) {
      autoAnimationTimeRef.current += deltaTime / 1000
      const time = autoAnimationTimeRef.current

      // Create a gentle figure-8 motion with sine waves
      const maxTilt = 15
      const speedX = 1.2
      const speedY = 0.8

      // Gentle bouncing motion - calculate directly for smooth 60fps animation
      const autoTiltX = Math.sin(time * speedX) * maxTilt * 0.6
      const autoTiltY = Math.sin(time * speedY) * maxTilt * 0.8

      // Update card tilt directly (no lerp) for smooth sine wave animation
      setCardTilt({ x: autoTiltX, y: autoTiltY })

      // Update mouse position for gradient effects
      const x = 50 + (autoTiltY / maxTilt) * 20
      const y = 50 + (autoTiltX / maxTilt) * 20
      setMousePosition({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      })
    } else if (!isMobile) {
      // Desktop with mouse hover: use smooth lerp interpolation for mouse tracking
      setCardTilt((current) => {
        const lerpFactor = Math.min(deltaTime / 16, 1) * 0.15
        const newX = lerp(current.x, targetTilt.x, lerpFactor)
        const newY = lerp(current.y, targetTilt.y, lerpFactor)

        const threshold = 0.1
        return {
          x: Math.abs(newX - targetTilt.x) < threshold ? targetTilt.x : newX,
          y: Math.abs(newY - targetTilt.y) < threshold ? targetTilt.y : newY,
        }
      })
    }

    if (isFlipped && !isFlipping) {
      animationFrameRef.current = requestAnimationFrame(updateTilt)
    }
  }, [targetTilt, isFlipped, isFlipping, isMobile, isHovered])

  /**
   * Global mouse tracking for back side 3D effects
   */
  const handleGlobalMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isFlipped && !isFlipping && cardContainerRef.current) {
        const rect = cardContainerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const mouseX = e.clientX - centerX
        const mouseY = e.clientY - centerY

        const maxTilt = 15
        const tiltX = (mouseY / (rect.height / 2)) * maxTilt * -1
        const tiltY = (mouseX / (rect.width / 2)) * maxTilt

        const constrainedTiltX = Math.max(-maxTilt, Math.min(maxTilt, tiltX))
        const constrainedTiltY = Math.max(-maxTilt, Math.min(maxTilt, tiltY))

        setTargetTilt({ x: constrainedTiltX, y: constrainedTiltY })

        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({
          x: Math.max(0, Math.min(100, x)),
          y: Math.max(0, Math.min(100, y)),
        })
      }
    },
    [isFlipped, isFlipping],
  )

  /**
   * Animation frame lifecycle management
   */
  useEffect(() => {
    if (isFlipped && !isFlipping) {
      lastUpdateTimeRef.current = performance.now()
      animationFrameRef.current = requestAnimationFrame(updateTilt)
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isFlipped, isFlipping, updateTilt])

  /**
   * Global mouse tracking setup/cleanup (desktop only)
   */
  useEffect(() => {
    // Enable mouse tracking on desktop when flipped
    if (isFlipped && !isMobile) {
      document.addEventListener("mousemove", handleGlobalMouseMove, { passive: true })
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
    }
  }, [isFlipped, isMobile, handleGlobalMouseMove])

  /**
   * Handle card flip animation
   */
  const handleCardClick = () => {
    setIsFlipping(true)
    setIsFlipped(!isFlipped)

    setTimeout(() => {
      setIsFlipping(false)
    }, 600)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (!isFlipped) {
      setMousePosition({ x: 50, y: 50 })
      setCardTilt({ x: 0, y: 0 })
      setTargetTilt({ x: 0, y: 0 })
    }
  }

  /**
   * Handle mouse movement for front side gradient effects
   */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isFlipped && isHovered && cardContainerRef.current) {
        const rect = cardContainerRef.current.getBoundingClientRect()

        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({
          x: Math.max(0, Math.min(100, x)),
          y: Math.max(0, Math.min(100, y)),
        })
      }
    },
    [isFlipped, isHovered],
  )

  /**
   * Generate combined CSS transform for card
   */
  const getTransform = () => {
    const hoverTilt = isHovered && !isFlipped && !isFlipping ? "rotateZ(4deg)" : "rotateZ(0deg)"
    const flip = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
    const tilt3D = isFlipped && !isFlipping ? `rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)` : ""

    // Add translateZ(0) for hardware acceleration
    return `${hoverTilt} ${flip} ${tilt3D} translateZ(0)`
  }

  /**
   * Generate dynamic holographic background for back side
   */
  const getHolographicStyle = () => {
    if (!isFlipped) {
      return {
        background: "transparent",
        transition: "background 0.15s ease-out",
      }
    }

    const { x, y } = mousePosition
    const { x: tiltX, y: tiltY } = cardTilt

    const tiltIntensity = (Math.abs(tiltX) + Math.abs(tiltY)) / 30
    const colorIntensity = 0.5 + tiltIntensity * 0.3

    const tiltOffsetX = tiltY * 2
    const tiltOffsetY = tiltX * 2

    const adjustedX = Math.max(0, Math.min(100, x + tiltOffsetX))
    const adjustedY = Math.max(0, Math.min(100, y + tiltOffsetY))

    const gradient1 = `radial-gradient(circle at ${adjustedX}% ${adjustedY}%,
      rgba(143, 163, 139, ${colorIntensity}) 0%, transparent 60%)`
    const gradient2 = `radial-gradient(circle at ${100 - adjustedX}% ${100 - adjustedY}%,
      rgba(107, 130, 104, ${colorIntensity * 0.8}) 0%, transparent 60%)`
    const gradient3 = `radial-gradient(circle at ${adjustedX}% ${100 - adjustedY}%,
      rgba(181, 196, 179, ${colorIntensity * 0.9}) 0%, transparent 65%)`
    const gradient4 = `linear-gradient(${(x + tiltY) * 3.6}deg,
      rgba(143, 163, 139, ${colorIntensity * 0.6}),
      rgba(107, 130, 104, ${colorIntensity * 0.6}),
      rgba(74, 93, 72, ${colorIntensity * 0.6}))`

    return {
      background: `${gradient1}, ${gradient2}, ${gradient3}, ${gradient4}`,
      transition: "none",
    }
  }

  /**
   * Generate subtle holographic effect for front side
   */
  const getFrontHolographicStyle = () => {
    if (!isHovered || isFlipped) {
      return {
        background: "transparent",
        transition: "background 0.15s ease-out",
      }
    }

    const { x, y } = mousePosition
    const baseOpacity = 0.15

    return {
      background: `radial-gradient(circle at ${x}% ${y}%,
        rgba(143, 163, 139, ${baseOpacity}) 0%,
        rgba(107, 130, 104, ${baseOpacity * 0.7}) 30%,
        transparent 60%)`,
      transition: "background 0.15s ease-out",
    }
  }

  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Card Container with 3D perspective */}
      <div
        ref={cardContainerRef}
        className="relative w-full aspect-[3/5] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Flip Container */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: getTransform(),
            transitionProperty: "transform",
            transitionDuration: "0.5s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: isFlipped ? "transform" : "auto",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full bg-white/90 backdrop-blur-sm border border-purple-200/30 overflow-hidden shadow-2xl rounded-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            {/* Full card holographic overlay */}
            <div
              className="absolute inset-0 rounded-xl mix-blend-screen pointer-events-none"
              style={getFrontHolographicStyle()}
            />

            {/* Profile Content */}
            <div className="text-center relative z-10 px-4 sm:px-6 h-full flex flex-col items-center justify-center">
              <div className="relative">
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white border-gray-300 border-2 rounded-full overflow-hidden">
                  <Image
                    src="/images/guy-avatar.png"
                    alt="Guy's profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-megrim bg-blend-multiply bg-gradient-to-r from-sage-600/60 from-10% via-sage-700/50 via-30% to-forest-700/70 to-90% bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">Guy Paiss</h1>
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                <div className="inline-flex items-center rounded-full px-2 py-1 sm:px-1 sm:py-0.5 text-xs font-medium text-sage-900 ring-1 ring-inset ring-sage-900/30 bg-blend-multiply bg-gradient-to-r from-sage-100/30 to-sage-200/30">
                  Software Developer
                </div>
                <div className="inline-flex items-center rounded-full px-2 py-1 sm:px-1 sm:py-0.5 text-xs font-medium text-forest-900 ring-1 ring-inset ring-forest-900/30 bg-blend-multiply bg-gradient-to-r from-forest-100/30 to-moss-100/30">
                  Computer Vision Engineer
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3 md:mt-4">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="font-mono text-gray-700 text-xs">Vancouver, BC · Open to remote</span>
              </div>

              {/* Bio */}
              <div className="mt-3 sm:mt-4 md:mt-6 mb-3 sm:mb-4 md:mb-6">
                <p className="text-gray-700 leading-relaxed font-mono text-xs max-w-xs mx-auto">
                  Building intelligent systems with computer vision,
                  machine learning, and full-stack development—
                  from algorithm design to deployment.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-3 sm:mb-4 md:mb-6" />

              {/* Social Links */}
              <div className="flex flex-col gap-3 relative z-10">
                {/* Row 1: GitHub + LinkedIn */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/PaissGuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/80 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 rounded-full"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      GitHub
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guy-paiss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/80 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 rounded-full"
                    >
                      <Linkedin className="w-3.5 h-3.5 mr-1.5" />
                      LinkedIn
                    </Button>
                  </a>
                </div>

                {/* Row 2: Resume */}
                <div className="flex justify-center gap-4">
                  <a
                    href="/Guy-Paiss-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/80 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 rounded-full"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1.5" />
                      Resume
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full bg-white/90 backdrop-blur-sm border border-zinc-200 overflow-hidden shadow-2xl rounded-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat rounded-xl relative"
              style={{
                backgroundImage: "url(/images/guy-card-back.png)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              {/* Holographic overlay */}
              <div
                className="absolute inset-0 rounded-xl opacity-90 mix-blend-multiply"
                style={getHolographicStyle()}
              />

              {/* Shimmer effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-25 mix-blend-overlay"
                style={{
                  background: isFlipped
                    ? `linear-gradient(${(mousePosition.x + cardTilt.y) * 2}deg, 
                  transparent 30%, 
                  rgba(255, 255, 255, ${0.3 + Math.abs(cardTilt.x + cardTilt.y) / 100}) 50%, 
                  transparent 70%)`
                    : "transparent",
                  transition: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}