import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: '#000',
				'background-secondary': '#111',
				card: '#181818',
				accent: '#fff',
				'text-primary': '#fff',
				'text-secondary': '#ccc',
				border: '#222',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
			},
			boxShadow: {
				glass: '0 4px 32px 0 rgba(255,255,255,0.05)',
			},
			backdropBlur: {
				'glass': '12px'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)'
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
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				slideUp: {
					'0%': { opacity: 0, transform: 'translateY(40px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				fadeIn: 'fadeIn 1s ease-out',
				slideUp: 'slideUp 0.8s cubic-bezier(0.4,0,0.2,1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
