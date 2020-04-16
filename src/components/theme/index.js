const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};


/*
a
dark purple - #873bf4 
ligth purple #c4a1ff

lgrey #e8e8e8 #f0f2f5

*/

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#fafafa',
    text: '#873bf4',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#873bf4',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#001933',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
};

export { lightTheme, darkTheme };
