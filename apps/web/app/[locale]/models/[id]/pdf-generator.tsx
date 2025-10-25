'use client';

import React from 'react';
import jsPDF from 'jspdf';
import type { Model } from '../../../../lib/models';

interface PDFGeneratorProps {
  model: Model;
}

export default function PDFGenerator({ model }: PDFGeneratorProps) {
  const addVelganceBranding = (pdf: jsPDF) => {
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    // Add Velgance logo at bottom left corner (very small and light)
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(150, 150, 150);
    pdf.text('Velgance Agency', 20, pageHeight - 15);
    pdf.text('Europe\'s Leading Agency for Models', 20, pageHeight - 10);
  };

  const generatePDF = async () => {
    try {
      // Create new PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Add Velgance branding to first page
      addVelganceBranding(pdf);
      
      // Add model name at the top (centered, classy font)
      pdf.setFontSize(36);
      pdf.setFont('times', 'normal');
      pdf.setTextColor(0, 0, 0);
      const nameText = `${model.firstName} ${model.lastName}`;
      const nameWidth = pdf.getTextWidth(nameText);
      pdf.text(nameText, (pageWidth - nameWidth) / 2, 30);
      
      // Add minimal stats at the bottom (centered) - always add these
      const statsY = 200; // Fixed position for stats
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(100, 100, 100);
      
      // Collect stats and center them
      const stats = [];
      if (model.height) stats.push(model.height);
      if (model.weight) stats.push(model.weight);
      if (model.location) stats.push(model.location);
      
      if (stats.length > 0) {
        const statsText = stats.join(' • ');
        const statsWidth = pdf.getTextWidth(statsText);
        pdf.text(statsText, (pageWidth - statsWidth) / 2, statsY);
      }
      
      // Add main model image filling most of the page
      if (model.image) {
        try {
          // Use image proxy to avoid CORS issues
          const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(model.image)}`;
          const response = await fetch(proxyUrl);
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const blob = await response.blob();
          const reader = new FileReader();
          
          reader.onload = function() {
            const base64 = reader.result as string;
            const img = new Image();
            
            img.onload = function() {
              // Calculate dimensions to fill most of the page
              const margin = 20;
              const maxWidth = pageWidth - (margin * 2);
              const maxHeight = pageHeight - 120; // Leave space for stats at bottom
              
              let imgWidth = img.width;
              let imgHeight = img.height;
              
              // Scale image to fill the available space
              const widthRatio = maxWidth / imgWidth;
              const heightRatio = maxHeight / imgHeight;
              const scale = Math.min(widthRatio, heightRatio);
              
              imgWidth = imgWidth * scale;
              imgHeight = imgHeight * scale;
              
              // Center the image
              const x = (pageWidth - imgWidth) / 2;
              const y = 50; // Start below the name
              
              pdf.addImage(base64, 'JPEG', x, y, imgWidth, imgHeight);
              
              // Add additional images if available - each on a new page
              if (model.images && model.images.length > 0) {
                // Process additional images sequentially
                const processImages = async () => {
                  const imagesToProcess = Math.min(model.images!.length, 4);
                  for (let i = 0; i < imagesToProcess; i++) {
                    try {
                      // Use image proxy to avoid CORS issues
                      const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(model.images![i])}`;
                      const imgResponse = await fetch(proxyUrl);
                      
                      if (!imgResponse.ok) {
                        console.error(`Failed to load image ${i}:`, imgResponse.status);
                        continue; // Skip this image and continue with the next one
                      }
                      
                      const imgBlob = await imgResponse.blob();
                      const imgBase64 = await new Promise<string>((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result as string);
                        reader.readAsDataURL(imgBlob);
                      });
                      
                      const img = new Image();
                      img.onload = () => {
                        // Add new page for each image
                        pdf.addPage();
                        
                        // Add Velgance branding to this page
                        addVelganceBranding(pdf);
                        
                        // Calculate dimensions to fill the entire page
                        const margin = 20;
                        const maxWidth = pageWidth - (margin * 2);
                        const maxHeight = pageHeight - (margin * 2);
                        
                        let imgWidth = img.width;
                        let imgHeight = img.height;
                        
                        // Scale image to fill the available space
                        const widthRatio = maxWidth / imgWidth;
                        const heightRatio = maxHeight / imgHeight;
                        const scale = Math.min(widthRatio, heightRatio);
                        
                        imgWidth = imgWidth * scale;
                        imgHeight = imgHeight * scale;
                        
                        // Center the image on the page
                        const x = (pageWidth - imgWidth) / 2;
                        const y = (pageHeight - imgHeight) / 2;
                        
                        pdf.addImage(imgBase64, 'JPEG', x, y, imgWidth, imgHeight);
                        
                        // If this is the last image, save the PDF
                        if (i === imagesToProcess - 1) {
                          pdf.save(`${model.firstName}_${model.lastName}_Portfolio.pdf`);
                        }
                      };
                      img.src = imgBase64;
                    } catch (error) {
                      console.error('Error loading image:', error);
                    }
                  }
                };
                
                processImages();
              } else {
                // No additional images, save the PDF
                pdf.save(`${model.firstName}_${model.lastName}_Portfolio.pdf`);
              }
            };
            
            img.src = base64;
          };
          
          reader.readAsDataURL(blob);
        } catch (error) {
          console.error('Error loading main image:', error);
          // Save PDF without images but with stats
          pdf.save(`${model.firstName}_${model.lastName}_Portfolio.pdf`);
        }
      } else {
        // No main image, save the PDF with stats
        pdf.save(`${model.firstName}_${model.lastName}_Portfolio.pdf`);
      }
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={generatePDF}
      className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-light"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download Portfolio
    </button>
  );
}
