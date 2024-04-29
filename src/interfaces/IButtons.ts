
export interface IIconButtonProps {
    icon: string;
    size?: number;
    iconColor?: string;
    disabled?: boolean;
    event?: () => void;
}

export interface IOpenButton {
    icon: string;
    color?: string;
    size?: number;
    event: () => void;
}

export interface IOptionButtons {
    title?: string;
    tPrimary: string;
    ePrimary: () => void;
    tSecondary?: string;
    eSecondary?: () => void;
    bgPrimaryLight?: boolean;
    bgSecondaryLight?: boolean;
}