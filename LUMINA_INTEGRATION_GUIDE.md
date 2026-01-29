# Lumina Interactive List - Integration Guide

## ✅ Project Setup Verification

Your project is **fully configured** and ready:

- ✅ **shadcn/ui**: Configured in `packages/design-system` with components in `/components/ui`
- ✅ **Tailwind CSS 4**: Using `@import "tailwindcss"` in `globals.css`
- ✅ **TypeScript**: Fully configured across all packages
- ✅ **GSAP**: Already installed (`gsap@^3.13.0`)
- ✅ **lucide-react**: Already installed for icons

## 📦 Component Location

The component has been installed at:
```
packages/design-system/components/ui/lumina-interactive-list.tsx
```

## 🎨 CSS Variables Added

The following CSS variables have been added to `packages/design-system/styles/globals.css`:

```css
--font-mono: "PPSupplyMono", "Courier New", monospace;
--font-sans: "PP Neue Montreal", -apple-system, BlinkMacSystemFont, sans-serif;
--font-display: "Cormorant Garamond", Georgia, serif;
--color-bg: #0a0a0a;
--color-text: #ffffff;
--color-text-muted: rgba(255, 255, 255, 0.7);
--color-text-light: rgba(255, 255, 255, 0.5);
--color-accent: #d4af37;
--font-size-mono: clamp(10px, 1.2vw, 12px);
```

## 🚀 Usage

### Basic Usage

**Important**: The component is a Client Component, so your page must use `'use client'` directive:

```tsx
'use client';

import { LuminaInteractiveList } from '@repo/design-system';

export default function MyPage() {
  return <LuminaInteractiveList />;
}
```

### Demo Page

A complete demo page has been created at:
```
apps/web/app/[locale]/lumina-demo/page.tsx
```

Visit: `http://localhost:3001/lumina-demo` (after running `pnpm dev`)

## 🎯 Integration into Homepage

To integrate this component into your existing homepage (`apps/web/app/[locale]/(home)/page.tsx`), you have two options:

### Option 1: Replace the Hero Section

Replace the current image background section with the Lumina component:

```tsx
import { LuminaInteractiveList } from '@repo/design-system';

// In your Home component, replace the .homepage-video-container section with:
<LuminaInteractiveList />
```

### Option 2: Add as a New Section

Add it as a new section below your current hero:

```tsx
import { LuminaInteractiveList } from '@repo/design-system';

// Add after your current hero section:
<div className="relative">
  <LuminaInteractiveList />
</div>
```

## 🎨 Customization

### Changing Images

Edit the `slides` array in the component (line ~60):

```tsx
const slides = [
  { 
    title: "Your Title", 
    description: "Your description", 
    media: "https://your-image-url.jpg" 
  },
  // Add more slides...
];
```

### Adjusting Transition Speed

Modify the `SLIDER_CONFIG` settings (line ~40):

```tsx
settings: {
  transitionDuration: 2.5,  // Transition speed in seconds
  autoSlideSpeed: 5000,     // Auto-slide interval in milliseconds
  // ...
}
```

### Styling

The component uses scoped styles with `<style jsx>`. You can:

1. **Modify colors**: Change CSS variables in `:root`
2. **Adjust layout**: Modify the `.slide-content`, `.slides-navigation` classes
3. **Responsive behavior**: Edit the `@media` queries

## 🔧 Technical Details

### Dependencies

The component dynamically loads:
- **GSAP** (3.12.2) - For animations
- **Three.js** (r128) - For WebGL shader effects

These are loaded from CDN on component mount, so no additional installation is needed.

### Features

- ✨ **Glass morphism transition effects** between slides
- 🎭 **6 different text animations** (stagger up, down, blur, scale, rotate, slide)
- 🖱️ **Interactive navigation** with progress indicators
- 📱 **Fully responsive** design
- ⏱️ **Auto-play** with manual controls
- 🎨 **WebGL shaders** for smooth transitions

### Browser Compatibility

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Component not rendering

1. Ensure you're using `'use client'` directive at the top of your page
2. Check browser console for script loading errors
3. Verify WebGL is enabled in your browser

### Images not loading

1. Check image URLs are accessible
2. Verify CORS headers if using external images
3. Use Unsplash or similar CDN for reliable hosting

### Styles not applying

1. Ensure `globals.css` is imported in your layout
2. Check CSS variable names match
3. Verify Tailwind CSS is properly configured

## 📝 Next Steps

1. **Test the demo page**: Run `pnpm dev` and visit `/lumina-demo`
2. **Customize images**: Replace the Unsplash URLs with your model photos
3. **Integrate into homepage**: Choose one of the integration options above
4. **Adjust styling**: Modify colors and layout to match your brand

## 🎉 You're All Set!

The component is ready to use. The demo page shows it working with your existing header and menu system.

For questions or issues, check the component source code at:
`packages/design-system/components/ui/lumina-interactive-list.tsx`
