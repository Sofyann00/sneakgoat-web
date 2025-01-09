"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      
      slider.on("created", () => {
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-52 text-center relative overflow-hidden">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-muted" />
        
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('/sport_bg.jpg')] bg-cover bg-center opacity-30 animate-pulse-slow" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
        
        {/* Radial gradient mask */}
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]">
          {/* Animated dots pattern */}
          <div className="absolute inset-0 bg-[url('/dots.png')] bg-repeat opacity-20 animate-float" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Dominate the Court in Style
          </h1>
          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Experience legendary basketball footwear engineered for peak performance on the court. 
            From iconic Air Jordans to elite performance shoes, elevate your game with sneakers that define greatness.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link href="/marketplace">
              <Button size="lg" className="group transition-all duration-300 hover:scale-105">
                Shop Collection
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Legendary Collection</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Court-Ready Basketball Classics
            </p>
          </div>
          
          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
              <div key={product.id} className="keen-slider__slide">
                <Card className="border-0">
                  <CardContent className="p-4">
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{formatPrice(product.price)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 sm:py-40 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-muted/20" />
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse-slow" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">The Basketball Advantage</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for the Game
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    {feature.icon}
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Court-Tested Materials',
    description: 'Premium materials and advanced cushioning technology designed specifically for basketball performance and durability.',
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Game-Ready Design',
    description: 'Engineered with advanced ankle support, traction patterns, and responsive cushioning for elite on-court performance.',
    icon: <Server className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Professional Grade',
    description: 'Every pair undergoes rigorous testing to meet professional basketball standards and performance requirements.',
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
]