'use client';

import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, AlertCircle } from 'lucide-react';

interface NetworkStatusProps {
  isOnline: boolean;
  hasUnsavedChanges: boolean;
}

export function NetworkStatus({ isOnline, hasUnsavedChanges }: NetworkStatusProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowBanner(true);
      setWasOffline(true);
    } else if (wasOffline) {
      // Show reconnected message briefly
      setShowBanner(true);
      const timer = setTimeout(() => setShowBanner(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowBanner(false);
    }
  }, [isOnline, wasOffline]);

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`px-4 py-3 text-center text-sm font-medium ${
        !isOnline 
          ? 'bg-red-600 text-white' 
          : 'bg-green-600 text-white'
      }`}>
        <div className="flex items-center justify-center gap-2">
          {!isOnline ? (
            <>
              <WifiOff className="w-4 h-4" />
              <span>Connessione persa. I tuoi dati sono salvati localmente.</span>
            </>
          ) : (
            <>
              <Wifi className="w-4 h-4" />
              <span>Connessione ripristinata!</span>
            </>
          )}
        </div>
        
        {hasUnsavedChanges && !isOnline && (
          <div className="mt-2 flex items-center justify-center gap-2 text-xs">
            <AlertCircle className="w-3 h-3" />
            <span>I tuoi dati saranno inviati automaticamente quando tornerai online.</span>
          </div>
        )}
      </div>
    </div>
  );
}
