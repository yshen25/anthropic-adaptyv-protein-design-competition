---
layout: default
title: Five targets and the structural reasoning behind our designs
description: What the Anthropic × Adaptyv competition asked beyond affinity, and how agents translated those objectives into structural hypotheses.
---

[← Series homepage](../index.html)

# Five targets and the structural reasoning behind our designs

*Article 1 of 3 · Draft for discussion*

I submitted designs to all five challenges in the Anthropic × Adaptyv Protein Design Competition. Agents generated hypotheses, performed much of the analysis and operational work, and reviewed the resulting evidence. My role included setting priorities, challenging decisions, authorizing consequential runs and completing submissions.

Before describing that collaboration, it helps to understand the scientific task. Each challenge asked for binding to a target, but affinity alone could not satisfy the full objective. Some designs needed to respond to pH, some needed to recognize both human and mouse proteins, one needed to activate a receptor, and another needed to discriminate a single amino-acid change.

## What distinguished this competition

Earlier competitions already connected computational design to experimental testing. Adaptyv's [2024 EGFR competition](https://proteinbase.com/competitions/adaptyv-egfr-binder2) and [Nipah competition](https://proteinbase.com/competitions/adaptyv-nipah-competition) described affinity-based winner rankings. They also had therapeutic motivations; function was not a new concern introduced here.

What stood out in this competition was the combination of **five targets, explicit conditional or functional objectives, and support for using language-model tools in the design process**. A good interface in one structure was only part of the question. We also had to ask what would happen under a different pH, against another species or target state, or in a functional assay.

Anthropic and Adaptyv organized the competition around overlapping challenge windows, with selected designs going to experimental validation and results to be shared on Proteinbase. Claude use was a condition of Anthropic support in Tracks 1 and 2; the open track allowed other methods. The competition did not prescribe our coordinator–coding–reviewer arrangement. That was how we organized our own work. [Official competition](https://proteinbase.com/competitions/anthropic-adaptyv-2026).

> **FIGURE 1 PLACEHOLDER — Competition overview.** Add a screenshot or illustration from the official competition page. Caption it with the source URL and capture date, and distinguish the organizer's testing program from our submitted designs.

## Five targets and the requirements beyond affinity

The table summarizes biological objectives. Eligibility for submission, selection for testing and winning were separate questions.

| Target | Binding objective | Additional objective | Structural question for the agents |
|---|---|---|---|
| [EGFR](https://proteinbase.com/competitions/anthropic-adaptyv-2026/challenges/egfr) | Bind human extracellular EGFR at pH 6.5 | No detectable human binding at pH 7.4; recognize mouse EGFR at pH 6.5 | Can a conserved surface support acid-favored binding? |
| [TNF-α](https://proteinbase.com/competitions/anthropic-adaptyv-2026/challenges/tnf-alpha) | Bind human TNF at pH 7.4 | Release at pH 6.0; recognize mouse TNF at pH 7.4 | Can an interface on the trimer retain neutral-pH binding while becoming unfavorable in acid? |
| [GLP1R](https://proteinbase.com/competitions/anthropic-adaptyv-2026/challenges/glp1r) | Bind human GLP1R | Activate the receptor in a functional assay | Can a designed scaffold reach an activation-relevant pocket in receptor context? |
| [TfR1](https://proteinbase.com/competitions/anthropic-adaptyv-2026/challenges/tfr1) | Bind human TfR1 at pH 7.4 | Release at pH 6.0; recognize mouse TfR1 at pH 7.4 | Can an accessible site accommodate species differences, the dimer and surrounding context? |
| [KRAS-G12D pMHC](https://proteinbase.com/competitions/anthropic-adaptyv-2026/challenges/pmhc) | Bind mutant peptide presented by HLA-A*11:01 | Reject WT peptide–HLA and peptide-free HLA/β2m | Does the interface read the mutation and peptide rather than shared HLA? |

The pH direction is important: **EGFR should favor acid, whereas TNF and TfR1 should release in acid.** GLP1R adds a different distinction: binding is measured separately from signaling. Binding-only entries can appear in affinity rankings, while winning requires activation as well.

## How the agents translated objectives into structural hypotheses

An epitope is the surface recognized by a binder. The organizers suggested broad functional regions; the agents investigated specific patches and design guidance within that context. Those choices were hypotheses to test, not validated binding sites for our designs.

### EGFR: a conserved patch around target histidines

The organizers recommended domain III. The agents narrowed the proposal to a surface around **H409**, with **H346** considered as a second titratable site, using mature EGFR numbering. The idea was to exploit histidines already present on the target: changes in protonation could alter interactions with a designed binder.

The recorded H409 patch contained 16 exposed residues, 15 identical in the mouse alignment. Comparison across experimental structures supported a relatively stable patch, while an outlier motivated flexibility around residues 406–411.

That reasoning supplied a site and mechanism proposal. Subsequent pKa calculations gave limited support for the desired switch; contact with a histidine did not establish the required response.

> **FIGURE 2 PLACEHOLDER — EGFR site selection.** Show domain III in receptor context, the proposed H409 patch, H409/H346 and the human–mouse difference. State mature versus UniProt numbering. Credit experimental reference 6ARU; label the highlighted patch as our recorded agent proposal.

### TNF: design against the trimer, then examine the chemistry

TNF required the opposite pH behavior. The agents worked with the **trimer**, selecting an inter-protomer patch around **V91** rather than treating an isolated subunit as the target. In the recorded reference, the patch spans residues on chains A and C.

The proposed mechanism emphasized binder histidines whose protonation might destabilize binding in acid. Human–mouse alignment exposed a tradeoff: the patch included charge-changing differences, so a chemically attractive human interface could still be a poor cross-species hypothesis.

Review later challenged some of the geometric evidence supporting the strategy. That trajectory belongs in Article 3; the initial lesson here is that assembly, species and atom-level chemistry all mattered to site selection.

> **FIGURE 3 PLACEHOLDER — TNF inter-protomer patch.** Show the complete trimer, distinguish protomers and highlight the recorded V91 patch across A/C. Add a close-up of proposed histidine interactions only after checking the actual sidechain atoms and chain-specific numbering.

### GLP1R: reaching a pocket does not establish activation

The agents investigated an extracellular approach to the receptor's orthosteric pocket. One pilot used **Q234, W306 and R310** as guidance residues because they contacted the native ligand's N-terminal region in the reference analysis.

The design intent was a compact scaffold with a pocket-reaching loop or tip, without copying the natural agonist sequence. The receptor's transmembrane context, access path and the binder's terminal presentation all affected whether that geometry was plausible.

These residues were generation guidance, not an agonist pharmacophore. A pose in an active-state receptor structure could not establish signaling, and the campaign ultimately retained exploratory binding hypotheses with unresolved activation evidence.

> **FIGURE 4 PLACEHOLDER — GLP1R pocket and approach.** Show receptor context, the pocket guides and extracellular access. Identify the 6X18-derived receptor preparation and its missing regions. Any membrane plane must come from a documented frame, not a decorative placement.

### TfR1: an accessible site within a complicated dimer

The organizers recommended the apical domain. The agents evaluated a more specific initial pilot site using **N206/L209 on chain A of 11QC**, considering exposure and conservation while retaining the full A/B dimer as reference context.

This choice also required attention to glycans, the second receptor subunit and transferrin compatibility. A reduced generation target could make a pilot cheaper, but its apparent accessibility still had to be examined against the omitted context.

The highlighted guides describe that pilot decision, not every later candidate's footprint. The competition's binding measurements would not by themselves demonstrate brain transport, even though TfR1 is relevant to that application.

> **FIGURE 5 PLACEHOLDER — TfR1 pilot guidance in context.** Show the dimer and N206/L209 on chain A. Distinguish observed glycans or other experimental context from modeled or missing features. Keep the full assembly visible alongside any crop.

### KRAS-G12D pMHC: recognizing the difference

Here the agents had to focus on the peptide presented in HLA rather than the much larger shared platform. **Asp6 in the mutant peptide replaces Gly6 in WT.** Generation explored guidance at Asp6 and, in other arms, neighboring Ala5/Val8. Local peptide flexibility allowed the target to move around the proposed interface.

That flexibility created another question: did a candidate depend on a generated peptide conformation that differed from the experimental reference? Later mutant/WT and conformer comparisons tested parts of that uncertainty.

Our generation target was a peptide–HLA platform crop. Available distal HLA/β2m context was restored for subsequent checks; it should not be depicted as if the full assay complex had been used throughout generation.

> **FIGURE 6 PLACEHOLDER — pMHC specificity problem.** Show reference peptide/HLA context, highlight Asp6 versus Gly6 and mark A5/V8. Distinguish experimental references 7OW6/7OW5, generated crop models and restored-context overlays. Do not label a candidate mutant-specific on the basis of a contact picture.

## What this first stage taught us

The agents turned broad biological goals into concrete choices: which assembly to use, where to place a binder, which residues to guide toward, and which counterstates to examine. Those choices made the work testable. They also introduced assumptions that later analyses and reviews had to challenge.

All five challenges have been submitted. We do not yet have experimental binding or functional results for these designs. This series therefore examines the reasoning and evidence behind the hypotheses. Article 2 will describe the collaboration that produced them; Article 3 will follow decisions that changed, failed or missed an important question.

**Discussion:** When selecting an epitope for conditional function, what evidence would make you reject an attractive site before generating a large candidate pool?
