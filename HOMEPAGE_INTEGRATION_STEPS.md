# Quick Homepage Integration Steps

## Option 1: Replace Current Hero (Recommended)

Replace your current image background with the interactive slider:

### Step 1: Import the Component

At the top of `apps/web/app/[locale]/(home)/page.tsx`, add:

**Note**: Your homepage already has `'use client'` directive, so you're good to go!

```tsx
import { LuminaInteractiveList } from '@repo/design-system';
```

### Step 2: Replace the Hero Section

Find this section (around line 400):

```tsx
{/* Image Background Section */}
<div className="homepage-video-container">
  <img src="..." alt="Background" className="homepage-video" />
  {/* ... rest of hero content ... */}
</div>
```

Replace it with:

```tsx
{/* Lumina Interactive Slider */}
<div className="relative">
  {/* Keep your header */}
  <div className="homepage-header">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-gray-300 transition-colors duration-300">
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
    <Link href="/" className="text-white text-xl font-light hover:text-gray-300 transition-colors duration-300">
      Velgance Models
    </Link>
  </div>

  {/* Keep your right button */}
  <div className="homepage-right-button">
    <Link href="/models/application" className="text-white px-6 py-3 font-medium hover:text-gray-300 transition-colors duration-300">
      Get Scouted
    </Link>
  </div>

  {/* The interactive slider */}
  <LuminaInteractiveList />
</div>
```

### Step 3: Update Images

Edit `packages/design-system/components/ui/lumina-interactive-list.tsx` (around line 60) to use your model photos:

```tsx
const slides = [
  { 
    title: "ESSENCE for NUMÉRO 255", 
    description: "Europe's Leading Agency for Models", 
    media: "https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/45220/600/45220_000-9-15-2025-1757963889218.jpg" 
  },
  { 
    title: "ARIUB for MANIFESTO", 
    description: "Creating High-Impact Campaigns", 
    media: "https://s3.amazonaws.com/media-ima002.globaltalentsystems.com/52039/600/52039_000-3-19-2024-1710866296162.jpg" 
  },
  // Add more slides from your projects array...
];
```

## Option 2: Add as New Section

Keep your current hero and add the slider as a new section:

### Step 1: Import

```tsx
import { LuminaInteractiveList } from '@repo/design-system';
```

### Step 2: Add After Hero

After your current hero section (before "Our Latest Work"), add:

```tsx
{/* Interactive Portfolio Slider */}
<section className="relative">
  <LuminaInteractiveList />
</section>
```

## 🎨 Customization Tips

### Match Your Brand Colors

Edit the CSS variables in the component or override them:

```tsx
<div style={{
  '--color-accent': '#your-brand-color',
  '--font-display': 'your-font-family'
} as React.CSSProperties}>
  <LuminaInteractiveList />
</div>
```

### Adjust Height

The slider is full viewport height by default. To change:

```tsx
<div className="h-screen md:h-[80vh]">
  <LuminaInteractiveList />
</div>
```

### Disable Auto-Play

In the component file, change:

```tsx
settings: {
  autoSlideSpeed: 0,  // Set to 0 to disable auto-play
  // ...
}
```

## 🚀 Testing

1. Run the development server:
   ```bash
   pnpm dev
   ```

2. Visit your homepage:
   ```
   http://localhost:3001
   ```

3. Test the demo page first:
   ```
   http://localhost:3001/lumina-demo
   ```

## 📱 Mobile Optimization

The component is already responsive, but you can adjust breakpoints in the `@media` queries within the component's `<style jsx>` section.

## ⚡ Performance Tips

1. **Optimize images**: Use WebP format and appropriate sizes
2. **Lazy load**: The component already lazy-loads Three.js and GSAP
3. **Reduce slides**: 4-6 slides is optimal for performance

## 🎯 Next Actions

- [ ] Test the demo page (`/lumina-demo`)
- [ ] Choose integration option (replace or add)
- [ ] Update slide images with your model photos
- [ ] Customize colors and fonts
- [ ] Test on mobile devices
- [ ] Deploy and enjoy! 🎉
