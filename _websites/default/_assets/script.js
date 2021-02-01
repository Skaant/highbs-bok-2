window.onscroll = () => {
	const topImageEl = document.getElementById('top-image')
	if (!topImageEl) window.onscroll = undefined
	const wHeight = window.innerHeight
	const wScrollTop = window.scrollY
	const scrollRatio = wScrollTop / (2 * wHeight)
  if (scrollRatio > 100) return
	topImageEl.setAttribute('style', 'top: ' + Math.round(-scrollRatio * 100 + 50) + 'vh')
}