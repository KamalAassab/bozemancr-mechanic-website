"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, Car, MessageSquare } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export function BookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: service || "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (service) {
      setFormData(prev => ({ ...prev, service }));
    }
  }, [service]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Option 1: Email via mailto (FREE, no backend needed!)
    const subject = encodeURIComponent(`Service Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Vehicle: ${formData.vehicle}\n` +
      `Service: ${formData.service}\n` +
      `Preferred Date: ${formData.preferredDate}\n` +
      `Preferred Time: ${formData.preferredTime}\n` +
      `Additional Details: ${formData.message || 'None'}`
    );
    const mailtoLink = `mailto:kamalaassab2002@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 2500);
    }, 500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: isClosing ? 0 : 1, 
            scale: isClosing ? 0.9 : 1, 
            y: isClosing ? 20 : 0 
          }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.1 }}
          className="relative w-full max-w-2xl bg-black border-2 border-primary rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors duration-150"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Success Message */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center z-50"
              >
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center"
                  >
                    <Calendar className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="font-condensed font-black italic text-3xl text-white mb-2">
                    REQUEST SENT!
                  </h3>
                  <p className="text-white/80 text-lg">
                    We'll contact you shortly to confirm your appointment.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-condensed font-black italic text-3xl md:text-4xl text-primary mb-2">
                BOOK YOUR SERVICE
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                Fill out the form below and we'll get back to you to confirm your appointment.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                  <User className="w-5 h-5 text-primary" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                    <Mail className="w-5 h-5 text-primary" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Vehicle & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Vehicle */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                    <Car className="w-5 h-5 text-primary" />
                    Vehicle *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="2020 Audi A4"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                    <Calendar className="w-5 h-5 text-primary" />
                    Service Needed *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-black text-white">Select a service...</option>
                    <option value="Oil Change" className="bg-black text-white">Oil Change</option>
                    <option value="Brake Repair" className="bg-black text-white">Brake Repair</option>
                    <option value="Computer Diagnostics" className="bg-black text-white">Computer Diagnostics</option>
                    <option value="Performance Tuning" className="bg-black text-white">Performance Tuning</option>
                    <option value="Suspension & Alignment" className="bg-black text-white">Suspension & Alignment</option>
                    <option value="Carbon Cleaning" className="bg-black text-white">Carbon Cleaning</option>
                    <option value="Maintenance Service" className="bg-black text-white">Maintenance Service</option>
                    <option value="Other" className="bg-black text-white">Other</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                    <Calendar className="w-5 h-5 text-primary" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Preferred Time */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                    <Clock className="w-5 h-5 text-primary" />
                    Preferred Time *
                  </label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-black text-white">Select time...</option>
                    <option value="Morning (8AM-12PM)" className="bg-black text-white">Morning (8AM-12PM)</option>
                    <option value="Afternoon (12PM-4PM)" className="bg-black text-white">Afternoon (12PM-4PM)</option>
                    <option value="Evening (4PM-6PM)" className="bg-black text-white">Evening (4PM-6PM)</option>
                    <option value="Flexible" className="bg-black text-white">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="flex items-center gap-2 text-white font-bold mb-2 text-sm md:text-base">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Additional Details (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about your vehicle or specific concerns..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-condensed font-black italic text-lg px-6 py-4 rounded-lg transition-all duration-150 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "SENDING..." : "REQUEST APPOINTMENT"}
                </motion.button>
                <p className="text-white/60 text-xs text-center mt-3">
                  By submitting, you agree to be contacted by BozemanCR.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

