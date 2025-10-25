"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Gift, HouseIcon, MessageCircle, Phone, Sparkles, Star, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in world-class hospitality at Grand Vista Hotel. Where elegance meets comfort, and every detail is crafted for your perfect stay."
          tag="5-Star Excellence"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/15447099/pexels-photo-15447099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Upscale Ritz hotel facade in Lisbon captured during a golden sunset, showcasing modern urban architecture."
          imagePosition="right"
          buttons={[
            { text: "Book Now", href: "https://booking.grandvista.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to elevate your stay and create unforgettable memories."
          tag="Premium Features"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Serenity Spa & Wellness",
              description: "Rejuvenate your mind and body in our award-winning spa featuring premium treatments and tranquil relaxation areas.",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A woman adjusts her hair while looking into a mirror in a changing room."
            },
            {
              id: "02",
              title: "Gourmet Dining Experience",
              description: "Savor exquisite cuisine crafted by renowned chefs in our elegant restaurants with breathtaking city views.",
              imageSrc: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A stylish dining scene featuring a gourmet meal and a glass of white wine by a window."
            },
            {
              id: "03",
              title: "Infinity Pool & Terrace",
              description: "Unwind in our stunning infinity pool overlooking the city skyline, perfect for relaxation and memorable moments.",
              imageSrc: "https://images.pexels.com/photos/2736187/pexels-photo-2736187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Experience relaxation at a stunning rooftop infinity pool with a panoramic cityscape view."
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Elegant Accommodations"
          description="Choose from our carefully curated selection of rooms and suites, each designed with luxury and comfort in mind."
          tag="Our Rooms"
          tagIcon={HouseIcon}
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bright and airy modern bedroom in Istanbul with minimalist design and luxury amenities."
            },
            {
              id: "suite",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A stylish hotel room featuring a cozy bed, sofa, and luxurious decor."
            },
            {
              id: "standard",
              name: "Standard Double Room",
              price: "$199/night",
              imageSrc: "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Inviting hotel room with comfortable bedding and ambient lighting, perfect for relaxation and luxury stay."
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Stay Packages"
          description="Discover our specially crafted packages designed to enhance your hotel experience with exclusive benefits."
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "weekend",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "$399",
              subtitle: "Perfect for weekend getaways",
              features: [
                "2 nights accommodation",
                "Daily breakfast for two",
                "Late checkout until 2 PM",
                "Complimentary Wi-Fi",
                "Access to fitness center"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: TrendingUp,
              price: "$599",
              subtitle: "Ideal for business travelers",
              features: [
                "3 nights accommodation",
                "Executive lounge access",
                "Daily breakfast & dinner",
                "Meeting room access (2 hours)",
                "Priority room service",
                "Airport transfers included"
              ]
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read genuine reviews from our valued guests who have experienced the exceptional hospitality at Grand Vista Hotel."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "Corporate Travel",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Stylish senior woman in a suit adjusting her glasses while sitting in a car."
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "Leisure Traveler",
              company: "Family Vacation",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smiling waiter stands in an elegant restaurant interior, exuding warmth and professionalism."
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              role: "Travel Blogger",
              company: "Luxury Reviews",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3754312/pexels-photo-3754312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smiling woman in summer top looking at camera through opened window sitting on backseat in car during road trip"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Wedding Guest",
              company: "Special Event",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5378708/pexels-photo-5378708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant portrait of a hotel porter in uniform with a classic setting and leafy backdrop."
            },
            {
              id: "5",
              name: "Emily Watson",
              role: "Conference Attendee",
              company: "Business Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Stylish senior woman in a suit adjusting her glasses while sitting in a car."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Experience Luxury?"
          description="Contact our reservations team or subscribe to our newsletter for exclusive offers and updates about Grand Vista Hotel."
          tagIcon={Phone}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."
          mediaPosition="left"
          inputPlaceholder="Enter your email for offers"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive exclusive offers and updates from Grand Vista Hotel."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" },
                { label: "Awards", href: "awards" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "reservations" },
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}