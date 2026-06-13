export type SemanticColor = {
  name: string
  variable: string
  tailwind: string
  light: string
  dark: string
}

export type ColorStop = {
  name: string
  value: string
}

export type PrimitivePalette = {
  family: string
  scale: ColorStop[]
}

const family = (
  name: string,
  scales: Record<string, string>
): PrimitivePalette => ({
  family: name,
  scale: Object.entries(scales).map(([n, v]) => ({ name: n, value: v })),
})

export const semanticColors: SemanticColor[] = [
  { name: "background", variable: "--background", tailwind: "bg-background", light: "#FFFFFF", dark: "#0A0A0A" },
  { name: "foreground", variable: "--foreground", tailwind: "text-foreground", light: "#0A0A0A", dark: "#FAFAFA" },
  { name: "card", variable: "--card", tailwind: "bg-card", light: "#FFFFFF", dark: "#171717" },
  { name: "card-foreground", variable: "--card-foreground", tailwind: "text-card-foreground", light: "#0A0A0A", dark: "#FAFAFA" },
  { name: "popover", variable: "--popover", tailwind: "bg-popover", light: "#FFFFFF", dark: "#262626" },
  { name: "popover-foreground", variable: "--popover-foreground", tailwind: "text-popover-foreground", light: "#0A0A0A", dark: "#FAFAFA" },
  { name: "primary", variable: "--primary", tailwind: "bg-primary", light: "#171717", dark: "#E5E5E5" },
  { name: "primary-foreground", variable: "--primary-foreground", tailwind: "text-primary-foreground", light: "#FAFAFA", dark: "#171717" },
  { name: "secondary", variable: "--secondary", tailwind: "bg-secondary", light: "#F5F5F5", dark: "#262626" },
  { name: "secondary-foreground", variable: "--secondary-foreground", tailwind: "text-secondary-foreground", light: "#0A0A0A", dark: "#FAFAFA" },
  { name: "muted", variable: "--muted", tailwind: "bg-muted", light: "#F5F5F5", dark: "#262626" },
  { name: "muted-foreground", variable: "--muted-foreground", tailwind: "text-muted-foreground", light: "#737373", dark: "#A3A3A3" },
  { name: "accent", variable: "--accent", tailwind: "bg-accent", light: "#F5F5F5", dark: "#404040" },
  { name: "accent-foreground", variable: "--accent-foreground", tailwind: "text-accent-foreground", light: "#171717", dark: "#FAFAFA" },
  { name: "destructive", variable: "--destructive", tailwind: "bg-destructive", light: "#DC2626", dark: "#F87171" },
  { name: "border", variable: "--border", tailwind: "border-border", light: "#E5E5E5", dark: "#404040" },
  { name: "input", variable: "--input", tailwind: "border-input", light: "#E5E5E5", dark: "#171717" },
  { name: "ring", variable: "--ring", tailwind: "ring-ring", light: "#737373", dark: "#737373" },
  { name: "chart-1", variable: "--chart-1", tailwind: "text-chart-1", light: "#5EB1EF", dark: "#5EB1EF" },
  { name: "chart-2", variable: "--chart-2", tailwind: "text-chart-2", light: "#0090FF", dark: "#0090FF" },
  { name: "chart-3", variable: "--chart-3", tailwind: "text-chart-3", light: "#0588F0", dark: "#0588F0" },
  { name: "chart-4", variable: "--chart-4", tailwind: "text-chart-4", light: "#0D74CE", dark: "#0D74CE" },
  { name: "chart-5", variable: "--chart-5", tailwind: "text-chart-5", light: "#113264", dark: "#113264" },
  { name: "sidebar", variable: "--sidebar", tailwind: "bg-sidebar", light: "#FAFAFA", dark: "#171717" },
  { name: "sidebar-foreground", variable: "--sidebar-foreground", tailwind: "text-sidebar-foreground", light: "#0A0A0A", dark: "#FAFAFA" },
  { name: "sidebar-primary", variable: "--sidebar-primary", tailwind: "bg-sidebar-primary", light: "#171717", dark: "#0588F0" },
  { name: "sidebar-primary-foreground", variable: "--sidebar-primary-foreground", tailwind: "text-sidebar-primary-foreground", light: "#FAFAFA", dark: "#FAFAFA" },
  { name: "sidebar-accent", variable: "--sidebar-accent", tailwind: "bg-sidebar-accent", light: "#F5F5F5", dark: "#262626" },
  { name: "sidebar-accent-foreground", variable: "--sidebar-accent-foreground", tailwind: "text-sidebar-accent-foreground", light: "#171717", dark: "#FAFAFA" },
  { name: "sidebar-border", variable: "--sidebar-border", tailwind: "border-sidebar-border", light: "#D4D4D4", dark: "#FFFFFF1A" },
  { name: "sidebar-ring", variable: "--sidebar-ring", tailwind: "ring-sidebar-ring", light: "#737373", dark: "#737373" },
  { name: "background-color", variable: "--background-color", tailwind: "bg-background-color", light: "#0000004D", dark: "#0000004D" },
  { name: "semantic-background", variable: "--semantic-background", tailwind: "bg-semantic-background", light: "#63635E", dark: "#272625" },
  { name: "semantic-foreground", variable: "--semantic-foreground", tailwind: "text-semantic-foreground", light: "#FDFDFC", dark: "#535151" },
  { name: "semantic-border", variable: "--semantic-border", tailwind: "border-semantic-border", light: "#8D8D86", dark: "#FFFFFF" },
]

export const tailwindPalette: PrimitivePalette[] = [
  family("slate", { "50": "#F8FAFC", "100": "#F1F5F9", "200": "#E2E8F0", "300": "#CBD5E1", "400": "#94A3B8", "500": "#64748B", "600": "#475569", "700": "#334155", "800": "#1E293B", "900": "#0F172A", "950": "#020617" }),
  family("gray", { "50": "#F9FAFB", "100": "#F3F4F6", "200": "#E5E7EB", "300": "#D1D5DB", "400": "#9CA3AF", "500": "#6B7280", "600": "#4B5563", "700": "#374151", "800": "#1F2937", "900": "#111827", "950": "#030712" }),
  family("zinc", { "50": "#FAFAFA", "100": "#F4F4F5", "200": "#E4E4E7", "300": "#D4D4D8", "400": "#A1A1AA", "500": "#71717A", "600": "#52525B", "700": "#3F3F46", "800": "#27272A", "900": "#18181B", "950": "#09090B" }),
  family("neutral", { "50": "#FAFAFA", "100": "#F5F5F5", "200": "#E5E5E5", "300": "#D4D4D4", "400": "#A3A3A3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0A0A0A" }),
  family("stone", { "50": "#FAFAF9", "100": "#F5F5F4", "200": "#E7E5E4", "300": "#D6D3D1", "400": "#A8A29E", "500": "#78716C", "600": "#57534E", "700": "#44403C", "800": "#292524", "900": "#1C1917", "950": "#0C0A09" }),
  family("red", { "50": "#FEF2F2", "100": "#FEE2E2", "200": "#FECACA", "300": "#FCA5A5", "400": "#F87171", "500": "#EF4444", "600": "#DC2626", "700": "#B91C1C", "800": "#991B1B", "900": "#7F1D1D", "950": "#450A0A" }),
  family("orange", { "50": "#FFF7ED", "100": "#FFEDD5", "200": "#FED7AA", "300": "#FDBA74", "400": "#FB923C", "500": "#F97316", "600": "#EA580C", "700": "#C2410C", "800": "#9A3412", "900": "#7C2D12", "950": "#431407" }),
  family("amber", { "50": "#FFFBEB", "100": "#FEF3C7", "200": "#FDE68A", "300": "#FCD34D", "400": "#FBBF24", "500": "#F59E0B", "600": "#D97706", "700": "#B45309", "800": "#92400E", "900": "#78350F", "950": "#451A03" }),
  family("yellow", { "50": "#FEFCE8", "100": "#FEF9C3", "200": "#FEF08A", "300": "#FDE047", "400": "#FACC15", "500": "#EAB308", "600": "#CA8A04", "700": "#A16207", "800": "#854D0E", "900": "#713F12", "950": "#422006" }),
  family("lime", { "50": "#F7FEE7", "100": "#ECFCCB", "200": "#D9F99D", "300": "#BEF264", "400": "#A3E635", "500": "#84CC16", "600": "#65A30D", "700": "#4D7C0F", "800": "#3F6212", "900": "#365314", "950": "#1A2E05" }),
  family("green", { "50": "#F0FDF4", "100": "#DCFCE7", "200": "#BBF7D0", "300": "#86EFAC", "400": "#4ADE80", "500": "#22C55E", "600": "#16A34A", "700": "#15803D", "800": "#166534", "900": "#14532D", "950": "#052E16" }),
  family("emerald", { "50": "#ECFDF5", "100": "#D1FAE5", "200": "#A7F3D0", "300": "#6EE7B7", "400": "#34D399", "500": "#10B981", "600": "#059669", "700": "#047857", "800": "#065F46", "900": "#064E3B", "950": "#022C22" }),
  family("teal", { "50": "#F0FDFA", "100": "#CCFBF1", "200": "#99F6E4", "300": "#5EEAD4", "400": "#2DD4BF", "500": "#14B8A6", "600": "#0D9488", "700": "#0F766E", "800": "#115E59", "900": "#134E4A", "950": "#042F2E" }),
  family("cyan", { "50": "#ECFEFF", "100": "#CFFAFE", "200": "#A5F3FC", "300": "#67E8F9", "400": "#22D3EE", "500": "#06B6D4", "600": "#0891B2", "700": "#0E7490", "800": "#155E75", "900": "#164E63", "950": "#083344" }),
  family("sky", { "50": "#F0F9FF", "100": "#E0F2FE", "200": "#BAE6FD", "300": "#7DD3FC", "400": "#38BDF8", "500": "#0EA5E9", "600": "#0284C7", "700": "#0369A1", "800": "#075985", "900": "#0C4A6E", "950": "#082F49" }),
  family("blue", { "50": "#EFF6FF", "100": "#DBEAFE", "200": "#BFDBFE", "300": "#93C5FD", "400": "#60A5FA", "500": "#3B82F6", "600": "#2563EB", "700": "#1D4ED8", "800": "#1E40AF", "900": "#1E3A8A", "950": "#172554" }),
  family("indigo", { "50": "#EEF2FF", "100": "#E0E7FF", "200": "#C7D2FE", "300": "#A5B4FC", "400": "#818CF8", "500": "#6366F1", "600": "#4F46E5", "700": "#4338CA", "800": "#3730A3", "900": "#312E81", "950": "#1E1B4B" }),
  family("violet", { "50": "#F5F3FF", "100": "#EDE9FE", "200": "#DDD6FE", "300": "#C4B5FD", "400": "#A78BFA", "500": "#8B5CF6", "600": "#7C3AED", "700": "#6D28D9", "800": "#5B21B6", "900": "#4C1D95", "950": "#2E1065" }),
  family("purple", { "50": "#FAF5FF", "100": "#F3E8FF", "200": "#E9D5FF", "300": "#D8B4FE", "400": "#C084FC", "500": "#A855F7", "600": "#9333EA", "700": "#7E22CE", "800": "#6B21A8", "900": "#581C87", "950": "#3B0764" }),
  family("fuchsia", { "50": "#FDF4FF", "100": "#FAE8FF", "200": "#F5D0FE", "300": "#F0ABFC", "400": "#E879F9", "500": "#D946EF", "600": "#C026D3", "700": "#A21CAF", "800": "#86198F", "900": "#701A75", "950": "#4A044E" }),
  family("pink", { "50": "#FDF2F8", "100": "#FCE7F3", "200": "#FBCFE8", "300": "#F9A8D4", "400": "#F472B6", "500": "#EC4899", "600": "#DB2777", "700": "#BE185D", "800": "#9D174D", "900": "#831843", "950": "#500724" }),
  family("rose", { "50": "#FFF1F2", "100": "#FFE4E6", "200": "#FECDD3", "300": "#FDA4AF", "400": "#FB7185", "500": "#F43F5E", "600": "#E11D48", "700": "#BE123C", "800": "#9F1239", "900": "#881337", "950": "#4C0519" }),
  family("base", { black: "#000000", white: "#FFFFFF" }),
]

export const radixPalette: PrimitivePalette[] = [
  family("gray", { "1": "#FCFCFC", "2": "#F9F9F9", "3": "#F0F0F0", "4": "#E8E8E8", "5": "#E0E0E0", "6": "#E0E0E0", "7": "#CECECE", "8": "#BBBBBB", "9": "#8D8D8D", "10": "#838383", "11": "#646464", "12": "#202020" }),
  family("mauve", { "1": "#FDFCFD", "2": "#FAF9FB", "3": "#F2EFF3", "4": "#EAE7EC", "5": "#E3DFE6", "6": "#DBD8E0", "7": "#D0CDD7", "8": "#BCBAC7", "9": "#8E8C99", "10": "#84828E", "11": "#65636D", "12": "#211F26" }),
  family("slate", { "1": "#FCFCFD", "2": "#F9F9FB", "3": "#F0F0F3", "4": "#E8E8EC", "5": "#E0E1E6", "6": "#D9D9E0", "7": "#CDCED6", "8": "#B9BBC6", "9": "#8B8D98", "10": "#80838D", "11": "#60646C", "12": "#1C2024" }),
  family("sage", { "1": "#FBFDFC", "2": "#F7F9F8", "3": "#EEEEFF", "4": "#E6E9E8", "5": "#DFE2E0", "6": "#D7DAD9", "7": "#CBCFCD", "8": "#B8BCBA", "9": "#868E8B", "10": "#7C8481", "11": "#5F6563", "12": "#1A211E" }),
  family("olive", { "1": "#FCFDFC", "2": "#F8FAF8", "3": "#EFF1EF", "4": "#E7E9E7", "5": "#DFE2DF", "6": "#D7DAD7", "7": "#CCCFCC", "8": "#B9BCB8", "9": "#898E87", "10": "#7F847D", "11": "#60655F", "12": "#1D211C" }),
  family("sand", { "1": "#FDFDFC", "2": "#F9F9F8", "3": "#F1F0EF", "4": "#E9E8E6", "5": "#E2E1DE", "6": "#DAD9D6", "7": "#CFCECA", "8": "#BCBBB5", "9": "#8D8D86", "10": "#82827C", "11": "#63635E", "12": "#21201C" }),
  family("tomato", { "1": "#FFFCFC", "2": "#FFF8F7", "3": "#FEEBE7", "4": "#FFDCD3", "5": "#FFCDC2", "6": "#FDBDAF", "7": "#F5A898", "8": "#EC8E7B", "9": "#E54D2E", "10": "#DD4425", "11": "#D13415", "12": "#5C271F" }),
  family("red", { "1": "#FFFCFC", "2": "#FFF7F7", "3": "#FEEBEC", "4": "#FFDBDC", "5": "#FFCDCE", "6": "#FDBDBE", "7": "#F4A9AA", "8": "#EB8E90", "9": "#E5484D", "10": "#DC3E42", "11": "#CE2C31", "12": "#641723" }),
  family("ruby", { "1": "#FFFCFD", "2": "#FFF7F8", "3": "#FEEAED", "4": "#FFDCE1", "5": "#FFCED6", "6": "#F8BFC8", "7": "#EFACB8", "8": "#E592A3", "9": "#E54666", "10": "#DC3B5D", "11": "#CA244D", "12": "#64172B" }),
  family("crimson", { "1": "#FFFCFD", "2": "#FEF7F9", "3": "#FFE9F0", "4": "#FEDCE7", "5": "#FACEDD", "6": "#F3BED1", "7": "#EAACC3", "8": "#E093B2", "9": "#E93D82", "10": "#DF3478", "11": "#CB1D63", "12": "#621639" }),
  family("pink", { "1": "#FFFCFE", "2": "#FEF7FB", "3": "#FEE9F5", "4": "#FBDCEF", "5": "#F6CEE7", "6": "#EFBFDD", "7": "#E7ACD0", "8": "#DD93C2", "9": "#D6409F", "10": "#CF3897", "11": "#C2298A", "12": "#651249" }),
  family("plum", { "1": "#FEFCFF", "2": "#FDF7FD", "3": "#FBEBFB", "4": "#F7DEF8", "5": "#F2D1F3", "6": "#E9C2EC", "7": "#DEADE3", "8": "#CF91D8", "9": "#AB4ABA", "10": "#A144AF", "11": "#953EA3", "12": "#53195D" }),
  family("purple", { "1": "#FEFCFE", "2": "#FBF7FE", "3": "#F7EDFE", "4": "#F2E2FC", "5": "#EAD5F9", "6": "#E0C4F4", "7": "#D1AFEC", "8": "#BE93E4", "9": "#8E4EC6", "10": "#8347B9", "11": "#8145B5", "12": "#402060" }),
  family("violet", { "1": "#FDFCFE", "2": "#FAF8FF", "3": "#F4F0FE", "4": "#EBE4FF", "5": "#E1D9FF", "6": "#D4CAFE", "7": "#C2B5F5", "8": "#AA99EC", "9": "#6E56CF", "10": "#654DC4", "11": "#6550B9", "12": "#2F265F" }),
  family("iris", { "1": "#FDFDFF", "2": "#F8F8FF", "3": "#F0F1FE", "4": "#E6E7FF", "5": "#DADCFF", "6": "#CBCDFF", "7": "#B8BAF8", "8": "#9B9EF0", "9": "#5B5BD6", "10": "#5151CD", "11": "#5753C6", "12": "#272962" }),
  family("indigo", { "1": "#FDFDFE", "2": "#F7F9FF", "3": "#EDF2FE", "4": "#E1E9FF", "5": "#D2DEFF", "6": "#C1D0FF", "7": "#ABBDF9", "8": "#8DA4EF", "9": "#3E63DD", "10": "#3358D4", "11": "#3A5BC7", "12": "#1F2D5C" }),
  family("blue", { "1": "#FBFDFF", "2": "#F4FAFF", "3": "#E6F4FE", "4": "#D5EFFF", "5": "#C2E5FF", "6": "#ACD8FC", "7": "#8EC8F6", "8": "#5EB1EF", "9": "#0090FF", "10": "#0588F0", "11": "#0D74CE", "12": "#113264" }),
  family("cyan", { "1": "#FAFDFE", "2": "#F2FAFB", "3": "#DEF7F9", "4": "#CAF1F6", "5": "#B5E9F0", "6": "#9DDDE7", "7": "#7DCEDC", "8": "#3DB9CF", "9": "#00A2C7", "10": "#0797B9", "11": "#107D98", "12": "#0D3C48" }),
  family("teal", { "1": "#FAFEFD", "2": "#F3FBF9", "3": "#E0F8F3", "4": "#CCF3EA", "5": "#B8EAE0", "6": "#A1DED2", "7": "#83CDC1", "8": "#53B9AB", "9": "#12A594", "10": "#0D9B8A", "11": "#008573", "12": "#0D3D38" }),
  family("jade", { "1": "#FBFEFD", "2": "#F4FBF7", "3": "#E6F7ED", "4": "#D6F1E3", "5": "#C3E9D7", "6": "#ACDEC8", "7": "#8BCEB6", "8": "#56BA9F", "9": "#29A383", "10": "#26997B", "11": "#208368", "12": "#1D3B31" }),
  family("green", { "1": "#FBFEFC", "2": "#F4FBF6", "3": "#E6F6EB", "4": "#D6F1DF", "5": "#C4E8D1", "6": "#ADDDC0", "7": "#8ECEAA", "8": "#5BB98B", "9": "#30A46C", "10": "#2B9A66", "11": "#218358", "12": "#193B2D" }),
  family("grass", { "1": "#FBFEFB", "2": "#F5FBF5", "3": "#E9F6E9", "4": "#DAF1DB", "5": "#C9E8CA", "6": "#B2DDB5", "7": "#94CE9A", "8": "#65BA74", "9": "#46A758", "10": "#3E9B4F", "11": "#2A7E3B", "12": "#203C25" }),
  family("bronze", { "1": "#FDFCFC", "2": "#FDF7F5", "3": "#F6EDEA", "4": "#EFE4DF", "5": "#E7D9D3", "6": "#DFCDC5", "7": "#D3BCB3", "8": "#C2A499", "9": "#A18072", "10": "#957468", "11": "#7D5E54", "12": "#43302B" }),
  family("gold", { "1": "#FDFDFC", "2": "#FAF9F2", "3": "#F2F0E7", "4": "#EAE6DB", "5": "#E1DCCF", "6": "#D8D0BF", "7": "#CBC0AA", "8": "#B9A88D", "9": "#978365", "10": "#8C7A5E", "11": "#71624B", "12": "#3B352B" }),
  family("brown", { "1": "#FEFDFC", "2": "#FCF9F6", "3": "#F6EEE7", "4": "#F0E4D9", "5": "#EBDACA", "6": "#E4CDB7", "7": "#DCBC9F", "8": "#CEA37E", "9": "#AD7F58", "10": "#A07553", "11": "#815E46", "12": "#3E332E" }),
  family("orange", { "1": "#FEFCFB", "2": "#FFF7ED", "3": "#FFEFD6", "4": "#FFDFB5", "5": "#FFD19A", "6": "#FFC182", "7": "#F5AE73", "8": "#EC9455", "9": "#F76B15", "10": "#EF5F00", "11": "#CC4E00", "12": "#582D1D" }),
  family("amber", { "1": "#FEFDFB", "2": "#FEFBE9", "3": "#FFF7C2", "4": "#FFEE9C", "5": "#FBE577", "6": "#F3D673", "7": "#E9C162", "8": "#E2A336", "9": "#FFC53D", "10": "#FFBA18", "11": "#AB6400", "12": "#4F3422" }),
  family("yellow", { "1": "#FDFDF9", "2": "#FEFCE9", "3": "#FFFAB8", "4": "#FFF394", "5": "#FFE770", "6": "#F3D768", "7": "#E4C767", "8": "#D5AE39", "9": "#FFE629", "10": "#FFDC00", "11": "#9E6C00", "12": "#473B1F" }),
  family("lime", { "1": "#FCFDFA", "2": "#F8FAF3", "3": "#EEF6D6", "4": "#E2F0BD", "5": "#D3E7A6", "6": "#C2DA91", "7": "#ABC978", "8": "#8DB654", "9": "#BDEE63", "10": "#B0E64C", "11": "#5C7C2F", "12": "#37401C" }),
  family("mint", { "1": "#F9FEFD", "2": "#F2FBF9", "3": "#DDF9F2", "4": "#C8F4E9", "5": "#B3ECDE", "6": "#9CE0D0", "7": "#7ECFBD", "8": "#4CBBA5", "9": "#86EAD4", "10": "#7DE0CB", "11": "#027864", "12": "#16433C" }),
  family("sky", { "1": "#F9FEFF", "2": "#F1FAFD", "3": "#E1F6FD", "4": "#D1F0FA", "5": "#BEE7F5", "6": "#A9DAED", "7": "#8DCAE3", "8": "#60B3D7", "9": "#7CE2FE", "10": "#74DAF8", "11": "#00749E", "12": "#1D3E56" }),
  family("black", { "1": "#0000000D", "2": "#0000001A", "3": "#00000026", "4": "#00000033", "5": "#0000004D", "6": "#00000066", "7": "#00000080", "8": "#00000099", "9": "#000000B3", "10": "#000000CC", "11": "#000000E6", "12": "#000000F2" }),
  family("white", { "1": "#FFFFFF0D", "2": "#FFFFFF1A", "3": "#FFFFFF26", "4": "#FFFFFF33", "5": "#FFFFFF4D", "6": "#FFFFFF66", "7": "#FFFFFF80", "8": "#FFFFFF99", "9": "#FFFFFFB3", "10": "#FFFFFFCC", "11": "#FFFFFFE6", "12": "#FFFFFFF2" }),
]
