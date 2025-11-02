# Oops

**Work as one.**

A unified real-time workspace platform built under the principles of Jobs & Ive: Simplicity, Inevitability, and Quiet Perfection.

## Vision

Oops replaces disconnected tools like Notion, Asana, and Slack with one fluid canvas where teams can write documents, assign tasks, chat, visualize workflows, and make decisions together — all in a single multiplayer environment, powered by AI.

## Design Philosophy

- **Simplicity First**: Every pixel serves the work, not the interface
- **Black & White**: Pure minimalism with only 5 color values
- **No Emojis**: Clean, professional, timeless
- **One Path**: Each action has exactly one clear way to do it
- **Keyboard > Mouse**: Power users never touch the mouse
- **Invisible AI**: Intelligence that supports without interrupting

## Tech Stack

### Frontend
- **Next.js 14+** (App Router) with TypeScript
- **Tailwind CSS** (custom config for black/white design system)
- **Framer Motion** (minimal, purposeful animations)
- **Tiptap** (document editing)
- **CMDK** (command palette)
- **Lucide React** (minimal icon usage)

### Backend
- **Next.js API Routes** / Server Actions
- **PostgreSQL** (database)
- **Prisma** (ORM)
- **NextAuth.js** (authentication)

### Future Integrations
- OpenAI API (AI features)
- Pusher/Supabase (real-time collaboration)
- Uploadthing (file storage)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cautious-funicular
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your database URL and other credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/oops"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

4. Set up the database:
```bash
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth routes
│   │   │   └── auth/          # Login/signup
│   │   ├── (app)/             # Main app routes
│   │   │   └── app/           # Dashboard, work, chat
│   │   ├── onboarding/        # Onboarding flow
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── launch/            # Launch sequence animation
│   │   ├── onboarding/        # Onboarding question cards
│   │   ├── layout/            # Sidebar, header
│   │   ├── editor/            # Document editor (Tiptap)
│   │   ├── search/            # Command palette
│   │   └── ui/                # Base UI components
│   └── lib/
│       ├── db.ts              # Prisma client
│       └── utils.ts           # Utilities
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
└── package.json
```

## Design System

### Colors (5 values only)
```css
background: #FFFFFF (pure white)
text: #000000 (pure black)
secondary: #8E8E93 (gray for metadata)
divider: #E5E5E5 (barely visible)
hover: rgba(0,0,0,0.03) (black 3% opacity)
```

### Typography
- **Font**: SF Pro / Inter
- **Sizes**: 12px, 14px, 16px, 20px, 24px, 32px
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)

### Spacing (8-point system)
- 4px, 8px, 16px, 24px, 40px, 64px

### Animations
- **Fade**: 200ms ease-out
- **Lift**: 200ms ease-out (translateY + shadow)
- **Slide**: 300ms ease-out

## Features Implemented

### ✅ Phase 1: Foundation
- [x] Launch sequence with logo animation
- [x] Authentication flow (email/password)
- [x] Onboarding (3 essential questions)
- [x] Main app layout with sidebar and header
- [x] Homepage with intelligent workspace input
- [x] Design system (Tailwind config)
- [x] Database schema (Prisma)

### ✅ Phase 2: Core Interface
- [x] Unified navigation (Home, All Work, Chat, You)
- [x] "All Work" stream view
- [x] Document editor foundation (Tiptap)
- [x] Command palette (Cmd+K) foundation
- [x] Responsive layout system

### 🚧 Phase 3: Coming Next
- [ ] Real-time document collaboration
- [ ] Board/Kanban view with drag-and-drop
- [ ] Task management
- [ ] Contextual chat
- [ ] AI integration (Flow AI)
- [ ] Calendar view
- [ ] Settings & workspace management

## User Flow

### First Launch Experience
1. **Launch Sequence** (0-4s)
   - Black screen
   - White logo fades in
   - "Oops" wordmark reveals
   - Transforms to product

2. **Authentication**
   - Minimal email input
   - "Work as one" tagline
   - Sign in or sign up flow

3. **Onboarding** (3 questions)
   - What brings you to Oops?
   - How many people are on your team?
   - What matters most?

4. **Homepage**
   - Simple input: "What would you like to work on?"
   - AI interprets intent
   - Create workspace instantly

## Development

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Database Commands
```bash
# Push schema changes
npm run db:push

# Open Prisma Studio
npm run db:studio
```

### Linting
```bash
npm run lint
```

## Design Principles in Code

### 1. Simplicity First
Every component is stripped to its essence. No unnecessary props, no over-engineering.

### 2. One Path
Each feature has one clear implementation. No multiple ways to do the same thing.

### 3. Keyboard-First
All actions have keyboard shortcuts. Mouse is optional.

### 4. Performance
- 60fps animations
- Optimistic UI updates
- Local-first where possible

### 5. Accessibility
- Semantic HTML
- Keyboard navigation
- Screen reader support

## Color Usage Guidelines

```typescript
// Background (only for page/card backgrounds)
className="bg-background"

// Text (default, primary)
className="text-foreground"

// Text (metadata, hints, labels)
className="text-secondary"

// Borders (dividers, separators)
className="border-divider"

// Hover states
className="hover:bg-hover"
```

## Animation Guidelines

```typescript
// Fade in
className="animate-fade-in"

// Lift on hover (cards, buttons)
className="animate-lift"

// Slide in (modals, panels)
className="animate-slide-in"
```

Always respect `prefers-reduced-motion`.

## Component Guidelines

### Buttons
```tsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
```

### Inputs
```tsx
<Input
  type="email"
  placeholder="Email address"
  error={hasError}
/>
```

### Logo
```tsx
<Logo size="sm" />  // 28px - header
<Logo size="md" />  // 48px - auth pages
<Logo size="lg" />  // 120px - launch
```

## Keyboard Shortcuts

- `Cmd/Ctrl + K` — Search / Command Palette
- `Cmd/Ctrl + N` — New document
- `Cmd/Ctrl + /` — Show shortcuts
- `Esc` — Close modal/panel
- `/` — Slash commands (in documents)

## Database Schema

### Core Models
- **User**: Authentication and profile
- **Workspace**: Team workspace
- **WorkspaceMember**: Membership and roles
- **Document**: Rich text documents
- **Board**: Kanban boards
- **Task**: Individual tasks
- **Conversation**: Contextual chat
- **Message**: Chat messages

See `prisma/schema.prisma` for full schema.

## Contributing

This project follows strict design principles. Before contributing:

1. Read the design philosophy
2. Understand the Jobs-Ive principles
3. Ask: "Can this be simpler?"
4. No emojis, no decoration, no unnecessary complexity

## The Ive Standard Checklist

Before shipping any feature:

- [ ] Can we remove this entirely?
- [ ] Can we combine this with something else?
- [ ] Does this add complexity?
- [ ] Would Steve understand it immediately?
- [ ] Is there a simpler way?
- [ ] Does this feel inevitable?
- [ ] Would we want to use this ourselves?

## The Jobs Standard Checklist

Before shipping any feature:

- [ ] Does this make the user more powerful?
- [ ] Does this "just work"?
- [ ] Is this insanely great?
- [ ] Would this make someone switch from their current tool?
- [ ] Is this the best version of this idea?
- [ ] Does this advance the vision?
- [ ] Would I demo this on stage?

## Future Roadmap

### Phase 3: Collaboration
- Real-time multiplayer editing
- Presence indicators (cursors, avatars)
- Contextual conversations
- @mentions and notifications

### Phase 4: Intelligence
- AI-powered summaries
- Smart task generation
- Predictive insights
- Natural language commands

### Phase 5: Enterprise
- SSO and advanced security
- Admin controls
- Audit logs
- Custom integrations
- API access

## License

Proprietary - All rights reserved

---

**Oops** — Work as one.
