# ArcTree.dev

Draft website for the **ArcTree Gaming System (AGS)**. 
A new frontier of storytelling, from lighthearted humor to the darkest drama.

## Features

- **Interactive UI**: Sleek glassmorphism aesthetic with a circuit board green and gold color palette.
- **Dynamic Particle System**: An interactive, mouse-reactive digital forest background.
- **Game Library**: Placeholders for hosting both free-to-play and premium AGS titles.
- **Developer Hub**: Information and resources for prospective game writers.
- **Subscription Integrations**: Stubs for Patreon and Paddle support.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MikeTronix/arctree.dev.git
   cd arctree.dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: The project uses Vite v5 for stable native bindings on Windows environments)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available locally (typically at `http://localhost:5173/`).

### Building for Production

To create a production-ready build:
```bash
npm run build
```
The optimized files will be output to the `dist/` directory, which can be deployed to any static file hosting service.

## Tech Stack
- Vanilla HTML/CSS/JS
- [Vite](https://vitejs.dev/) - Build tool
- [tsParticles](https://particles.js.org/) - Interactive background effects
