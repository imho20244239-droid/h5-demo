document.addEventListener("DOMContentLoaded", function () {
  const pages = {
    wake: document.getElementById("pageWake"),
    pain: document.getElementById("pagePain"),
    clean: document.getElementById("pageClean"),
    result: document.getElementById("pageResult"),
    convert: document.getElementById("pageConvert")
  };

  const startBtn = document.getElementById("startBtn");
  const goCleanBtn = document.getElementById("goCleanBtn");
  const goResultBtn = document.getElementById("goResultBtn");
  const goConvertBtn = document.getElementById("goConvertBtn");
  const retestBtn = document.getElementById("retestBtn");
  const couponBtn = document.getElementById("couponBtn");
  const groupBtn = document.getElementById("groupBtn");
  const backHomeBtn = document.getElementById("backHomeBtn");

  const painCards = document.querySelectorAll(".pain-card");

  const scratchBox = document.getElementById("scratchBox");
  const scratchCanvas = document.getElementById("scratchCanvas");
  const scratchHint = document.getElementById("scratchHint");

  const posterCard = document.getElementById("posterCard");
  const resultName = document.getElementById("resultName");
  const resultDesc = document.getElementById("resultDesc");
  const keywordList = document.getElementById("keywordList");

  let selectedType = "grass";
  let selectedCard = null;

  let ctx = null;
  let isDrawing = false;
  let scratchFinished = false;

  const results = {
    grass: {
      theme: "theme-grass",
      name: "草木型",
      desc: "清爽、运动、活力。你不怕奔跑和流汗，但希望汗味退场之后，留下草木一样的清新。你的气味关键词是自由、轻盈和重新启动。",
      keywords: ["清爽", "活力", "运动", "青草气息", "重新启动"]
    },
    magnolia: {
      theme: "theme-magnolia",
      name: "白兰型",
      desc: "温柔、松弛、亲和。你更在意日常里的舒适感，喜欢干净床单、宿舍阳光和自然花香。你的衣物气味，是一种让人愿意靠近的柔软氛围。",
      keywords: ["温柔", "松弛", "宿舍阳光", "亲和力", "干净床单"]
    },
    orchid: {
      theme: "theme-orchid",
      name: "白鸢尾型",
      desc: "清冷、自律、精致。你像图书馆清晨的一束光，干净、克制，却自带高级感。适合在课堂、面试与汇报前，用自然香气整理好自己的状态。",
      keywords: ["清冷感", "自律", "高级", "图书馆", "课堂汇报"]
    },
    sandalwood: {
      theme: "theme-sandalwood",
      name: "檀木型",
      desc: "沉静、稳定、有分寸感。你不喜欢过分张扬的气味，更偏爱干净、沉稳、自然的高级感。你的香气像一条安静的小路，让人觉得可靠而舒服。",
      keywords: ["沉稳", "分寸感", "安静", "可靠", "换季收纳"]
    }
  };

  function showPage(pageName) {
    Object.values(pages).forEach(function (page) {
      page.classList.remove("active");
    });

    pages[pageName].classList.add("active");
  }

  function resetPainSelection() {
    selectedType = "grass";
    selectedCard = null;

    painCards.forEach(function (card) {
      card.classList.remove("selected");
    });

    goCleanBtn.disabled = true;
    goCleanBtn.textContent = "先选择一个气味场景";
  }

  function renderResult() {
    const data = results[selectedType];

    posterCard.classList.remove(
      "theme-grass",
      "theme-magnolia",
      "theme-orchid",
      "theme-sandalwood"
    );

    posterCard.classList.add(data.theme);
    resultName.textContent = data.name;
    resultDesc.textContent = data.desc;

    keywordList.innerHTML = "";

    data.keywords.forEach(function (word) {
      const span = document.createElement("span");
      span.textContent = word;
      keywordList.appendChild(span);
    });
  }

  function initScratch() {
    const rect = scratchBox.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    scratchCanvas.width = rect.width * dpr;
    scratchCanvas.height = rect.height * dpr;
    scratchCanvas.style.width = rect.width + "px";
    scratchCanvas.style.height = rect.height + "px";

    ctx = scratchCanvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    scratchFinished = false;
    goResultBtn.classList.add("hidden");
    scratchHint.classList.remove("hidden");

    drawMask(rect.width, rect.height);
  }

  function drawMask(width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#3c4441");
    gradient.addColorStop(0.5, "#747c77");
    gradient.addColorStop(1, "#303835");

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
    ctx.textAlign = "center";
    ctx.font = "700 18px Microsoft YaHei";
    ctx.fillText("擦拭屏幕，洗去暗淡气味", width / 2, height / 2 - 8);

    ctx.font = "400 13px Microsoft YaHei";
    ctx.fillText("先净味，再留香", width / 2, height / 2 + 24);
  }

  function getPoint(event) {
    const rect = scratchCanvas.getBoundingClientRect();
    const source = event.touches ? event.touches[0] : event;

    return {
      x: source.clientX - rect.left,
      y: source.clientY - rect.top
    };
  }

  function scratch(event) {
    if (!isDrawing || !ctx || scratchFinished) {
      return;
    }

    event.preventDefault();

    const point = getPoint(event);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(point.x, point.y, 34, 0, Math.PI * 2);
    ctx.fill();

    checkScratchProgress();
  }

  function checkScratchProgress() {
    const w = scratchCanvas.width;
    const h = scratchCanvas.height;

    const imageData = ctx.getImageData(0, 0, w, h);
    const pixels = imageData.data;

    let cleared = 0;
    let total = 0;

    for (let i = 3; i < pixels.length; i += 4 * 32) {
      total++;
      if (pixels[i] < 20) {
        cleared++;
      }
    }

    if (cleared / total > 0.38) {
      scratchFinished = true;
      ctx.clearRect(0, 0, w, h);
      scratchHint.classList.add("hidden");
      goResultBtn.classList.remove("hidden");
    }
  }

  startBtn.addEventListener("click", function () {
    showPage("pain");
  });

  painCards.forEach(function (card) {
    card.addEventListener("click", function () {
      painCards.forEach(function (item) {
        item.classList.remove("selected");
      });

      card.classList.add("selected");
      selectedCard = card;
      selectedType = card.dataset.type || "grass";

      goCleanBtn.disabled = false;
      goCleanBtn.textContent = "进入一抹净味体验";
    });
  });

  goCleanBtn.addEventListener("click", function () {
    if (!selectedCard) {
      return;
    }

    showPage("clean");

    setTimeout(function () {
      initScratch();
    }, 120);
  });

  goResultBtn.addEventListener("click", function () {
    renderResult();
    showPage("result");
  });

  goConvertBtn.addEventListener("click", function () {
    showPage("convert");
  });

  retestBtn.addEventListener("click", function () {
    resetPainSelection();
    showPage("pain");
  });

  couponBtn.addEventListener("click", function () {
    alert("试香券已领取！后续可在这里替换为真实二维码或活动链接。");
  });

  groupBtn.addEventListener("click", function () {
    alert("宿舍拼团已发起！后续可接入社群二维码或表单链接。");
  });

  backHomeBtn.addEventListener("click", function () {
    resetPainSelection();
    showPage("wake");
  });

  scratchCanvas.addEventListener("mousedown", function (event) {
    isDrawing = true;
    scratch(event);
  });

  scratchCanvas.addEventListener("mousemove", scratch);

  window.addEventListener("mouseup", function () {
    isDrawing = false;
  });

  scratchCanvas.addEventListener(
    "touchstart",
    function (event) {
      isDrawing = true;
      scratch(event);
    },
    { passive: false }
  );

  scratchCanvas.addEventListener("touchmove", scratch, { passive: false });

  window.addEventListener("touchend", function () {
    isDrawing = false;
  });

  window.addEventListener("resize", function () {
    if (pages.clean.classList.contains("active")) {
      initScratch();
    }
  });
});
