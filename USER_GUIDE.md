# Kanban Board - User Guide

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PNPM (installed globally)

### Installation

1. Navigate to the project directory:
```bash
cd kanban-board
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and visit: `http://localhost:5173`

## Features

### 1. Kanban Board with Drag & Drop

The board consists of 4 columns:
- **Open**: New tasks
- **In Progress**: Tasks being worked on
- **Review**: Tasks under review
- **Done**: Completed tasks

**How to use:**
- Click and hold a task card
- Drag it to a different column
- Release to drop

The task status updates automatically and is saved to local storage.

### 2. Create New Tasks

Click the **"Create Task"** button in the header to open the task creation form.

**Required fields:**
- Title
- Description
- Tag (frontend, backend, design, testing, devops)
- Status (Open, In Progress, Review, Done)
- Assignee
- Created By
- Estimation (story points: 1-13)
- Due Date

All created tasks are automatically saved and persist across page reloads.

### 3. View Task Details

Click on any task card to view its full details in a modal:
- Title
- Description
- Tag
- Status
- Assignee
- Created By
- Estimation
- Due Date
- Created At

### 4. Delete Tasks

Open a task detail modal and click the **"Delete Task"** button to remove a task permanently.

### 5. Advanced Filtering

The advanced filtering system supports compound logic with user-friendly terminology.

#### Filter Fields:
- **Assignee**: Filter by who the task is assigned to
- **Tag**: Filter by task category

#### Filter Operations:
- **Matches any**: Task must match ANY of the selected values
- **Matches all**: Task must match ALL selected values
- **Excludes**: Task must NOT match any of the selected values

#### Global Operations:
When you have multiple filter conditions, you can choose how they combine:
- **All conditions**: Task must satisfy ALL conditions
- **Any condition**: Task must satisfy AT LEAST ONE condition

#### Filter Examples:

**Example 1: Simple Filter**
1. Select 'Assignee' as the field
2. Keep operation as 'Matches any'
3. Check 'Alice' and 'Bob'
4. Click 'Add Filter'
- Shows tasks assigned to Alice or Bob

**Example 2: Exclude Filter**
1. Select 'Tag' as the field
2. Change operation to 'Excludes'
3. Select 'design'
4. Click 'Add Filter'
- Shows all tasks except design tasks

**Example 3: Multiple Conditions**
1. Add filter: Assignee → Matches any → Alice, Bob
2. Add filter: Tag → Matches any → frontend, backend
3. Set global operation to 'All conditions'
- Shows frontend or backend tasks assigned to Alice or Bob

#### Managing Filters:
- Click the **X** icon on any filter chip to remove it
- Click **"Clear All"** to remove all active filters
- Filters are preserved when you reload the page

## Data Persistence

All data (tasks and filters) is automatically saved to your browser's local storage:
- Tasks persist across page reloads
- Filters persist across page reloads
- Drag and drop changes are saved immediately
- Created tasks are saved immediately
- Deleted tasks are removed immediately

## Keyboard Navigation

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals

## Browser Compatibility

Tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## Tips

1. **Organize your workflow**: Use the columns to represent your team's workflow stages
2. **Color coding**: Tasks are color-coded by tag for easy visual identification
3. **Story points**: Use estimation points to gauge task complexity
4. **Due dates**: Keep track of deadlines with the due date field
5. **Filtering**: Use advanced filters to focus on specific types of work

## Tech Stack

- React 19 with TypeScript
- Redux Toolkit for state management
- Redux Persist for data persistence
- React Router DOM for routing
- @dnd-kit for drag and drop
- Radix UI for accessible components
- Custom CSS for styling

## Troubleshooting

**Tasks not persisting:**
- Check if your browser allows local storage
- Clear browser cache and reload

**Drag and drop not working:**
- Make sure you're clicking and holding the card
- Try using a mouse instead of trackpad

**Filters not working:**
- Make sure you've added at least one filter condition
- Check that you've selected values for the filter

## Support

For issues or questions, please check the project documentation or create an issue in the repository.
