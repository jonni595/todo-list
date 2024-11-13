export interface Tasks {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  done: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  children: React.ReactNode;
}
