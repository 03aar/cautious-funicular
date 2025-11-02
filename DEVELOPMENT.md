# Development Guide

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database

Create a PostgreSQL database:
```bash
createdb oops
```

Update `.env`:
```env
DATABASE_URL="postgresql://localhost:5432/oops"
```

Push schema:
```bash
npx prisma db push
```

### 3. Run Development Server
```bash
npm run dev
```

## Development Workflow

### Creating New Components

All components follow these principles:

1. **Minimal props** — Only what's essential
2. **TypeScript** — Full type safety
3. **Tailwind classes** — No custom CSS unless necessary
4. **Design system values** — Only approved colors, spacing, typography

Example:
```tsx
interface MyComponentProps {
  title: string
  onClick?: () => void
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <button
      onClick={onClick}
      className="h-[48px] px-24 bg-foreground text-background hover:bg-[#1A1A1A] transition-colors duration-200"
    >
      {title}
    </button>
  )
}
```

### Color Usage

**ONLY use these values:**

```tsx
// Backgrounds
bg-background       // #FFFFFF
bg-foreground       // #000000
bg-hover           // rgba(0,0,0,0.03)

// Text
text-foreground    // #000000
text-background    // #FFFFFF (for dark backgrounds)
text-secondary     // #8E8E93

// Borders
border-foreground  // #000000
border-divider     // #E5E5E5
```

### Typography

**ONLY use these sizes:**

```tsx
text-12  // Metadata, hints
text-14  // Body text, UI
text-16  // Emphasized UI
text-20  // Section headers
text-24  // Page titles
text-32  // Main headings
```

**ONLY use these weights:**

```tsx
font-normal    // 400
font-medium    // 500
font-semibold  // 600
```

### Spacing

**ONLY use these values:**

```tsx
4    // 4px
8    // 8px
16   // 16px
24   // 24px
40   // 40px
64   // 64px
```

Example:
```tsx
<div className="px-40 py-24 gap-16">
  {/* content */}
</div>
```

### Animations

**Standard Transitions:**

```tsx
// Fade
className="transition-opacity duration-200 ease-out"

// Lift (hover)
className="transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lift"

// Slide
className="transition-transform duration-300 ease-out"
```

**Framer Motion:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  {/* content */}
</motion.div>
```

## Database

### Making Schema Changes

1. Edit `prisma/schema.prisma`
2. Push changes:
```bash
npx prisma db push
```

3. Generate client:
```bash
npx prisma generate
```

### Viewing Data

```bash
npx prisma studio
```

## Testing Locally

### Manual Testing Checklist

**Launch Sequence:**
- [ ] Logo fades in smoothly (0-2s)
- [ ] Wordmark appears (2-3s)
- [ ] Transitions to auth (3-4s)
- [ ] All animations are smooth 60fps

**Authentication:**
- [ ] Email input has proper focus styles
- [ ] Enter key submits form
- [ ] Error states show correctly
- [ ] Sign in/up flows work

**Onboarding:**
- [ ] Questions appear sequentially
- [ ] Selection animates smoothly
- [ ] Auto-advances after selection
- [ ] Skip button works
- [ ] Progress indicator shows

**Main App:**
- [ ] Sidebar navigation works
- [ ] Header search focuses with Cmd+K
- [ ] Create button shows menu
- [ ] Avatar displays correctly

**Design System:**
- [ ] Only black and white colors used
- [ ] No emojis anywhere
- [ ] Spacing follows 8-point system
- [ ] Typography uses approved sizes
- [ ] Animations are subtle and smooth

## Performance

### Goals
- First paint < 1s
- Time to interactive < 2s
- 60fps animations
- Search results < 200ms

### Optimization Checklist
- [ ] Use Next.js Image for all images
- [ ] Lazy load components when possible
- [ ] Minimize bundle size
- [ ] Use React.memo for expensive components
- [ ] Implement virtual scrolling for long lists

## Common Tasks

### Add a New Page

1. Create file in `src/app/app/[page-name]/page.tsx`
2. Add to navigation in `src/components/layout/Sidebar.tsx`
3. Test navigation
4. Add to sitemap if public

### Add a New API Route

1. Create file in `src/app/api/[route]/route.ts`
2. Implement GET/POST/etc handlers
3. Add error handling
4. Test with real data

### Add Database Model

1. Edit `prisma/schema.prisma`
2. Add relations
3. Run `npx prisma db push`
4. Update types if needed

## Debugging

### Database Issues

```bash
# Reset database
npx prisma migrate reset

# View logs
npx prisma studio
```

### TypeScript Errors

```bash
# Check types
npx tsc --noEmit
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## Code Style

### File Organization

```tsx
// 1. Imports
import { useState } from 'react'
import { motion } from 'framer-motion'

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Component
export function Component({ ...props }: Props) {
  // 4. State
  const [state, setState] = useState()

  // 5. Effects
  useEffect(() => {}, [])

  // 6. Handlers
  const handleClick = () => {}

  // 7. Render
  return (
    // ...
  )
}

// 8. Sub-components
function SubComponent() {
  // ...
}
```

### Naming Conventions

- **Components**: PascalCase (MyComponent)
- **Files**: PascalCase for components (MyComponent.tsx)
- **Functions**: camelCase (handleClick)
- **Constants**: UPPER_SNAKE_CASE (MAX_ITEMS)
- **CSS Classes**: kebab-case (button-primary)

### Comments

Only add comments when code cannot be self-documenting:

```tsx
// Good: Self-documenting
const isUserAuthenticated = user !== null

// Bad: Unnecessary comment
const isAuth = user !== null // Check if user is authenticated
```

## Git Workflow

### Commits

Use conventional commits:

```bash
feat: add document editor
fix: resolve sidebar navigation bug
docs: update README
style: format code
refactor: simplify auth flow
perf: optimize search performance
```

### Branches

- `main` — Production
- `claude/*` — Feature branches (auto-created)

## Deployment

### Vercel (Recommended)

1. Connect GitHub repo
2. Add environment variables
3. Deploy

Environment variables needed:
- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `OPENAI_API_KEY` (when ready)

## Troubleshooting

### "Module not found"
```bash
npm install
```

### "Database connection failed"
Check `.env` file and ensure PostgreSQL is running

### "Prisma client out of sync"
```bash
npx prisma generate
```

### "Type errors"
```bash
rm -rf .next
npm run dev
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Tiptap](https://tiptap.dev)

---

Remember: **Simplicity is the ultimate sophistication.**
