// ══════════════════════════════════════════
// 社區管委會智慧通報系統
// 多租戶設定檔 (config.js) v1.0
// ══════════════════════════════════════════

const SYSTEM_CONFIG = {

  // ── 示範社區（翠堤花園） ──
  'demo': {
    communityName: '翠堤花園社區',
    address:       '台北市信義區忠孝東路五段68號',
    icon:          '🏡',
    reportPrefix:  'CTG',

    // ── 棟別設定（支援不同路段）──
    buildings: [
      {
        id: 'A', name: 'A棟',
        address: '忠孝東路五段68號',
        floors: { min:1, max:18, basement:1 },
        locations: ['室內住戶','公共走廊','電梯','樓梯間','屋頂']
      },
      {
        id: 'B', name: 'B棟',
        address: '忠孝東路五段70號',  // 不同門牌
        floors: { min:1, max:18, basement:1 },
        locations: ['室內住戶','公共走廊','電梯','樓梯間','屋頂']
      },
      {
        id: 'C', name: 'C棟',
        address: '基隆路一段100號',   // 不同路段
        floors: { min:1, max:12, basement:2 },
        locations: ['室內住戶','公共走廊','電梯','樓梯間','屋頂']
      },
      {
        id: 'P', name: '地下停車場',
        address: '',                  // 停車場無門牌
        floors: null,                 // 停車場無樓層
        locations: ['B1停車場','B2停車場','機車停車區','裝卸區','機房']
      },
      {
        id: 'PUB', name: '公共設施',
        address: '',
        floors: null,
        locations: ['中庭花園','健身房','交誼廳','頂樓空間','信箱區','垃圾集中區']
      },
    ],

    // ── 通報類別 ──
    categories: [
      {
        key:  'facility', name: '設施損壞', icon: '🔧',
        desc: '電梯、燈光、門禁、消防',
        subs: ['電梯故障','燈光損壞','門禁異常','消防設備','給排水問題',
               '健身器材','停車設備','其他設施']
      },
      {
        key:  'env', name: '環境清潔', icon: '🧹',
        desc: '清潔、廢棄物、排水',
        subs: ['公共區域髒亂','垃圾未清運','廢棄物堆置','停車場清潔',
               '異味問題','排水阻塞','其他環境']
      },
      {
        key:  'safety', name: '安全問題', icon: '🛡️',
        desc: '可疑人員、監視器、漏水',
        subs: ['可疑人員','監視器異常','門禁破損','漏水漏電',
               '結構安全','火災隱患','其他安全']
      },
      {
        key:  'service', name: '服務申請', icon: '📋',
        desc: '裝潢、搬遷、借用',
        subs: ['裝潢申請','搬入搬出申請','停車位申請','設備借用',
               '訪客停車','其他服務']
      },
      {
        key:  'suggest', name: '社區提案', icon: '💡',
        desc: '改善建議、活動提案',
        subs: ['公共設施改善','社區活動提案','管理規約修訂',
               '費用相關意見','其他提案']
      },
    ],

    // ── Line / GAS 設定 ──
    liffIdIndex:  '2009701021-MFe8Bz5O',
    liffIdAdmin:  '2009701021-997sFbXK',
    gasUrl:       'https://script.google.com/macros/s/AKfycbwrA2VCRvOAvGHtjaTbc0QOhE7lxB_E4ZthKih3DOPUbsuWHmjnyv4M-rCNo2WvMsS4/exec',
    adminUids:    ['U29898afb606f8c0671275c061f817adc'],
  },

  // ── 未來新增社區只複製上面區塊，改 key 和設定即可 ──
};

// ── 全系統共用 ──
const GLOBAL_CONFIG = {
  GMAPS_KEY: 'AIzaSyBFoTy6ZmmVCjNYHIvUEl0I8n2VZKkm1RA'
};
