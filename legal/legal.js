// Shows the page in the visitor's language (es, de or en), with buttons to switch.
(function () {
  const sections = Array.from(document.querySelectorAll('section[lang]'))
  const langs = sections.map((s) => s.lang)
  const nav = document.querySelector('nav.langs')
  const names = { es: 'Español', de: 'Deutsch', en: 'English' }
  const wanted = new URLSearchParams(location.search).get('lang')
  const device = (navigator.languages || [navigator.language]).map((l) => l.slice(0, 2)).find((l) => langs.includes(l))
  function show(lang) {
    sections.forEach((s) => s.classList.toggle('on', s.lang === lang))
    nav.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang))
    document.documentElement.lang = lang
  }
  langs.forEach((l) => {
    const b = document.createElement('button')
    b.textContent = names[l]
    b.dataset.lang = l
    b.onclick = () => show(l)
    nav.appendChild(b)
  })
  show(langs.includes(wanted) ? wanted : device || 'en')
})()
