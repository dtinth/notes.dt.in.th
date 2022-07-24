import styles from "./OutboundLink.module.css";

// From VuePress
// https://github.com/vuejs/vuepress/blob/81cce3967c018fe005f112cbe950abc7457dbacb/packages/%40vuepress/core/lib/client/components/OutboundLink.vue
const indicator = `<svg class="${styles.icon}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8 85.1h56c2.2 0 4-1.8 4-4v-32h-8v28h-48v-48h28v-8h-32c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4z"/><path fill="currentColor" d="m45.7 48.7 5.6 5.6 25.9-25.8v8.7h8V14.9H62.8v8h8.7z"/></svg><span class="${styles.srOnly}"> (opens new window)</span>`;

const OutboundLink: any = {
  render(h: any) {
    return h("span", {
      class: styles.indicator,
      domProps: {
        innerHTML: indicator,
      },
    });
  },
};

export default OutboundLink;
