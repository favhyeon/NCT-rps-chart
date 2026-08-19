/* ==========================================
   엔페스 통합 취향표 (NCT ALL - 127+WayV+DREAM+WISH, 25명)
========================================== */

/* 표(행/열 헤더)에 표시할 멤버 이름 */
const members = ["쟈니", "태용", "유타", "쿤", "도영", "텐", "재현", "윈윈", "정우", "마크", "샤오쥔", "헨드리", "런쥔", "제노", "해찬", "재민", "양양", "천러", "지성", "시온", "리쿠", "유우시", "재희", "료", "사쿠야"];

/* 각 멤버가 속한 유닛 (그룹 전환 링크에는 안 쓰이지만, 참고용으로 남겨둠) */
const memberUnits = ["127", "127", "127", "WayV", "127", "WayV", "127", "WayV", "127", "127", "WayV", "WayV", "DREAM", "DREAM", "127", "DREAM", "WayV", "DREAM", "DREAM", "WISH", "WISH", "WISH", "WISH", "WISH", "WISH"];

/* 멤버별 본인 이니셜 (닉네임, 행/열 숨기기 문구에 사용) */
const ownInitials = ["쟌", "툥", "윹", "쿤", "도", "텐", "재", "윈", "정", "맠", "샤", "헨", "런", "젠", "동", "잼", "양", "천", "지", "숀", "쿨", "윳", "댕", "료", "샄"];

/* 멤버별 기본 아바타 색상 (사진 로드 실패 시 대체용) - 그라데이션 없이 검정 통일 */
const memberColors = members.map(() => "#111111");

/* 멤버별 기본 프로필 사진 (members 배열과 순서 동일) */
const defaultPhotos = members.map((_, i) => `assets/m${i + 1}.png`);

/*
 * 표에 표시할 커플명.
 * [행 멤버][열 멤버] 순서.
 * 칠페스(127)/드페스(DREAM)/잇페스(WISH) 안에서 이미 실제 값이 있던 조합은 그 값을 그대로 가져왔고,
 * 나머지(웨페스 내부 조합 및 유닛을 넘나드는 조합)는 이니셜 두 개를 이어붙인 기본값이에요.
 * 원하는 조합명으로 자유롭게 바꿔서 쓰시면 돼요.
 */
const pairNames = [
    ["쟌쟌", "쟌툥", "쟌윹", "쟌쿤", "쟌도", "쟌텐", "쟌재", "쟌윈", "쟌정", "쟌맠", "쟌샤", "쟌헨", "쟌런", "쟌젠", "쟌동", "쟌잼", "쟌양", "쟌천", "쟌지", "쟌숀", "쟌쿨", "쟌윳", "쟌댕", "쟌료", "쟌샄"],
    ["툥쟌", "툥툥", "툥윹", "툥쿤", "툥도", "툥텐", "툥재", "툥윈", "툥정", "툥맠", "툥샤", "툥헨", "툥런", "툥젠", "툥동", "툥잼", "툥양", "툥천", "툥지", "툥숀", "툥쿨", "툥윳", "툥댕", "툥료", "툥샄"],
    ["윹쟌", "윹툥", "윹윹", "윹쿤", "윹도", "윹텐", "윹재", "윹윈", "윹정", "윹맠", "윹샤", "윹헨", "윹런", "윹젠", "윹동", "윹잼", "윹양", "윹천", "윹지", "윹숀", "윹쿨", "윹윳", "윹댕", "윹료", "윹샄"],
    ["쿤쟌", "쿤툥", "쿤윹", "쿤쿤", "쿤도", "쿤텐", "쿤재", "쿤윈", "쿤정", "쿤맠", "쿤샤", "쿤헨", "쿤런", "쿤젠", "쿤동", "쿤잼", "쿤양", "쿤천", "쿤지", "쿤숀", "쿤쿨", "쿤윳", "쿤댕", "쿤료", "쿤샄"],
    ["도쟌", "도툥", "도윹", "도쿤", "도도", "도텐", "도재", "도윈", "도정", "도맠", "도샤", "도헨", "도런", "도젠", "도동", "도잼", "도양", "도천", "도지", "도숀", "도쿨", "도윳", "도댕", "도료", "도샄"],
    ["텐쟌", "텐툥", "텐윹", "텐쿤", "텐도", "텐텐", "텐재", "텐윈", "텐정", "텐맠", "텐샤", "텐헨", "텐런", "텐젠", "텐동", "텐잼", "텐양", "텐천", "텐지", "텐숀", "텐쿨", "텐윳", "텐댕", "텐료", "텐샄"],
    ["재쟌", "재툥", "재윹", "재쿤", "재도", "재텐", "재재", "재윈", "재정", "재맠", "재샤", "재헨", "재런", "재젠", "재동", "재잼", "재양", "재천", "재지", "재숀", "재쿨", "재윳", "재댕", "재료", "재샄"],
    ["윈쟌", "윈툥", "윈윹", "윈쿤", "윈도", "윈텐", "윈재", "윈윈", "윈정", "윈맠", "윈샤", "윈헨", "윈런", "윈젠", "윈동", "윈잼", "윈양", "윈천", "윈지", "윈숀", "윈쿨", "윈윳", "윈댕", "윈료", "윈샄"],
    ["정쟌", "정툥", "정윹", "정쿤", "정도", "정텐", "정재", "정윈", "정정", "정맠", "정샤", "정헨", "정런", "정젠", "정동", "정잼", "정양", "정천", "정지", "정숀", "정쿨", "정윳", "정댕", "정료", "정샄"],
    ["맠쟌", "맠툥", "맠윹", "맠쿤", "맠도", "맠텐", "맠재", "맠윈", "맠정", "맠맠", "맠샤", "맠헨", "맠런", "맠젠", "맠동", "맠잼", "맠양", "맠천", "맠성", "맠숀", "맠쿨", "맠윳", "맠댕", "맠료", "맠샄"],
    ["샤쟌", "샤툥", "샤윹", "샤쿤", "샤도", "샤텐", "샤재", "샤윈", "샤정", "샤맠", "샤샤", "샤헨", "샤런", "샤젠", "샤동", "샤잼", "샤양", "샤천", "샤지", "샤숀", "샤쿨", "샤윳", "샤댕", "샤료", "샤샄"],
    ["헨쟌", "헨툥", "헨윹", "헨쿤", "헨도", "헨텐", "헨재", "헨윈", "헨정", "헨맠", "헨샤", "헨헨", "헨런", "헨젠", "헨동", "헨잼", "헨양", "헨천", "헨지", "헨숀", "헨쿨", "헨윳", "헨댕", "헨료", "헨샄"],
    ["런쟌", "런툥", "런윹", "런쿤", "런도", "런텐", "런재", "런윈", "런정", "런맠", "런샤", "런헨", "런런", "런젠", "런동", "런잼", "런양", "런천", "런성", "런숀", "런쿨", "런윳", "런댕", "런료", "런샄"],
    ["젠쟌", "젠툥", "젠윹", "젠쿤", "젠도", "젠텐", "젠재", "젠윈", "젠정", "젠맠", "젠샤", "젠헨", "젠런", "젠젠", "젠동", "젠잼", "젠양", "젠천", "젠성", "젠숀", "젠쿨", "젠윳", "젠댕", "젠료", "젠샄"],
    ["동쟌", "동툥", "동윹", "동쿤", "동도", "동텐", "동재", "동윈", "동정", "동맠", "동샤", "동헨", "동런", "동젠", "동동", "동잼", "동양", "동천", "동지", "동숀", "동쿨", "동윳", "동댕", "동료", "동샄"],
    ["잼쟌", "잼툥", "잼윹", "잼쿤", "잼도", "잼텐", "잼재", "잼윈", "잼정", "잼맠", "잼샤", "잼헨", "잼런", "잼젠", "잼동", "잼잼", "잼양", "잼천", "잼성", "잼숀", "잼쿨", "잼윳", "잼댕", "잼료", "잼샄"],
    ["양쟌", "양툥", "양윹", "양쿤", "양도", "양텐", "양재", "양윈", "양정", "양맠", "양샤", "양헨", "양런", "양젠", "양동", "양잼", "양양", "양천", "양지", "양숀", "양쿨", "양윳", "양댕", "양료", "양샄"],
    ["천쟌", "천툥", "천윹", "천쿤", "천도", "천텐", "천재", "천윈", "천정", "천맠", "천샤", "천헨", "천런", "천젠", "천동", "천잼", "천양", "천천", "천지", "천숀", "천쿨", "천윳", "천댕", "천료", "천샄"],
    ["지쟌", "지툥", "지윹", "지쿤", "지도", "지텐", "지재", "지윈", "지정", "성맠", "지샤", "지헨", "성런", "성젠", "지동", "성잼", "지양", "지천", "성성", "지숀", "지쿨", "지윳", "지댕", "지료", "지샄"],
    ["숀쟌", "숀툥", "숀윹", "숀쿤", "숀도", "숀텐", "숀재", "숀윈", "숀정", "숀맠", "숀샤", "숀헨", "숀런", "숀젠", "숀동", "숀잼", "숀양", "숀천", "숀지", "숀숀", "숀쿨", "온윳", "숀댕", "숀료", "숀샄"],
    ["쿨쟌", "쿨툥", "쿨윹", "쿨쿤", "쿨도", "쿨텐", "쿨재", "쿨윈", "쿨정", "쿨맠", "쿨샤", "쿨헨", "쿨런", "쿨젠", "쿨동", "쿨잼", "쿨양", "쿨천", "쿨지", "쿨숀", "쿨쿨", "쿨융", "쿨댕", "쿨료", "맄샄"],
    ["윳쟌", "윳툥", "윳윹", "윳쿤", "윳도", "윳텐", "윳재", "윳윈", "윳정", "윳맠", "윳샤", "윳헨", "윳런", "윳젠", "윳동", "윳잼", "윳양", "윳천", "윳지", "윳숀", "윳쿨", "윳윳", "윳댕", "윳료", "윳샄"],
    ["댕쟌", "댕툥", "댕윹", "댕쿤", "댕도", "댕텐", "댕재", "댕윈", "댕정", "댕맠", "댕샤", "댕헨", "댕런", "댕젠", "댕동", "댕잼", "댕양", "댕천", "댕지", "댕숀", "댕쿨", "댕윳", "댕댕", "댕료", "댕샄"],
    ["료쟌", "료툥", "료윹", "료쿤", "료도", "료텐", "료재", "료윈", "료정", "료맠", "료샤", "료헨", "료런", "료젠", "료동", "료잼", "료양", "료천", "료지", "료숀", "료쿨", "료윳", "료댕", "료료", "료샄"],
    ["샄쟌", "샄툥", "샄윹", "샄쿤", "샄도", "샄텐", "샄재", "샄윈", "샄정", "샄맠", "샄샤", "샄헨", "샄런", "샄젠", "샄동", "샄잼", "샄양", "샄천", "샄지", "샄숀", "샄맄", "샄윳", "샄댕", "샄료", "샄샄"]
];

const options = [
    { name: "OTP",      color: "#f7cde0" },
    { name: "좋아함",   color: "#ffafaf" },
    { name: "호감",     color: "#fcee90" },
    { name: "가능", color: "#baebbb" },
    { name: "관심없음", color: "#ffffff" },
    { name: "별로",     color: "#bfeefd" },
    { name: "지뢰",     color: "#999999" }
];

/* 사용자가 직접 고른 커스텀 색상 (name -> hex).
   여기에 값이 있으면 기본 color 대신 이 색을 쓴다.
   options 배열의 기본값 자체는 절대 덮어쓰지 않는다. */
const CUSTOM_COLOR_KEY = "npace-custom-colors";
let customColors = JSON.parse(localStorage.getItem(CUSTOM_COLOR_KEY)) || {};

function getOptionColor(option) {
    return customColors[option.name] || option.color;
}

function setCustomColor(name, hex) {
    customColors[name] = hex;
    localStorage.setItem(CUSTOM_COLOR_KEY, JSON.stringify(customColors));
}

function resetCustomColors() {
    customColors = {};
    localStorage.removeItem(CUSTOM_COLOR_KEY);
}

const STORAGE_KEY = "npace-enpes-rps";
const LR_STORAGE_KEY = "npace-lr-rps";
const LR_CELL_COUNT = 12;

/* 행/열 개별 숨기기 상태 (멤버 인덱스 기준, rows/cols 따로 관리) */
const HIDDEN_KEY = "npace-hidden-members";
const hiddenSaved = JSON.parse(localStorage.getItem(HIDDEN_KEY)) || { rows: [], cols: [] };
let hiddenRows = new Set(hiddenSaved.rows);
let hiddenCols = new Set(hiddenSaved.cols);

function isMemberActive() {
    return true;
}

function saveHiddenState() {
    localStorage.setItem(HIDDEN_KEY, JSON.stringify({
        rows: [...hiddenRows],
        cols: [...hiddenCols]
    }));
}

/* 자공자수(본인조합, 대각선 칸) 표시 여부 - 체크박스로 켜고 끔 */
const SELF_PAIR_KEY = "npace-include-selfpair";
let includeSelfPair = localStorage.getItem(SELF_PAIR_KEY) !== "0";

function getDisplayPairName(rowIndex, colIndex) {
    if (rowIndex === colIndex && !includeSelfPair) {
        return "-";
    }
    return pairNames[rowIndex][colIndex];
}

/* ==========================================
   그룹 전환 (엔페스 / 칠페스 / 드페스 / 웨페스 / 잇페스)
   엔페스를 제외한 나머지 4개는 각 유닛 공식 취향표 주소로 이동한다.
========================================== */
const GROUP_LINKS = {
    "127":  "https://favhyeon.github.io/NCT127-rps-chart/",
    "wish": "https://favhyeon.github.io/NCTWISH-RPS-CHART/",
    "dream":"https://favhyeon.github.io/NCTDREAM-rps-chart/",
    "wayv": "https://favhyeon.github.io/NCTWayV-rps-chart/"
};

const groupCheckboxes = {
    enpes: document.getElementById("groupEnpes"),
    chil:  document.getElementById("groupChil"),
    deu:   document.getElementById("groupDeu"),
    we:    document.getElementById("groupWe"),
    it:    document.getElementById("groupIt")
};

function setupGroupSwitcher() {
    const all = Object.values(groupCheckboxes).filter(Boolean);
    if (!all.length) return;

    if (groupCheckboxes.enpes) groupCheckboxes.enpes.checked = true;

    all.forEach(cb => {
        cb.addEventListener("change", () => {
            if (!cb.checked) {
                // 하나는 항상 켜져 있어야 하므로, 자기 자신을 못 끄게 막는다.
                cb.checked = true;
                return;
            }

            all.forEach(other => {
                if (other !== cb) other.checked = false;
            });

            if (cb === groupCheckboxes.chil) {
                window.location.href = GROUP_LINKS["127"];
            } else if (cb === groupCheckboxes.deu) {
                window.location.href = GROUP_LINKS["dream"];
            } else if (cb === groupCheckboxes.we) {
                window.location.href = GROUP_LINKS["wayv"];
            } else if (cb === groupCheckboxes.it) {
                window.location.href = GROUP_LINKS["wish"];
            }
            /* 엔페스를 다시 선택한 경우는 현재 페이지이므로 아무 것도 하지 않는다. */
        });
    });
}

const table = document.getElementById("chartTable");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const optionGrid = document.getElementById("optionGrid");
const closeModal = document.getElementById("closeModal");

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const guideListRps = document.getElementById("guideListRps");
const guideListLr = document.getElementById("guideListLr");
const legendRps = document.getElementById("legendRps");

const dateToggleWrap = document.getElementById("dateToggleWrap");
const dateToggle = document.getElementById("dateToggle");
const dateTextRps = document.getElementById("dateTextRps");
const dateTextLr = document.getElementById("dateTextLr");
const selfPairToggle = document.getElementById("selfPairToggle");

const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");

const saveModal = document.getElementById("saveModal");
const previewImage = document.getElementById("previewImage");
const closeSaveModal = document.getElementById("closeSaveModal");

const tabRps = document.getElementById("tabRps");
const tabLr = document.getElementById("tabLr");
const captureAreaRps = document.getElementById("captureArea");
const captureAreaLr = document.getElementById("captureAreaLr");
const lrGrid = document.getElementById("lrGrid");
const photoInput = document.getElementById("photoInput");
const scaleWrap = document.getElementById("scaleWrap");

const MOBILE_BREAKPOINT = 768;
const DESKTOP_CAPTURE_WIDTH = 1100;

let currentTarget = null;
let currentTab = "rps";
let currentPhotoIndex = null;
let currentBlobUrl = null;

const HISTORY_LIMIT = 50;
let historyStack = [];
let redoStack = [];

let saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

let lrData = JSON.parse(localStorage.getItem(LR_STORAGE_KEY)) || {
    texts: {},
    cells: {},
    photos: {}
};

const GUIDE_TEXT = {
    rps: [
        "셀을 선택하여 호감도를 표시해주세요.",
        "멤버 이름을 누르면 줄 전체선택/숨기기가 가능해요."
    ],
    lr: [
        "L-R 사이 원하는 부분의 칸을 선택하고, 아래 칸에 자유롭게 적어보세요.",
        "각 멤버의 프로필을 누르면 사진 변경이 가능해요."
    ]
};

function renderGuide(tab) {
    const target = tab === "rps" ? guideListRps : guideListLr;
    target.innerHTML = "";
    GUIDE_TEXT[tab].forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        target.appendChild(p);
    });
}

function renderLegend() {
    if (!legendRps) return;
    legendRps.innerHTML = "";
    options.forEach(option => {
        const color = getOptionColor(option);
        const isNone = color.toLowerCase() === "#ffffff";
        const item = document.createElement("div");
        item.className = "legend-item";
        item.innerHTML = `
            <span class="color${isNone ? " dashed" : ""}" style="background:${color}"></span>${option.name}
        `;
        legendRps.appendChild(item);
    });
}

/* ==========================================
   날짜 표시 (제목 옆 260810 ver. 형식)
========================================== */

function getDateVerText() {
    const now = new Date();
    const yy = String(now.getFullYear()).slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yy}${mm}${dd} ver.`;
}

function updateDateDisplay() {
    const text = dateToggle.checked ? getDateVerText() : "";
    dateTextRps.textContent = text;
    dateTextLr.textContent = text;
}

dateToggle.addEventListener("change", updateDateDisplay);

/* ==========================================
   자공자수 표시 토글
========================================== */

if (selfPairToggle) {
    selfPairToggle.checked = includeSelfPair;

    selfPairToggle.addEventListener("change", () => {
        includeSelfPair = selfPairToggle.checked;
        localStorage.setItem(SELF_PAIR_KEY, includeSelfPair ? "1" : "0");
        createTable();
    });
}

setupGroupSwitcher();
createTable();
createLrGrid();
updateNavButtons();
renderGuide(currentTab);
renderLegend();
updateDateDisplay();

/* ==========================================
   탭 전환
========================================== */

function switchTab(tab) {
    currentTab = tab;

    if (tab === "rps") {
        captureAreaRps.classList.remove("hidden");
        captureAreaLr.classList.add("hidden");
        tabRps.classList.add("active");
        tabLr.classList.remove("active");
    } else {
        captureAreaLr.classList.remove("hidden");
        captureAreaRps.classList.add("hidden");
        tabLr.classList.add("active");
        tabRps.classList.remove("active");
    }

    renderGuide(tab);
    fitCaptureArea();
}

tabRps.addEventListener("click", () => switchTab("rps"));
tabLr.addEventListener("click", () => switchTab("lr"));

/* ==========================================
   엔페스 취향표 - 표 생성
========================================== */

function createTable() {
    table.innerHTML = "";

    const visibleColIndexes = members.map((_, i) => i).filter(i => !hiddenCols.has(i));
    const visibleRowIndexes = members.map((_, i) => i).filter(i => !hiddenRows.has(i));

    const head = document.createElement("tr");
    const empty = document.createElement("th");
    empty.className = "corner";
    head.appendChild(empty);

    visibleColIndexes.forEach(colIndex => {
        const th = document.createElement("th");
        th.textContent = members[colIndex];
        th.classList.add("clickable-header");

        th.addEventListener("click", () => {
            currentTarget = { type: "col", index: colIndex };
            openModal(members[colIndex]);
        });

        head.appendChild(th);
    });

    table.appendChild(head);

    visibleRowIndexes.forEach(rowIndex => {
        const tr = document.createElement("tr");

        const rowHead = document.createElement("th");
        rowHead.textContent = members[rowIndex];
        rowHead.classList.add("clickable-header");

        rowHead.addEventListener("click", () => {
            currentTarget = { type: "row", index: rowIndex };
            openModal(members[rowIndex]);
        });

        tr.appendChild(rowHead);

        visibleColIndexes.forEach(colIndex => {
            const td = document.createElement("td");
            td.dataset.key = `${rowIndex}-${colIndex}`;

            td.textContent = getDisplayPairName(rowIndex, colIndex);

            if (rowIndex === colIndex) {
                td.classList.add("diagonal");
            }

            if (saveData[td.dataset.key]) {
                td.style.backgroundColor = saveData[td.dataset.key];
            }

            td.addEventListener("click", () => {
                currentTarget = { type: "cell", td };
                openModal(getDisplayPairName(rowIndex, colIndex));
            });

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });
}

/* ==========================================
   엔페스 취향표 - 이전/이후 (실행 취소)
========================================== */

function pushHistory() {
    historyStack.push(JSON.stringify(saveData));
    if (historyStack.length > HISTORY_LIMIT) {
        historyStack.shift();
    }
    redoStack = [];
    updateNavButtons();
}

function updateNavButtons() {
    undoBtn.disabled = historyStack.length === 0;
    redoBtn.disabled = redoStack.length === 0;
}

undoBtn.addEventListener("click", () => {
    if (historyStack.length === 0) return;

    redoStack.push(JSON.stringify(saveData));
    saveData = JSON.parse(historyStack.pop());

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    createTable();
    updateNavButtons();
});

redoBtn.addEventListener("click", () => {
    if (redoStack.length === 0) return;

    historyStack.push(JSON.stringify(saveData));
    saveData = JSON.parse(redoStack.pop());

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    createTable();
    updateNavButtons();
});

/* ==========================================
   색상 선택 모달
========================================== */

function openModal(titleText) {
    modalTitle.textContent = titleText;
    optionGrid.innerHTML = "";

    options.forEach(option => {
        const color = getOptionColor(option);
        const item = document.createElement("div");
        item.className = "option-card";

        const isNone = color.toLowerCase() === "#ffffff";

        item.innerHTML = `
            <span class="option-dot-wrap">
                <span class="option-dot${isNone ? " dashed" : ""}" style="background:${color}"></span>
                <label class="color-edit-btn" title="이 색상 직접 고르기">
                    &#9998;
                    <input type="color" class="color-edit-input" value="${color.length === 7 ? color : "#ffffff"}">
                </label>
            </span>
            <span class="option-label">${option.name}</span>
        `;

        item.addEventListener("click", () => applySelection(getOptionColor(option)));

        const editBtn = item.querySelector(".color-edit-btn");
        const editInput = item.querySelector(".color-edit-input");
        editBtn.addEventListener("click", (e) => e.stopPropagation());
        editInput.addEventListener("click", (e) => e.stopPropagation());
        editInput.addEventListener("input", (e) => {
            const hex = e.target.value;
            item.querySelector(".option-dot").style.background = hex;
        });
        editInput.addEventListener("change", (e) => {
            setCustomColor(option.name, e.target.value);
            renderLegend();
        });

        optionGrid.appendChild(item);
    });

    const clearItem = document.createElement("div");
    clearItem.className = "option-card clear-card";
    clearItem.innerHTML = `
        <span class="option-dot">&#128465;</span>
        <span class="option-label">선택 지우기</span>
    `;
    clearItem.addEventListener("click", () => applySelection(null));
    optionGrid.appendChild(clearItem);

    modal.classList.remove("hidden");

    renderModalExtra(titleText);
}

function renderModalExtra(titleText) {
    let modalExtra = document.getElementById("modalExtra");
    if (!modalExtra) {
        modalExtra = document.createElement("div");
        modalExtra.id = "modalExtra";
        modalExtra.className = "modal-extra";
        optionGrid.insertAdjacentElement("afterend", modalExtra);
    }
    modalExtra.innerHTML = "";

    const resetLink = document.createElement("div");
    resetLink.className = "reset-colors-link";
    resetLink.textContent = "색상 기본값으로 되돌리기";
    resetLink.addEventListener("click", () => {
        resetCustomColors();
        renderLegend();
        openModal(titleText);
    });
    modalExtra.appendChild(resetLink);

    if (!currentTarget || (currentTarget.type !== "row" && currentTarget.type !== "col")) {
        return;
    }

    const isRow = currentTarget.type === "row";
    const index = currentTarget.index;
    const hiddenSet = isRow ? hiddenRows : hiddenCols;
    const suffix = isRow ? "왼" : "른";

    const hideLabel = document.createElement("label");
    hideLabel.className = "hide-toggle";

    const hideInput = document.createElement("input");
    hideInput.type = "checkbox";
    hideInput.checked = hiddenSet.has(index);

    hideInput.addEventListener("change", () => {
        if (hideInput.checked) {
            hiddenSet.add(index);
        } else {
            hiddenSet.delete(index);
        }
        saveHiddenState();
        createTable();
        modal.classList.add("hidden");
    });

    hideLabel.appendChild(hideInput);
    hideLabel.appendChild(document.createTextNode(`${ownInitials[index]}${suffix} 없애기`));

    modalExtra.appendChild(hideLabel);
}

function setCellColor(td, key, color) {
    if (color) {
        if (td) td.style.backgroundColor = color;
        saveData[key] = color;
    } else {
        if (td) td.style.backgroundColor = "#ffffff";
        delete saveData[key];
    }
}

function applySelection(color) {
    if (!currentTarget) return;

    pushHistory();

    if (currentTarget.type === "cell") {
        setCellColor(currentTarget.td, currentTarget.td.dataset.key, color);
    } else if (currentTarget.type === "row") {
        const rowIndex = currentTarget.index;
        members.forEach((_, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            const td = table.querySelector(`td[data-key="${key}"]`);
            setCellColor(td, key, color);
        });
    } else if (currentTarget.type === "col") {
        const colIndex = currentTarget.index;
        members.forEach((_, rowIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            const td = table.querySelector(`td[data-key="${key}"]`);
            setCellColor(td, key, color);
        });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    modal.classList.add("hidden");
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }

    if (e.target === saveModal) {
        saveModal.classList.add("hidden");
    }
});

/* ==========================================
   공수 취향표 - 기본 아바타 생성 (SVG)
========================================== */

function defaultAvatar(name, color) {
    const initial = name.charAt(0);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
            <rect width="160" height="160" fill="${color}" />
            <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
                font-family="Pretendard, Noto Sans KR, sans-serif"
                font-size="64" font-weight="800" fill="#ffffff">${initial}</text>
        </svg>
    `;
    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

/* ==========================================
   공수 취향표 - 그리드 생성
========================================== */

function createLrGrid() {
    lrGrid.innerHTML = "";

    members.forEach((member, index) => {
        const row = document.createElement("div");
        row.className = "lr-row";

        const avatar = document.createElement("div");
        avatar.className = "lr-avatar";
        avatar.dataset.index = index;

        const img = document.createElement("img");
        img.src = lrData.photos[index] || defaultPhotos[index];
        img.alt = member;
        img.onerror = () => {
            img.onerror = null;
            img.src = defaultAvatar(member, memberColors[index % memberColors.length]);
        };
        avatar.appendChild(img);

        const editHint = document.createElement("div");
        editHint.className = "avatar-edit";
        editHint.textContent = "사진 변경";
        avatar.appendChild(editHint);

        avatar.addEventListener("click", () => {
            currentPhotoIndex = index;
            photoInput.value = "";
            photoInput.click();
        });

        row.appendChild(avatar);

        const content = document.createElement("div");
        content.className = "lr-content";

        const barWrap = document.createElement("div");
        barWrap.className = "lr-bar-wrap";

        const labelL = document.createElement("span");
        labelL.className = "lr-label-l";
        labelL.textContent = "L";

        const bar = document.createElement("div");
        bar.className = "lr-bar";
        bar.dataset.index = index;

        const filledCells = lrData.cells[index] || [];

        for (let c = 0; c < LR_CELL_COUNT; c++) {
            const cell = document.createElement("div");
            cell.className = "lr-cell";
            cell.dataset.cell = c;

            if (filledCells[c]) {
                cell.classList.add("filled");
            }

            cell.addEventListener("click", () => {
                toggleLrCell(index, c, cell);
            });

            bar.appendChild(cell);
        }

        const labelR = document.createElement("span");
        labelR.className = "lr-label-r";
        labelR.textContent = "R";

        barWrap.appendChild(labelL);
        barWrap.appendChild(bar);
        barWrap.appendChild(labelR);

        const textWrap = document.createElement("div");
        textWrap.className = "lr-text-wrap";

        const text = document.createElement("textarea");
        text.className = "lr-text";
        text.rows = 5;
        text.maxLength = 150;
        text.placeholder = "자유롭게 적어보세요";
        text.value = lrData.texts[index] || "";
        text.dataset.index = index;

        const charCount = document.createElement("span");
        charCount.className = "lr-char-count";
        charCount.textContent = `${text.value.length}/150`;

        text.addEventListener("input", () => {
            lrData.texts[index] = text.value;
            charCount.textContent = `${text.value.length}/150`;
            saveLrData();
            autoResizeTextarea(text);
        });

        textWrap.appendChild(text);
        textWrap.appendChild(charCount);

        content.appendChild(barWrap);
        content.appendChild(textWrap);

        row.appendChild(content);

        lrGrid.appendChild(row);
    });

    lrGrid.querySelectorAll(".lr-text").forEach(autoResizeTextarea);
}

function autoResizeTextarea(el) {
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
}

function toggleLrCell(memberIndex, cellIndex, cellEl) {
    if (!lrData.cells[memberIndex]) {
        lrData.cells[memberIndex] = [];
    }

    lrData.cells[memberIndex][cellIndex] = !lrData.cells[memberIndex][cellIndex];
    cellEl.classList.toggle("filled");

    saveLrData();
}

function saveLrData() {
    localStorage.setItem(LR_STORAGE_KEY, JSON.stringify(lrData));
}

photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file || currentPhotoIndex === null) return;

    const reader = new FileReader();

    reader.onload = () => {
        lrData.photos[currentPhotoIndex] = reader.result;
        saveLrData();

        const avatarEl = lrGrid.querySelector(`.lr-avatar[data-index="${currentPhotoIndex}"] img`);
        if (avatarEl) {
            avatarEl.src = reader.result;
        }
    };

    reader.readAsDataURL(file);
});

/* ==========================================
   초기화
========================================== */

resetBtn.addEventListener("click", () => {
    if (!confirm("현재 화면의 모든 선택을 초기화할까요?")) return;

    if (currentTab === "rps") {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(HIDDEN_KEY);
        saveData = {};
        hiddenRows = new Set();
        hiddenCols = new Set();
        historyStack = [];
        redoStack = [];
        updateNavButtons();
        createTable();
    } else {
        localStorage.removeItem(LR_STORAGE_KEY);
        lrData = { texts: {}, cells: {}, photos: {} };
        createLrGrid();
    }
});

/* ==========================================
   이미지 저장
========================================== */

saveBtn.addEventListener("click", async () => {
    const buttonWrap = document.querySelector(".button-wrap");
    const tabWrap = document.querySelector(".tab-wrap");
    const area = currentTab === "rps" ? captureAreaRps : captureAreaLr;

    buttonWrap.style.display = "none";
    tabWrap.style.display = "none";
    dateToggleWrap.style.display = "none";

    area.classList.add("capturing");

    const prevTransform = area.style.transform;
    area.style.transform = "none";

    try {
        const canvas = await html2canvas(area, {
            backgroundColor: "#ffffff",
            scale: 4,
            useCORS: true,
            logging: false,
            windowWidth: DESKTOP_CAPTURE_WIDTH,
            windowHeight: Math.max(area.scrollHeight, 1600),
            onclone: (clonedDoc) => {
                clonedDoc.querySelectorAll(".lr-text").forEach((ta) => {
                    const div = clonedDoc.createElement("div");
                    div.className = "lr-text";
                    div.style.whiteSpace = "pre-wrap";
                    div.style.wordBreak = "break-word";
                    div.style.overflow = "hidden";
                    div.textContent = ta.value;
                    ta.replaceWith(div);
                });
            }
        });

        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

        if (!blob) {
            throw new Error("이미지 변환에 실패했습니다.");
        }

        if (currentBlobUrl) {
            URL.revokeObjectURL(currentBlobUrl);
        }
        currentBlobUrl = URL.createObjectURL(blob);

        previewImage.src = currentBlobUrl;
        saveModal.classList.remove("hidden");

        const fileLabel = currentTab === "rps" ? "엔페스_취향표" : "공수_취향표";

        const link = document.createElement("a");
        link.href = currentBlobUrl;
        link.download = `NPACE_${fileLabel}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error(error);
        alert("이미지 저장 중 문제가 발생했습니다.");
    } finally {
        area.classList.remove("capturing");
        area.style.transform = prevTransform;
        buttonWrap.style.display = "flex";
        tabWrap.style.display = "flex";
        dateToggleWrap.style.display = "flex";
    }
});

closeSaveModal.addEventListener("click", () => {
    saveModal.classList.add("hidden");
});

/* ==========================================
   ESC
========================================== */

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.add("hidden");
        saveModal.classList.add("hidden");
    }
});

/* ==========================================
   모바일 자동 축소
========================================== */

function fitCaptureArea() {
    const area = currentTab === "rps" ? captureAreaRps : captureAreaLr;
    const wrap = scaleWrap;

    if (!area || !wrap) return;

    const screenWidth = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth
    );

    if (screenWidth <= MOBILE_BREAKPOINT) {
        area.style.transform = "none";
        area.style.transformOrigin = "";
        wrap.style.width = "";
        wrap.style.height = "";
        return;
    }

    const scale = Math.min(1, screenWidth / DESKTOP_CAPTURE_WIDTH);

    area.style.transformOrigin = "top left";
    area.style.transform = `scale(${scale})`;

    wrap.style.width = `${DESKTOP_CAPTURE_WIDTH * scale}px`;
    wrap.style.height = `${area.scrollHeight * scale}px`;
}

fitCaptureArea();

window.addEventListener("load", fitCaptureArea);
window.addEventListener("resize", fitCaptureArea);

window.addEventListener("orientationchange", () => {
    setTimeout(fitCaptureArea, 200);
});
