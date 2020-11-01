import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    color: string;

    secondary: string;
    secondaryColor: string;
  }
}
