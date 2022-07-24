let latestLf: { unmount: () => void } | undefined;
export async function setupFootnotes() {
  const littlefootPromise = import("littlefoot");
  const { default: littlefoot } = await littlefootPromise;
  if (latestLf) {
    latestLf.unmount();
  }
  latestLf = littlefoot({
    buttonTemplate: `<button
  aria-expanded="false"
  aria-label="Footnote <% number %>"
  class="littlefoot__button"
  id="<% reference %>"
  title="See Footnote <% number %>"
/>
  <% number %>
</button>`,
  });
}
