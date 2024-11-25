# Tip Calculator

> Simple desktop application to calculate tips on a bill

## Prerequisites

- Node.js (v16 or higher)

- pnpm (to install, run: npm install -g pnpm)

## Setup

Clone the Repository

```sh
git clone <repostitory_url>
cd tip-calculator
```

## Install Dependencies

```sh
pnpm install
```

## Run the Development Server

```sh
pnpm dev
```

This starts the Vite development server. Open the browser to see the application.

## Start Electron (Desktop Version)

In a separate terminal, run:

```sh
pnpm exec electron .
```

## Build for Production

```sh
pnpm build
```

This bundles the front-end, compiles TypeScript, and packages the Electron app.

Preview the Build

```sh
pnpm preview
```
