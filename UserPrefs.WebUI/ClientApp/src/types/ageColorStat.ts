interface ColorStat {
    hex: string,
    count: number
}

export interface AgeColorStat {
    maxAge: number,
    colorStats: ColorStat[]
}