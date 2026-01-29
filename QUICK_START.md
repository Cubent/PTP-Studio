# 🚀 Lumina Interactive List - Quick Start

## ⚡ 3-Minute Setup

### 1️⃣ Start Dev Server
```bash
pnpm dev
```

### 2️⃣ View Demo
Open browser: `http://localhost:3001/lumina-demo`

### 3️⃣ Use in Your Page
**Important**: Add `'use client'` directive at the top!

```tsx
'use client';

import { LuminaInteractiveList } from '@repo/design-system';

export default function Page() {
  return <LuminaInteractiveList />;
}
```

## 🎨 Customize Images (5 minutes)

Edit: `packages/design-system/components/ui/lumina-interactive-list.tsx`

Find line ~60:
```tsx
const slides = [
  { 
    title: "Your Title", 
    description: "Your description", 
    media: "https://your-image.jpg" 
  },
  // Add 4-6 slides total
];
```

## 📍 Where to Put It

### Replace Hero (Recommended)
In `apps/web/app/[locale]/(home)/page.tsx`:

```tsx
import { LuminaInteractiveList } from '@repo/design-system';

// Replace the .homepage-video-container section with:
<LuminaInteractiveList />
```

### Add New Section
```tsx
{/* After your current hero */}
<section className="relative">
  <LuminaInteractiveList />
</section>
```

## 🎯 Key Features

- ✨ Glass morphism transitions
- 🎭 6 different text animations
- 🖱️ Click to navigate
- ⏱️ Auto-play (5s per slide)
- 📱 Fully responsive

## 🔧 Quick Tweaks

### Change Auto-Play Speed
```tsx
// In component, line ~40
autoSlideSpeed: 5000,  // milliseconds
```

### Change Transition Speed
```tsx
transitionDuration: 2.5,  // seconds
```

### Change Accent Color
```tsx
// In globals.css or inline
--color-accent: #your-color;
```

## 📚 Full Documentation

- **Complete Guide**: `LUMINA_INTEGRATION_GUIDE.md`
- **Step-by-Step**: `HOMEPAGE_INTEGRATION_STEPS.md`
- **Summary**: `LUMINA_COMPONENT_SUMMARY.md`

## ✅ Checklist

- [ ] Run `pnpm dev`
- [ ] Visit `/lumina-demo`
- [ ] Update slide images
- [ ] Integrate into homepage
- [ ] Test on mobile
- [ ] Deploy! 🎉

## 🆘 Need Help?

1. Check browser console for errors
2. Verify WebGL is enabled
3. Ensure images are accessible
4. Read `LUMINA_INTEGRATION_GUIDE.md`

---

**That's it!** Your interactive slider is ready to go. 🚀✨
