# DashBot
*Custom Discord Bot For Dash*

## 🛠 Tech Stack
![Tech Stack](https://skills-icons.vercel.app/api/icons?i=ts,nextjs,axios)

## 🍬 Wrapper
https://discord.js.org/

## File Structure
```
/DashBot/
├── apps/
│   ├── bot/
│   │   ├── src/
│   │   │   ├── commands/        # Slash/text commands
│   │   │   ├── events/          # Event listeners
│   │   │   ├── api/             # REST API routes
│   │   │   ├── controllers/     # API logic
│   │   │   ├── services/        # Core logic (Discord.js interactions)
│   │   │   ├── utils/           # Utility functions
│   │   │   ├── config/          # Configs, env loader
│   │   │   └── index.ts         # Bot + server entry point
│   │   ├── .env
│   │   └── tsconfig.json
│
│   └── web/                     # Web console (Next.js + Axios)
│       ├── pages/               
│       ├── components/          # Reusable UI components
│       ├── lib/                 # Axios config, hooks
│       ├── api/                 # Next.js API routes (if needed)
│       ├── features/            # Grouped UI and logic (dashboard, auth, etc.)
│       ├── styles/
│       ├── public/
│       ├── .env.local
│       └── tsconfig.json
│
├── packages/
│   ├── types/
│   │   └── index.ts
│   └── config/
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Setup

TBD
