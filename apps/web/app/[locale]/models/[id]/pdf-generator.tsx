'use client';

import React from 'react';
import jsPDF from 'jspdf';

interface Model {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  igProfileLink?: string;
  image: string;
  images: string[];
  height?: string;
  weight?: string;
  location?: string;
  gender: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PDFGeneratorProps {
  model: Model;
}

export default function PDFGenerator({ model }: PDFGeneratorProps) {
  const generatePDF = async () => {
    try {
      // Create new PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Add Velgance logo at bottom left
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      pdf.text('Velgance Agency', 20, pageHeight - 20);
      
      // Add subtitle
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(100, 100, 100);
      pdf.text('Europe\'s Leading Agency for Models', 20, pageHeight - 15);
      
      // Add model name
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${model.firstName} ${model.lastName}`, 20, 50);
      
      // Add profession
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(100, 100, 100);
      pdf.text('Professional Model', 20, 65);
      
      // Add divider line
      pdf.setDrawColor(200, 200, 200);
      pdf.line(20, 75, pageWidth - 20, 75);
      
      // Add model stats in a more organized way
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      let yPosition = 85;
      
      // Create a stats box
      pdf.setFillColor(248, 249, 250);
      pdf.rect(20, yPosition - 5, pageWidth - 40, 60, 'F');
      pdf.setDrawColor(220, 220, 220);
      pdf.rect(20, yPosition - 5, pageWidth - 40, 60, 'S');
      
      if (model.height) {
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Height:', 30, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.text(model.height, 50, yPosition);
        yPosition += 8;
      }
      
      if (model.weight) {
        pdf.setFont('helvetica', 'bold');
        pdf.text('Weight:', 30, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.text(model.weight, 50, yPosition);
        yPosition += 8;
      }
      
      if (model.location) {
        pdf.setFont('helvetica', 'bold');
        pdf.text('Location:', 30, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.text(model.location, 60, yPosition);
        yPosition += 8;
      }
      
      if (model.email) {
        pdf.setFont('helvetica', 'bold');
        pdf.text('Email:', 30, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(0, 100, 200);
        pdf.text(model.email, 50, yPosition);
        yPosition += 8;
      }
      
      if (model.igProfileLink) {
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Instagram:', 30, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`@${model.igProfileLink.split('/').pop()}`, 70, yPosition);
        yPosition += 8;
      }
      
      // Add main model image
      if (model.image) {
        try {
          // Convert image to base64
          const response = await fetch(model.image);
          const blob = await response.blob();
          const reader = new FileReader();
          
          reader.onload = function() {
            const base64 = reader.result as string;
            const img = new Image();
            
            img.onload = function() {
              // Calculate dimensions to fit image properly
              const maxWidth = pageWidth - 40;
              const maxHeight = 120;
              let imgWidth = img.width;
              let imgHeight = img.height;
              
              // Scale image to fit
              if (imgWidth > maxWidth) {
                imgHeight = (imgHeight * maxWidth) / imgWidth;
                imgWidth = maxWidth;
              }
              if (imgHeight > maxHeight) {
                imgWidth = (imgWidth * maxHeight) / imgHeight;
                imgHeight = maxHeight;
              }
              
              // Center the image
              const x = (pageWidth - imgWidth) / 2;
              const y = yPosition + 20;
              
              // Add image border
              pdf.setDrawColor(200, 200, 200);
              pdf.rect(x - 2, y - 2, imgWidth + 4, imgHeight + 4, 'S');
              
              pdf.addImage(base64, 'JPEG', x, y, imgWidth, imgHeight);
              
              // Add additional images if available
              if (model.images && model.images.length > 0) {
                let currentY = y + imgHeight + 40;
                
                // Check if we need a new page
                if (currentY > pageHeight - 100) {
                  pdf.addPage();
                  currentY = 30;
                }
                
                let currentX = 20;
                let imagesPerRow = 2;
                let imageWidth = (pageWidth - 60) / imagesPerRow;
                let imageHeight = imageWidth * 1.2; // Maintain aspect ratio
                
                for (let i = 0; i < Math.min(model.images.length, 4); i++) {
                  try {
                    const imgResponse = await fetch(model.images[i]);
                    const imgBlob = await imgResponse.blob();
                    const imgReader = new FileReader();
                    
                    imgReader.onload = function() {
                      const imgBase64 = imgReader.result as string;
                      const img = new Image();
                      
                      img.onload = function() {
                        const col = i % imagesPerRow;
                        const row = Math.floor(i / imagesPerRow);
                        const xPos = currentX + (col * (imageWidth + 20));
                        const yPos = currentY + (row * (imageHeight + 20));
                        
                        // Add image border
                        pdf.setDrawColor(200, 200, 200);
                        pdf.rect(xPos - 1, yPos - 1, imageWidth + 2, imageHeight + 2, 'S');
                        
                        pdf.addImage(imgBase64, 'JPEG', xPos, yPos, imageWidth, imageHeight);
                        
                        // If this is the last image, save the PDF
                        if (i === Math.min(model.images.length, 4) - 1) {
                          pdf.save(`${model.firstName}_${model.lastName}_Portfolio.pdf`);
                        }
                      };
                      
                      img.src = imgBase64;
                    };
                    
                    imgReader.readAsDataURL(imgBlob);
                  } catch (error) {
                    console.error('Error loading image:', error);
                  }
                }
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
          // Save PDF without images
          pdf.save(`${model.firstName}_${model.lastName}_Portfolio.pdf`);
        }
      } else {
        // No main image, save the PDF
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
