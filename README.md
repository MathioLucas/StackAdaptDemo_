# StackAdaptDemo

# StackAdapt Ad Performance Analytics Dashboard

## Project Overview
This dashboard visualizes ad performance metrics across StackAdapt's multi-channel advertising platform, with emphasis on their specialized measurement studies: 1PDA (1st Party Data Attribution), BLS (Brand Lift Study), ACR (Incremental Reach), and FTA (Footfall Attribution).

## Technology Stack
- **Frontend**: React, TypeScript, GraphQL client
- **Data Visualization**: Recharts (with D3.js)
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL
- **Caching**: Redis
- **Styling**: Tailwind CSS with custom theme matching StackAdapt branding

## Key Features

### 1. Multi-Channel Performance Analysis
- Interactive dashboard showing performance across:
  - Native ads
  - Display ads
  - Video ads
  - Connected TV
  - Audio ads
  - In-game ads
  - Digital out-of-home (DOOH)

### 2. StackAdapt Measurement Studies Visualization
- **1PDA (1st Party Data Attribution)**
  - Conversion tracking
  - Attribution modeling
  - Path to conversion visualization
  
- **BLS (Brand Lift Study)**
  - Brand awareness metrics
  - Purchase intent tracking
  - Before/after campaign comparison
  
- **ACR (Incremental Reach)**
  - Unique audience reach metrics
  - Channel overlap analysis
  - Frequency distribution charts
  
- **FTA (Footfall Attribution)**
  - Location-based conversion metrics
  - Store visit lift visualization
  - Geographical performance heat maps

### 3. Real-Time Campaign Performance
- Live performance tracking with automated refresh
- Budget pacing visualization
- Spend efficiency metrics
- Custom KPI tracking

### 4. Advanced User Segmentation
- Performance breakdown by:
  - Demographics
  - Geography
  - Device type
  - Time of day
  - Referral source

## Technical Implementation Details

### Frontend Architecture
- Component-based structure with React hooks
- Context API for state management
- Custom hooks for data fetching and transformation
- Responsive design for all device sizes

### Backend API Structure
```
/api/v1/
  /campaigns
    GET /                     # List all campaigns
    GET /{campaign_id}        # Get campaign details
  /performance
    GET /overview             # Overall performance metrics
    GET /channels             # Performance by channel
    GET /measurement-studies  # Results from measurement studies
  /segments
    GET /demographics         # Performance by demographic
    GET /geography            # Performance by location
    GET /devices              # Performance by device type
```

### Database Schema (Simplified)
- Campaigns
- AdGroups
- Creatives
- Channels
- Impressions
- Clicks
- Conversions
- MeasurementStudies
- UserSegments

## UI Design & Branding Elements
- StackAdapt logo in top left corner
- Color scheme matching StackAdapt brand colors
- Custom header: "StackAdapt Ad Performance Dashboard"
- Footer: "Designed for StackAdapt by Mathio Masood-Luca"

## Demonstration Strategy
1. Pre-populated with realistic mock data
2. Ability to filter by date ranges
3. Campaign selector with 3-5 sample campaigns
4. Interactive elements showing data changes
5. Sample "insights" section highlighting key findings
