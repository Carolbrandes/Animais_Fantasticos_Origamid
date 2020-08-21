export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) =>
      link.addEventListener("click", this.scrollToSection)
    );
  }

  scrollToSection(event) {
    event.preventDefault();
    // se colocarmos event.currentTarget.href vai vir a url completa, já com getAttribute vai vir só o #...
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }
}
