export interface UIProps {
  style?: React.CSSProperties;
  className?: string;
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'filled' | 'standard';
  colSpan?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  spacing?: number;
  totalColumns?: number;
}
