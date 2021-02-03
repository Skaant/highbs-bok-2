import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import homeTemplate from '../../../_templates/home/home.template.js'
import aboutTemplate from '../../../_templates/about/about.template.js'
import sevenErasTemplate from '../../../_templates/seven-eras/seven-eras.template.js'
import glossaryTemplate from '../../../_templates/glossary/glossary.template.js'
import colorsTemplate from '../../../_templates/colors/colors.template.js'
import universeTemplate from '../../../_templates/universe/universe.template.js'

export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    homeTemplate,
    data
  ),
  'about': websitePageMotif.shape(
    aboutTemplate,
    data
  ), 
  'univers': websitePageMotif.shape(
    universeTemplate,
    data
  ),
  '7-eras': websitePageMotif.shape(
    sevenErasTemplate,
    data
  ),
  'glossaire': websitePageMotif.shape(
    glossaryTemplate,
    data
  ),
  'couleurs': websitePageMotif.shape(
    colorsTemplate,
    data
  )
})