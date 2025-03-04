export const theme = {
  palette: {
    dark: "#393A42",
    secondary: "#6FB4F9",
    greyBlue: "#BCDCFC",
    disabled: "#000000DE",
    error: "#EB3148",
    warning: "#eaa93e",
    errorBackground: "#EF9A9A",
    success: "#38AA80",
    exception: "#935418",
    lightText: "#828991",
    white: "#FFFFFF",
    grey: "#CCCCCC",
    lightGrey: "#F5F5F5",
  },
};

export type Colors = keyof typeof theme.palette;