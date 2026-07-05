/**
 * Shared bilingual file catalog for index.html and index-en.html
 * Amir: add FA + EN pair when publishing new documents.
 * `alt` = path to the other language version.
 */
const files = [
  /* Playbook */
  { title:"VELOXA Roadmap", emoji:"🗺️", htmlTitle:"VELOXA Founder Bible & PRD", category:"Playbook", language:"fa", file:"playbook/roadmap.html", alt:"playbook/roadmap-en.html", size:29017, status:"Active", description:"Founder guide & PRD — VELOXA strategic roadmap" },
  { title:"VELOXA Roadmap", emoji:"🗺️", htmlTitle:"VELOXA Founder Bible & PRD", category:"Playbook", language:"en", file:"playbook/roadmap-en.html", alt:"playbook/roadmap.html", size:29017, status:"Active", description:"Founder guide & PRD — VELOXA strategic roadmap" },
  { title:"Lead Generation Strategy", emoji:"🎯", htmlTitle:"Lead Generation Strategy", category:"Playbook", language:"fa", file:"playbook/strategic-marketing.html", alt:"playbook/strategic-marketing-en.html", size:41035, status:"Active", description:"B2B marketing & lead generation" },
  { title:"Lead Generation Strategy", emoji:"🎯", htmlTitle:"Lead Generation Strategy", category:"Playbook", language:"en", file:"playbook/strategic-marketing-en.html", alt:"playbook/strategic-marketing.html", size:41035, status:"Active", description:"B2B marketing & lead generation" },

  /* Funding */
  { title:"Funding SOP 2026", emoji:"💰", htmlTitle:"Funding SOP 2026", category:"Funding", language:"fa", file:"funding/topping-funding-sop-2026.html", alt:"funding/topping-funding-sop-2026-en.html", size:28245, status:"Active", description:"Grants, loans & funding documents" },
  { title:"Funding SOP 2026", emoji:"💰", htmlTitle:"Funding SOP 2026", category:"Funding", language:"en", file:"funding/topping-funding-sop-2026-en.html", alt:"funding/topping-funding-sop-2026.html", size:28245, status:"Active", description:"Grants, loans & funding documents" },

  /* Sales */
  { title:"B2B Sales Strategy", emoji:"📈", htmlTitle:"B2B Sales Strategy", category:"Sales", language:"fa", file:"sales/sales-strategy.html", alt:"sales/sales-strategy-en.html", size:43831, status:"Active", description:"Full market development strategy" },
  { title:"B2B Sales Strategy", emoji:"📈", htmlTitle:"B2B Sales Strategy", category:"Sales", language:"en", file:"sales/sales-strategy-en.html", alt:"sales/sales-strategy.html", size:43831, status:"Active", description:"Full market development strategy" },
  { title:"Candidate Package", emoji:"👤", htmlTitle:"Sales Candidate Package", category:"Sales", language:"fa", file:"sales/sales-candidate-package-fa.html", alt:"sales/sales-candidate-package-en.html", size:57493, status:"Active", description:"Persian candidate information package" },
  { title:"Candidate Package", emoji:"👤", htmlTitle:"Sales Candidate Package", category:"Sales", language:"en", file:"sales/sales-candidate-package-en.html", alt:"sales/sales-candidate-package-fa.html", size:50228, status:"Active", description:"English candidate information package" },
  { title:"Credit & Bonus", emoji:"🏆", htmlTitle:"Credit & Bonus System", category:"Sales", language:"fa", file:"sales/credit-system.html", alt:"sales/credit-system-en.html", size:14115, status:"Active", description:"KPI, credit & sales bonus system" },
  { title:"Credit & Bonus", emoji:"🏆", htmlTitle:"Credit & Bonus System", category:"Sales", language:"en", file:"sales/credit-system-en.html", alt:"sales/credit-system.html", size:14115, status:"Active", description:"KPI, credit & sales bonus system" },

  /* Business Plan */
  { title:"Business Plan 2026", emoji:"📊", htmlTitle:"2026 Business Plan", category:"Business Plan", language:"fa", file:"business-plan/business-plan-2026.html", alt:"business-plan/business-plan-2026-en.html", size:28112, status:"Active", description:"Center-Driven B2B business plan" },
  { title:"Business Plan 2026", emoji:"📊", htmlTitle:"2026 Business Plan", category:"Business Plan", language:"en", file:"business-plan/business-plan-2026-en.html", alt:"business-plan/business-plan-2026.html", size:28112, status:"Active", description:"Center-Driven B2B business plan" },
  { title:"Center Method", emoji:"🎯", htmlTitle:"Center Method", category:"Business Plan", language:"fa", file:"business-plan/center-method.html", alt:"business-plan/center-method-en.html", size:20068, status:"Active", description:"Center Method framework & scoring" },
  { title:"Center Method", emoji:"🎯", htmlTitle:"Center Method", category:"Business Plan", language:"en", file:"business-plan/center-method-en.html", alt:"business-plan/center-method.html", size:20068, status:"Active", description:"Center Method framework & scoring" },
  { title:"Center Negotiation", emoji:"🤝", htmlTitle:"Center Negotiation Strategy", category:"Business Plan", language:"fa", file:"business-plan/center-negotiation.html", alt:"business-plan/center-negotiation-en.html", size:51318, status:"Active", description:"Center-Driven B2B negotiation strategy" },
  { title:"Center Negotiation", emoji:"🤝", htmlTitle:"Center Negotiation Strategy", category:"Business Plan", language:"en", file:"business-plan/center-negotiation-en.html", alt:"business-plan/center-negotiation.html", size:51318, status:"Active", description:"Center-Driven B2B negotiation strategy" },

  /* Proposals */
  { title:"B2B Proposal Template", emoji:"📝", htmlTitle:"B2B Proposal Template", category:"Proposals", language:"fa", file:"proposals/b2b-proposal-template-fa.html", alt:"proposals/b2b-proposal-template-en.html", size:29443, status:"Active", description:"B2B partnership proposal template" },
  { title:"B2B Proposal Template", emoji:"📝", htmlTitle:"B2B Proposal Template", category:"Proposals", language:"en", file:"proposals/b2b-proposal-template-en.html", alt:"proposals/b2b-proposal-template-fa.html", size:29443, status:"Active", description:"B2B partnership proposal template" }
];
