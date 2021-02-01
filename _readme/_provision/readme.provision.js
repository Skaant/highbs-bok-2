import motifMotif from 'motifs-js/_motifs/motif/motif.motif.js'

export default () =>

  new Promise(resolve =>

    motifMotif.get()
      .then(motifs =>

        resolve({ motifs })))