# Screen Recording Visual Guide

## 🎬 Setup Before Recording

### Browser Setup:
```
✅ Open application at http://localhost:5173
✅ Zoom level: 100% (Ctrl+0)
✅ Full screen mode (F11) or hide unnecessary chrome
✅ Clear localStorage to start fresh
✅ Close all other tabs except documentation
```

### VS Code Setup:
```
✅ Font size: 16-18px (Ctrl + '+' a few times)
✅ Theme: Choose high contrast theme (dark or light)
✅ Close terminal panel initially
✅ Close minimap (optional)
✅ File explorer: Visible on left
✅ Extensions: Hide activity bar if needed
```

### Screen Layout:
```
Option 1 (Recommended): Side-by-side
├─────────────────┬─────────────────┤
│                 │                 │
│   VS Code       │    Browser      │
│   (Left 50%)    │   (Right 50%)   │
│                 │                 │
└─────────────────┴─────────────────┘

Option 2: Full screen switching
- Switch between VS Code and Browser
- Use Alt+Tab to switch smoothly
```

---

## 📋 Scene-by-Scene Guide

### **SCENE 1: Introduction (0:00 - 1:00)**

**Screen:** Browser - Full application view

**Visual Flow:**
```
1. Show full Kanban board
   ├─ All 4 columns visible
   ├─ Multiple tasks in each column
   └─ Clean, organized layout

2. Hover over tasks briefly
   └─ Show hover effects

3. Point cursor at header
   └─ "Create Task" button
```

**What's On Screen:**
- Kanban Board with all columns
- Tasks with different colors
- Header with "Create Task" button

---

### **SCENE 2: Tech Stack (1:00 - 3:00)**

**Screen:** VS Code - `package.json`

**Visual Flow:**
```
1. Open package.json
   └─ Scroll to dependencies section

2. Highlight these lines:
   "dependencies": {
     "@dnd-kit/core": "^6.3.1",
     "@dnd-kit/sortable": "^10.0.0",
     "@radix-ui/react-dialog": "^1.1.15",
     "@reduxjs/toolkit": "^2.11.0",
     "react": "19.2.1",
     "react-redux": "^9.2.0",
     "react-router-dom": "^7.10.1",
     "redux-persist": "^6.0.0"
   }

3. Scroll to devDependencies
   "typescript": "5.9.3",
   "vite": "7.2.6"
```

**Use cursor to circle:**
- React version
- Redux Toolkit
- TypeScript
- Vite

---

### **SCENE 3: Project Structure (3:00 - 6:00)**

**Screen:** VS Code - File Explorer

**Visual Flow:**
```
1. Collapse all folders first
   src/
   ├─ app/
   ├─ components/
   ├─ data/
   ├─ features/
   ├─ types/
   └─ utils/

2. Expand folders one by one as you explain:

   app/
   ├─ store.ts          ← Click to preview
   ├─ hooks.ts          ← Click to preview
   ├─ App.tsx
   └─ HomePage.tsx

   features/
   ├─ kanban/
   │  ├─ components/
   │  │  ├─ KanbanBoard.tsx    ← Hover
   │  │  ├─ KanbanColumn.tsx   ← Hover
   │  │  ├─ TaskCard.tsx       ← Hover
   │  │  ├─ TaskDetailModal.tsx
   │  │  ├─ CreateTaskForm.tsx
   │  │  └─ SortableTaskCard.tsx
   │  └─ kanbanSlice.ts        ← Click
   └─ filters/
      ├─ components/
      │  └─ AdvancedFilters.tsx
      └─ filterSlice.ts

   types/
   └─ index.ts                 ← Click to show

   utils/
   └─ filterTasks.ts           ← Click to show

   data/
   └─ dummyTasks.ts            ← Click to show
```

**Tip:** Use cursor to trace the path as you explain

---

### **SCENE 4: Feature Demo - Basic Operations (6:00 - 8:00)**

**Screen:** Browser - Full view

**4A. Viewing Tasks (30 seconds)**
```
Visual Actions:
1. Move cursor slowly across all columns
   Open → In Progress → Review → Done

2. Hover over each task briefly
   └─ Show hover effect

3. Point at task details:
   ├─ Title
   ├─ Tag (colored badge)
   ├─ Due date
   ├─ Assignee
   └─ Story points
```

**4B. Drag and Drop (1 minute)**
```
Visual Actions:
1. Click and hold "Design landing page" in Open column
   └─ Wait 1 second (show the task highlighting)

2. Slowly drag to "In Progress" column
   ├─ Show drag overlay following cursor
   └─ Original card becomes transparent

3. Drop in "In Progress"
   └─ Show task appearing in new column

4. IMPORTANT: Refresh page (F5)
   └─ Show task stayed in new position
   └─ Say: "See? It persisted!"
```

**4C. Task Details (1 minute)**
```
Visual Actions:
1. Click on "Implement authentication API"
   └─ Modal slides in

2. Move cursor slowly through all fields:
   ├─ Title at top
   ├─ Description (read it)
   ├─ Tag badge
   ├─ Status
   ├─ Assignee
   ├─ Created By
   ├─ Estimation
   ├─ Due Date
   └─ Created At

3. Hover over "Delete Task" button
   └─ Show red hover state

4. Click "Close"
   └─ Modal dismisses
```

**4D. Create Task (1.5 minutes)**
```
Visual Actions:
1. Click "Create Task" button in header
   └─ Form modal opens

2. Fill form slowly, showing each field:

   Title: [type] "Implement user authentication"
   ↓
   Description: [type] "Add JWT-based authentication
   with login and signup endpoints"
   ↓
   Tag: [click dropdown] → Select "backend"
   ↓
   Status: [click dropdown] → Select "Open"
   ↓
   Assignee: [click dropdown] → Select "Charlie"
   ↓
   Created By: [type] "Demo User"
   ↓
   Estimation: [type] "8"
   ↓
   Due Date: [click picker] → Select future date

3. Hover over "Create Task" button
   └─ Show it's enabled

4. Click "Create Task"
   └─ Modal closes

5. Scroll to Open column
   └─ Show new task appeared!
   └─ Circle it with cursor
```

**4E. Delete Task (30 seconds)**
```
Visual Actions:
1. Click the task you just created

2. Click "Delete Task" button
   └─ Modal closes

3. Show Open column
   └─ Task is gone
   └─ Say: "Deleted and persisted!"
```

---

### **SCENE 5: Advanced Filtering (8:00 - 12:00)**

**Screen:** Browser - Focus on filter section and board

**5A. Simple Filter (1 minute)**
```
Visual Actions:
1. Scroll to show filter section clearly

2. Build filter:
   Field: [Select] "Assignee"
   ↓
   Operation: [Keep] "is (AND)"
   ↓
   Values: [Check] ☑ Alice
           [Check] ☑ Bob
   ↓
   [Click] "Add Filter"

3. WATCH THE BOARD CHANGE
   └─ Circle remaining tasks
   └─ Point at assignee names (Alice or Bob)

4. Show filter chip at top:
   "assignee AND Alice, Bob"
   └─ Hover over X button
```

**5B. NOT Filter (1 minute)**
```
Visual Actions:
1. Add another filter:
   Field: [Select] "Tag"
   ↓
   Operation: [Select] "is not (NOT)"
   ↓
   Values: [Check] ☑ design
   ↓
   [Click] "Add Filter"

2. WATCH BOARD
   └─ Design tasks disappear
   └─ Circle: "tag NOT design" chip
   └─ Point at red "NOT" label
```

**5C. Multiple Conditions with OR (1.5 minutes)**
```
Visual Actions:
1. [Click] "Clear All" button
   └─ All tasks reappear

2. Add first condition:
   Field: "Assignee"
   Operation: "is (AND)"
   Values: ☑ Charlie
   [Click] "Add Filter"

3. Add second condition:
   Field: "Tag"
   Operation: "is (AND)"
   Values: ☑ backend
   [Click] "Add Filter"

4. CHANGE GLOBAL OPERATION:
   [Click] "OR" button in toggle
   └─ Watch it highlight

5. Show filter chips:
   "assignee AND Charlie" [OR] "tag AND backend"
   └─ Circle the OR label between chips

6. Explain what's showing:
   Point at tasks → All Charlie's tasks
   Point at tasks → All backend tasks
```

**5D. Complex AND Example (1.5 minutes)**
```
Visual Actions:
1. [Click] "Clear All"

2. Add filter:
   Field: "Assignee"
   Operation: "is not (NOT)"
   Values: ☑ Alice
   [Click] "Add Filter"

3. Add filter:
   Field: "Tag"
   Operation: "is (AND)"
   Values: ☑ frontend
          ☑ backend
   [Click] "Add Filter"

4. CHANGE TO AND:
   [Click] "AND" button

5. Result:
   └─ Point at tasks: "NOT Alice's"
   └─ Point at tags: "Only frontend/backend"

6. PERSISTENCE TEST:
   [Press F5 to refresh]
   └─ Filters still active!
   └─ Say: "Filters persisted too!"
```

**5E. Filter + Drag Test (30 seconds)**
```
Visual Actions:
1. With filters still active
   └─ Drag a visible task to another column

2. Show it still works
   └─ Task stays visible (if it matches filter)

3. [Click] "Clear All"
   └─ All tasks reappear
```

---

### **SCENE 6: Code Walkthrough (12:00 - 15:00)**

**Screen:** VS Code - Split with browser preview

**6A. Redux Store (30 seconds)**
```
File: src/app/store.ts

Highlight these sections:
1. Lines 1-8: Imports
   └─ Circle: redux-persist imports

2. Lines 15-25: Persist config
   persistConfig = {
     key: 'root',
     storage,
     whitelist: ['kanban', 'filters']
   }

3. Lines 31-35: Store configuration
   └─ Circle: persistedReducer
```

**6B. Types (30 seconds)**
```
File: src/types/index.ts

Scroll through and highlight:
1. TaskStatus type
   type TaskStatus = 'Open' | 'In Progress' | 'Review' | 'Done'

2. Task interface
   interface Task {
     id: string;
     title: string;
     description: string;
     ...
   }

3. FilterCondition interface
```

**6C. Filter Logic (1 minute)**
```
File: src/utils/filterTasks.ts

Highlight:
1. applyCondition function (lines 6-14)
   └─ Circle: NOT operation handling

2. filterTasks function (lines 20-46)
   └─ Circle: AND vs OR logic

Show flow with cursor:
   if globalOperation === 'AND':
     apply filters sequentially
   else (OR):
     combine results
```

**6D. Kanban Slice (1 minute)**
```
File: src/features/kanban/kanbanSlice.ts

Highlight:
1. Line 1-2: Imports
   import { createSlice }
   import type { PayloadAction }

2. Lines 9-11: Initial state
   initialState: {
     tasks: dummyTasks
   }

3. Lines 16-32: Reducers
   ├─ addTask
   ├─ deleteTask
   └─ updateTaskStatus

   Circle line 29: Immer magic
   task.status = action.payload.newStatus
```

**6E. KanbanBoard Component (1 minute)**
```
File: src/features/kanban/components/KanbanBoard.tsx

Scroll and highlight:
1. Lines 28-29: Redux hooks
   const tasks = useAppSelector(...)
   const filterState = useAppSelector(...)

2. Lines 44-46: Filter memo
   const filteredTasks = useMemo(...)

3. Lines 49-64: Column organization
   const tasksByColumn = useMemo(...)

4. Lines 96-100: DndContext setup
   <DndContext
     sensors={sensors}
     onDragStart={handleDragStart}
     onDragEnd={handleDragEnd}
   >
```

**6F. Advanced Filters Component (30 seconds)**
```
File: src/features/filters/components/AdvancedFilters.tsx

Highlight:
1. Lines 14-18: Local state
   const [newCondition, setNewCondition]

2. Lines 20-31: Add condition handler
   const handleAddCondition

3. Line 82: Dispatch to Redux
   dispatch(addFilterCondition(condition))
```

---

### **SCENE 7: Responsive Design (15:00 - 16:00)**

**Screen:** Browser

**Visual Actions:**
```
1. Start at desktop width (1920px)
   └─ Show all 4 columns side by side

2. Slowly resize to tablet (~800px)
   ├─ Open DevTools (F12)
   ├─ Click device toolbar (Ctrl+Shift+M)
   └─ Select "iPad"
   └─ Show 2x2 grid

3. Resize to mobile (~400px)
   └─ Select "iPhone 12 Pro"
   └─ Show single column stack

4. Click a task on mobile
   └─ Modal still works perfectly
   └─ Takes full width
```

---

### **SCENE 8: Data Persistence (16:00 - 17:00)**

**Screen:** Browser with DevTools

**Visual Actions:**
```
1. Make several changes:
   ├─ Drag 2 tasks
   ├─ Add a filter
   └─ Create a new task

2. Open DevTools (F12)
   ├─ Application tab
   ├─ Local Storage
   ├─ http://localhost:5173
   └─ Click "persist:root"

3. Show JSON data in panel
   └─ Expand to show tasks array
   └─ Expand to show filters

4. Refresh page (F5)
   ├─ Close DevTools
   └─ Everything persists!

5. Refresh 2 more times
   └─ Say: "Still there!"
```

---

### **SCENE 9: Closing (17:00 - 18:00)**

**Screen:** Split - VS Code left, Browser right

**Visual Actions:**
```
1. Browser side:
   └─ Scroll through full application
   └─ Show all features working

2. VS Code side:
   └─ Collapse all folders
   └─ Show clean structure

3. Final overlay of features:
   ✅ Drag and drop
   ✅ CRUD operations
   ✅ Advanced filtering
   ✅ Data persistence
   ✅ Responsive design
   ✅ Type-safe code
```

**End screen text ideas:**
```
┌────────────────────────────────────┐
│   KANBAN BOARD APPLICATION         │
│                                    │
│   ✅ React 19 + TypeScript         │
│   ✅ Redux Toolkit + Persist       │
│   ✅ Advanced Filtering            │
│   ✅ Drag & Drop                   │
│   ✅ Full Documentation            │
│                                    │
│   Thanks for watching!             │
└────────────────────────────────────┘
```

---

## 🎯 Recording Checklist

**Before Each Take:**
- [ ] Clear localStorage
- [ ] Restart dev server
- [ ] Check audio levels
- [ ] Close notification apps
- [ ] Full battery or plugged in
- [ ] Do Not Disturb mode ON

**During Recording:**
- [ ] Speak clearly and slowly
- [ ] Move cursor deliberately
- [ ] Pause between sections
- [ ] Demonstrate, don't just explain
- [ ] Use cursor to highlight

**After Recording:**
- [ ] Watch full video
- [ ] Check audio sync
- [ ] Verify all features shown
- [ ] Add chapters/timestamps
- [ ] Export in HD (1080p minimum)

---

## 🎨 Visual Tips

### Cursor Movement:
- **Circle** important items 2-3 times
- **Underline** by moving left-right
- **Point** by placing cursor and holding
- **Trace paths** when showing file relationships

### Scrolling:
- Scroll **smoothly** and **slowly**
- Pause after scrolling to let viewers read
- Use Ctrl+Home to jump to top
- Use Ctrl+End to jump to bottom

### Highlighting Code:
- Use cursor to underline
- Or select text briefly
- Don't leave selections highlighted too long

### Window Management:
- Practice Alt+Tab transitions
- Use Windows+Left/Right for split screen
- F11 for full screen browser
- Ctrl+` for VS Code terminal

Good luck with your recording! 🎬
