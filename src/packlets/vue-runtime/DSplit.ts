import styles from "./DSplit.module.css";

const DSplit: any = {
  render(h: any) {
    return h("div", { class: styles.container }, [
      h("div", { class: styles.left }, this.$slots.default),
      h("div", { class: styles.right }, this.$slots.right),
    ]);
  },
};

export default DSplit;
