// Exhibition programme from pp. 11–17 of the project presentation.
const taExhibitions = {
  intro: {
    en: "In an old residential building in Chengdu, Ta Academy shows works that are hard to exhibit in large public venues and offers space to artists who have few opportunities to show their work. Artists can choose between two exhibition agreements, keeping either 60% or 85% of a sale. In 2024, artists received about RMB 6,000 through the space. The following 17 exhibitions are listed in Ta Academy’s presentation.",
    zh: "塔院在成都一栋旧居民楼里办展。一些难以进入大型公共空间的作品在这里展出，平时少有展览机会的艺术家也可以在这里呈现作品。艺术家可以在两份展览合同中选择一份，作品售出后，自己取得销售额的60%或85%。2024年，艺术家们通过塔院获得了约6000元收入。以下17场展览见于塔院提供的资料。",
    ja: "塔院は成都の古い集合住宅で、大きな公共施設では展示しにくい作品を紹介し、発表の機会が少ない作家に展示の場を開いている。作家は二種類の契約から選ぶことができ、作品が売れたときには売上の60％または85％を受け取る。2024年に作家たちが塔院を通じて得た収入は約6,000元だった。以下は塔院の資料に掲載された17件の展覧会。",
    ko: "타아카데미는 청두의 오래된 공동주택에서 전시를 연다. 대형 공공시설에서 선보이기 어려운 작품을 소개하고, 전시 기회가 적은 작가들에게 공간을 내준다. 작가는 두 가지 계약 중 하나를 택해 작품 판매액의 60% 또는 85%를 받는다. 2024년 작가들이 이곳을 통해 얻은 수입은 약 6,000위안이었다. 아래는 타아카데미 자료에 수록된 전시 17건이다.",
    fr: "Dans un vieil immeuble d’habitation de Chengdu, Ta Academy expose des œuvres qui trouvent difficilement leur place dans les grands lieux publics et accueille des artistes qui ont peu d’occasions d’exposer. Deux contrats sont proposés aux artistes, qui choisissent de percevoir 60 % ou 85 % du prix de vente de leurs œuvres. En 2024, les artistes ont ainsi reçu environ 6 000 yuans. Les 17 expositions ci-dessous figurent dans le dossier de Ta Academy."
  },
  entries: [
    {
      date: "2024.03.12 – 2024.03.28",
      title: { en: "Cenacle", zh: "食堂", ja: "食堂", ko: "식당", fr: "Cénacle" },
      credit: { en: "Zhu Hongyu", zh: "朱宏宇", ja: "朱宏宇", ko: "주훙위", fr: "Zhu Hongyu" }
    },
    {
      date: "2024.04.05 – 2024.04.25",
      title: { en: "It Remains to Be Seen", zh: "有待观察", ja: "まだ分からない", ko: "좀 더 지켜볼 일", fr: "Cela reste à voir" },
      credit: { en: "Xiao Mianyang", zh: "小绵羊", ja: "小綿羊", ko: "샤오몐양", fr: "Xiao Mianyang" }
    },
    {
      date: "2024.05.26 – 2024.06.12",
      title: { en: "think think a little again", zh: "再想一下吧", ja: "もう少し考えてみよう", ko: "한 번 더 생각해 봐", fr: "Réfléchis encore un peu" },
      credit: { en: "Cheng Yiren　BAT", zh: "程一人　BAT", ja: "程一人　BAT", ko: "청이런　BAT", fr: "Cheng Yiren　BAT" }
    },
    {
      date: "2024.06.21 – 2024.07.06",
      title: { en: "Mondo Grass", zh: "沿阶草", ja: "ジャノヒゲ", ko: "소엽맥문동", fr: "L’Herbe aux turquoises" },
      credit: { en: "Huang Chaoyuan", zh: "黄超源", ja: "黄超源", ko: "황차오위안", fr: "Huang Chaoyuan" }
    },
    {
      date: "2024.07.20 – 2024.08.04",
      title: { en: "First Anniversary Exhibition — Long Live Life", zh: "一周年展 · 生命万岁", ja: "一周年記念展　生命万歳", ko: "1주년 전시 · 생명 만세", fr: "Exposition du premier anniversaire — Vive la vie" },
      credit: { en: "Amo, Ake, Jin Jinjin, Cheng Yiren", zh: "阿莫、阿科、金今今、程一人", ja: "阿莫、阿科、金今今、程一人", ko: "아모, 아커, 진진진, 청이런", fr: "Amo, Ake, Jin Jinjin, Cheng Yiren" }
    },
    {
      date: "2024.08.09 – 2024.08.23",
      title: { en: "Dawei Huoniaoni’s Merch Shop", zh: "大卫·霍尿泥の谷子店", ja: "大衛・霍尿泥のグッズ店", ko: "다웨이 훠냐오니의 굿즈 가게", fr: "La boutique de produits dérivés de Dawei Huoniaoni" },
      credit: { en: "Dawei Huoniaoni", zh: "大卫·霍尿泥", ja: "大衛・霍尿泥", ko: "다웨이 훠냐오니", fr: "Dawei Huoniaoni" }
    },
    {
      date: "2024.08.30 – 2024.09.15",
      title: { en: "Stalls at Ta Academy", zh: "摊子在塔院", ja: "塔院に並ぶ露店", ko: "타아카데미의 가판대", fr: "Des stands à Ta Academy" },
      credit: { en: "Ling Xuan, Xiao Tang, Kong Guowei, Cao Xiaojiu", zh: "凌玄、小唐、孔国威、曹小韭", ja: "凌玄、小唐、孔国威、曹小韭", ko: "링쉬안, 샤오탕, 쿵궈웨이, 차오샤오주", fr: "Ling Xuan, Xiao Tang, Kong Guowei, Cao Xiaojiu" }
    },
    {
      date: "2024.09.28 – 2024.10.13",
      title: { en: "A Sense of Everyday Life", zh: "生活感", ja: "生活感", ko: "생활감", fr: "Le sentiment du quotidien" },
      credit: { en: "Chen Zheng", zh: "陈政", ja: "陳政", ko: "천정", fr: "Chen Zheng" }
    },
    {
      date: "2024.10.29 – 2024.11.10",
      title: { en: "the one who always looks out the window", zh: "总是往窗外看的那个", ja: "いつも窓の外を見ているあの人", ko: "늘 창밖을 보는 사람", fr: "La personne qui regarde toujours par la fenêtre" },
      credit: { en: "Ake", zh: "阿科", ja: "阿科", ko: "아커", fr: "Ake" }
    },
    {
      date: "2024.12.06 – 2025.01.06",
      title: { en: "Never let me go", zh: "莫失/莫忘", ja: "失わないで、忘れないで", ko: "잃지 말고 잊지 말기를", fr: "Ne me laisse jamais partir" },
      credit: { en: "Wu Yi", zh: "伍一", ja: "伍一", ko: "우이", fr: "Wu Yi" }
    },
    {
      date: "2025.01.28 – 2025.02.12",
      title: { en: "To flee Chinese New Year", zh: "过年出走", ja: "春節に逃げ出す", ko: "춘제에 달아나기", fr: "Fuir le Nouvel An chinois" },
      credit: { en: "Meisha", zh: "美莎", ja: "美莎", ko: "메이사", fr: "Meisha" }
    },
    {
      date: "2025.02.22 – 2025.03.09",
      title: { en: "Play", zh: "遊戲", ja: "遊び", ko: "놀이", fr: "Jeu" },
      credit: { en: "Tian Bingyao", zh: "田炳尧", ja: "田炳尭", ko: "톈빙야오", fr: "Tian Bingyao" }
    },
    {
      date: "2025.03.22 – 2025.04.06",
      title: { en: "Some things about teeth", zh: "关于牙齿的一些故事", ja: "歯をめぐるいくつかの話", ko: "이에 얽힌 몇 가지 이야기", fr: "Quelques histoires de dents" },
      credit: { en: "Wuya (Misoya)", zh: "乌鴉（味噌鴉 Misoya）", ja: "烏鴉（味噌鴉 Misoya）", ko: "우야(미소야)", fr: "Wuya (Misoya)" }
    },
    {
      date: "2025.05.10 – 2025.05.24",
      title: { en: "PinkHand Solo Exhibition", zh: "PinkHand个展", ja: "PinkHand個展", ko: "PinkHand 개인전", fr: "Exposition personnelle de PinkHand" },
      credit: { en: "PinkHand", zh: "PinkHand", ja: "PinkHand", ko: "PinkHand", fr: "PinkHand" }
    },
    {
      date: "2025.05.31 – 2025.06.15",
      title: { en: "Glass Cage", zh: "玻璃囚笼", ja: "ガラスの檻", ko: "유리 감옥", fr: "Cage de verre" },
      credit: { en: "Yan Longdan", zh: "严珑丹", ja: "厳瓏丹", ko: "옌룽단", fr: "Yan Longdan" }
    },
    {
      date: "2025.07.06 – 2025.07.31",
      title: { en: "Ta Academy Superstore", zh: "塔院大卖场", ja: "塔院大売り場", ko: "타아카데미 마트", fr: "La grande surface de Ta Academy" },
      credit: { en: "", zh: "", ja: "", ko: "", fr: "" }
    },
    {
      date: "2025.08.19 – 2025.09.16",
      title: { en: "Delusion", zh: "Delusion", ja: "Delusion", ko: "Delusion", fr: "Delusion" },
      credit: { en: "Zhu Yaxian, Lu Xinyi", zh: "朱雅娴、鲁心怡", ja: "朱雅嫻、魯心怡", ko: "주야셴, 루신이", fr: "Zhu Yaxian, Lu Xinyi" }
    }
  ]
};
