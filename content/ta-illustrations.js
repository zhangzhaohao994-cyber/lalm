// Figures from the Ta Academy presentation. Captions reproduce printed text; alt text describes the image.
const taIllustrations = {
  "intro-gathering": {
    "width": 1080,
    "height": 482,
    "alt": {
      "zh": "几个人坐在彩灯旁。",
      "en": "People seated beside coloured lights.",
      "ja": "色のついた照明のそばに座る人たち。",
      "ko": "색색의 조명 옆에 앉은 사람들.",
      "fr": "Plusieurs personnes assises près de lumières colorées."
    }
  },
  "course-contemporary-art": {
    "width": 980,
    "height": 1350,
    "caption": {
      "zh": "当代艺术补丁包",
      "en": "Contemporary Art Patch Kit",
      "ja": "現代美術の補習キット",
      "ko": "현대미술 패치 키트",
      "fr": "Kit de rattrapage en art contemporain"
    }
  },
  "course-curating": {
    "width": 980,
    "height": 1350,
    "caption": {
      "zh": "策展补丁包",
      "en": "Curating Patch Kit",
      "ja": "キュレーションの補習キット",
      "ko": "큐레이팅 패치 키트",
      "fr": "Kit de rattrapage en commissariat d’exposition"
    }
  },
  "course-painting": {
    "width": 980,
    "height": 1350,
    "caption": {
      "zh": "绘画基础补丁包\n图像学/符号群",
      "en": "Painting Basics Patch Kit\nIconology / Groups of Signs",
      "ja": "絵画の基礎の補習キット\n図像学／記号群",
      "ko": "회화 기초 패치 키트\n도상학 / 기호군",
      "fr": "Kit de rattrapage en bases de la peinture\nIconologie / groupes de signes"
    }
  },
  "linxi-study-projection": {
    "width": 1440,
    "height": 810,
    "alt": {
      "zh": "大家坐在教室里看投影。",
      "en": "People seated in a classroom facing a projection.",
      "ja": "教室に座り、投影された画面を見る人たち。",
      "ko": "교실에 앉아 프로젝터 화면을 보는 사람들.",
      "fr": "Des personnes assises dans une salle de classe regardent une projection."
    }
  },
  "suzhou-workshop": {
    "width": 1435,
    "height": 793,
    "alt": {
      "zh": "学员围着桌上的花枝。",
      "en": "Participants gather around flowers on a table.",
      "ja": "机の上の花を囲む受講者たち。",
      "ko": "탁자 위의 꽃을 둘러싼 수강생들.",
      "fr": "Des participants réunis autour de fleurs sur une table."
    }
  },
  "suzhou-class": {
    "width": 1440,
    "height": 694,
    "alt": {
      "zh": "课堂上一位学员的近景。",
      "en": "A close-up of a participant in class.",
      "ja": "受講者の一人を近くから写した授業風景。",
      "ko": "수업 중인 수강생 한 명을 가까이서 찍은 사진.",
      "fr": "Gros plan sur une participante en cours."
    },
    "caption": {
      "zh": "照片截自苏州新闻视频号 | 苏州广播电视总台",
      "en": "Images from Suzhou News on WeChat Channels | Suzhou Broadcasting System",
      "ja": "写真は蘇州ニュースのWeChatチャンネルより | 蘇州広播電視総台",
      "ko": "사진 출처: 쑤저우 뉴스 위챗 채널 | 쑤저우 방송총국",
      "fr": "Images tirées de la chaîne WeChat de Suzhou News | Radio-télévision de Suzhou"
    }
  },
  "upon-performance": {
    "width": 520,
    "height": 693,
    "caption": {
      "zh": "来自黑市国际（Black Market International）的 Alastair MacLennan 在塔院和一位艺术家互动 | 水泥公园LIVEHOUSE -255期",
      "en": "Alastair MacLennan of Black Market International interacts with an artist at Ta Academy | CementPark LIVEHOUSE, no. 255",
      "ja": "Black Market Internationalのアラステア・マクレナンが塔院で一人のアーティストと交流する | CementPark LIVEHOUSE 第255回",
      "ko": "블랙 마켓 인터내셔널의 앨러스터 매클레넌이 타아카데미에서 한 예술가와 교류하고 있다 | 시멘트파크 LIVEHOUSE 제255회",
      "fr": "Alastair MacLennan, de Black Market International, interagit avec un artiste à Ta Academy | CementPark LIVEHOUSE, 255ᵉ édition"
    }
  },
  "seven-by-seven-poster": {
    "width": 1018,
    "height": 1440,
    "caption": {
      "zh": "*2026年 第二次 7天7分钟活动的招募海报",
      "en": "*2026, poster calling for participants in the second edition of 7 Days, 7 Minutes",
      "ja": "*2026年 「7日間、7分間」第2回の参加者募集ポスター",
      "ko": "*2026년 두 번째 ‘7일 7분’ 참가자 모집 포스터",
      "fr": "*2026, affiche de l’appel à participation pour la deuxième édition de 7 jours, 7 minutes"
    }
  },
  "show-12-1": {
    "width": 930,
    "height": 697,
    "alt": {
      "zh": "一幅带有树形图案的作品。",
      "en": "A work with a tree motif.",
      "ja": "樹木の模様のある作品。",
      "ko": "나무 형상이 담긴 작품.",
      "fr": "Une œuvre avec un motif d’arbre."
    }
  },
  "show-12-2": {
    "width": 1008,
    "height": 756,
    "alt": {
      "zh": "昏暗房间里贴满图片的一角。",
      "en": "A corner of a dim room covered with images.",
      "ja": "写真や絵が貼られた薄暗い部屋の一角。",
      "ko": "이미지가 빼곡히 붙은 어두운 방 한쪽.",
      "fr": "Un angle de pièce peu éclairé, couvert d’images."
    }
  },
  "show-12-3": {
    "width": 559,
    "height": 419,
    "alt": {
      "zh": "一只手伸向桌上陈列的物件。",
      "en": "A hand reaches towards objects displayed on a table.",
      "ja": "机の上に並べられた物に手を伸ばす様子。",
      "ko": "탁자에 놓인 물건을 향해 손을 뻗는 모습.",
      "fr": "Une main tendue vers des objets disposés sur une table."
    }
  },
  "show-12-4": {
    "width": 530,
    "height": 707,
    "alt": {
      "zh": "两个人站在悬挂的灯泡下。",
      "en": "Two people standing beneath hanging light bulbs.",
      "ja": "吊り下げられた電球の下に立つ二人。",
      "ko": "매달린 전구 아래 서 있는 두 사람.",
      "fr": "Deux personnes debout sous des ampoules suspendues."
    }
  },
  "show-13-2": {
    "width": 1080,
    "height": 608,
    "alt": {
      "zh": "条纹篷布下，帐篷上映着人像。",
      "en": "A face projected on a tent beneath striped tarpaulins.",
      "ja": "縞模様のシートの下、テントに人物の顔が投影されている。",
      "ko": "줄무늬 천막 아래 텐트에 얼굴이 투영된 모습.",
      "fr": "Un visage projeté sur une tente sous des bâches rayées."
    }
  },
  "show-14-1": {
    "width": 1080,
    "height": 608,
    "alt": {
      "zh": "紫色光线中的两个人。",
      "en": "Two people in purple light.",
      "ja": "紫色の光の中にいる二人。",
      "ko": "보랏빛 조명 아래 있는 두 사람.",
      "fr": "Deux personnes dans une lumière violette."
    }
  },
  "show-14-2": {
    "width": 1080,
    "height": 810,
    "alt": {
      "zh": "透过玻璃门看到的两个人。",
      "en": "Two people seen through glass doors.",
      "ja": "ガラス戸越しに見える二人。",
      "ko": "유리문 너머로 보이는 두 사람.",
      "fr": "Deux personnes vues à travers des portes vitrées."
    }
  },
  "show-15-2": {
    "width": 1080,
    "height": 608,
    "alt": {
      "zh": "墙面上投映着一栋建筑的影像。",
      "en": "An image of a building projected on a wall.",
      "ja": "壁に投影された建物の映像。",
      "ko": "벽에 투영된 건물 영상.",
      "fr": "L’image d’un bâtiment projetée sur un mur."
    }
  },
  "show-15-3": {
    "width": 1080,
    "height": 607,
    "alt": {
      "zh": "房间里的集体合影。",
      "en": "A group photograph taken indoors.",
      "ja": "室内で撮影された集合写真。",
      "ko": "방 안에서 찍은 단체 사진.",
      "fr": "Une photo de groupe prise en intérieur."
    }
  },
  "show-15-4": {
    "width": 1080,
    "height": 608,
    "alt": {
      "zh": "暗处的红色屏幕。",
      "en": "A red screen in a darkened space.",
      "ja": "暗い空間に浮かぶ赤い画面。",
      "ko": "어두운 공간 속 붉은 화면.",
      "fr": "Un écran rouge dans la pénombre."
    }
  },
  "show-16": {
    "width": 1080,
    "height": 608,
    "alt": {
      "zh": "沙发上方映着一个坐姿人像。",
      "en": "An image of a seated figure above a sofa.",
      "ja": "ソファの上方に映る、座った人物の姿。",
      "ko": "소파 위쪽에 비친 앉아 있는 사람의 형상.",
      "fr": "L’image d’un personnage assis au-dessus d’un canapé."
    }
  },
  "show-17": {
    "width": 1440,
    "height": 1080,
    "alt": {
      "zh": "墙上并排陈列着许多图片。",
      "en": "A wall display of images placed side by side.",
      "ja": "壁面に並べて展示された多くの画像。",
      "ko": "여러 이미지가 나란히 붙어 있는 벽.",
      "fr": "De nombreuses images exposées côte à côte sur un mur."
    }
  },
  "chengdu-outdoors": {
    "width": 1440,
    "height": 742,
    "alt": {
      "zh": "水边一位穿白色服装的人。",
      "en": "A person in a white outfit beside the water.",
      "ja": "水辺にいる白い衣装の人物。",
      "ko": "물가에 흰옷을 입고 서 있는 사람.",
      "fr": "Une personne vêtue de blanc au bord de l’eau."
    }
  }
};
