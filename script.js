/* ===================== 全局基础 ===================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-height: 100%;
  font-family:
    "PingFang SC",
    "Microsoft YaHei",
    "Noto Sans SC",
    Arial,
    sans-serif;
  background: #e9e2d8;
  color: #24362c;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  position: relative;
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  overflow: hidden;
  background: #fffaf1;
}

.page {
  position: absolute;
  inset: 0;
  min-height: 100vh;
  padding: 28px 22px;
  opacity: 0;
  pointer-events: none;
  transform: translateX(26px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.page.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
}

.hidden {
  display: none !important;
}


/* ===================== 通用按钮 ===================== */

.primary-btn {
  margin-top: 26px;
  padding: 14px 26px;
  border-radius: 999px;
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.03em;
  background: linear-gradient(135deg, #3f6651, #8ba574);
  box-shadow: 0 14px 34px rgba(63, 102, 81, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.primary-btn:active {
  transform: scale(0.97);
  box-shadow: 0 8px 22px rgba(63, 102, 81, 0.24);
}

.primary-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.secondary-btn {
  padding: 13px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 800;
  color: #3f6651;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(63, 102, 81, 0.2);
  backdrop-filter: blur(14px);
}

.no-margin {
  margin-top: 0;
}

.fixed-bottom {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 30px;
}

.glass-btn {
  padding: 15px 34px;
  border-radius: 999px;
  color: #26372d;
  font-size: 16px;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 18px 48px rgba(63, 102, 81, 0.18);
  backdrop-filter: blur(20px);
}

.text-btn {
  display: block;
  margin: 20px auto 0;
  color: rgba(36, 54, 44, 0.54);
  font-size: 13px;
  background: transparent;
}


/* ===================== 通用页头 ===================== */

.page-header {
  position: relative;
  z-index: 3;
  padding-top: 8px;
}

.page-header.compact {
  padding-top: 2px;
}

.section-label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.section-title {
  margin-top: 10px;
  font-size: 29px;
  line-height: 1.18;
  font-weight: 950;
  letter-spacing: -0.05em;
}

.section-desc {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.75;
}

.page-header.dark .section-label,
.page-header.dark .section-title {
  color: #fffaf1;
}

.page-header.dark .section-desc {
  color: rgba(255, 250, 241, 0.68);
}

.page-header.light .section-label {
  color: #6f8766;
}

.page-header.light .section-title {
  color: #24362c;
}

.page-header.light .section-desc {
  color: rgba(36, 54, 44, 0.64);
}


/* ===================== 页面一：唤醒页 ===================== */

.page-awake {
  text-align: center;
  background:
    radial-gradient(circle at 50% 76%, rgba(147, 178, 128, 0.52), transparent 32%),
    radial-gradient(circle at 24% 22%, rgba(215, 202, 232, 0.52), transparent 26%),
    linear-gradient(180deg, #fffdf7 0%, #f4efe6 100%);
}

.awake-content {
  position: relative;
  z-index: 3;
  padding-top: 48px;
}

.brand-pill {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  color: #637b5c;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(129, 160, 117, 0.24);
  backdrop-filter: blur(12px);
}

.main-title {
  margin-top: 28px;
  font-size: 42px;
  line-height: 1.08;
  font-weight: 950;
  color: #24362c;
  letter-spacing: -0.07em;
}

.main-subtitle {
  margin-top: 18px;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(36, 54, 44, 0.62);
}

.drum-garden {
  position: absolute;
  left: 50%;
  bottom: 106px;
  width: 332px;
  height: 332px;
  transform: translateX(-50%);
}

.drum-shell {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 48%, #fdfefb 0%, #e4eadf 48%, #d3d8cd 67%, #ffffff 70%);
  box-shadow:
    inset 0 10px 28px rgba(255, 255, 255, 0.9),
    inset 0 -14px 28px rgba(91, 107, 93, 0.16),
    0 30px 70px rgba(63, 102, 81, 0.2);
}

.drum-inner {
  position: absolute;
  inset: 42px;
  overflow: hidden;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 72%, rgba(142, 177, 123, 0.92), transparent 38%),
    radial-gradient(circle at 34% 42%, rgba(232, 221, 243, 0.9), transparent 30%),
    linear-gradient(180deg, #f8fcf4 0%, #dcebd6 100%);
}

.drum-inner::before {
  content: "";
  position: absolute;
  left: 12%;
  right: 12%;
  bottom: 20%;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.48);
  filter: blur(9px);
}

.garden-leaf,
.garden-flower,
.scent {
  position: absolute;
  display: block;
}

.garden-leaf {
  width: 74px;
  height: 28px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, #7d9c68, #c5d6b8);
  opacity: 0.88;
}

.leaf-1 {
  left: 48px;
  bottom: 62px;
  transform: rotate(-24deg);
}

.leaf-2 {
  right: 42px;
  bottom: 78px;
  transform: rotate(28deg);
}

.garden-flower {
  width: 46px;
  height: 46px;
  border-radius: 56% 44% 58% 42%;
  background: linear-gradient(135deg, #fff, #cbbce6);
  box-shadow:
    32px 4px 0 -11px #fff,
    15px -24px 0 -12px #d8cbea,
    17px 24px 0 -12px #fff;
  animation: float 4.2s ease-in-out infinite;
}

.flower-1 {
  left: 62px;
  top: 88px;
}

.flower-2 {
  right: 70px;
  top: 104px;
  transform: scale(0.75);
  animation-delay: 0.8s;
}

.scent {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.92);
  animation: rise 3.6s ease-in-out infinite;
}

.scent-1 {
  left: 94px;
  top: 72px;
}

.scent-2 {
  right: 84px;
  top: 68px;
  width: 8px;
  height: 8px;
  animation-delay: 0.7s;
}

.scent-3 {
  right: 114px;
  bottom: 90px;
  width: 15px;
  height: 15px;
  animation-delay: 1.4s;
}

.bottom-cta {
  position: absolute;
  left: 50%;
  bottom: 42px;
  z-index: 4;
  transform: translateX(-50%);
  width: calc(100% - 70px);
}


/* ===================== 页面二：共鸣页 ===================== */

.page-pain {
  background:
    radial-gradient(circle at 80% 16%, rgba(132, 111, 150, 0.18), transparent 32%),
    radial-gradient(circle at 18% 86%, rgba(91, 115, 88, 0.2), transparent 34%),
    linear-gradient(180deg, #17231f 0%, #2d332e 56%, #1d2521 100%);
}

.pain-carousel {
  position: relative;
  z-index: 3;
  display: flex;
  gap: 16px;
  margin-top: 34px;
  padding: 4px 0 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.pain-carousel::-webkit-scrollbar {
  display: none;
}

.pain-card {
  position: relative;
  min-width: 78%;
  height: 370px;
  padding: 22px;
  overflow: hidden;
  border-radius: 32px;
  color: #fffaf1;
  scroll-snap-align: center;
  background: #2a302d;
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, border 0.25s ease;
}

.pain-card.selected {
  transform: translateY(-8px);
  border: 1px solid rgba(216, 238, 196, 0.62);
  box-shadow: 0 26px 64px rgba(118, 154, 103, 0.28);
}

.pain-card::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.82;
}

.pain-card.sweat::before {
  background:
    radial-gradient(circle at 70% 22%, rgba(180, 125, 92, 0.28), transparent 30%),
    linear-gradient(180deg, rgba(30, 37, 33, 0.22), rgba(18, 20, 19, 0.88));
}

.pain-card.dorm::before {
  background:
    radial-gradient(circle at 32% 28%, rgba(149, 130, 174, 0.26), transparent 32%),
    linear-gradient(180deg, rgba(40, 38, 43, 0.2), rgba(20, 22, 24, 0.86));
}

.pain-card.mildew::before {
  background:
    radial-gradient(circle at 72% 18%, rgba(111, 132, 124, 0.32), transparent 34%),
    linear-gradient(180deg, rgba(34, 43, 41, 0.18), rgba(18, 24, 23, 0.88));
}

.pain-card.hotpot::before {
  background:
    radial-gradient(circle at 70% 18%, rgba(190, 107, 72, 0.32), transparent 30%),
    linear-gradient(180deg, rgba(38, 30, 28, 0.2), rgba(22, 19, 18, 0.9));
}

.card-scene-visual {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 28px;
  height: 158px;
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.card-scene-visual::before,
.card-scene-visual::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
}

.card-scene-visual::before {
  left: 30px;
  bottom: 36px;
  width: 74px;
  height: 74px;
  background: rgba(255, 255, 255, 0.08);
}

.card-scene-visual::after {
  right: 34px;
  top: 34px;
  width: 92px;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
}

.pain-card-content {
  position: relative;
  z-index: 2;
}

.pain-index {
  font-size: 12px;
  color: rgba(255, 250, 241, 0.52);
  letter-spacing: 0.14em;
}

.pain-title {
  margin-top: 18px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 950;
  letter-spacing: -0.05em;
}

.pain-desc {
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 250, 241, 0.66);
}

.pain-tag {
  display: inline-block;
  margin-top: 18px;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: rgba(255, 250, 241, 0.82);
  background: rgba(255, 255, 255, 0.08);
}

.pain-hint {
  position: relative;
  z-index: 3;
  margin-top: 8px;
  text-align: center;
  color: rgba(255, 250, 241, 0.46);
  font-size: 12px;
}


/* ===================== 页面三：体验页 ===================== */

.page-cleanse {
  background:
    radial-gradient(circle at 50% 80%, rgba(144, 180, 130, 0.22), transparent 32%),
    linear-gradient(180deg, #fffdf7 0%, #f1f7ee 100%);
}

.scratch-stage {
  position: relative;
  z-index: 3;
  margin-top: 40px;
  height: 470px;
  overflow: hidden;
  border-radius: 36px;
  box-shadow: 0 26px 68px rgba(63, 102, 81, 0.18);
  background: #dfe8dc;
}

.clean-visual {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 62% 32%, rgba(255, 255, 255, 0.86), transparent 18%),
    radial-gradient(circle at 34% 64%, rgba(152, 193, 136, 0.48), transparent 28%),
    linear-gradient(145deg, #eff9ef 0%, #cfe9df 45%, #fff8ec 100%);
}

.clean-visual::before {
  content: "";
  position: absolute;
  left: -20%;
  top: 34%;
  width: 140%;
  height: 130px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  transform: rotate(-16deg);
  filter: blur(5px);
}

.water-wave {
  position: absolute;
  left: -15%;
  width: 130%;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.56);
  transform: rotate(-18deg);
}

.wave-1 {
  top: 170px;
}

.wave-2 {
  top: 228px;
  opacity: 0.68;
}

.fresh-leaf {
  position: absolute;
  display: block;
  width: 94px;
  height: 34px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, #5f8f65, #cde1bd);
  box-shadow: 0 16px 30px rgba(95, 143, 101, 0.18);
}

.fresh-1 {
  left: 46px;
  bottom: 126px;
  transform: rotate(-30deg);
}

.fresh-2 {
  right: 42px;
  bottom: 152px;
  transform: rotate(30deg);
}

.fresh-3 {
  left: 145px;
  bottom: 76px;
  width: 74px;
  transform: rotate(12deg);
}

.fresh-drop {
  position: absolute;
  display: block;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.95);
  animation: rise 4s ease-in-out infinite;
}

.fresh-drop-1 {
  left: 86px;
  top: 120px;
  width: 14px;
  height: 14px;
}

.fresh-drop-2 {
  right: 84px;
  top: 94px;
  width: 10px;
  height: 10px;
  animation-delay: 0.8s;
}

.fresh-drop-3 {
  right: 120px;
  bottom: 152px;
  width: 18px;
  height: 18px;
  animation-delay: 1.4s;
}

.clean-copy {
  position: absolute;
  left: 0;
  right: 0;
  top: 72px;
  text-align: center;
  font-size: 34px;
  line-height: 1.15;
  font-weight: 950;
  letter-spacing: -0.06em;
  color: #315842;
}

#scratchCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  touch-action: none;
}

.scratch-guide {
  position: absolute;
  left: 50%;
  bottom: 38px;
  z-index: 4;
  padding: 10px 18px;
  border-radius: 999px;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.86);
  font-size: 13px;
  font-weight: 800;
  background: rgba(36, 54, 44, 0.28);
  backdrop-filter: blur(12px);
  pointer-events: none;
}


/* ===================== 页面四：结果页 ===================== */

.page-result {
  background:
    radial-gradient(circle at 50% 14%, rgba(217, 205, 234, 0.45), transparent 28%),
    radial-gradient(circle at 50% 86%, rgba(142, 177, 123, 0.34), transparent 36%),
    linear-gradient(180deg, #fffdf8 0%, #f2eadf 100%);
}

.tarot-card {
  position: relative;
  z-index: 3;
  margin-top: 24px;
  min-height: 620px;
  padding: 22px 20px 24px;
  overflow: hidden;
  border-radius: 38px;
  text-align: center;
  background:
    radial-gradient(circle at 50% 34%, rgba(255, 255, 255, 0.88), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 248, 238, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 28px 70px rgba(83, 70, 52, 0.16);
}

.card-topline {
  display: flex;
  justify-content: space-between;
  color: rgba(36, 54, 44, 0.38);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.poster-plant {
  position: relative;
  width: 248px;
  height: 248px;
  margin: 24px auto 12px;
}

.poster-ring {
  position: absolute;
  inset: 22px;
  border-radius: 50%;
  border: 1px solid rgba(63, 102, 81, 0.16);
}

.poster-ring::before {
  content: "";
  position: absolute;
  inset: 24px;
  border-radius: 50%;
  border: 1px dashed rgba(122, 154, 114, 0.24);
}

.poster-core {
  position: absolute;
  left: 50%;
  top: 48px;
  width: 88px;
  height: 122px;
  border-radius: 50% 50% 45% 45%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #ffffff, #bcd6b7);
  box-shadow:
    -44px 26px 0 -18px rgba(255, 255, 255, 0.92),
    44px 24px 0 -18px rgba(210, 226, 200, 0.95),
    0 42px 0 -26px rgba(111, 151, 104, 0.5),
    0 20px 42px rgba(111, 151, 104, 0.28);
}

.poster-core::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -66px;
  width: 3px;
  height: 90px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #6f9768, transparent);
}

.poster-dot {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.95);
  animation: rise 4s ease-in-out infinite;
}

.dot-a {
  left: 46px;
  top: 74px;
  width: 10px;
  height: 10px;
}

.dot-b {
  right: 52px;
  top: 50px;
  width: 14px;
  height: 14px;
  animation-delay: 0.7s;
}

.dot-c {
  left: 118px;
  top: 24px;
  width: 8px;
  height: 8px;
  animation-delay: 1.3s;
}

.result-kicker {
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: 0.18em;
  color: rgba(36, 54, 44, 0.46);
}

.result-name {
  margin-top: 8px;
  font-size: 42px;
  font-weight: 950;
  letter-spacing: -0.06em;
  color: #315842;
}

.result-desc {
  max-width: 318px;
  margin: 12px auto 0;
  font-size: 14px;
  line-height: 1.75;
  color: rgba(36, 54, 44, 0.66);
}

.keyword-orbit {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 20px auto 0;
}

.keyword-orbit span {
  padding: 7px 12px;
  border-radius: 999px;
  color: #3f6651;
  font-size: 12px;
  font-weight: 700;
  background: rgba(129, 160, 117, 0.12);
}

.poster-slogan {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(36, 54, 44, 0.1);
  color: rgba(36, 54, 44, 0.52);
  font-size: 13px;
  letter-spacing: 0.18em;
}

.result-btn-group {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}

.result-btn-group button {
  flex: 1;
}


/* 结果主题色 */
.tarot-card.theme-orchid .result-name {
  color: #665184;
}

.tarot-card.theme-magnolia .result-name {
  color: #8a674d;
}

.tarot-card.theme-sandalwood .result-name {
  color: #6d5140;
}

.tarot-card.theme-grass .result-name {
  color: #315842;
}

.tarot-card.theme-orchid .poster-core {
  background: linear-gradient(180deg, #ffffff, #d8c9ef);
}

.tarot-card.theme-magnolia .poster-core {
  background: linear-gradient(180deg, #ffffff, #ead5c2);
}

.tarot-card.theme-sandalwood .poster-core {
  background: linear-gradient(180deg, #f8efe5, #b69a80);
}

.tarot-card.theme-grass .poster-core {
  background: linear-gradient(180deg, #ffffff, #bcd6b7);
}


/* ===================== 页面五：转化页 ===================== */

.page-convert {
  background:
    radial-gradient(circle at 82% 20%, rgba(215, 205, 234, 0.42), transparent 32%),
    radial-gradient(circle at 20% 86%, rgba(142, 177, 123, 0.35), transparent 36%),
    linear-gradient(180deg, #fffdf7 0%, #f5eee4 100%);
}

.dorm-miniature {
  position: relative;
  z-index: 3;
  margin-top: 28px;
  height: 300px;
  border-radius: 36px;
  overflow: hidden;
  background:
    radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.92), transparent 22%),
    linear-gradient(145deg, #fff8ee 0%, #f1dfcf 55%, #dbe8d4 100%);
  box-shadow: 0 24px 60px rgba(99, 81, 61, 0.14);
}

.window-light {
  position: absolute;
  left: 28px;
  top: 28px;
  width: 86px;
  height: 112px;
  border-radius: 22px;
  background:
    linear-gradient(90deg, rgba(255,255,255,0.18) 49%, rgba(197, 177, 143, 0.16) 50%),
    linear-gradient(180deg, rgba(255,255,255,0.84), rgba(255,255,255,0.12));
  box-shadow: 40px 60px 80px rgba(255, 255, 255, 0.65);
}

.bed {
  position: absolute;
  left: 42px;
  bottom: 52px;
  width: 176px;
  height: 82px;
  border-radius: 18px 32px 22px 22px;
  background: #fffaf4;
  box-shadow: 0 16px 24px rgba(122, 93, 70, 0.12);
}

.pillow {
  position: absolute;
  left: 18px;
  top: -20px;
  width: 78px;
  height: 34px;
  border-radius: 14px;
  background: #ffffff;
}

.blanket {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 112px;
  height: 62px;
  border-radius: 18px 30px 22px 18px;
  background: linear-gradient(135deg, #e6d8f0, #f7efe8);
}

.wardrobe {
  position: absolute;
  right: 38px;
  bottom: 56px;
  width: 80px;
  height: 150px;
  border-radius: 18px;
  background: linear-gradient(180deg, #b89b7d, #8f725b);
  box-shadow: 0 18px 24px rgba(100, 74, 51, 0.18);
}

.wardrobe::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: rgba(255, 255, 255, 0.22);
}

.plant-pot {
  position: absolute;
  width: 46px;
  height: 42px;
  border-radius: 0 0 16px 16px;
  background: #c58c62;
}

.plant-pot::before {
  content: "";
  position: absolute;
  left: -8px;
  right: -8px;
  top: -34px;
  height: 46px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 50%, #6f9768 0 22%, transparent 23%),
    radial-gradient(circle at 60% 34%, #88a978 0 22%, transparent 23%),
    radial-gradient(circle at 70% 64%, #adc59d 0 20%, transparent 21%);
}

.pot-1 {
  left: 236px;
  bottom: 54px;
}

.pot-2 {
  left: 22px;
  bottom: 46px;
  transform: scale(0.78);
}

.tiny-table {
  position: absolute;
  right: 136px;
  bottom: 46px;
  width: 54px;
  height: 38px;
  border-radius: 12px;
  background: #d8b88f;
}

.aura {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.58);
  filter: blur(4px);
  animation: rise 4s ease-in-out infinite;
}

.aura-1 {
  right: 84px;
  top: 58px;
  width: 18px;
  height: 18px;
}

.aura-2 {
  left: 190px;
  top: 86px;
  width: 12px;
  height: 12px;
  animation-delay: 0.9s;
}

.coupon-panel {
  position: relative;
  z-index: 3;
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 18px;
  padding: 16px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px dashed rgba(63, 102, 81, 0.28);
  backdrop-filter: blur(18px);
}

.coupon-left {
  flex: 1;
}

.coupon-title {
  font-size: 16px;
  font-weight: 900;
  color: #24362c;
}

.coupon-desc {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: rgba(36, 54, 44, 0.62);
}

.qr-box {
  width: 68px;
  height: 68px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: rgba(36, 54, 44, 0.46);
  font-size: 15px;
  font-weight: 950;
  background:
    linear-gradient(45deg, rgba(36, 54, 44, 0.08) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(36, 54, 44, 0.08) 25%, transparent 25%),
    #fffaf1;
  background-size: 12px 12px;
}

.convert-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}


/* ===================== 动画与适配 ===================== */

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-10px) scale(1.04);
  }
}

@keyframes rise {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.62;
  }

  50% {
    transform: translateY(-16px);
    opacity: 1;
  }
}

@media (max-width: 370px) {
  .main-title {
    font-size: 38px;
  }

  .drum-garden {
    width: 306px;
    height: 306px;
  }

  .pain-card {
    height: 342px;
  }

  .scratch-stage {
    height: 430px;
  }

  .tarot-card {
    min-height: 586px;
  }

  .poster-plant {
    width: 220px;
    height: 220px;
  }

  .result-name {
    font-size: 38px;
  }
}