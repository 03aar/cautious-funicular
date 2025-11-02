# Contributing to Oops

Thank you for your interest in contributing to Oops. This project follows strict design principles inspired by Jobs and Ive.

## Philosophy

Before contributing, understand our core principles:

### 1. Simplicity is the Ultimate Sophistication

Every feature, every line of code, every pixel must justify its existence.

**Ask yourself:**
- Can this be removed?
- Can this be combined with something else?
- Is there a simpler way?

### 2. No Decoration, Only Design

We don't add things to make it look better. We remove things until it works perfectly.

**This means:**
- No emojis
- No gradients
- No unnecessary animations
- No decorative elements

### 3. One Clear Path

Each task should have exactly one way to accomplish it.

**This means:**
- No duplicate functionality
- No multiple ways to do the same thing
- Clear, obvious interactions

### 4. Respect Intelligence

Our users are smart. We don't need to:
- Over-explain things
- Add excessive tutorials
- Dumb down the interface

## Design System

### Colors

**ONLY these 5 values are allowed:**

```
#FFFFFF — Background (pure white)
#000000 — Foreground (pure black)
#8E8E93 — Secondary (gray, metadata only)
#E5E5E5 — Divider (barely visible)
rgba(0,0,0,0.03) — Hover state
```

**No other colors. Ever.**

### Typography

**ONLY these sizes:**
- 12px — Metadata, hints
- 14px — Body text
- 16px — Emphasized UI
- 20px — Section headers
- 24px — Page titles
- 32px — Main headings

**ONLY these weights:**
- 400 — Regular
- 500 — Medium
- 600 — Semibold

**Font family:**
- SF Pro (preferred)
- Inter (fallback)

### Spacing

**ONLY use 8-point system:**
- 4px
- 8px
- 16px
- 24px
- 40px
- 64px

### Animations

**ONLY these three:**

1. **Fade**: 200ms ease-out, opacity 0→1
2. **Lift**: 200ms ease-out, translateY -2px + shadow
3. **Slide**: 300ms ease-out, translateX

**No:**
- Bounce effects
- Spin animations
- Complex easing
- Unnecessary motion

## Code Standards

### Component Structure

```tsx
interface ComponentProps {
  // Required props first
  title: string
  onClick: () => void
  // Optional props last
  className?: string
}

export function Component({ title, onClick, className }: ComponentProps) {
  // 1. State
  const [state, setState] = useState()

  // 2. Effects
  useEffect(() => {}, [])

  // 3. Handlers
  const handleClick = () => onClick()

  // 4. Render
  return (
    <div className={cn('base-classes', className)}>
      {title}
    </div>
  )
}
```

### TypeScript

- **Always** use TypeScript
- **Never** use `any`
- **Always** define prop interfaces
- **Prefer** type inference when obvious

### Styling

- **Use** Tailwind utility classes
- **Avoid** custom CSS unless absolutely necessary
- **Follow** design system values strictly
- **No** inline styles

### File Organization

```
src/
├── components/
│   ├── feature/         # Feature-specific components
│   │   └── Component.tsx
│   └── ui/              # Reusable UI components
│       └── Button.tsx
├── app/                 # Pages
│   └── page.tsx
└── lib/                 # Utilities
    └── utils.ts
```

## Pull Request Process

### Before Submitting

1. **Test thoroughly**
   - [ ] All features work
   - [ ] No console errors
   - [ ] Design system compliance
   - [ ] Keyboard navigation works
   - [ ] Mobile responsive

2. **Run checks**
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run build
   ```

3. **Review checklist**
   - [ ] No emojis added
   - [ ] Only approved colors used
   - [ ] Only approved spacing values
   - [ ] Only approved typography
   - [ ] Animations are minimal
   - [ ] Code is simple and clear
   - [ ] No unnecessary complexity

### The Ive Standard

Before submitting, ask:

- [ ] Can we remove this entirely?
- [ ] Can we combine this with something else?
- [ ] Does this add complexity?
- [ ] Would Steve understand it immediately?
- [ ] Is there a simpler way?
- [ ] Does this feel inevitable?
- [ ] Would we want to use this ourselves?

If any answer is "no," rework it.

### The Jobs Standard

Before submitting, ask:

- [ ] Does this make the user more powerful?
- [ ] Does this "just work"?
- [ ] Is this insanely great?
- [ ] Would this make someone switch tools?
- [ ] Is this the best version of this idea?
- [ ] Does this advance the vision?
- [ ] Would I demo this on stage?

If any answer is "no," it's not ready.

## What We Accept

### Good Contributions

✅ Bug fixes that simplify code
✅ Performance improvements
✅ Accessibility enhancements
✅ Code simplification
✅ Documentation improvements
✅ Feature implementations (following design)

### What We Reject

❌ New colors or gradients
❌ Emojis anywhere
❌ Unnecessary animations
❌ Decorative elements
❌ Complex abstractions
❌ Feature bloat
❌ Design system violations

## Code Review

All contributions will be reviewed for:

1. **Design System Compliance**
   - Colors, typography, spacing
   - No violations allowed

2. **Code Quality**
   - Simple, readable code
   - Proper TypeScript usage
   - No unnecessary complexity

3. **Performance**
   - Fast, optimized
   - No performance regressions

4. **Philosophy Alignment**
   - Does it make things simpler?
   - Does it serve the user?
   - Does it feel inevitable?

## Getting Help

Have questions? Ask before implementing:

- Design questions → Check design system first
- Technical questions → Check documentation
- Philosophical questions → Read the vision

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Remember: **Every pixel serves the work, not the interface.**
