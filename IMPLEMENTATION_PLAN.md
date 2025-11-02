# Oops - Implementation Plan

## Vision
A unified real-time workspace under the principles of Jobs & Ive: Simplicity, Inevitability, and Quiet Perfection.

## Tech Stack

### Frontend
- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS (custom config for black/white design system)
- **Animation**: Framer Motion (minimal, purposeful)
- **Rich Text**: Tiptap (for document editing)
- **Drag & Drop**: @dnd-kit/core
- **State Management**: Zustand (minimal, local-first)
- **Real-time**: Pusher or Supabase Realtime
- **Icons**: Lucide React (minimal usage)

### Backend
- **API**: Next.js API Routes / Server Actions
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **File Storage**: Uploadthing or Supabase Storage
- **AI**: OpenAI API (GPT-4)
- **Real-time**: Pusher or Supabase

### Infrastructure
- **Hosting**: Vercel
- **Database**: Supabase or Railway
- **CDN**: Vercel Edge Network
- **Monitoring**: Vercel Analytics

## Design System

### Colors (5 values only)
```
background: #FFFFFF
text: #000000
secondary: #8E8E93
divider: #E5E5E5
hover: #00000008 (black 3% opacity)
```

### Typography
- Font: SF Pro / Inter
- Sizes: 12px, 14px, 16px, 20px, 24px, 32px
- Weights: 400, 500, 600

### Spacing (8-point system)
- 4px, 8px, 16px, 24px, 40px, 64px

### Animations
- Fade: 200ms ease-out
- Lift: 200ms ease-out
- Slide: 300ms ease-out

## Project Structure
```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth routes
│   │   ├── (app)/             # Main app routes
│   │   ├── api/               # API routes
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── launch/            # Launch sequence
│   │   ├── auth/              # Authentication
│   │   ├── onboarding/        # Onboarding flow
│   │   ├── layout/            # Sidebar, header
│   │   ├── editor/            # Document editor
│   │   ├── board/             # Kanban boards
│   │   ├── chat/              # Chat system
│   │   ├── search/            # Global search
│   │   ├── ai/                # AI components
│   │   └── ui/                # Base UI components
│   ├── lib/
│   │   ├── db.ts              # Database client
│   │   ├── auth.ts            # Auth config
│   │   ├── ai.ts              # AI utilities
│   │   └── realtime.ts        # Real-time config
│   ├── hooks/                 # Custom React hooks
│   ├── store/                 # Zustand stores
│   └── styles/                # Global styles
├── prisma/
│   └── schema.prisma          # Database schema
└── public/
    └── logo/                  # Oops logo assets
```

## Database Schema (Initial)

### Users
- id, email, name, password_hash, avatar_url
- created_at, updated_at

### Workspaces
- id, name, owner_id
- created_at, updated_at

### WorkspaceMembers
- workspace_id, user_id, role

### Documents
- id, workspace_id, title, content (JSON), type
- created_by, updated_at

### Boards
- id, workspace_id, title, columns (JSON)
- created_by, updated_at

### Tasks
- id, board_id, column_id, title, description, assignee_id, due_date
- created_at, updated_at

### Conversations
- id, workspace_id, context_type, context_id
- created_at

### Messages
- id, conversation_id, user_id, content
- created_at

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [x] Project setup with Next.js + TypeScript
- [ ] Design system configuration (Tailwind)
- [ ] Database schema and Prisma setup
- [ ] Authentication system
- [ ] Launch sequence animation
- [ ] Onboarding flow (3 questions)

### Phase 2: Core Features (Week 2-3)
- [ ] Homepage with intelligent workspace
- [ ] Navigation and layout
- [ ] Document editor (Tiptap)
- [ ] Board view with kanban
- [ ] Task management
- [ ] Global search (Cmd+K)

### Phase 3: Collaboration (Week 4)
- [ ] Real-time document editing
- [ ] Presence indicators (cursors, avatars)
- [ ] Contextual chat
- [ ] Comments and mentions

### Phase 4: Intelligence (Week 5)
- [ ] AI integration (OpenAI)
- [ ] Smart summaries
- [ ] Task generation
- [ ] Predictive insights

### Phase 5: Polish (Week 6)
- [ ] Animations and transitions
- [ ] Keyboard shortcuts
- [ ] Mobile responsive
- [ ] Performance optimization
- [ ] Error states and loading
- [ ] Offline support

## Key Principles

1. **Simplicity First**: Every feature must justify its existence
2. **One Path**: Each action has exactly one clear way to do it
3. **Keyboard > Mouse**: Power users never touch the mouse
4. **Invisible AI**: Intelligence that supports without interrupting
5. **Zero Learning Curve**: Type what you want, it happens
6. **Local-First**: Fast, offline-capable, syncs automatically
7. **Real-time Native**: Multiplayer by default
8. **No Decoration**: Every pixel serves the work

## Success Criteria

- Launch to usable homepage in < 3 seconds
- New user to first action in < 45 seconds
- Every action responds in < 100ms
- Search returns results in < 200ms
- Real-time updates in < 500ms
- 60fps animations throughout
- Zero config needed for basic usage
- Works offline seamlessly

## Development Approach

1. Build vertically (one complete flow at a time)
2. Test on real content immediately
3. Optimize for keyboard users
4. Mobile-first thinking
5. Progressive enhancement
6. Ship early, iterate fast

---

Work as one.
