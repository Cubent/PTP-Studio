# 🔧 Lumina Interactive List - Troubleshooting

## Common Issues & Solutions

### ❌ Error: "You're importing a component that needs `useEffect`"

**Problem**: Missing `'use client'` directive

**Solution**: Add `'use client'` at the top of your page:

```tsx
'use client';  // ← Add this line

import { LuminaInteractiveList } from '@repo/design-system';

export default function MyPage() {
  return <LuminaInteractiveList />;
}
```

**Note**: The component itself already has `'use client'`, but your page needs it too if it's in the App Router.

---

### ❌ Component Not Rendering / Black Screen

**Possible Causes**:

1. **Scripts not loading**
   - Check browser console for errors
   - Verify internet connection (GSAP and Three.js load from CDN)
   - Try refreshing the page

2. **WebGL not supported**
   - Check if WebGL is enabled: Visit `https://get.webgl.org/`
   - Try a different browser (Chrome, Firefox, Safari, Edge)

3. **Images not loading**
   - Check browser Network tab
   - Verify image URLs are accessible
   - Check CORS headers if using external images

**Solution**:
```tsx
// Add error boundary
'use client';

import { LuminaInteractiveList } from '@repo/design-system';
import { useEffect, useState } from 'react';

export default function MyPage() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setHasError(true);
      console.error('WebGL not supported');
    }
  }, []);

  if (hasError) {
    return <div>Your browser doesn't support WebGL. Please use a modern browser.</div>;
  }

  return <LuminaInteractiveList />;
}
```

---

### ❌ Styles Not Applying

**Problem**: CSS variables not loaded

**Solution**: Ensure `globals.css` is imported in your layout:

```tsx
// apps/web/app/layout.tsx
import './[locale]/styles.css';  // This imports globals.css
```

**Verify**: Check if these variables exist in `packages/design-system/styles/globals.css`:
- `--font-mono`
- `--font-display`
- `--color-accent`

---

### ❌ Images Not Loading

**Problem**: Invalid URLs or CORS issues

**Solutions**:

1. **Use Unsplash URLs** (no CORS issues):
   ```tsx
   media: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800"
   ```

2. **Use your own hosted images**:
   ```tsx
   media: "/images/model-1.jpg"  // From public folder
   ```

3. **Check image format**:
   - Supported: JPG, PNG, WebP
   - Recommended: WebP for best performance

---

### ❌ Slow Performance / Laggy Animations

**Solutions**:

1. **Optimize images**:
   - Use WebP format
   - Resize to max 1920x1080
   - Compress images (use tools like TinyPNG)

2. **Reduce slides**:
   ```tsx
   // Keep 4-6 slides maximum
   const slides = [
     // ... 4-6 slides only
   ];
   ```

3. **Disable auto-play on mobile**:
   ```tsx
   // In component settings
   autoSlideSpeed: window.innerWidth < 768 ? 0 : 5000,
   ```

4. **Lower transition quality**:
   ```tsx
   settings: {
     globalIntensity: 0.7,  // Lower from 1.0
     distortionStrength: 0.7,
   }
   ```

---

### ❌ Text Not Animating

**Problem**: GSAP not loaded

**Solution**: Check browser console for script loading errors

**Manual fix**:
```tsx
// Add to your page
useEffect(() => {
  const checkGSAP = setInterval(() => {
    if (window.gsap) {
      console.log('GSAP loaded successfully');
      clearInterval(checkGSAP);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(checkGSAP);
    if (!window.gsap) {
      console.error('GSAP failed to load');
    }
  }, 10000);
}, []);
```

---

### ❌ Navigation Not Working

**Problem**: Click events not registering

**Solutions**:

1. **Check z-index conflicts**:
   ```css
   /* Ensure navigation has high z-index */
   .slides-navigation {
     z-index: 10 !important;
   }
   ```

2. **Verify event listeners**:
   - Open browser DevTools
   - Check Console for JavaScript errors
   - Try clicking different areas

---

### ❌ Mobile Issues

**Common mobile problems**:

1. **Touch not working**:
   - Component uses click events (works on mobile)
   - Ensure no other elements are blocking touches

2. **Layout broken**:
   - Check responsive styles in component
   - Test on actual device, not just browser DevTools

3. **Performance issues**:
   - Reduce image sizes
   - Disable auto-play on mobile
   - Use fewer slides (4 max on mobile)

**Mobile optimization**:
```tsx
// Detect mobile and adjust settings
const isMobile = window.innerWidth < 768;

const slides = isMobile 
  ? originalSlides.slice(0, 4)  // Only 4 slides on mobile
  : originalSlides;
```

---

### ❌ Build Errors

**Problem**: TypeScript or build errors

**Solutions**:

1. **Clear cache and rebuild**:
   ```bash
   pnpm clean
   pnpm install
   pnpm dev
   ```

2. **Check TypeScript**:
   ```bash
   cd packages/design-system
   npx tsc --noEmit
   ```

3. **Verify imports**:
   ```tsx
   // Correct import
   import { LuminaInteractiveList } from '@repo/design-system';
   
   // NOT this
   import { LuminaInteractiveList } from '@repo/design-system/components/ui/lumina-interactive-list';
   ```

---

### ❌ Deployment Issues

**Problem**: Works locally but not in production

**Solutions**:

1. **Check environment**:
   - Ensure Node.js version matches (>=18)
   - Verify all dependencies are installed

2. **Build locally first**:
   ```bash
   pnpm build
   ```

3. **Check CDN access**:
   - Ensure production server can access CDN URLs
   - GSAP: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
   - Three.js: `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`

---

## 🆘 Still Having Issues?

### Debug Checklist

- [ ] Browser console shows no errors
- [ ] WebGL is supported and enabled
- [ ] Images are loading (check Network tab)
- [ ] GSAP and Three.js scripts loaded
- [ ] `'use client'` directive is present
- [ ] CSS variables are defined
- [ ] Component is imported correctly

### Get More Help

1. **Check the documentation**:
   - `LUMINA_INTEGRATION_GUIDE.md`
   - `HOMEPAGE_INTEGRATION_STEPS.md`
   - `LUMINA_COMPONENT_SUMMARY.md`

2. **Inspect the component**:
   - File: `packages/design-system/components/ui/lumina-interactive-list.tsx`
   - Look for console.log statements
   - Add your own debug logs

3. **Test the demo page**:
   - Visit `/lumina-demo`
   - If demo works but your page doesn't, compare the code

### Debug Mode

Add this to your page to enable debug logging:

```tsx
useEffect(() => {
  console.log('Component mounted');
  console.log('GSAP available:', !!window.gsap);
  console.log('THREE available:', !!window.THREE);
  console.log('WebGL supported:', (() => {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  })());
}, []);
```

---

## ✅ Prevention Tips

1. **Always test in multiple browsers**
2. **Test on actual mobile devices**
3. **Optimize images before using**
4. **Keep slides count reasonable (4-6)**
5. **Monitor browser console for warnings**
6. **Test build before deploying**

---

**Most issues are solved by**:
1. Adding `'use client'` directive
2. Checking browser console
3. Verifying image URLs
4. Testing WebGL support

Good luck! 🚀
