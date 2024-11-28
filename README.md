This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Co-working Space Booking System

A React-based booking system for managing co-working space desk reservations.

## Features

- 15 available desks (10 individual, 5 team desks)
- Different membership tiers with varying rates
- Visual representation of desk availability
- Real-time pricing calculation
- Automatic discount for bookings over 3 hours

## Membership Tiers & Pricing

### Individual Desks
- Basic: $10/hour
- Premium: $15/hour
- Executive: $20/hour

### Team Desks
- Fixed rate: $25/hour

A 10% discount is automatically applied for bookings of 3 hours or more.

## How to Use

1. Select an available desk from the grid
   - Blue desks are for individual use
   - Purple desks are for team use
   - Red desks are already booked

2. For individual desks, select your membership tier

3. Enter the number of hours you wish to book

4. Review the total amount

5. Click "Confirm Booking" to complete your reservation

## Installation

1. Clone the repository: