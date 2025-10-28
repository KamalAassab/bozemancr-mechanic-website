"use client";

import { useState, useEffect } from "react";
import { FaTools } from "react-icons/fa";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  policy: {
    title: string;
    content: string;
  };
}

export function PolicyModal({ isOpen, onClose, policy }: PolicyModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      // Delay content visibility for staggered animation
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-500 ease-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-full max-w-4xl mx-4 bg-black border-2 border-primary overflow-hidden shadow-2xl transform transition-all duration-500 ease-out max-h-[85vh] ${
          isClosing ? 'scale-95 opacity-0 translate-y-8' : 'scale-100 opacity-100 translate-y-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
        >
          <FaTools className="w-8 h-8" />
        </button>

        <div className="p-6 lg:p-8 overflow-y-auto max-h-[85vh]">
          {/* Header */}
          <div className={`mb-6 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="font-condensed font-black italic text-4xl lg:text-5xl text-primary uppercase mb-3 tracking-tight">
              {policy.title}
            </h1>
            <div className={`w-20 h-1 bg-primary transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>

          {/* Content */}
          <div 
            className={`prose prose-base max-w-none font-roboto text-white space-y-4 transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            dangerouslySetInnerHTML={{ __html: policy.content }}
          />
        </div>
      </div>
    </div>
  );
}
