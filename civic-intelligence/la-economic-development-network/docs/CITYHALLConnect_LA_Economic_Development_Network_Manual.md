# CITYHALLConnect LA Economic Development Network Operating Manual

Made with LOVE by ACoolNERD with ACoolAI.

## Purpose

CITYHALLConnect now needs an economic-development network layer. The system should show who helps businesses, where the public money and programs flow, which organizations influence policy, which Neighborhood Councils carry community signals, and which business associations can move outreach.

The goal is not just a directory. The goal is a civic intelligence operating layer that connects city programs, public data, local businesses, chambers, Neighborhood Councils, nonprofit business-support organizations, and regional economic-development organizations.

## Primary data clusters

1. City programs and departments.
2. BusinessSource and WorkSource centers.
3. Business Response Unit and LA Business Navigator flows.
4. JEDI Zones and corridor-specific incentives.
5. Neighborhood Councils, Community Impact Statements, and meeting agendas.
6. Chambers, business associations, BIDs, and merchant groups.
7. Regional economic-development organizations.
8. Funding, lending, grants, procurement, and LA28 business opportunities.
9. Business directories and verified owner/contact records.
10. Economic reports, dashboards, and policy positions.

## City of LA business support architecture

EWDD provides services to business owners and developers directly and through contracted service providers. The program stack includes financing, technical assistance, training, tax incentives, workforce programs, BusinessSource, incubators, accelerators, ProcureLA, Legacy Business, LA Optimized, JEDI Zones, Good Food Zones, WorkSource, Green Business, and the Small Business Commission.

## BusinessSource Center model

BusinessSource Centers provide no-cost services to City of LA business owners and resident entrepreneurs. Core services include one-on-one consulting, entrepreneur training, access to capital, business education, employee hiring/workforce development, and economic incentive/development programs.

The San Fernando Valley layer has three priority centers for CITYHALLConnect:

- West Valley / Canoga Park.
- South Valley / Van Nuys.
- North Valley / Pacoima.

Each center should be treated as a service node with operator, languages, address, phone, intake path, program coverage, and referral history.

## JEDI Zones

JEDI Zones are corridor-based economic-development incentive areas for historically underserved communities. The system should ingest approved zone boundaries, Council District, eligibility rules, business counts, business types, facade opportunities, microloan eligibility, compliance-assistance needs, and WorkSource hiring opportunities.

Priority Valley zones:

- Reseda Boulevard Corridor.
- Sherman Way Corridor.
- Van Nuys Boulevard Corridor.
- Lankershim Boulevard.

## Neighborhood Council layer

Los Angeles has 99 Neighborhood Councils. These councils are advisory bodies in the City government and receive annual budgets funded by taxpayer dollars. They are not chambers, but they are civic signal infrastructure.

CITYHALLConnect should track:

- Board roster.
- Meeting calendar.
- Agenda/minutes links.
- Community Impact Statements.
- Land-use committee activity.
- Budget and Neighborhood Purpose Grants.
- Business stakeholder seats.
- Public comment themes.
- Overlap with council districts and JEDI zones.

## Regional business influence layer

The regional business layer includes VICA, United Chambers of Commerce, Greater San Fernando Valley Chamber, LA Area Chamber, LAEDC, BizFed, Valley Economic Alliance, VEDC/VSEDC, local merchant associations and BIDs.

These entities should be mapped by:

- Mission.
- Geography.
- Membership base.
- Policy committees.
- Event calendar.
- Business assistance programs.
- Advocacy priorities.
- Procurement education.
- LA28 readiness work.
- Direct contact and membership pathway.

## CITYHALLConnect dashboards

### 1. Economic Development Command Center

Shows all programs, service providers, active corridors, funding sources, public reports, and business-support lanes.

### 2. BusinessSource Service Map

Shows every BusinessSource center by location, operator, language, phone, service model, and Valley relevance.

### 3. JEDI Zone Corridor Tracker

Shows each zone, incentives, facade opportunities, microloan status, permitting assistance, and storefront candidates.

### 4. Neighborhood Council Signal Board

Shows agenda items, land-use issues, community impact statements, local business concerns, and grants.

### 5. Chamber and Coalition Network

Shows chambers, VICA, LAEDC, BizFed, Valley Economic Alliance, event calendars, board contacts and policy issues.

### 6. Business Owner Verification Queue

Does not infer owner names. It tracks only owner/contact data verified through lawful public sources, business licenses, Secretary of State records, direct submissions, or confirmed public profiles.

## Notion database structure

Import the CSVs in `/data` into Notion databases:

- Economic Development Programs.
- BusinessSource Centers.
- Regional Business Organizations.
- Neighborhood Council Ecosystem.
- JEDI Zones.
- Source Registry.

Recommended Notion properties:

- Jurisdiction.
- Organization type.
- Program type.
- Geography.
- Contact.
- Intake URL.
- Source URL.
- Last scraped.
- Confidence score.
- Review status.
- Rights status.
- Next action.

## Figma frame set

Create these Figma pages:

1. LA Economic Development Home.
2. BusinessSource Center Map.
3. JEDI Corridor Intelligence.
4. Neighborhood Council Signal Board.
5. Chamber + Coalition Network.
6. Business Resource Journey.
7. Procurement + LA28 Opportunity Tracker.
8. Owner Verification Queue.
9. ACoolAI Civic Intelligence Admin.

## Data ethics rule

Do not fabricate ownership, funding, board, or political influence relationships. Store each claim with a source URL, scrape date, confidence score and review status.

## Expansion path

Phase 1: LA + San Fernando Valley.
Phase 2: Burbank, Glendale, Calabasas, San Fernando, Santa Clarita and Pasadena adjacency.
Phase 3: LA County economic development + chambers + countywide BizFed/LAEDC mapping.
Phase 4: procurement, real estate, workforce and capital-access pipeline.
Phase 5: AI-assisted recommendations and live alerts.
