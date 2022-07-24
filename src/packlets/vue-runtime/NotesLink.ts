const NotesLink: any = {
  props: {
    href: String,
  },
  render(h: any) {
    return h(
      "a",
      {
        attrs: {
          href: `${this.href}`,
        },
      },
      this.$slots.default
    );
  },
};

export default NotesLink;
