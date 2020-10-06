$(document).ready(() => {
    
  $('.navbar-brand, li, h1, h2, p, h3').each((index, element) => {
    
    element.innerHTML = element.innerHTML.replace(
      /([A-ZÉÏ\-\.]{2,})/g,
      '<span class="lexic open text-laser">$1</span>'    
    )
        
    element.innerHTML = element.innerHTML.replace(
      /text-laser">HOL-ADIN</g,
      'text-gold">HOL-ADIN<'    
    )
  })

  setTimeout(
    () =>
      
      $('.lexic.open').removeClass('open'),
    250
  )
})
