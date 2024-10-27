import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  ShoppingBag,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Launch Your Dream Store in Minutes
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of entrepreneurs who&apos;ve turned their passion
            into profit with our easy-to-use e-commerce platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              asChild
            >
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Succeed Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Sell to customers worldwide with multi-language support and international shipping options.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized for speed, ensuring your customers enjoy a smooth shopping experience.",
              },
              {
                icon: ShoppingBag,
                title: "Customizable Themes",
                description:
                  "Choose from hundreds of professional themes or create your own unique design.",
              },
              {
                icon: TrendingUp,
                title: "Built-in Analytics",
                description:
                  "Track your performance and make data-driven decisions to grow your business.",
              },
              {
                icon: CheckCircle,
                title: "Secure Payments",
                description:
                  "Integrated payment gateways ensure safe and easy transactions for you and your customers.",
              },
              {
                icon: ShoppingBag,
                title: "Mobile Optimized",
                description:
                  "Your store looks great and functions perfectly on all devices, from desktops to smartphones.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Loved by Entrepreneurs Worldwide
          </h2>
          <blockquote className="text-2xl italic text-gray-600 mb-8">
            &quot;This platform transformed my side hustle into a thriving
            business. The ease of use and powerful features allowed me to focus
            on what I love - creating products, not managing technology.&quot;
          </blockquote>
          <div className="flex items-center justify-center">
            {/* <img
              src="/placeholder.svg?height=64&width=64"
              alt="Sarah J."
              className="w-16 h-16 rounded-full mr-4"
            /> */}
            <div className="text-left">
              <p className="font-semibold">Sarah J.</p>
              <p className="text-gray-600">Founder, Eco Essentials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join over 100,000 entrepreneurs who&apos;ve launched their online
            stores with us.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-purple-600 text-lg px-8"
            asChild
          >
            <Link href="/signup">
              Create Your Store Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* <img src="/placeholder.svg?height=40&width=120&text=TrustPilot" alt="TrustPilot" className="h-10" />
            <img src="/placeholder.svg?height=40&width=120&text=Forbes" alt="Forbes" className="h-10" />
            <img src="/placeholder.svg?height=40&width=120&text=TechCrunch" alt="TechCrunch" className="h-10" />
            <img src="/placeholder.svg?height=40&width=120&text=Entrepreneur" alt="Entrepreneur" className="h-10" /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
