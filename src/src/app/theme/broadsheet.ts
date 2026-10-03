import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';

// The Broadsheet design system from Claude Design (design/_ds/broadsheet.../styles.css),
// mapped onto Aura so Optimus components pick up its colors and square corners.
export const Broadsheet = definePreset(Aura, {
    primitive: {
        borderRadius: { none: '0', xs: '1px', sm: '1px', md: '2px', lg: '4px', xl: '4px' },
    },
    semantic: {
        primary: {
            50: '#e9f8ff',
            100: '#e9f8ff',
            200: '#cbeeff',
            300: '#99e0ff',
            400: '#62c5ee',
            500: '#38a6cf',
            600: '#1186ac',
            700: '#006786',
            800: '#004961',
            900: '#0a303e',
            950: '#0a303e',
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#f3f2f2',
                    50: '#f8f4f4',
                    100: '#eae7e7',
                    200: '#d7d3d3',
                    300: '#bab6b6',
                    400: '#9b9797',
                    500: '#7d7979',
                    600: '#605d5d',
                    700: '#444141',
                    800: '#2d2b2b',
                    900: '#201e1d',
                    950: '#201e1d',
                },
                primary: {
                    color: '#0088b0',
                    contrastColor: '{surface.0}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}',
                },
                text: { color: '{surface.900}', mutedColor: '{surface.600}' },
            },
        },
    },
    components: {
        button: {
            root: { label: { fontWeight: '600' } },
            colorScheme: {
                light: {
                    outlined: {
                        secondary: {
                            borderColor: '{surface.200}',
                            color: '{text.color}',
                            hoverBackground: '{surface.100}',
                            activeBackground: '{surface.200}',
                        },
                    },
                },
            },
        },
    },
});
