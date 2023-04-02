import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#7b7e7c",
          200: "#656966",
          300: "#4f5351",
          400: "#393e3b",
          500: "#232825",
          600: "#202421",
          700: "#202421",
          800: "#1c201e",
          900: "#191c1a",
        },
        white: {
          100: "#ffffff",
          200: "#f8f8f8",
          300: "#f5f5f5",
          400: "#f1f1f1",
          500: "#eeeeee",
          600: "#d6d6d6",
          700: "#bebebe",
          800: "#a7a7a7",
          900: "#8f8f8f",
        },
        green: {
          100: "#d9f5e8",
          200: "#b2ecd2",
          300: "#8ce2bb",
          400: "#65d9a5",
          500: "#39ba80",
          600: "#32a672",
          700: "#267c55",
          800: "#195339",
          900: "#0d291c",
        },
        purple: {
          100: "#ecd9f5",
          200: "#d9b2ec",
          300: "#c58ce2",
          400: "#b265d9",
          500: "#9f3fcf",
          600: "#7f32a6",
          700: "#5f267c",
          800: "#401953",
          900: "#200d29",
        },
        red: {
          100: "#fdd8db",
          200: "#fbb1b8",
          300: "#f98b94",
          400: "#f76471",
          500: "#f53d4d",
          600: "#c4313e",
          700: "#93252e",
          800: "#62181f",
          900: "#310c0f",
        },
        orange: {
          100: "#fde8dd",
          200: "#fbd0bb",
          300: "#f9b99a",
          400: "#f7a178",
          500: "#f58a56",
          600: "#c46e45",
          700: "#935334",
          800: "#623722",
          900: "#311c11",
        },
        blue: {
          100: "#d3eafd",
          200: "#a6d5fa",
          300: "#7ac0f8",
          400: "#4dabf5",
          500: "#2196f3",
          600: "#1a78c2",
          700: "#145a92",
          800: "#0d3c61",
          900: "#071e31",
        },
        pink: {
          100: "#fcdafa",
          200: "#f9b5f4",
          300: "#f690ef",
          400: "#f36be9",
          500: "#f046e4",
          600: "#c038b6",
          700: "#902a89",
          800: "#601c5b",
          900: "#300e2e",
        },
      }
    : {
        black: {
          100: "#ffffff",
          200: "#f8f8f8",
          300: "#f5f5f5",
          400: "#f1f1f1",
          500: "#eeeeee",
          600: "#DFDFDF",
          700: "#D9D9D9",
          800: "#D2D2D2",
          900: "#CCCCCC",
        },
        white: {
          100: "#7b7e7c",
          200: "#656966",
          300: "#4f5351",
          400: "#393e3b",
          500: "#232825",
          600: "#202421",
          700: "#202421",
          800: "#1c201e",
          900: "#191c1a",
        },
        green: {
          100: "#0d291c",
          200: "#195339",
          300: "#267c55",
          400: "#32a672",
          500: "#39ba80",
          600: "#65d9a5",
          700: "#8ce2bb",
          800: "#b2ecd2",
          900: "#d9f5e8",
        },
        purple: {
          100: "#200d29",
          200: "#401953",
          300: "#5f267c",
          400: "#7f32a6",
          500: "#9f3fcf",
          600: "#b265d9",
          700: "#c58ce2",
          800: "#d9b2ec",
          900: "#ecd9f5",
        },
        red: {
          100: "#310c0f",
          200: "#62181f",
          300: "#93252e",
          400: "#c4313e",
          500: "#f53d4d",
          600: "#f76471",
          700: "#f98b94",
          800: "#fbb1b8",
          900: "#fdd8db",
        },
        orange: {
          100: "#311c11",
          200: "#623722",
          300: "#935334",
          400: "#c46e45",
          500: "#f58a56",
          600: "#f7a178",
          700: "#f9b99a",
          800: "#fbd0bb",
          900: "#fde8dd",
        },
        blue: {
          100: "#071e31",
          200: "#0d3c61",
          300: "#145a92",
          400: "#1a78c2",
          500: "#2196f3",
          600: "#4dabf5",
          700: "#7ac0f8",
          800: "#a6d5fa",
          900: "#d3eafd",
        },
        pink: {
          100: "#300e2e",
          200: "#601c5b",
          300: "#902a89",
          400: "#c038b6",
          500: "#f046e4",
          600: "#f36be9",
          700: "#f690ef",
          800: "#f9b5f4",
          900: "#fcdafa",
        },
      }),
});

//mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            common: {
              black: colors.black[500],
              white: colors.white[500],
            },
            primary: {
              main: colors.green[500],
              dark: colors.green[300],
              light: colors.green[700],
              contrastText: colors.white[100],
            },
            secondary: {
              main: colors.purple[300],
              dark: colors.purple[500],
              light: colors.purple[100],
              contrastText: colors.white[100],
            },
            error: {
              main: colors.red[500],
              dark: colors.red[700],
              light: colors.red[300],
              contrastText: colors.red[100],
            },
            warning: {
              main: colors.orange[500],
              dark: colors.orange[700],
              light: colors.orange[300],
              contrastText: colors.orange[100],
            },
            info: {
              main: colors.blue[500],
              dark: colors.blue[700],
              light: colors.blue[300],
              contrastText: colors.blue[100],
            },
            success: {
              main: colors.green[500],
              dark: colors.green[400],
              light: colors.green[700],
              contrastText: colors.green[100],
            },
            text: {
              primary: colors.white[300],
              secondary: colors.white[700],
              disabled: "rgba(255, 255, 255, 0.1)",
              hint: "rgba(255, 255, 255, 0.3)",
            },
            outlined: {
              main: colors.white[100],
            },
            background: {
              default: colors.black[500],
              paper: colors.black[600],
            },
            divider: "rgba(255, 255, 255, 0.12)",
          }
        : {
            common: {
              black: colors.black[500],
              white: colors.white[500],
            },
            primary: {
              main: colors.green[500],
              dark: colors.green[300],
              light: colors.green[700],
              contrastText: colors.white[100],
            },
            secondary: {
              main: colors.purple[300],
              dark: colors.purple[500],
              light: colors.purple[100],
              contrastText: colors.white[100],
            },
            error: {
              main: colors.red[500],
              dark: colors.red[700],
              light: colors.red[300],
              contrastText: colors.red[100],
            },
            warning: {
              main: colors.orange[500],
              dark: colors.orange[700],
              light: colors.orange[300],
              contrastText: colors.orange[100],
            },
            info: {
              main: colors.blue[500],
              dark: colors.blue[700],
              light: colors.blue[300],
              contrastText: colors.blue[100],
            },
            success: {
              main: colors.green[500],
              dark: colors.green[400],
              light: colors.green[700],
              contrastText: colors.green[100],
            },
            text: {
              primary: colors.white[300],
              secondary: colors.white[500],
              disabled: "rgba(0, 0, 0, 0.2)",
              hint: "rgba(0, 0, 0, 0.3)",
            },
            outlined: {
              main: colors.white[100],
            },
            background: {
              default: colors.black[500],
              paper: colors.black[600],
            },
            divider: "rgba(0, 0, 0, 0.12)",
          }),
    },
    typography: {
      fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 600,
      },
      h4: {
        fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 600,
      },
      h5: {
        fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 600,
      },
      h6: {
        fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 400,
      },
    },
  };
};

// context for the color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};