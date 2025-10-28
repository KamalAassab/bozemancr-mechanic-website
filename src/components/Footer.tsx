"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PolicyModal } from "./PolicyModal";
import { motion, useReducedMotion, useInView } from "framer-motion";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedPolicy, setSelectedPolicy] = useState<{
    title: string;
    content: string;
  } | null>(null);

  // Common styles for section titles
  const sectionTitleClass = "text-2xl md:text-xl lg:text-2xl font-black italic text-primary uppercase text-left tracking-tight";
  const listClass = "text-muted-foreground mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base";

  const policies = {
    return: {
      title: "RETURN POLICY",
      content: `
        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Overview</h2>
          <p>At BozemanCR, we stand behind the quality of all parts and services we provide. Due to the specialized nature of automotive services and parts, we have the following return policy to ensure customer satisfaction while protecting our business operations.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Parts Return Policy</h2>
          
          <h3 class="font-condensed font-bold text-xl text-white mb-3">Eligible for Return</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>Unopened, unused parts in original packaging with receipt or proof of purchase</li>
            <li>Returns must be made within 30 days of purchase date</li>
            <li>Parts must be in original condition with all included documentation</li>
            <li>Electronic components must be unused and in sealed anti-static packaging</li>
          </ul>

          <h3 class="font-condensed font-bold text-xl text-white mb-3">Not Eligible for Return</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Installed or used parts</li>
            <li>Custom ordered or special order items</li>
            <li>OEM parts that have been modified or tampered with</li>
            <li>Fluids, oils, and consumable items after seal has been broken</li>
            <li>Items without proof of purchase</li>
            <li>Parts older than 30 days from purchase date</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Service Return Policy</h2>
          <p>All services performed by BozemanCR come with a satisfaction guarantee. If you are not satisfied with our work, please contact us immediately. We will make every effort to resolve any issues to your satisfaction.</p>
          <p>Service warranties vary depending on the type of work performed. Our team will provide specific warranty information at the time of service.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Return Process</h2>
          <ol class="list-decimal pl-6 space-y-3">
            <li>Contact us at <a href="mailto:kamalaassab2002@gmail.com" class="text-primary hover:underline">kamalaassab2002@gmail.com</a> or call <a href="tel:12345678910" class="text-primary hover:underline">1-234-567-8910</a> to initiate a return</li>
            <li>Provide your original receipt or proof of purchase</li>
            <li>Obtain a Return Authorization (RA) number from our team</li>
            <li>Package the item securely with all original packaging and documentation</li>
            <li>Ship the item back to us using a trackable shipping method</li>
            <li>Returns without an RA number will be refused</li>
          </ol>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Refund Policy</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Refunds will be processed within 5-10 business days of receiving returned items</li>
            <li>Refunds will be issued to the original payment method</li>
            <li>Shipping costs are non-refundable</li>
            <li>A 15% restocking fee may apply to certain returns</li>
            <li>Original shipping fees are non-refundable</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Defective or Damaged Items</h2>
          <p>If you receive a defective or damaged item, please contact us immediately. We will arrange for a replacement or refund at no additional cost to you. Please do not return damaged items before contacting us for authorization.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Contact Information</h2>
          <p class="space-y-2">
            <strong>Email:</strong> <a href="mailto:kamalaassab2002@gmail.com" class="text-primary hover:underline">kamalaassab2002@gmail.com</a><br />
            <strong>Phone:</strong> <a href="tel:12345678910" class="text-primary hover:underline">1-234-567-8910</a><br />
            <strong>Address:</strong> 444 W Main St, Bozeman, MT 59715
          </p>
        </section>

        <section class="pt-8 border-t border-gray-600">
          <p class="text-sm text-gray-300 italic">
            Last updated: December 2024<br />
            BozemanCR reserves the right to modify this return policy at any time without prior notice.
          </p>
        </section>
      `
    },
    terms: {
      title: "TERMS & CONDITIONS",
      content: `
        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Agreement to Terms</h2>
          <p>By accessing and using BozemanCR's services, website, and facilities, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Services</h2>
          <p>BozemanCR provides automotive repair, maintenance, performance modifications, and parts sales services. We reserve the right to refuse service to anyone at our discretion. All services are performed by certified technicians using industry-standard practices.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Pricing and Payment</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>All prices are subject to change without notice</li>
            <li>Payment is due upon completion of service unless other arrangements have been made</li>
            <li>We accept cash, credit cards, and approved payment plans</li>
            <li>A deposit may be required for large jobs or custom work</li>
            <li>Additional charges may apply if additional work is discovered during service</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Warranty</h2>
          <h3 class="font-condensed font-bold text-xl text-white mb-3">Work Warranty</h3>
          <p>We warranty our workmanship for 90 days or 3,000 miles, whichever comes first. This warranty covers defects in workmanship only and does not cover parts, fluids, or damage resulting from accidents, misuse, or normal wear and tear.</p>
          
          <h3 class="font-condensed font-bold text-xl text-white mb-3 mt-6">Parts Warranty</h3>
          <p>Parts carry warranties provided by their respective manufacturers. BozemanCR will facilitate warranty claims on behalf of customers for parts we install, subject to manufacturer terms and conditions.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Customer Responsibility</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Customers must provide accurate vehicle information</li>
            <li>Customers are responsible for removing personal items from vehicles before service</li>
            <li>Customers must authorize all work before it is performed</li>
            <li>Payment terms must be agreed upon before work begins</li>
            <li>Customers must pick up vehicles in a timely manner after service completion</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Limitation of Liability</h2>
          <p>BozemanCR's liability is limited to the cost of repair or replacement of defective workmanship. We are not liable for incidental, consequential, or indirect damages including but not limited to loss of use, loss of profits, or towing costs.</p>
          <p class="mt-4">We are not responsible for damage to vehicles caused by:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Pre-existing conditions not disclosed to us</li>
            <li>Parts failure after installation due to manufacturer defects</li>
            <li>Acts of nature or events beyond our control</li>
            <li>Unauthorized repairs or modifications by others</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Dispute Resolution</h2>
          <p>Any disputes arising from our services will be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be settled through binding arbitration in accordance with Montana state laws.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Modifications to Terms</h2>
          <p>BozemanCR reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Contact Information</h2>
          <p class="space-y-2">
            <strong>Email:</strong> <a href="mailto:kamalaassab2002@gmail.com" class="text-primary hover:underline">kamalaassab2002@gmail.com</a><br />
            <strong>Phone:</strong> <a href="tel:12345678910" class="text-primary hover:underline">1-234-567-8910</a><br />
            <strong>Address:</strong> 444 W Main St, Bozeman, MT 59715
          </p>
        </section>

        <section class="pt-8 border-t border-gray-600">
          <p class="text-sm text-gray-300 italic">
            Last updated: December 2024<br />
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </section>
      `
    },
    privacy: {
      title: "PRIVACY POLICY",
      content: `
        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Introduction</h2>
          <p>BozemanCR ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or interact with us.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Information We Collect</h2>
          
          <h3 class="font-condensed font-bold text-xl text-white mb-3">Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>Name, contact information (phone, email, address)</li>
            <li>Vehicle information (make, model, year, VIN)</li>
            <li>Payment information (processed securely through payment processors)</li>
            <li>Service history and preferences</li>
            <li>License plate numbers</li>
          </ul>

          <h3 class="font-condensed font-bold text-xl text-white mb-3">Automatically Collected Information</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Website usage data (pages visited, time spent)</li>
            <li>IP address and browser information</li>
            <li>Device information</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">How We Use Your Information</h2>
          <p>We use collected information for the following purposes:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Providing and scheduling automotive services</li>
            <li>Processing payments and transactions</li>
            <li>Communicating with you about services, appointments, and updates</li>
            <li>Maintaining service records and history</li>
            <li>Improving our services and website</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Service providers who assist us in operating our business</li>
            <li>Parts suppliers and manufacturers for warranty purposes</li>
            <li>Payment processors for transaction processing</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Business partners in connection with mergers or acquisitions</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Withdraw consent for data processing</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          <p class="mt-4">To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Cookies and Tracking</h2>
          <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. You can control cookie preferences through your browser settings.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Children's Privacy</h2>
          <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Changes to Privacy Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our services constitutes acceptance of any changes.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Contact Information</h2>
          <p class="space-y-2">
            For questions, concerns, or to exercise your privacy rights, please contact us:<br /><br />
            <strong>Email:</strong> <a href="mailto:kamalaassab2002@gmail.com" class="text-primary hover:underline">kamalaassab2002@gmail.com</a><br />
            <strong>Phone:</strong> <a href="tel:12345678910" class="text-primary hover:underline">1-234-567-8910</a><br />
            <strong>Address:</strong> 444 W Main St, Bozeman, MT 59715
          </p>
        </section>

        <section class="pt-8 border-t border-gray-600">
          <p class="text-sm text-gray-300 italic">
            Last updated: December 2024<br />
            BozemanCR is committed to protecting your privacy and handling your personal information responsibly.
          </p>
        </section>
      `
    },
    shipping: {
      title: "SHIPPING POLICY",
      content: `
        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Shipping Information</h2>
          <p>BozemanCR offers shipping services for automotive parts and accessories to customers nationwide. We work to ensure timely and secure delivery of your orders.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Shipping Methods & Delivery Times</h2>
          
          <h3 class="font-condensed font-bold text-xl text-white mb-3">Standard Shipping</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>5-7 business days from order date</li>
            <li>Available for most standard-sized parts</li>
            <li>Tracking information provided</li>
          </ul>

          <h3 class="font-condensed font-bold text-xl text-white mb-3">Express Shipping</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>2-3 business days from order date</li>
            <li>Available for urgent orders (additional fees apply)</li>
            <li>Priority handling and delivery</li>
          </ul>

          <h3 class="font-condensed font-bold text-xl text-white mb-3">Overnight Shipping</h3>
          <ul class="list-disc pl-6 space-y-2 mb-4">
            <li>Next business day delivery</li>
            <li>Premium pricing applies</li>
            <li>Order must be placed before 2:00 PM MST</li>
          </ul>

          <h3 class="font-condensed font-bold text-xl text-white mb-3">Local Delivery</h3>
          <p>For customers in the Bozeman, Montana area, we offer local delivery service. Same-day delivery may be available for in-stock items. Please contact us for local delivery options and pricing.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Shipping Costs</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Shipping costs are calculated at checkout based on weight, dimensions, and destination</li>
            <li>Free shipping available on orders over $200 (standard shipping only)</li>
            <li>Expedited shipping options available for additional fees</li>
            <li>Oversized or heavy items may incur additional shipping charges</li>
            <li>International shipping available (customs fees may apply)</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Order Processing</h2>
          <p>Orders are typically processed within 1-2 business days after payment confirmation. Orders placed on weekends or holidays will be processed on the next business day. You will receive an email confirmation with order details and tracking information once your order ships.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Special Handling Items</h2>
          <p class="mb-4">Certain items require special handling and may have extended processing times:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Custom orders or special order items (7-14 business days)</li>
            <li>Large or heavy items (oversized freight)</li>
            <li>Hazardous materials (special shipping requirements)</li>
            <li>OEM parts from manufacturers (varies by supplier)</li>
          </ul>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Tracking Your Order</h2>
          <p>Once your order ships, you will receive a tracking number via email. You can track your shipment in real-time using the provided tracking information. If you don't receive tracking information within 2 business days, please contact us.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Delivery Issues</h2>
          
          <h3 class="font-condensed font-bold text-xl text-white mb-3">Lost Packages</h3>
          <p>If your package doesn't arrive within the expected timeframe, please contact us immediately. We will work with the shipping carrier to locate your package and file a claim if necessary.</p>

          <h3 class="font-condensed font-bold text-xl text-white mb-3 mt-6">Damaged Packages</h3>
          <p>If you receive a damaged package, please contact us within 48 hours of delivery. Please save all packaging materials for inspection. We will arrange for a replacement or refund as appropriate.</p>

          <h3 class="font-condensed font-bold text-xl text-white mb-3 mt-6">Incorrect Items</h3>
          <p>If you receive an incorrect item, please contact us immediately. We will arrange for the correct item to be shipped at no additional cost to you.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">International Shipping</h2>
          <p>We ship internationally to select countries. International orders may be subject to customs duties, taxes, and fees imposed by the destination country. These charges are the responsibility of the customer. International shipping times vary by destination.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Pickup Options</h2>
          <p>Orders can be picked up at our location at 444 W Main St, Bozeman, MT 59715 during business hours. You will receive a notification when your order is ready for pickup. Please bring a valid ID when picking up your order.</p>
        </section>

        <section>
          <h2 class="font-condensed font-black italic text-3xl text-primary mb-4">Contact Information</h2>
          <p class="space-y-2">
            For shipping inquiries or to track your order:<br /><br />
            <strong>Email:</strong> <a href="mailto:kamalaassab2002@gmail.com" class="text-primary hover:underline">kamalaassab2002@gmail.com</a><br />
            <strong>Phone:</strong> <a href="tel:12345678910" class="text-primary hover:underline">1-234-567-8910</a><br />
            <strong>Address:</strong> 444 W Main St, Bozeman, MT 59715
          </p>
        </section>

        <section class="pt-8 border-t border-gray-600">
          <p class="text-sm text-gray-300 italic">
            Last updated: December 2024<br />
            BozemanCR reserves the right to modify shipping policies, rates, and delivery times at any time without prior notice.
          </p>
        </section>
      `
    }
  };

  return (
    <>
      <motion.footer 
        ref={ref}
        className="md:rounded-t-6xl relative w-full flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16" 
        style={{ backgroundImage: 'url(/images/backgrounds/footer-bg.png)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div 
          className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        />

        <motion.div 
          className="grid w-full max-w-7xl mx-auto gap-6 sm:gap-8 xl:grid-cols-5 xl:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Logo Section */}
          <motion.div 
            className="space-y-4 xl:col-span-1 text-center xl:text-left"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Mobile Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <Image
                src="/assets/bozemancr-logo.png"
                alt="BozemanCR Logo"
                width={300}
                height={90}
                className="transition-all duration-300 hover:scale-105 mx-auto xl:mx-0 md:hidden"
              />
            </motion.div>
            {/* Desktop Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <Image
                src="/assets/bozemancr-logo.png"
                alt="BozemanCR Logo"
                width={300}
                height={90}
                className="transition-all duration-300 hover:scale-105 mx-auto xl:mx-0 hidden md:block"
              />
            </motion.div>
        </motion.div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0 md:grid-cols-3 xl:col-span-4 xl:mt-0 xl:grid-cols-3">
          {/* Policies */}
          <motion.div 
            className="mb-8 md:mb-0 relative px-4"
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
                <motion.h3 
                  className={sectionTitleClass}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Policies
                </motion.h3>
                <motion.ul 
                  className={listClass}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.button 
                    onClick={() => setSelectedPolicy(policies.return)}
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Image 
                          src="/icons/return.svg" 
                          alt="Return Policy" 
                          width={20} 
                          height={20} 
                          className="me-3 size-5"
                        />
                      </motion.div>
                  Return Policy
                  </motion.button>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                whileHover={{ x: 5 }}
              >
                  <motion.button 
                    onClick={() => setSelectedPolicy(policies.terms)}
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Image 
                        src="/icons/terms.svg" 
                        alt="Terms & Conditions" 
                          width={20} 
                          height={20} 
                          className="me-3 size-5"
                      />
                    </motion.div>
                  Terms & Conditions
                  </motion.button>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 2.0 }}
                whileHover={{ x: 5 }}
              >
                  <motion.button 
                    onClick={() => setSelectedPolicy(policies.privacy)}
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Image 
                        src="/icons/privacy.svg" 
                        alt="Privacy Policy" 
                          width={20} 
                          height={20} 
                          className="me-3 size-5"
                      />
                    </motion.div>
                  Privacy Policy
                  </motion.button>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                whileHover={{ x: 5 }}
              >
                  <motion.button 
                    onClick={() => setSelectedPolicy(policies.shipping)}
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Image 
                        src="/icons/shipping.svg" 
                        alt="Shipping Policy" 
                          width={20} 
                          height={20} 
                          className="me-3 size-5"
                      />
                    </motion.div>
                  Shipping Policy
                  </motion.button>
              </motion.li>
            </motion.ul>
                <motion.div 
                  className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary hidden md:block rounded-full shadow-lg shadow-primary/30"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                ></motion.div>
          </motion.div>

          {/* Services */}
          <AnimatedContainer delay={0.2}>
              <div className="mb-8 md:mb-0 relative px-4">
                    <h3 className={sectionTitleClass}>Services</h3>
                    <ul className={listClass}>
                <li>
                  <Link href="#performance" className="hover:text-primary inline-flex items-center transition-all duration-300">
                    <Image 
                      src="/icons/performance.svg" 
                      alt="Performance" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                    />
                    Performance Upgrades
                </Link>
              </li>
              <li>
                  <Link 
                    href="#additional-services" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('additional-services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const maintenanceButton = document.querySelector('[data-service="maintenance"]');
                          if (maintenanceButton) {
                            (maintenanceButton as HTMLElement).click();
                          }
                        }, 800);
                      }
                    }}
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
                  >
                    <Image 
                      src="/icons/oil.svg" 
                      alt="Maintenance" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                    />
                  Maintenance
                </Link>
              </li>
              <li>
                  <Link 
                    href="#additional-services" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('additional-services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const repairsButton = document.querySelector('[data-service="repairs"]');
                          if (repairsButton) {
                            (repairsButton as HTMLElement).click();
                          }
                        }, 800);
                      }
                    }}
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
                  >
                    <Image 
                      src="/icons/repair.svg" 
                      alt="Repairs" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                    />
                  Repairs
                </Link>
              </li>
                <li>
                  <Link href="#gallery" className="hover:text-primary inline-flex items-center transition-all duration-300">
                    <Image 
                      src="/icons/more.svg" 
                      alt="More Services" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                    />
                    See Our Full List
                </Link>
              </li>
            </ul>
                <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary hidden md:block rounded-full shadow-lg shadow-primary/30"></div>
            </div>
          </AnimatedContainer>

            {/* Contact Us */}
            <AnimatedContainer delay={0.3}>
              <div className="mb-8 md:mb-0 px-4 relative">
                    <h3 className={sectionTitleClass}>Contact Us</h3>
                    <ul className={listClass}>
                <li>
                  <a
                      href="tel:12345678910"
                      className="hover:text-primary inline-flex items-center transition-all duration-300"
                  >
                      <Image 
                        src="/icons/phone.svg" 
                        alt="Phone" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                      />
                      1-234-567-8910
                  </a>
                </li>
                <li>
                  <a
                      href="mailto:kamalaassab2002@gmail.com"
                      className="hover:text-primary inline-flex items-center transition-all duration-300"
                  >
                      <Image 
                        src="/icons/email.svg" 
                        alt="Email" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                      />
                      kamalaassab2002@gmail.com
              </a>
                </li>
                <li>
              <a
                      href="https://www.google.com/maps/place/444+W+Main+St,+Bozeman,+MT+59715"
                target="_blank"
                rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center transition-all duration-300"
              >
                      <Image 
                        src="/icons/location.svg" 
                        alt="Location" 
                        width={20} 
                        height={20} 
                        className="me-3 size-5"
                      />
                      444 W Main St, Bozeman, MT 59715
                  </a>
                </li>
              </ul>
              
              {/* Social Media Icons */}
              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/BozemanCRPerformance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Image 
                    src="/icons/facebook.svg" 
                    alt="Facebook" 
                    width={24} 
                    height={24} 
                    className="size-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/bozemancr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Image 
                    src="/icons/instagram.svg" 
                    alt="Instagram" 
                    width={24} 
                    height={24} 
                    className="size-6"
                  />
                </a>
              </div>
              </div>
            </AnimatedContainer>
        </div>
      </motion.div>

        {/* Policy Modal */}
        {selectedPolicy && (
          <PolicyModal
            isOpen={!!selectedPolicy}
            onClose={() => setSelectedPolicy(null)}
            policy={selectedPolicy}
          />
        )}
      </motion.footer>
      
      {/* Copyright Section - Bottom of Website */}
      <div className="w-full bg-primary">
        <div className="w-full px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
            <p className="text-black font-bold uppercase text-center sm:text-left" style={{ fontFamily: 'Roboto, sans-serif' }}>
              © 2025 - BOZEMANCR.
            </p>
            <p className="text-black font-bold uppercase text-center sm:text-right" style={{ fontFamily: 'Roboto, sans-serif' }}>
              SITE DESIGN BY{" "}
              <a 
                href="https://kamal-aassab-portfolio.vercel.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                KAMAL AASSAB
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

type ViewAnimationProps = {
	delay?: number;
	className?: string;
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
  );
}
