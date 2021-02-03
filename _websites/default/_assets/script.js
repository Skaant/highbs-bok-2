const elScrollCoef = [
	scrollRatio => (-scrollRatio * 100 - 35) * 1.5,
	scrollRatio => (-scrollRatio * 100
		+ (window.innerWidth < 576
			? 35 : window.innerWidth < 992
				? 100 : -55)) * 1.5
]
const registeredScrolls = [
	...document.getElementsByClassName('parallax')
]
	.map((el, index) => {
		const offsetTop = el.offsetTop
		return (wHeight, wScrollTop) => {
			const scrollRatio = (wScrollTop - offsetTop) / wHeight
			if (scrollRatio > 1 || scrollRatio < -1) return
			el.setAttribute('style', 'top: calc('
				+ Math.round(elScrollCoef[index](scrollRatio))+ 'vh + '
				+ offsetTop + 'px)')
		}
	})

window.onscroll = () => {
	const wHeight = window.innerHeight
	const wScrollTop = window.scrollY
	registeredScrolls.forEach(fn => fn(wHeight, wScrollTop))
}