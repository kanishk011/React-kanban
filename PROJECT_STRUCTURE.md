# Kanban Board - Project Structure

## 📁 Folder Organization

```
kanban-board/
├── src/
│   ├── app/                    # App-level configuration
│   │   ├── store.ts           # Redux store with persistence
│   │   ├── hooks.ts           # Typed Redux hooks
│   │   ├── App.tsx            # Main app with routing
│   │   ├── HomePage.tsx       # Home page layout
│   │   └── HomePage.css
│   │
│   ├── features/              # Feature-based modules
│   │   ├── kanban/           # Kanban board feature
│   │   │   ├── components/
│   │   │   │   ├── KanbanBoard.tsx      # Main board with DnD
│   │   │   │   ├── KanbanColumn.tsx     # Column component
│   │   │   │   ├── SortableTaskCard.tsx # Draggable wrapper
│   │   │   │   ├── TaskCard.tsx         # Task card preview
│   │   │   │   ├── TaskDetailModal.tsx  # Task detail view
│   │   │   │   ├── CreateTaskForm.tsx   # Create new task
│   │   │   │   └── *.css                # Component styles
│   │   │   └── kanbanSlice.ts           # Redux slice for tasks
│   │   │
│   │   └── filters/          # Filtering feature
│   │       ├── components/
│   │       │   ├── AdvancedFilters.tsx  # Filter UI
│   │       │   └── AdvancedFilters.css
│   │       └── filterSlice.ts           # Redux slice for filters
│   │
│   ├── components/            # Shared components
│   │   ├── ui/               # UI primitives (empty - ready for expansion)
│   │   └── layout/           # Layout components
│   │       ├── Header.tsx
│   │       └── Header.css
│   │
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # All app types
│   │
│   ├── utils/                # Utility functions
│   │   └── filterTasks.ts    # Filter logic
│   │
│   ├── data/                 # Data and constants
│   │   └── dummyTasks.ts     # Initial task data
│   │
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🏗️ Architecture Decisions

### 1. **Feature-Based Structure**
- Each major feature (kanban, filters) has its own folder
- Components, logic, and styles are co-located
- Easy to find and maintain related code

### 2. **Redux Toolkit for State Management**
- Centralized state with slices for each feature
- Redux Persist for automatic data persistence
- Typed hooks for type safety

### 3. **Component Organization**
- **Features**: Domain-specific components
- **Components**: Shared/reusable components
- **Layout**: Page layout components

### 4. **Type Safety**
- All types defined in `types/index.ts`
- Strict TypeScript configuration
- Typed Redux hooks and selectors

## 🎯 Key Features Implementation

### Drag and Drop
- Uses `@dnd-kit` library
- Implemented in `KanbanBoard.tsx`
- Sortable cards within columns
- Visual feedback during drag

### Advanced Filtering
- Supports AND, OR, NOT operations
- Multiple filter conditions
- Real-time filtering
- Filter state persisted

### Redux Persistence
- Automatic save to localStorage
- Persists on page reload
- Configured in `app/store.ts`

## 🎨 Styling Approach

- **Custom CSS** only (no frameworks)
- **Radix UI** for accessible primitives
- Component-scoped CSS files
- Global styles in `index.css`
- Consistent color palette and spacing

## 🔧 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Package Manager**: PNPM
- **State Management**: Redux Toolkit + Redux Persist
- **Routing**: React Router DOM v7
- **Drag & Drop**: @dnd-kit
- **UI Components**: Radix UI
- **Styling**: Custom CSS

## 📦 Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```
