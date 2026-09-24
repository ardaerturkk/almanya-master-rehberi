import type MarkdownIt from "markdown-it";

/**
 * `- [ ] metin` maddelerini gerçek onay kutularına çevirir.
 * VitePress varsayılan olarak görev listelerini çizmiyor; bu kural her maddeyi
 * <label><input type="checkbox" class="amr-task-cb" data-grup data-id> ... </label> olarak basar.
 * Durumu tarayıcıda IlerlemeYoneticisi bileşeni saklar ve geri yükler.
 * Grup: "Kontrol" başlığı altındaki maddeler "kontrol", diğerleri "liste".
 */
export function gorevListesi(md: MarkdownIt) {
  md.core.ruler.after("inline", "amr_gorev_listesi", (state) => {
    const t = state.tokens;
    const sayac: Record<string, number> = { kontrol: 0, liste: 0 };
    let baslik = "";

    for (let i = 0; i < t.length; i++) {
      if (t[i].type === "heading_open" && t[i + 1]?.type === "inline") baslik = t[i + 1].content;
      if (t[i].type !== "list_item_open") continue;

      // Sıkı listede paragraph_open gizli olarak yine vardır.
      const inline = t[i + 1]?.type === "paragraph_open" ? t[i + 2] : t[i + 1];
      if (!inline || inline.type !== "inline") continue;
      const m = /^\[( |x|X)\]\s+/.exec(inline.content);
      const ilk = inline.children?.[0];
      if (!m || !ilk || ilk.type !== "text") continue;

      const grup = /kontrol/i.test(baslik) ? "kontrol" : "liste";
      const id = `${grup}-${sayac[grup]++}`;
      const isaretli = m[1] !== " " ? " checked" : "";
      ilk.content = ilk.content.replace(/^\[( |x|X)\]\s+/, "");

      const ac = new state.Token("html_inline", "", 0);
      ac.content = `<label class="amr-task"><input type="checkbox" class="amr-task-cb" data-grup="${grup}" data-id="${id}"${isaretli}><span class="amr-task-metin">`;
      const kapat = new state.Token("html_inline", "", 0);
      kapat.content = "</span></label>";
      inline.children!.unshift(ac);
      inline.children!.push(kapat);

      t[i].attrJoin("class", "amr-task-item");
      // Bu maddenin ait olduğu listeyi işaretle.
      for (let j = i - 1; j >= 0; j--) {
        if (t[j].type === "bullet_list_open") {
          t[j].attrJoin("class", "amr-tasklist");
          break;
        }
      }
    }
  });
}
