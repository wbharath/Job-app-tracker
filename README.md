# Trackr — Frontend

React dashboard for Trackr, an AI-powered job application tracker. Displays job applications, stats, monthly trends, and integrates with the Trackr Chrome extension for seamless job saving and Gmail sync.

---

## Features

- **Dashboard** — Stats cards showing applications by status (Applied, Interview, Rejected, Offer) and a monthly applications chart
- **All Jobs** — Paginated job list with search, filter by status/type, and sort options
- **Add Job** — Manual job entry form
- **Profile** — Update user details
- **Responsive** — Collapsible sidebar for mobile and desktop

---

## Tech Stack

- React 18
- Redux Toolkit (state management)
- React Router v7
- Styled Components
- Recharts (bar and area charts)
- Axios
- React Toastify
- Moment.js

---

## Project Structure

```
src/
├── assets/
│   └── wrappers/          # Styled-components for each page/component
├── components/
│   ├── Navbar.jsx
│   ├── BigSidebar.jsx
│   ├── SmallSidebar.jsx
│   ├── NavLinks.jsx
│   ├── Logo.jsx
│   ├── FormRow.jsx
│   ├── FormRowSelect.jsx
│   ├── StatItem.jsx
│   ├── StatsContainer.jsx
│   ├── ChartsContainer.jsx
│   ├── BarChartComponent.jsx
│   ├── AreaChartComponent.jsx
│   ├── Job.jsx
│   ├── JobInfo.jsx
│   ├── JobsContainer.jsx
│   ├── SearchContainer.jsx
│   └── PageBtnContainer.jsx
├── features/
│   ├── user/
│   │   ├── userSlice.js
│   │   └── userThunk.js
│   ├── jobs/
│   │   ├── jobSlice.js
│   │   └── jobThunk.js
│   └── alljobs/
│       ├── allJobsSlice.js
│       └── allJobsThunk.js
├── pages/
│   ├── Landing.jsx
│   ├── Register.jsx
│   ├── Error.jsx
│   └── dashboard/
│       ├── SharedLayout.jsx
│       ├── Stats.jsx
│       ├── AllJobs.jsx
│       ├── AddJob.jsx
│       └── Profile.jsx
├── utils/
│   ├── axios.js
│   ├── links.jsx
│   └── localStorage.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## Setup

### Prerequisites
- Node.js 18+
- Trackr backend running

### 1. Clone the repo
```bash
git clone https://github.com/wbharath/trackr-frontend.git
cd trackr-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set API base URL
In `src/utils/axios.js`, update the base URL:
```javascript
const customFetch = axios.create({
  baseURL: 'http://localhost:8080/api/v1'
})
```

### 4. Run
```bash
npm run dev
```

App runs on `http://localhost:5173`

---

## Design System

| Token | Value |
|-------|-------|
| Brand color | `#0d7a5f` |
| Heading font | Fraunces (serif) |
| Body font | DM Sans |
| Mono font | DM Mono |
| Border radius | 6px / 10px |
| Base font size | 20px (125%) |

---

## Status Colors

| Status | Color |
|--------|-------|
| APPLIED | Blue |
| INTERVIEW | Amber |
| REJECTED | Red |
| OFFER | Green |

---

## Key Design Decisions

- **Styled Components** — Each page and component has its own wrapper file in `src/assets/wrappers/`
- **Redux Toolkit** — Three slices: `user` (auth), `job` (add/edit form), `allJobs` (list, filters, stats)
- **emailDate fallback** — Job cards display `emailDate` for Gmail-synced jobs and `createdAt` for manually added jobs
- **Timezone** — All dates displayed in local browser timezone using `moment().local()`

---

## Related Repositories

- [trackr-backend](https://github.com/wbharath/trackr-backend) — Spring Boot 4 REST API
- [trackr-extension](https://github.com/wbharath/Trackr-Extension) — Chrome MV3 extension
