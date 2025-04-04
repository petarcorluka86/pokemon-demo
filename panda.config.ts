import { defineConfig, definePreset, defineTokens } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-base";
import { SemanticTokens } from "@pandacss/dev";

const colors: SemanticTokens["colors"] = {
  action: {
    primary: {
      default: { value: { base: "#374DF5", _dark: "#7A84FF" } },
      highlight: {
        value: {
          base: "rgba(55, 77, 245, 0.15)",
          _dark: "rgba(122, 132, 255, 0.25)",
        },
      },
    },
  },
  primary: {
    default: { value: { base: "#374df5", _dark: "#7A84FF" } },
    variant: { value: { base: "#2c3ec4", _dark: "#272C32" } },
    highlight: {
      value: {
        base: "rgba(55, 77, 245, 0.15)",
        _dark: "rgba(122, 132, 255, 0.25)",
      },
    },
  },
  secondary: {
    default: { value: { base: "#0bb32a", _dark: "#46C252" } },
    variant: { value: { base: "#08861f", _dark: "#15781F" } },
    highlight: {
      value: {
        base: "rgba(11, 179, 42, 0.15)",
        _dark: "rgba(70, 194, 82, 0.25)",
      },
    },
  },
  neutral: {
    default: { value: "#A4A9B3" },
    variant: { value: { base: "#51565F", _dark: "#BCC2CF" } },
    highlight: { value: { base: "#e8ecf3", _dark: "rgba(54, 63, 83, 0.5)" } },
  },
  header: {
    primary: { value: { base: "#374DF5", _dark: "#272C32" } },
    variant: { value: { base: "#2C3EC4", _dark: "#272C32" } },
  },
  surface: {
    s0: { value: { base: "#edf1f6", _dark: "#000000" } },
    s1: { value: { base: "#ffffff", _dark: "#171C1F" } },
    s2: {
      value: { base: "rgba(229, 233, 239, 0.5)", _dark: "rgba(0, 0, 0, 0.5)" },
    },
    sp: { value: { base: "#ffffff", _dark: "#272C32" } },
    t: { value: { base: "#222226", _dark: "#ECEDEF" } },
  },
  neutrals: {
    nLv1: { value: { base: "#222226", _dark: "#ECEDEF" } },
    nLv2: {
      value: {
        base: "rgba(34, 34, 38, 0.7)",
        _dark: "rgba(255, 255, 255, 0.75)",
      },
    },
    nLv3: {
      value: {
        base: "rgba(34, 34, 38, 0.45)",
        _dark: "rgba(255, 255, 255, 0.5)",
      },
    },
    nLv4: {
      value: {
        base: "rgba(34, 34, 38, 0.15)",
        _dark: "rgba(255, 255, 255, 0.15)",
      },
    },
    nLv5: {
      value: {
        base: "rgba(34, 34, 38, 0.06)",
        _dark: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  onColor: {
    primary: { value: { base: "#ffffff", _dark: "#FCFCFE" } },
    secondary: { value: "rgba(255, 255, 255, 0.6)" },
    highlight1: { value: "rgba(255, 255, 255, 0.25)" },
    highlight2: { value: "rgba(255, 255, 255, 0.1)" },
    default: { value: "#ffffff" },
  },
  status: {
    success: {
      default: { value: { base: "#15b168", _dark: "#39B57A" } },
    },
    alert: {
      default: { value: { base: "#c7921f", _dark: "#DBAA3F" } },
    },
    error: {
      default: { value: { base: "#c7361f", _dark: "#E35C47" } },
    },
    live: { value: { base: "#cb1818", _dark: "#E73B3B" } },
    liveHighlight: {
      value: {
        base: "rgba(203, 24, 24, 0.1)",
        _dark: "rgba(231, 59, 59, 0.2)",
      },
    },
    crowdsourcingLive: { value: { base: "#FF109F", _dark: "#FF70C5" } },
    crowdsourcingLiveHighlight: {
      value: {
        base: "rgba(255, 16, 159, 0.1)",
        _dark: "rgba(255, 112, 197, 0.2)",
      },
    },
    val: { value: { base: "#e59c03", _dark: "#E8B345" } },
    sentiment: {
      positive: { value: { base: "#0bb32a", _dark: "#46C252" } },
      positiveHighlight: {
        value: {
          base: "rgba(11, 179, 42, 0.25)",
          _dark: "rgba(70, 194, 82, 0.25)",
        },
      },
      negative: { value: { base: "#cb1818", _dark: "#E73B3B" } },
      negativeHighlight: {
        value: {
          base: "rgba(203, 24, 24, 0.25)",
          _dark: "rgba(231, 59, 59, 0.25)",
        },
      },
    },
  },
  elevation: {
    elevation1: {
      value: { base: "rgba(34, 34, 38, 0.16)", _dark: "rgba(0, 0, 0, 0.24)" },
    },
    elevation2: {
      value: { base: "rgba(34, 34, 38, 0.16)", _dark: "rgba(0, 0, 0, 0.40)" },
    },
    elevation3: {
      value: { base: "rgba(34, 34, 38, 0.16)", _dark: "rgba(0, 0, 0, 0.48)" },
    },
  },
  overlay: {
    darken1: { value: "rgba(0, 0, 0, 0.25)" },
    darken2: { value: "rgba(0, 0, 0, 0.5)" },
    darken3: { value: "rgba(0, 0, 0, 0.65)" },
  },
  graphics: {
    terrain: {
      football: { value: { base: "#cbedbf", _dark: "#446C46" } },
      footballPale: { value: { base: "#f5fbf2", _dark: "#1D2C29" } },
      basketball: { value: { base: "#f8d496", _dark: "#A38A5E" } },
      basketballPale: { value: { base: "#fef6ea", _dark: "#31312E" } },
      footballLineups: { value: { base: "#3c8063", _dark: "#171c1f" } },
    },
    dark: { value: { base: "#000000", _dark: "#0c0c0d" } },
  },
  rating: {
    s00: { value: { base: "#A4A9B3", _dark: "#828BA1" } },
    s10: { value: { base: "#DC0C00", _dark: "#CD0B00" } },
    s60: { value: "#ED7E07" },
    s65: { value: "#D9AF00" },
    s70: { value: "#00C424" },
    s80: { value: "#00ADC4" },
    s90: { value: "#374DF5" },
  },
  tennisTournaments: {
    p250: { value: "#00AFF0" },
    p500: { value: "#848E95" },
    p1000: { value: "#D1B04E" },
    p2000: { value: "#3A66AC" },
  },
  playerPosition: {
    forward: { value: { base: "#CB1818", _dark: "#E73B3B" } },
    midfield: { value: { base: "#0BB32A", _dark: "#3EC94C" } },
    defender: { value: { base: "#374DF5", _dark: "#4B9DEF" } },
    goalkeeper: { value: { base: "#E59C03", _dark: "#E8B345" } },
  },
  playoffs: {
    promotionToX: { value: { base: "#26943b", _dark: "#3BB552" } },
    promotionToXPlayoff: { value: { base: "#49cb40", _dark: "#80EA79" } },
    promotionToY: { value: { base: "#0056a3", _dark: "#288EEA" } },
    promotionToYPlayoff: { value: { base: "#0a8dff", _dark: "#8FCBFF" } },
    promotionToZ: { value: { base: "#016565", _dark: "#2F9D9D" } },
    promotionToZPlayoff: { value: { base: "#018e8d", _dark: "#0AD8D8" } },
    promotionToZPlayoffSecondary: {
      value: { base: "#01b7b6", _dark: "#BEFEFE" },
    },
    relegationPlayoff: { value: { base: "#fea500", _dark: "#FFB936" } },
    relegation: { value: { base: "#c1262d", _dark: "#EF5158" } },
  },
  heatmap: {
    hm_1: { value: { base: "#cbedbf", _dark: "#446C46" } },
    hm_2: { value: { base: "#d5eb86", _dark: "#7D943C" } },
    hm_3: { value: { base: "#fffc20", _dark: "#FFD630" } },
    hm_4: { value: { base: "#ff8111", _dark: "#F0802B" } },
    hm_5: { value: { base: "#ff1f1f", _dark: "#F03530" } },
  },
  homeAway: {
    home: {
      primary: { value: { base: "#0BB32A", _dark: "#46C252" } },
      variant: { value: { base: "#08861F", _dark: "#0B5A13" } },
      primaryHighlight: {
        value: {
          base: "rgba(11, 179, 42, 0.25)",
          _dark: "rgba(70, 194, 82, 0.25)",
        },
      },
    },
    away: {
      primary: { value: { base: "#374DF5", _dark: "#7A84FF" } },
      variant: { value: { base: "#2C3EC4", _dark: "#2C3596" } },
      primaryHighlight: {
        value: {
          base: "rgba(55, 77, 245, 0.25)",
          _dark: "rgba(122, 132, 255, 0.25)",
        },
      },
    },
    shotFill: {
      value: {
        base: "rgba(255, 255, 255, 0.5)",
        _dark: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  editor: {
    pink: { value: { base: "#FF407F", _dark: "#FF7DA8" } },
  },
  tennis: {
    terrain: {
      hardcourtIndoor: { value: { base: "#30b8ab", _dark: "#6EE4D9" } },
      hardcourtOutdoor: { value: { base: "#5143cc", _dark: "#A59BF5" } },
      grass: { value: { base: "#62bd40", _dark: "#488331" } },
      clay: { value: { base: "#eb9a44", _dark: "#A06B32" } },
      default: { value: "#808080" },
    },
  },
  cricket: {
    neutral: { value: { base: "#A4A9B3", _dark: "#828BA1" } },
    singleRuns: { value: "#6AAC44" },
    firstCircleRuns: { value: "#4D82A1" },
    secondCircleRuns: { value: "#98458C" },
    wicketsDown: { value: "#B8483C" },
    errors: { value: "#BE9B3C" },
    terrainPrimary: { value: "#CBEDBF" },
    terrainSecondary: { value: "#166534" },
    dsr: { value: "#5A539C" },
  },
  mma: {
    red: {
      primary: { value: { base: "#CE153A", _dark: "#DE4E6B" } },
      highlight: {
        value: {
          base: "rgba(206, 21, 58, 0.15)",
          _dark: "rgba(222, 78, 107, 0.25)",
        },
      },
    },
    blue: {
      primary: { value: { base: "#1258DF", _dark: "#467CE5" } },
      highlight: {
        value: {
          base: "rgba(18, 88, 223, 0.15)",
          _dark: "rgba(70, 124, 229, 0.25)",
        },
      },
    },
  },
  stageSports: {
    dtm: { value: "#011C47" },
    formula1: { value: "#DC351E" },
    formulaE: { value: "#04AFE7" },
    indycar: { value: "#C61E36" },
    moto2: { value: "#84273A" },
    moto3: { value: "#832639" },
    motoGP: { value: "#3B3536" },
    nascar: { value: "#007AC2" },
    superbike: { value: "#BD1F23" },
    WRC: { value: "#7BAD26" },
    cycling: { value: "#0162AF" },
    generic: { value: "#03AF37" },
  },
  eSports: {
    lol: {
      red: { value: "#E03030" },
      blue: { value: "#1880B6" },
    },
    dota2: {
      radiant: { value: "#94C044" },
      dire: { value: "#B84444" },
    },
    cs: {
      ct: { value: "#3490CE" },
      ct2: { value: "#5098E1" },
      t: { value: "#F0B41C" },
      t2: { value: "#D4A420" },
    },
  },
  social: {
    twitter: { value: "#00acee" },
    facebook: { value: { base: "#0865FE", _dark: "#ECEDEF" } },
    apple: { value: { base: "#000000", _dark: "#ECEDEF" } },
    huaweiSymbol: { value: { base: "#CE0E2D", _dark: "#ECEDEF" } },
    huaweiText: { value: { base: "#262729", _dark: "#ECEDEF" } },
  },
  weeklyChallenge: {
    "10x": {
      surface: { value: { base: "#F7DFB2", _dark: "#B89247" } },
    },
  },
};

const sizes = {
  "0": { value: "0" },
  "2xs": { value: "2px" },
  xs: { value: "4px" },
  sm: { value: "8px" },
  md: { value: "12px" },
  lg: { value: "16px" },
  xl: { value: "24px" },
  "2xl": { value: "32px" },
  "3xl": { value: "40px" },
  "4xl": { value: "48px" },
  "5xl": { value: "56px" },
  "6xl": { value: "64px" },
  "7xl": { value: "72px" },
  "8xl": { value: "80px" },
  "9xl": { value: "88px" },
  "10xl": { value: "96px" },
  "11xl": { value: "104px" },
  "12xl": { value: "112px" },
  "100%": { value: "100%" },
  min: { value: "min-content" },
  max: { value: "max-content" },
  fit: { value: "fit-content" },
};

const breakpoints = Object.fromEntries(
  Object.entries({
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1344,
  }).map(([key, value]) => [key, `${value}px`])
);

const sofascorePreset = definePreset({
  name: "sofascore-preset",

  theme: {
    breakpoints,
    tokens: defineTokens({
      spacing: sizes,
      sizes,
      fontSizes: sizes,
    }),
    semanticTokens: {
      colors,
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [pandaPreset, sofascorePreset],
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],
  // Useful for theme customization
  theme: {
    extend: {},
  },
  // Enable JSX components
  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
