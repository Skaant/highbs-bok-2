import introSection from "../_sections/1_intro/intro.section.js";
import kamis_glossarySection from "../../kami.js/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js";
import kamiSection from "../../kami.js/_shrine/readme/_sections/kami/kami.section.js";

export default ({ kamis }) => ([
  introSection(kamis),
  kamis_glossarySection(kamis),
  ...kamis.map(kami =>
    
    kamiSection(kami, kamis))
])