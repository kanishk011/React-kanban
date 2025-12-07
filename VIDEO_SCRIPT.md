# Kanban Board - Video Demonstration Script (10-15 minutes)

## 🎬 Introduction (1 minute)

### What to Show:
- Show the application running in browser at `http://localhost:5173`
- Quick overview of the Kanban board interface

### What to Say:
> "Hello! Today I'm going to demonstrate a full-featured Kanban board application built with modern web technologies. This project showcases advanced React patterns, state management, and complex filtering logic. Let me give you a quick tour of what we'll cover:
> - Drag-and-drop task management across four columns
> - Complete CRUD operations for tasks
> - Advanced compound filtering with AND, OR, and NOT operations
> - Data persistence using Redux Persist
> - Clean, organized codebase following best practices
>
> This application was built according to specific requirements using React with TypeScript, Vite, PNPM, Redux Toolkit, and custom CSS with Radix UI components."

---

## 📋 Tech Stack Overview (1-2 minutes)

### What to Show:
- Open `package.json` file
- Highlight key dependencies

### What to Say:
> "Let me start by showing you the technology stack we're using:
>
> **Frontend Framework & Language:**
> - React version 19 - the latest version with new features
> - TypeScript for type safety throughout the application
>
> **Build Tools:**
> - Vite 7 as our build tool - extremely fast HMR and optimized builds
> - PNPM as package manager for efficient dependency management
>
> **State Management:**
> - Redux Toolkit for centralized state management with less boilerplate
> - Redux Persist to automatically save state to localStorage
> - Typed Redux hooks for type safety
>
> **UI & Interactions:**
> - React Router DOM v7 for routing
> - @dnd-kit for accessible, modern drag-and-drop functionality
> - Radix UI for accessible component primitives like dialogs and dropdowns
>
> **Styling:**
> - Custom CSS only - no frameworks like Tailwind or Bootstrap
> - Component-scoped CSS files
> - Responsive design with custom media queries
>
> All of this is configured with strict TypeScript settings to ensure type safety."

---

## 🏗️ Project Structure (2-3 minutes)

### What to Show:
- Open VS Code file explorer
- Navigate through folder structure
- Open `PROJECT_STRUCTURE.md` briefly

### What to Say:
> "Now let's look at how the project is organized. The architecture follows a feature-based structure for better scalability and maintainability.
>
> **Root src folder contains:**
>
> **1. App folder** - Application-level configuration
> - `store.ts` - Redux store setup with persistence
> - `hooks.ts` - Typed Redux hooks (useAppDispatch, useAppSelector)
> - `App.tsx` - Main app component with routing
> - `HomePage.tsx` - Main page layout
>
> **2. Features folder** - Feature-based modules
>
> **Kanban feature:**
> - Contains all kanban-specific components
> - `KanbanBoard.tsx` - Main board with drag-and-drop logic
> - `KanbanColumn.tsx` - Individual column component
> - `TaskCard.tsx` - Task card preview
> - `TaskDetailModal.tsx` - Full task details in a modal
> - `CreateTaskForm.tsx` - Form to create new tasks
> - `SortableTaskCard.tsx` - Wrapper for drag-and-drop functionality
> - `kanbanSlice.ts` - Redux slice managing task state
>
> **Filters feature:**
> - `AdvancedFilters.tsx` - Complex filtering UI
> - `filterSlice.ts` - Redux slice managing filter state
>
> **3. Components folder** - Shared, reusable components
> - Layout components like Header
> - UI primitives (ready for expansion)
>
> **4. Types folder** - All TypeScript type definitions
> - Task, Filter, Column interfaces
> - Centralized type management
>
> **5. Utils folder** - Utility functions
> - `filterTasks.ts` - Complex filter logic
>
> **6. Data folder** - Initial dummy data
> - 12 pre-populated tasks with various assignees and tags
>
> This organization makes the codebase easy to navigate and maintain. Each feature is self-contained with its components, logic, and styles co-located."

---

## 🎯 Feature Demonstration (4-5 minutes)

### Feature 1: Viewing the Kanban Board

#### What to Show:
- Show all four columns with tasks
- Hover over tasks to show interaction

#### What to Say:
> "Let's start with the main Kanban board. We have four columns representing different stages of work:
>
> 1. **Open** - New tasks waiting to be started
> 2. **In Progress** - Tasks currently being worked on
> 3. **Review** - Tasks waiting for review
> 4. **Done** - Completed tasks
>
> Each column shows a count of tasks. Notice how each task card displays:
> - The task title
> - Due date
> - Assignee name
> - A color-coded tag (frontend is blue, backend is green, design is orange, testing is purple, devops is red)
> - Story point estimation
>
> When I hover over a card, you can see the hover effect with elevation and border highlight, providing visual feedback."

### Feature 2: Drag and Drop

#### What to Show:
- Pick up a task card
- Drag it slowly to another column
- Show the drag overlay
- Drop it in the new column
- Show it updates immediately

#### What to Say:
> "Now let's demonstrate the drag-and-drop functionality. Watch what happens when I click and hold this task.
>
> *Start dragging*
>
> Notice a few things:
> 1. The original card becomes slightly transparent showing it's being dragged
> 2. A drag overlay follows my cursor
> 3. I can drop it into any column
>
> *Drop the task*
>
> As soon as I drop it, the task's status updates automatically. This change is immediately persisted to localStorage, so if I refresh the page...
>
> *Refresh the browser*
>
> ...the task stays in its new location. The drag-and-drop is powered by @dnd-kit, which provides accessibility features like keyboard navigation support."

### Feature 3: View Task Details

#### What to Show:
- Click on a task card
- Show the modal opening with animation
- Point out all fields
- Show delete button
- Close modal

#### What to Say:
> "Clicking on any task card opens a detailed view in a modal. Let me click this task.
>
> *Click task*
>
> The modal slides in with a smooth animation. Here we can see all task information:
> - **Title** at the top
> - **Description** - full plain text description
> - **Tag** with the same color coding
> - **Status** - current column
> - **Assignee** - who it's assigned to
> - **Created By** - who created the task
> - **Estimation** - story points
> - **Due Date** - formatted nicely
> - **Created At** - timestamp when it was created
>
> At the bottom, we have two actions:
> - **Delete Task** button in red - permanently removes the task
> - **Close** button to exit without changes
>
> The modal is built with Radix UI Dialog for accessibility - it traps focus, supports escape key to close, and handles scroll locking."

### Feature 4: Create New Task

#### What to Show:
- Click "Create Task" button
- Fill out the form with a new task
- Show all fields
- Submit the form
- Show the new task appearing in the board

#### What to Say:
> "Let's create a new task. I'll click the 'Create Task' button in the header.
>
> *Click button*
>
> This opens a comprehensive form with all required fields. Let me fill it out:
>
> *Fill the form while explaining:*
>
> - **Title**: 'Implement user authentication' - required field
> - **Description**: A detailed description of what needs to be done - this is plain text only
> - **Tag**: I'll select 'backend' from the dropdown
> - **Status**: I'll set it to 'Open' to add it to the Open column
> - **Assignee**: I'll assign it to 'Charlie' from the dropdown
> - **Created By**: My name, so I'll type 'Demo User'
> - **Estimation**: Let's say this is 8 story points - notice it only accepts numbers
> - **Due Date**: I'll select a date from the date picker
>
> *Submit*
>
> When I click 'Create Task', watch the Open column...
>
> The new task immediately appears! It's automatically saved to localStorage. The form validates all required fields and won't submit if anything is missing."

### Feature 5: Delete Task

#### What to Show:
- Open a task detail modal
- Click delete button
- Show confirmation (task disappears)
- Show it's gone from the board

#### What to Say:
> "Now let's delete a task. I'll open this task we just created.
>
> *Click task, then delete*
>
> When I click the red 'Delete Task' button, the task is immediately removed from the store and localStorage. The modal closes, and you can see the task is no longer on the board. This deletion is permanent and persisted."

---

## 🔍 Advanced Filtering (3-4 minutes)

### What to Show:
- Show the filters section
- Demonstrate each type of filter
- Show complex multi-condition filters

### What to Say:
> "Now, let's explore the most complex feature - the advanced filtering system. This implements compound logic with user-friendly terminology.
>
> **Understanding the Filter System:**
>
> We can filter by two fields:
> - **Assignee** - who the task is assigned to
> - **Tag** - the task category
>
> For each filter condition, we have three operations:
> - **Matches any** - task must match ANY of the selected values
> - **Matches all** - task must match ALL selected values
> - **Excludes** - task must NOT match any of the selected values
>
> And when we have multiple conditions, we can combine them with:
> - **All conditions** - task must satisfy ALL conditions
> - **Any condition** - task must satisfy AT LEAST ONE condition
>
> **Example 1: Simple Filter**
>
> *Add filter*
>
> Let me filter for tasks assigned to Alice or Bob.
> 1. I'll select 'Assignee' as the field
> 2. Keep operation as 'Matches any'
> 3. Check both 'Alice' and 'Bob'
> 4. Click 'Add Filter'
>
> Notice the board now only shows tasks assigned to Alice or Bob. The filter appears as a chip at the top showing 'assignee Matches any Alice, Bob'.
>
> **Example 2: Excludes Operation**
>
> *Add another filter*
>
> Now let's exclude design tasks:
> 1. Select 'Tag' as the field
> 2. Change operation to 'Excludes'
> 3. Select 'design'
> 4. Click 'Add Filter'
>
> Watch the board - we now see tasks assigned to Alice or Bob, but NOT design tasks. Notice the filter chip shows 'tag Excludes design' with a red label.
>
> **Example 3: Multiple Conditions with Any Condition**
>
> *Clear filters and start fresh*
>
> Let me clear these filters and show a more complex example.
>
> Say I want to see:
> - Either tasks assigned to Charlie
> - OR all backend tasks
>
> *Add filters*
>
> 1. First condition: Assignee matches any - Charlie
> 2. Second condition: Tag matches any - backend
> 3. Now I'll change the global operation to 'Any condition'
>
> The board now shows Charlie's tasks regardless of tag, PLUS all backend tasks regardless of assignee.
>
> **Example 4: Complex All Conditions Logic**
>
> *Clear and add new filters*
>
> For the final example:
> - Assignee excludes Alice
> - AND Tag matches any frontend or backend
>
> *Add filters*
>
> 1. Assignee → Excludes → Alice
> 2. Tag → Matches any → frontend, backend
> 3. Global operation → All conditions
>
> Now we see only frontend and backend tasks that are NOT assigned to Alice.
>
> The filtering happens in real-time. Let me drag a task to change its status... even with filters active, the drag-and-drop still works perfectly.
>
> **Filter Persistence:**
>
> These filters are also persisted. Let me refresh the page...
>
> *Refresh*
>
> The filters are still active! They're saved in localStorage along with the tasks."

---

## 💻 Code Walkthrough (2-3 minutes)

### What to Show:
- Open key files and explain code

### What to Say:
> "Now let's look at some of the code that makes this work.
>
> **1. Redux Store Setup** (`app/store.ts`)
>
> *Open file*
>
> Here's where we configure Redux with persistence:
> - We combine the kanban and filters reducers
> - Configure redux-persist to use localStorage
> - Whitelist which reducers to persist
> - Set up the middleware to ignore serialization checks for persist actions
> - Export typed hooks for TypeScript support
>
> **2. Type Definitions** (`types/index.ts`)
>
> *Open file*
>
> All our types are centralized here:
> - `Task` interface with all task properties
> - `TaskStatus` type - can only be one of four values
> - `TaskTag` type for categories
> - `FilterCondition` and `FilterState` for the filtering system
>
> This gives us type safety throughout the application.
>
> **3. Filter Logic** (`utils/filterTasks.ts`)
>
> *Open file and highlight key parts*
>
> This is where the magic happens for filtering:
> - `applyCondition` function handles individual filter conditions
> - For NOT operations, we filter out matching tasks
> - For AND/OR at the condition level, tasks must match any value
> - The main `filterTasks` function combines multiple conditions
> - For global AND - we apply filters sequentially
> - For global OR - we combine results and deduplicate
>
> **4. Kanban Slice** (`features/kanban/kanbanSlice.ts`)
>
> *Open file*
>
> Using Redux Toolkit's createSlice for clean state management:
> - Initial state loads dummy data
> - Three actions: addTask, deleteTask, updateTaskStatus
> - Notice we're using PayloadAction type for type-safe actions
> - All mutations use Immer under the hood so we can write "mutable" code
>
> **5. Kanban Board Component** (`features/kanban/components/KanbanBoard.tsx`)
>
> *Open file and scroll through key sections*
>
> This is the main board component:
> - Uses hooks to get tasks and filter state from Redux
> - `useMemo` to compute filtered tasks efficiently
> - Another `useMemo` to organize tasks by column
> - Drag-and-drop setup with @dnd-kit's DndContext
> - PointerSensor with activation constraint prevents accidental drags
> - `handleDragEnd` dispatches the updateTaskStatus action
> - DragOverlay shows the task while dragging
> - Everything is typed with TypeScript for safety
>
> **6. Advanced Filters Component** (`features/filters/components/AdvancedFilters.tsx`)
>
> *Open file*
>
> The most complex UI component:
> - Local state for building new filter conditions
> - Checkboxes for multi-select values
> - Dynamic rendering of active filter chips
> - Operations shown with color coding (green for Matches all, orange for Matches any, red for Excludes)
> - Dispatches actions to Redux on filter changes
>
> All components follow React best practices with proper TypeScript typing."

---

## 🎨 Styling & Responsiveness (1 minute)

### What to Show:
- Show CSS files
- Resize browser window to show responsiveness

### What to Say:
> "Let's talk about styling briefly.
>
> *Open a CSS file*
>
> All styling is custom CSS - no frameworks:
> - Each component has its own CSS file
> - Using modern CSS features like Grid and Flexbox
> - Custom CSS variables could be added for theming
> - Consistent spacing and color palette
>
> *Resize browser window*
>
> The application is fully responsive:
> - On desktop, we see four columns
> - On tablets, it switches to two columns
> - On mobile, a single column
> - The filter section also adapts
>
> *Show modal on small screen*
>
> Modals are responsive too, taking appropriate width on smaller screens."

---

## 🔄 Data Persistence Demo (1 minute)

### What to Show:
- Make several changes
- Open browser DevTools → Application → Local Storage
- Show the persisted data
- Refresh multiple times

### What to Say:
> "Let me demonstrate the data persistence feature.
>
> *Make changes: drag tasks, add filter, create task*
>
> I'm making several changes - dragging tasks, adding filters, creating a new task.
>
> *Open DevTools → Application → Local Storage*
>
> In the browser's localStorage, you can see the persisted data under the 'persist:root' key. This is managed automatically by Redux Persist.
>
> *Refresh page multiple times*
>
> No matter how many times I refresh, all my changes are preserved:
> - Task positions
> - Active filters
> - New tasks I created
>
> Even if I close the browser and come back later, everything is exactly as I left it."

---

## ✨ Closing & Summary (1 minute)

### What to Show:
- Final overview of the running application
- Quick scroll through the codebase

### What to Say:
> "Let me summarize what we've covered in this application:
>
> **Features:**
> - ✅ Full Kanban board with four columns
> - ✅ Drag-and-drop with smooth interactions
> - ✅ Complete CRUD operations for tasks
> - ✅ Advanced compound filtering (AND, OR, NOT)
> - ✅ Automatic data persistence
> - ✅ Responsive design
> - ✅ Accessible UI components
>
> **Technical Highlights:**
> - ✅ Modern React 19 with TypeScript
> - ✅ Redux Toolkit for state management
> - ✅ Well-organized, feature-based architecture
> - ✅ Type-safe throughout the entire codebase
> - ✅ Clean, maintainable code
> - ✅ Custom CSS without framework dependencies
> - ✅ Best practices for performance (useMemo, efficient re-renders)
>
> **Project Structure:**
> - ✅ Logical folder organization
> - ✅ Separated concerns (features, components, types, utils)
> - ✅ Comprehensive documentation
>
> This project demonstrates intermediate to advanced React skills including:
> - Complex state management
> - Advanced TypeScript usage
> - Compound filtering logic
> - Drag-and-drop implementation
> - Form handling
> - Modal management
> - Data persistence
> - Clean architecture
>
> All code is production-ready with proper error handling, type safety, and user experience considerations.
>
> Thank you for watching this demonstration! The complete source code and documentation are available in the repository."

---

## 📝 Additional Tips for Recording

### Before Recording:
1. **Clean up your browser:**
   - Close unnecessary tabs
   - Hide bookmarks bar
   - Use incognito mode or clean browser profile

2. **Clear localStorage:**
   - Start fresh so viewers see the default state

3. **Prepare your editor:**
   - Use a clean theme (light or dark based on preference)
   - Increase font size for readability (14-16pt)
   - Install useful extensions (Prettier, ESLint)
   - Close unnecessary panels

4. **Screen resolution:**
   - Record at 1920x1080 for best quality
   - Make sure text is clearly readable

5. **Audio:**
   - Test microphone quality
   - Record in quiet environment
   - Speak clearly and at moderate pace

### During Recording:
1. **Speak slowly and clearly**
   - Pause between sections
   - Don't rush through explanations

2. **Use cursor to point things out**
   - Highlight important code
   - Circle UI elements you're discussing

3. **Show file paths**
   - Keep file explorer visible when switching files
   - Say file names out loud

4. **Demonstrate, don't just explain**
   - Actually perform each action
   - Show the results

### Pacing:
- Introduction: 1 min
- Tech Stack: 1-2 min
- Project Structure: 2-3 min
- Feature Demo: 4-5 min
- Advanced Filtering: 3-4 min
- Code Walkthrough: 2-3 min
- Styling: 1 min
- Data Persistence: 1 min
- Closing: 1 min

**Total: 15-20 minutes** (allow for natural pauses and re-explanations)

### After Recording:
1. Review the video
2. Add timestamps in description
3. Consider adding text overlays for key points
4. Add background music if desired (keep it subtle)

---

## 🎯 Quick Reference Checklist

**Must Show:**
- [ ] Application running in browser
- [ ] All four Kanban columns
- [ ] Drag and drop a task
- [ ] Refresh to show persistence
- [ ] Open task details modal
- [ ] Create a new task
- [ ] Delete a task
- [ ] Add simple filter
- [ ] Add NOT filter
- [ ] Add multiple filters with AND
- [ ] Add multiple filters with OR
- [ ] Clear filters
- [ ] Show Redux DevTools (optional)
- [ ] Show localStorage data
- [ ] Show project structure in VS Code
- [ ] Show types file
- [ ] Show Redux store setup
- [ ] Show filter logic
- [ ] Show main component
- [ ] Show responsive design
- [ ] Demonstrate persistence with refresh

**Must Mention:**
- [ ] React 19 + TypeScript
- [ ] Vite + PNPM
- [ ] Redux Toolkit + Redux Persist
- [ ] @dnd-kit for drag-and-drop
- [ ] Radix UI for accessibility
- [ ] Custom CSS only
- [ ] Feature-based architecture
- [ ] Type safety
- [ ] Data persistence
- [ ] Advanced filtering logic
- [ ] Accessibility features

Good luck with your recording! 🎥
