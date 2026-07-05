# Cleanup Report

**Date:** 2026-07-05  
**Action:** Organize, deduplicate, and archive HTML files  
**Nothing was permanently deleted.**

---

## Summary

| Metric | Count |
|--------|-------|
| Active files | 11 |
| Duplicates moved to `archive/duplicates/` | 41 |
| Uncertain/old moved to `archive/old-versions/` | 67 |
| Total HTML before cleanup | ~110 |
| Total HTML after cleanup (active) | 12 (incl. dashboards) |

---

## Active Files (kept)

| New Path | Source (original) | Reason |
|----------|-------------------|--------|
| `playbook/roadmap.html` | `VELOXA_Founder_Bible_PRD_Complete.html` | Best PRD/roadmap doc |
| `playbook/strategic-marketing.html` | `topping_lead_strategy (1) (1).html` | Complete lead-gen strategy |
| `funding/topping-funding-sop-2026.html` | `employee-sop/topping-funding-sop-2026.html` | Canonical funding SOP |
| `sales/sales-strategy.html` | `playbook/topping-courier-strategy.html` | **43KB** — more complete than 19KB B2B version |
| `sales/sales-candidate-package-fa.html` | `hr/sales-candidate-package-fa.html` | Persian candidate package |
| `sales/sales-candidate-package-en.html` | `hr/sales-candidate-package-en.html` | English candidate package (kept both languages) |
| `sales/credit-system.html` | `sales-system/topping-credit-bonus-system.html` | Credit & bonus KPI system |
| `business-plan/business-plan-2026.html` | `business-plan/topping-2026-business-plan-center-method.html` | 2026 business plan |
| `business-plan/center-method.html` | `playbook/center-method-topping.html` | Center Method framework |
| `business-plan/center-negotiation.html` | `playbook/topping-center-negotiation-strategy.html` | Negotiation strategy |
| `proposals/b2b-proposal-template-fa.html` | `proposals/topping-b2b-proposal-template-fa.html` | B2B proposal template FA |

---

## Renamed Files

| Old Name | New Name |
|----------|----------|
| `VELOXA_Founder_Bible_PRD_Complete.html` | `playbook/roadmap.html` |
| `topping_lead_strategy (1) (1).html` | `playbook/strategic-marketing.html` |
| `employee-sop/topping-funding-sop-2026.html` | `funding/topping-funding-sop-2026.html` |
| `playbook/topping-courier-strategy.html` | `sales/sales-strategy.html` |
| `hr/sales-candidate-package-fa.html` | `sales/sales-candidate-package-fa.html` |
| `hr/sales-candidate-package-en.html` | `sales/sales-candidate-package-en.html` |
| `sales-system/topping-credit-bonus-system.html` | `sales/credit-system.html` |
| `business-plan/topping-2026-business-plan-center-method.html` | `business-plan/business-plan-2026.html` |
| `playbook/center-method-topping.html` | `business-plan/center-method.html` |
| `playbook/topping-center-negotiation-strategy.html` | `business-plan/center-negotiation.html` |
| `proposals/topping-b2b-proposal-template-fa.html` | `proposals/b2b-proposal-template-fa.html` |

Old folders removed after migration: `hr/`, `employee-sop/`, `sales-system/`

---

## Duplicates Moved (41 files → `archive/duplicates/`)

Byte-identical copies of active files. Each duplicate maps to its canonical active version:

- **Business Plan duplicates:** `topping-2026-business-plan-center-method.html`, `topping_2026_business_plan_center_method.html`, `topping_2026_business_plan_center_method (1).html` (× root + playbook)
- **Center Method duplicates:** `center_method_topping.html`, `center_method_topping (1).html`, `center-method-topping.html` (× root + playbook)
- **Center Negotiation duplicates:** `topping-courier-center-negotiation-updated.html`, `topping-center-negotiation-strategy.html`
- **Sales Strategy duplicate:** `topping-courier-strategy.html`, `topping_courier_sales_strategy.html`, `topping-b2b-sales-strategy.html` (19KB shorter version → old-versions)
- **Candidate packages:** root + hr + playbook copies (FA and EN kept as separate language versions in active)
- **Credit system:** `topping-credit-bonus-system.html`, `topping_credit_system.html` (×4 locations)
- **Funding SOP:** `topping_employee_funding_sop-1.html`
- **Proposal template:** `Topping_B2B_Proposal_Template_FA (1).html`
- **VELOXA PRD:** `VELOXA_Founder_Bible_PRD_Complete.html`, `VELOXA_Founder_Bible_PRD_Complete (1).html`
- **Lead strategy:** `topping_lead_strategy (1) (1).html` (playbook copy after active file created)

---

## Uncertain / Old Versions (67 files → `archive/old-versions/`)

Files not promoted to active status — related content exists elsewhere, or purpose was unclear:

| File | Notes |
|------|-------|
| `topping-b2b-sales-strategy.html` | Same title as sales-strategy but 19KB (shorter); 43KB version kept |
| `topping_marketing_compensation_v2.html` | Marketing compensation case study — may overlap with credit-system |
| `Topping_Courier_Combined_Marketing_Compensation_Evaluation_FA_v1.html` | Compensation evaluation — related to payment systems |
| `topping_payment_system_final*.html` (3 copies) | Payment system drafts |
| `topping_payment_system_based_on_evaluation*.html` (4 variants) | Payment evaluation drafts; `no_amir` variant differs slightly |
| `topping-courier-modern-signin.html` | UI mockup — not a business document |
| `topping-crm-guide.html` | CRM guide — useful but not in required structure |
| `topping_content_guide (1).html` | Content framework |
| `topping_pricing_landing.html` | Pricing landing page |
| `topping_pallet_pricing_summary_fa.html` | Pallet pricing summary |
| `topping_partner_rate_model.html` | Partner rate model |
| `topping_international_center_business_plan.html` | International business plan variant |
| `center_method_case_study.html` | Center Method case study |
| `center_strategy_topping.html` | Center Strategy (separate from Center Method) |
| `Topping_CEO_B2B_Scenario_FULL.html` | CEO B2B meeting scenario |
| `topping_courier_b2b_outreach_templates.html` | Outreach templates EN |
| `topping_courier_carrier_partnership_outreach_crm_archive.html` | CRM archive |
| `lead_flowchart (1) (1).html` | Lead flowchart (may overlap with strategic-marketing) |
| `NAS_Framework_Proposal_FA.html` | NAS Framework proposal |
| `leadership_assessment_demo.html` | Leadership assessment demo |
| `hamid_english_coach_summary.html` | Personal project summary |
| `Amir_Projects_Report.html` | Projects report for Amir |
| `barzin_holding_server_inventory.html` | Server inventory |
| `server (2).html`, `server_26_06_06.html` | Server/infrastructure docs |

> **Review these** if any should be promoted to active status.

---

## Deduplication Logic Applied

1. **MD5 hash comparison** — byte-identical files → `archive/duplicates/`
2. **Same title, different size** — larger/more complete version kept (e.g. sales-strategy 43KB vs 19KB)
3. **Persian + English pairs** — both kept as separate active files
4. **Uncertain purpose** — moved to `archive/old-versions/` (not deleted)
5. **Original HTML content preserved** — no edits inside document files

---

## Next Steps for Amir

- [ ] Review `archive/old-versions/` and promote any needed docs
- [ ] Update `index.html` → `files` array when adding new documents
- [ ] Enable GitHub Pages and test all links
- [ ] Delete this report's internal temp file `_cleanup_data.json` if still present
