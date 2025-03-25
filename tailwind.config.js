import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'50': 'hsl(288, 100%, 95%)',   // Súper claro (#F7DFFF)
'100': 'hsl(288, 80%, 85%)',   // Pastel (#E4A7F2)
'200': 'hsl(288, 70%, 75%)',   // Claro (#CB6FE0)
'300': 'hsl(288, 65%, 65%)',   // Medio claro (#AD37C4)
'400': 'hsl(288, 60%, 55%)',   // Intermedio (#9010A8)
'500': 'hsl(288, 100%, 40%)',  // Base (#73008A)
'600': 'hsl(288, 100%, 35%)',  // Más oscuro (#5E0073)
'700': 'hsl(288, 100%, 30%)',  // Muy oscuro (#4D005D)
'800': 'hsl(288, 100%, 25%)',  // Extra oscuro
'900': 'hsl(288, 100%, 20%)',  // Súper oscuro
'DEFAULT': 'hsl(var(--primary))',
'foreground': 'hsl(var(--primary-foreground))',

  			},
  			secondary: {
  				'50': 'hsl(var(--secondary-50))',
  				'100': 'hsl(var(--secondary-100))',
  				'200': 'hsl(var(--secondary-200))',
  				'300': 'hsl(var(--secondary-300))',
  				'400': 'hsl(var(--secondary-400))',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: {
  				'50': 'hsl(var(--tertiary-50))',
  				'100': 'hsl(var(--tertiary-100))',
  				'200': 'hsl(var(--tertiary-200))',
  				'300': 'hsl(var(--tertiary-300))',
  				'400': 'hsl(var(--tertiary-400))',
  				'500': 'hsl(var(--tertiary-500))',
  				'600': 'hsl(var(--tertiary-600))',
  				'700': 'hsl(var(--tertiary-700))',
  				'800': 'hsl(var(--tertiary-800))',
  				DEFAULT: 'hsl(var(--tertiary-50))',
  				foreground: 'hsl(var(--tertiary-foreground))'
  			},
  			quaternary: {
  				'50': 'hsl(var(--quaternary-50))',
  				'100': 'hsl(var(--quaternary-100))',
  				'200': 'hsl(var(--quaternary-200))',
  				'300': 'hsl(var(--quaternary-300))',
  				'400': 'hsl(var(--quaternary-400))',
  				'500': 'hsl(var(--quaternary-500))',
  				'600': 'hsl(var(--quaternary-600))',
  				'700': 'hsl(var(--quaternary-700))',
  				'800': 'hsl(var(--quaternary-800))',
  				'900': 'hsl(var(--quaternary-900))',
  				DEFAULT: 'hsl(var(--quaternary))'
  			},
  			active: {
  				'50': 'hsl(var(--active-50))',
  				'100': 'hsl(var(--active-100))',
  				'200': 'hsl(var(--active-200))',
  				'300': 'hsl(var(--active-300))',
  				'400': 'hsl(var(--active-400))',
  				'500': 'hsl(var(--active-500))',
  				'600': 'hsl(var(--active-600))',
  				'700': 'hsl(var(--active-700))',
  				'800': 'hsl(var(--active-800))',
  				'900': 'hsl(var(--active-900))',
  				'950': 'hsl(var(--active-950))',
  				DEFAULT: 'hsl(var(--active-200))',
  				foreground: 'hsl(var(--active-foreground))'
  			},
  			inactive: {
  				'50': 'hsl(var(--inactive-50))',
  				'100': 'hsl(var(--inactive-100))',
  				'150': 'hsl(var(--inactive-150))',
  				'200': 'hsl(var(--inactive-200))',
  				'300': 'hsl(var(--inactive-300))',
  				'400': 'hsl(var(--inactive-400))',
  				'500': 'hsl(var(--inactive-500))',
  				'550': 'hsl(var(--inactive-550))',
  				'600': 'hsl(var(--inactive-600))',
  				'700': 'hsl(var(--inactive-700))',
  				'800': 'hsl(var(--inactive-800))',
  				'900': 'hsl(var(--inactive-900))',
  				'950': 'hsl(var(--inactive-950))',
  				DEFAULT: 'hsl(var(--inactive))',
  				foreground: 'hsl(var(--inactive-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      const titleUtilities = {
        '.title-sm': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: '600',
        },
        '.title-md': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '700',
        },
        '.title-lg': {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          fontWeight: '700',
        },
        '.title-xl': {
          fontSize: '2.5rem',
          lineHeight: '3.75rem',
          fontWeight: '700',
        },
      }

      addUtilities(titleUtilities)
    }),
  ],
}
