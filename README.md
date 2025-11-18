# DAIKON Studio

An integrated AI platform for drug discovery informatics featuring advanced cheminformatics tools, molecule analysis, and binding affinity prediction.

![DAIKON Studio](https://img.shields.io/badge/DAIKON-Studio-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Features

### Core Applications

- **CAGE-Fusion**: Nuisance compound detection with attention maps for identifying problematic molecules in drug discovery pipelines
- **Boltz-2**: Advanced binding affinity prediction using machine learning models
- **Document Summarizer**: AI-powered research paper analysis and summarization
- **Fragmentstein**: Fragment recombination tool for molecular design

### Platform Capabilities

- **Molecule Analysis**: Interactive molecule viewer and input tools
- **Dataset Management**: Browse and manage molecular datasets
- **Analytics Dashboard**: Visualize experimental results and model performance
- **API Integration**: RESTful API for programmatic access

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod validation
- **Language**: TypeScript 5.0

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/panda-sas/daikon-studio.git
cd daikon-studio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Project Structure

```
DAIKON Studio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── analytics/          # Analytics dashboard
│   ├── apps/               # Application pages
│   │   ├── cage-fusion/   # CAGE-Fusion app
│   │   ├── boltz-2/       # Boltz-2 app
│   │   └── ...
│   ├── datasets/          # Dataset management
│   ├── docs/              # Documentation
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── charts/           # Chart components
│   └── ...
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Design

DAIKON Studio features a modern, colorful design with:
- Clean white background
- Vibrant color scheme (blue, cyan, teal, indigo, orange, green)
- Gradient accents and modern UI components
- Responsive design for all screen sizes
- Dark mode support

## 📚 Documentation

- [User Guide](/docs)
- [API Documentation](/docs/api)
- [Model Documentation](/docs/models)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👥 Authors

- **Saswati Panda** - [panda-sas](https://github.com/panda-sas)

## 🙏 Acknowledgments

- Built with Next.js and React
- UI components from Radix UI
- Icons from Lucide React

---

**DAIKON Studio** - Accelerating drug discovery through AI-powered informatics.

