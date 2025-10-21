'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, User, Mail, MapPin, Ruler, Weight, Camera, Instagram, Upload, X } from 'lucide-react';
import { uploadFileDirectToCloudinary } from '../../../../services/cloudinary-direct';
import { ErrorBoundary } from '../../../../components/ErrorBoundary';
import { NetworkStatus } from '../../../../components/NetworkStatus';

interface PortfolioItem {
  file: File;
  url?: string;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  height: string;
  weight: string;
  gender: string;
  instagram: string;
  portfolio: PortfolioItem[];
  experience: string;
  availability: string;
  additionalInfo: string;
}

export default function ModelApplicationClient() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    height: '',
    weight: '',
    gender: 'female',
    instagram: '',
    portfolio: [],
    experience: '',
    availability: '',
    additionalInfo: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Simple offline detection
  const [isOnline, setIsOnline] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    setIsOnline(navigator.onLine);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Simple form persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem('model-application-form');
      if (saved) {
        const parsedData = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsedData }));
      }
    } catch (error) {
      console.warn('Failed to load saved form data:', error);
    }
  }, []);

  // Save form data to localStorage
  const saveFormData = useCallback(() => {
    try {
      const dataToSave = { ...formData };
      // Save portfolio URLs instead of file objects
      if (formData.portfolio && formData.portfolio.length > 0) {
        dataToSave.portfolio = formData.portfolio.map(item => ({
          url: item.url,
          status: item.status,
          error: item.error
        }));
      }
      localStorage.setItem('model-application-form', JSON.stringify(dataToSave));
      setHasUnsavedChanges(false);
    } catch (error) {
      console.warn('Failed to save form data:', error);
    }
  }, [formData]);

  // Debounced save
  useEffect(() => {
    const timeoutId = setTimeout(saveFormData, 1000);
    return () => clearTimeout(timeoutId);
  }, [saveFormData]);

  // Clear saved data
  const clearSavedData = useCallback(() => {
    try {
      localStorage.removeItem('model-application-form');
      setHasUnsavedChanges(false);
    } catch (error) {
      console.warn('Failed to clear form data:', error);
    }
  }, []);

  const steps = [
    { number: 1, title: 'Informazioni Personali', icon: User },
    { number: 2, title: 'Contatti', icon: Mail },
    { number: 3, title: 'Caratteristiche Fisiche', icon: Ruler },
    { number: 4, title: 'Social Media', icon: Instagram },
    { number: 5, title: 'Portfolio', icon: Camera },
    { number: 6, title: 'Informazioni Aggiuntive', icon: User }
  ];

  // Inline validation function
  const validateField = (field: keyof FormData, value: string) => {
    const errors: Record<string, string> = { ...fieldErrors };
    
    switch (field) {
      case 'firstName':
      case 'lastName':
        if (!value || value.trim().length < 2) {
          errors[field] = 'Deve contenere almeno 2 caratteri';
        } else {
          delete errors[field];
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
          errors[field] = 'Inserisci un indirizzo email valido';
        } else {
          delete errors[field];
        }
        break;
      case 'phone':
        if (value && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
          errors[field] = 'Inserisci un numero di telefono valido';
        } else {
          delete errors[field];
        }
        break;
      case 'height':
        if (!value || !/^\d{3}$/.test(value.replace('cm', '').trim())) {
          errors[field] = 'Inserisci l\'altezza in cm (es. 170)';
        } else {
          delete errors[field];
        }
        break;
      case 'weight':
        if (value && !/^\d{2,3}$/.test(value.replace('kg', '').trim())) {
          errors[field] = 'Inserisci il peso in kg (es. 65)';
        } else {
          delete errors[field];
        }
        break;
      case 'instagram':
        if (value && !/^@?[a-zA-Z0-9._]+$/.test(value)) {
          errors[field] = 'Inserisci un username Instagram valido (es. @username)';
        } else {
          delete errors[field];
        }
        break;
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | File[] | PortfolioItem[] | null) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    setHasUnsavedChanges(true);
    
    // Validate field if it's a string
    if (typeof value === 'string') {
      validateField(field, value);
    }
  };

  const removePortfolioItem = (index: number) => {
    const newFormData = {
      ...formData,
      portfolio: formData.portfolio.filter((_, i) => i !== index)
    };
    setFormData(newFormData);
    setHasUnsavedChanges(true);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) {
      handleInputChange('portfolio', []);
      return;
    }

    // Check for files over 10MB
    const oversizedFiles = files.filter(file => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setErrorMessage('Alcune immagini sono troppo grandi (limite 10MB). Rimuovi le immagini più grandi e riprova.');
      return;
    }

    // Add files with uploading status
    const newPortfolioItems: PortfolioItem[] = files.map(file => ({
      file,
      status: 'uploading' as const
    }));
    
    // Add to existing portfolio
    const currentPortfolio = formData.portfolio || [];
    const updatedPortfolio = [...currentPortfolio, ...newPortfolioItems];
    handleInputChange('portfolio', updatedPortfolio);

    // Upload each file individually
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const itemIndex = currentPortfolio.length + i;
      
      try {
        const uploadResult = await uploadFileDirectToCloudinary(
          file,
          `velgance/portfolios/${formData.firstName.toLowerCase()}-${formData.lastName.toLowerCase()}`
        );
        
        // Update the specific item with success
        setFormData(prev => {
          const updatedItems = [...prev.portfolio];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            url: uploadResult.secure_url,
            status: 'success'
          };
          return { ...prev, portfolio: updatedItems };
        });
        
      } catch (error) {
        console.error('Error uploading file:', error);
        
        // Update the specific item with error
        setFormData(prev => {
          const updatedItems = [...prev.portfolio];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            status: 'error',
            error: 'Upload failed'
          };
          return { ...prev, portfolio: updatedItems };
        });
      }
    }
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.firstName.trim() !== '' && 
               formData.lastName && formData.lastName.trim() !== '';
      case 2:
        return formData.email && formData.email.trim() !== '' && 
               formData.location && formData.location.trim() !== '';
      case 3:
        return formData.height && formData.height.trim() !== '';
      case 4:
        return true; // Instagram is optional
      case 5:
        return formData.portfolio && Array.isArray(formData.portfolio) && 
               formData.portfolio.length > 0 && 
               formData.portfolio.some(item => item.status === 'success');
      case 6:
        return true; // All fields are optional
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length && validateCurrentStep()) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is offline
    if (!isOnline) {
      setErrorMessage('Non sei connesso a internet. La tua candidatura sarà salvata e inviata automaticamente quando tornerai online.');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage(null); // Clear previous errors
    
    try {
      // Get successfully uploaded portfolio URLs
      const portfolioUrls = formData.portfolio
        .filter(item => item.status === 'success' && item.url)
        .map(item => item.url!);

      // Send form data without files to server
      const formDataToSend = new FormData();
      
      // Add all form fields
      if (formData.firstName) formDataToSend.append('firstName', formData.firstName);
      if (formData.lastName) formDataToSend.append('lastName', formData.lastName);
      if (formData.email) formDataToSend.append('email', formData.email);
      if (formData.phone) formDataToSend.append('phone', formData.phone);
      if (formData.location) formDataToSend.append('location', formData.location);
      if (formData.height) formDataToSend.append('height', formData.height);
      if (formData.weight) formDataToSend.append('weight', formData.weight);
      if (formData.gender) formDataToSend.append('gender', formData.gender);
      if (formData.instagram) formDataToSend.append('instagram', formData.instagram);
      if (formData.experience) formDataToSend.append('experience', formData.experience);
      if (formData.availability) formDataToSend.append('availability', formData.availability);
      if (formData.additionalInfo) formDataToSend.append('additionalInfo', formData.additionalInfo);
      
      // Add portfolio URLs instead of files
      portfolioUrls.forEach((url, index) => {
        formDataToSend.append(`portfolio_url_${index}`, url);
      });
      formDataToSend.append('portfolio_count', portfolioUrls.length.toString());

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      const response = await fetch('/api/models/application', {
        method: 'POST',
        body: formDataToSend,
        signal: controller.signal,
        // Safari-specific headers
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
        },
        // Safari-specific options
        credentials: 'same-origin',
        mode: 'cors',
      });
      
      clearTimeout(timeoutId);

      if (response.ok) {
        const result = await response.json();
        console.log('API Response:', result); // Debug log
        if (result.success) {
          // Clear saved form data on successful submission
          clearSavedData();
          router.push('/models/application/success');
        } else {
          console.error('Application submission failed:', result.error);
          const errorMsg = typeof result.error === 'string' ? result.error : 'Errore nell\'invio della candidatura. Riprova.';
          setErrorMessage(errorMsg);
        }
      } else {
        try {
          const errorData = await response.json();
          console.error('Failed to submit application:', errorData);
          const errorMsg = typeof errorData.error === 'string' ? errorData.error : 'Errore nell\'invio della candidatura. Riprova.';
          setErrorMessage(errorMsg);
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
          setErrorMessage('Errore di connessione. Controlla la tua connessione internet e riprova. Se il problema persiste, contattaci a info@velgance.com');
        }
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrorMessage('Errore di connessione. Controlla la tua connessione internet e riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black ${
                  fieldErrors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {fieldErrors.firstName && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cognome *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black ${
                  fieldErrors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {fieldErrors.lastName && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genere *
              </label>
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                required
              >
                <option value="female">Donna</option>
                <option value="male">Uomo</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefono
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Città *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Altezza *
              </label>
              <input
                type="text"
                value={formData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                placeholder="es. 175cm o 5'9&quot;"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Peso
              </label>
              <input
                type="text"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                placeholder="es. 65kg o 143lbs"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram
              </label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => handleInputChange('instagram', e.target.value)}
                placeholder="es. @username o https://instagram.com/username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio (Foto) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Carica le tue migliori foto portfolio (minimo 3, massimo 10)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="portfolio-upload"
                  multiple
                  required
                />
                <label
                  htmlFor="portfolio-upload"
                  className="inline-block bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  Scegli Foto
                </label>
                {formData.portfolio.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-green-600 mb-2">
                      {formData.portfolio.length} foto selezionate:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                      {formData.portfolio.map((item, index) => (
                        <div key={index} className="relative w-40 rounded cursor-pointer" onClick={() => {
                          if (item.status === 'success' && item.url) {
                            setSelectedImage(item.url);
                          }
                        }}>
                          {/* Show image if uploaded successfully */}
                          {item.status === 'success' && item.url ? (
                            <>
                              <img 
                                src={item.url} 
                                alt="Uploaded image"
                                className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-200"
                              />
                              {/* Remove button - white background, black X */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removePortfolioItem(index);
                                }}
                                className="absolute top-0 right-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-sm hover:bg-gray-100 transform translate-x-1 -translate-y-1 border border-gray-300"
                              >
                                ×
                              </button>
                            </>
                          ) : (
                            <div className="w-40 h-40 rounded flex items-center justify-center text-sm text-gray-500 border border-gray-300">
                              Uploading...
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Photo Examples */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-black mb-4">Come fare le foto</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <h4 className="text-xs font-medium text-gray-700 mb-1">✅ Corretta</h4>
                    <img 
                      src="https://static.wixstatic.com/media/4da6c5_eeaa8f7161514610900d0dfff553ddf6~mv2.png" 
                      alt="Esempio foto corretta"
                      className="w-full max-w-[150px] sm:max-w-[300px] aspect-square mx-auto object-cover rounded-lg border border-gray-200"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Figura intera, buona illuminazione
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs font-medium text-gray-700 mb-1">📸 Esempio</h4>
                    <img 
                      src="https://static.wixstatic.com/media/4da6c5_3c4523a147bd4606bd1ff5815caef769~mv2.png" 
                      alt="Esempio foto"
                      className="w-full max-w-[150px] sm:max-w-[300px] aspect-square mx-auto object-top rounded-lg border border-gray-200"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Foto del corpo completo - Background Possibilmente Chiaro 
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-black mb-2">Consigli per la foto perfetta:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Usa una buona illuminazione naturale</li>
                    <li>• Sfondo neutro e pulito</li>
                    <li>• Foto a figura intera (dai piedi alla testa)</li>
                    <li>• Abbigliamento semplice e aderente</li>
                    <li>• Posizione naturale e rilassata</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Esperienza
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                placeholder="Descrivi la tua esperienza nel mondo della moda..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent h-24 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disponibilità
              </label>
              <textarea
                value={formData.availability}
                onChange={(e) => handleInputChange('availability', e.target.value)}
                placeholder="Descrivi la tua disponibilità per lavori e viaggi..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent h-24 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Informazioni Aggiuntive
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Qualsiasi altra informazione che vorresti condividere..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent h-24 text-black"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        {/* Network Status Banner */}
        <NetworkStatus isOnline={isOnline} hasUnsavedChanges={hasUnsavedChanges} />
        
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
              <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna alla Home
              </button>
          <h1 className="text-3xl font-light text-black italic" style={{ fontFamily: 'serif' }}>
            Candidati come Modello/a
          </h1>
          <p className="text-gray-600 mt-2">
            Unisciti al nostro team di modelli professionisti
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          {/* Progress Indicator - Hidden on mobile */}
          <div className="mb-6 hidden sm:block">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Passo {currentStep} di {steps.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / steps.length) * 100)}% completato
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number || (currentStep === 2 && step.number === 1);
              const isTextAbove = index % 2 === 0; // Alternate: even indices above, odd below
              
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {isTextAbove && (
                    <div className="mb-2 hidden sm:block">
                      <p className={`text-xs font-medium text-center ${
                        isActive ? 'text-black' : isCompleted ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  )}
                  
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isActive ? 'border-black bg-black text-white' :
                      isCompleted ? 'border-green-800 text-white' :
                      'border-gray-300 text-gray-400'
                    }`}
                    style={isCompleted ? { backgroundColor: '#166534' } : {}}
                  >
                    {isCompleted ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  
                  {!isTextAbove && (
                    <div className="mt-2 hidden sm:block">
                      <p className={`text-xs font-medium text-center ${
                        isActive ? 'text-black' : isCompleted ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  )}
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white">
          <div className={`mb-8 transition-all duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
          }`}>
            <h2 className="text-2xl font-light text-black mb-6 italic" style={{ fontFamily: 'serif' }}>
              {steps[currentStep - 1].title}
            </h2>
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Indietro
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateCurrentStep()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  validateCurrentStep()
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Avanti
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Candidatura'}
              </button>
            )}
          </div>
          
          {/* Error Message Display */}
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Portfolio image preview"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
      </div>
    </ErrorBoundary>
  );
}
