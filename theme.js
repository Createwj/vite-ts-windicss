export default {
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '4px',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
    large: '12px'
  },
  borderColor: (theme) => ({
    ...theme('colors'),
    DEFAULT: theme('colors.gray.300', 'currentColor'),
    primary: '#3490dc',
    secondary: '#ffed4a',
    danger: '#e3342f'
  }),
  backgroundColor: (theme) => ({
    ...theme('colors'),
    primary: '#3490dc',
    secondary: '#ffed4a',
    danger: '#e3342f'
  }),
  textColor: {
    primary: '#3490dc',
    secondary: '#ffed4a',
    danger: '#e3342f',
    white: '#fff'
  }
}
