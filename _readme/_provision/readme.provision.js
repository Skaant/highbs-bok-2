import KAMI from '../../kami.js/_shrine/kami/kami.kami.js'

export default () =>

  new Promise(resolve =>

    KAMI.get()
      .then(kamis =>

        resolve({ kamis })))