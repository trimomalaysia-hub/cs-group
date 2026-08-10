# Team photos · 团队照片

Put team member photos in **this folder** and they appear on the
**Our Team** page (`/team`) automatically. **No code editing needed.**

把团队成员的照片放进 **这个文件夹**，就会自动出现在 **Our Team（我们的团队）**
页面（`/team`）上。**完全不需要改代码。**

---

## How to add a photo · 如何上传照片

1. Rename your photo to match the person's **id** (the list is below), e.g.
   把照片重命名为该成员的 **id**（清单见下方），例如：

   ```
   kam-chin-seng.jpg
   ```

2. Copy the file into this folder (`public/team/`).
   把文件复制到这个文件夹（`public/team/`）。

3. Refresh the site (`npm run dev`), or rebuild (`npm run build`) for the live
   site. The monogram placeholder is replaced by the photo.
   刷新网站（`npm run dev`）即可看到；正式网站请重新构建（`npm run build`）。
   占位的字母缩写框会自动换成照片。

`.jpg` `.jpeg` `.png` `.webp` `.avif` all work · 这些格式都支持。

---

## The ids · 成员 id 清单

| id | Who · 成员 |
| --- | --- |
| `kam-chin-seng` | Kam Chin Seng — Founder & Chairman · 创始人兼董事长 |
| `group-coo` | Group Chief Operating Officer · 集团首席运营官 |
| `group-cto` | Group Chief Technology Officer · 集团首席技术官 |
| `trimo-product` | Head of Product, TRIMO · TRIMO 产品负责人 |
| `nexjarvis-transformation` | Head of AI Transformation, NEXJARVIS · NEXJARVIS AI 转型负责人 |
| `gemas-gm` | General Manager, Gemas Golf Resort · Gemas 高尔夫度假村总经理 |
| `national6a-development` | Head of Development, National 6A · National 6A 开发负责人 |

The ids live in `src/lib/team.ts` — that's also where you add a new person,
change a name, a role or a bio (always in **both** English and Chinese).
这些 id 定义在 `src/lib/team.ts` —— 新增成员、修改姓名 / 职务 / 简介也在那里
（请**中英文都填写**）。

> Kam Chin Seng already uses the existing portrait at `public/founder.png`.
> To use a different one for the team page, just drop `kam-chin-seng.jpg` here
> and remove the `photo:` line from his entry in `src/lib/team.ts`.
> Kam Chin Seng 目前沿用 `public/founder.png` 的照片。若想在团队页用另一张，
> 把 `kam-chin-seng.jpg` 放到这里，并删除 `src/lib/team.ts` 中他那条的
> `photo:` 一行即可。

---

## Tips · 建议

- Portrait crop, about **1000 × 1250 px** (4:5) · 竖版人像，约 **1000 × 1250 像素**（4:5）。
- Keep each file under ~**500 KB** · 每张图请控制在 **500 KB** 以内。
- The face should sit in the **upper middle** of the frame — cards crop from the top.
  人脸请置于画面**偏上中间**的位置 —— 卡片会从上方裁切。
- Consistent lighting and background across the team looks far more premium.
  全团队保持一致的光线与背景，整体会高级得多。
