import introSection from "../_sections/1_intro/intro.section.js";
import motifs_glossarySection from "motifs-js/_motifs/readme/_sections/motifs_glossary/motifs_glossary.section.js";
import motifSection from "motifs-js/_motifs/readme/_sections/motif/motif.section.js";

export default ({ motifs }) => ([
  introSection(motifs),
  motifs_glossarySection(motifs),
  ...motifs.map(motif =>
    
    motifSection(motif, motifs))
])