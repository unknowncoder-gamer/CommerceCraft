"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/deals"
                  className="transition-colors hover:text-white"
                >
                  Subscription
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="transition-colors hover:text-white"
                >
                  New Offers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="transition-colors hover:text-white"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Stay updated with our latest offers and products.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-gray-600"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm">
            &copy; 2024 CommerceCraft. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
