# AGENTS.md

This document provides strict instructions for AI agents (and human developers) working on the ACoolECOSYSTEM.

## Pre-Flight Checklist
- **Inspect before editing**: Run `pwd`, `ls -la`, `git status`, and `find . -maxdepth 3`.
- **Stay inside the repo**: Only work within `/workspace/Documents/CITYHALLConnect` (or the equivalent project root).
- **Check for existing work**: Never overwrite or revert user-made changes without explicit instruction.

## Safety & Security
- **No Secrets**: Do not touch, read, copy, commit, or expose password files, CSV credential exports, `.env` files, tokens, secrets, browser password exports, private keys, or personal files.
- **Selective Staging**: Use `git add <file>` specifically. Never use `git add .` if there is a risk of staging sensitive files.

## Naming Conventions
Always preserve ACool naming exactly:
- **ACoolECOSYSTEM**
- **ACoolAI**
- **ACoolCOLLECTOR**
- **ACoolNERD**
- **ACoolDATASET**
- **ACoolACADEMY**
- **ACoolDASHBOARD**
- **ACoolPROMPT**
- **ACoolKNOWLEDGEBASE**

## Technical Standards
- **Language**: Use **TypeScript** for all application code.
- **UI/UX**: Prefer **accessible, semantic HTML** and mobile-first **Tailwind CSS**.
- **Documentation**: Document all major changes in `README.md` or the `/docs` folder.
- **Quality**: Run `npm run lint` and `npm run build` whenever possible before finishing a task.

## Git Workflow
- Set local identity for this repo:
  ```bash
  git config user.name "ACool NERD"
  git config user.email "iam@acoolnerd.com"
  ```
- Use clear, descriptive commit messages.
- Target a "Timmy Score" of 9.8/10 for all code quality and documentation.

## ACool Brand Systems
- **Color Palette**: Dark charcoal backgrounds with brand-specific accents:
  - ACoolECOSYSTEM: Electric Blue / Gold
  - ACoolAI: Mint Green
  - ACoolCOLLECTOR: Flame Orange (#E8520F)
- **Typography**: Clean modern sans-serif (e.g., Inter).
