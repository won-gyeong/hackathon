const kakao = {
  SPEL: {
    id: 0,
    name: "SPEL",
    link: "https://open.kakao.com/o/g4ctxolf",
  },
  SPEF: {
    id: 1,
    name: "SPEF",
    link: "https://open.kakao.com/o/gnCRyolf",
  },
  SPUL: {
    id: 2,
    name: "SPUL",
    link: "https://open.kakao.com/o/gULjAolf",
  },
  SPUF: {
    id: 3,
    name: "SPUF",
    link: "https://open.kakao.com/o/gVK3Aolf",
  },
  SCEL: {
    id: 4,
    name: "SCEL",
    link: "https://open.kakao.com/o/geeTColf",
  },
  SCEF: {
    id: 5,
    name: "SCEF",
    link: "https://open.kakao.com/o/gHltDolf",
  },
  SCUL: {
    id: 6,
    name: "SCUL",
    link: "https://open.kakao.com/o/gYsXDolf",
  },
  SCUF: {
    id: 7,
    name: "SCUF",
    link: "https://open.kakao.com/o/gnWmFolf",
  },
  APEL: {
    id: 8,
    name: "APEL",
    link: "https://open.kakao.com/o/gnpcvolf",
  },
  APEF: {
    id: 9,
    name: "APEF",
    link: "https://open.kakao.com/o/g8Oywolf",
  },
  APUL: {
    id: 10,
    name: "APUL",
    link: "https://open.kakao.com/o/gtpExolf",
  },
  APUF: {
    id: 11,
    name: "APUF",
    link: "https://open.kakao.com/o/gEMZzolf",
  },
  ACEL: {
    id: 12,
    name: "ACEL",
    link: "https://open.kakao.com/o/ga2Kmplf",
  },
  ACEF: {
    id: 13,
    name: "ACEF",
    link: "https://open.kakao.com/o/gULlnplf",
  },
  ACUL: {
    id: 14,
    name: "ACUL",
    link: "https://open.kakao.com/o/gnnDnplf",
  },
  ACUF: {
    id: 15,
    name: "ACUF",
    link: "https://open.kakao.com/o/gufQnplf",
  },
};

var linkSection = document.getElementById("linkSection");
var linkTitle = document.getElementById("linkTitle");
var linkText = document.getElementById("linkText");

setTimeout(function () {
  if (linkTitle.innerHTML === "SPEL") {
    window.location.href = kakao["SPEL"].link;
  } else if (linkTitle.innerHTML === "SPEF") {
    window.location.href = kakao["SPEF"].link;
  } else if (linkTitle.innerHTML === "SPUL") {
    window.location.href = kakao["SPUL"].link;
  } else if (linkTitle.innerHTML === "SPUF") {
    window.location.href = kakao["SPUF"].link;
  } else if (linkTitle.innerHTML === "SCEL") {
    window.location.href = kakao["SCEL"].link;
  } else if (linkTitle.innerHTML === "SCEF") {
    window.location.href = kakao["SCEF"].link;
  } else if (linkTitle.innerHTML === "SCUL") {
    window.location.href = kakao["SCUL"].link;
  } else if (linkTitle.innerHTML === "SCUF") {
    window.location.href = kakao["SCUF"].link;
  } else if (linkTitle.innerHTML === "APEL") {
    window.location.href = kakao["APEL"].link;
  } else if (linkTitle.innerHTML === "APEF") {
    window.location.href = kakao["APEF"].link;
  } else if (linkTitle.innerHTML === "APUL") {
    window.location.href = kakao["APUL"].link;
  } else if (linkTitle.innerHTML === "APUF") {
    window.location.href = kakao["APUF"].link;
  } else if (linkTitle.innerHTML === "ACEL") {
    window.location.href = kakao["ACEL"].link;
  } else if (linkTitle.innerHTML === "ACEF") {
    window.location.href = kakao["ACEF"].link;
  } else if (linkTitle.innerHTML === "ACUL") {
    window.location.href = kakao["ACUL"].link;
  } else if (linkTitle.innerHTML === "ACUF") {
    window.location.href = kakao["ACUF"].link;
  }
}, 1000);