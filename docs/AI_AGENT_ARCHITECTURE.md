# AI Agent Architecture

## Overview
The ACoolAI Agent Stack is built on a modular framework designed for high-fidelity reasoning, retrieval-augmented generation (RAG), and autonomous action within the ACoolECOSYSTEM.

## The Agent Stack
1. **Orchestrator Layer (ACoolPROMPT)**:
   - Handles meta-prompting.
   - Routes tasks to specialized agents.
   - Manages context and state across brand boundaries.
2. **Knowledge Layer (ACoolDATASET)**:
   - Interface to the ACoolKNOWLEDGEBASE.
   - Manages vector embeddings and retrieval.
3. **Execution Layer**:
   - **CITYHALL Civic Agent**: Tools for scraping public records, summarizing meetings, and routing 311 intake.
   - **COLLECTOR Agent**: Tools for price lookup, image identification, and marketplace API interaction.
   - **BUSINESS Agent**: Tools for calendar, email, and task management.

## Technical Patterns
- **TypeScript interfaces** for all agent messages.
- **Strict schemas** for tool/function calls.
- **Chain-of-thought** reasoning logs for transparency.

---
**Status**: v1.0 Specification
