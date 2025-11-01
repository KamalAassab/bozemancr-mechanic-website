"use client";

/**
 * JSON-LD Structured Data Component
 * 
 * Safely injects structured data for SEO and rich snippets.
 * This component escapes HTML and renders JSON-LD scripts.
 */

import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (id) {
      script.id = id;
    }
    
    // Safely stringify the data
    script.text = JSON.stringify(data, null, 2);
    
    // Remove any existing script with the same ID
    const existingScript = id ? document.getElementById(id) : null;
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const scriptToRemove = id 
        ? document.getElementById(id) 
        : document.head.querySelector(`script[type="application/ld+json"]:last-child`);
      
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null;
}

/**
 * Server-side JSON-LD component
 * Use this in server components to render JSON-LD directly in HTML
 */
export function JsonLdServer({ data, id }: JsonLdProps) {
  const jsonString = JSON.stringify(data, null, 2);
  
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

