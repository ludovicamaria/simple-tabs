export interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    buttonText: string;
    isDisabled: boolean;
}