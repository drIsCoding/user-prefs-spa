interface ColorStat {
    hex: string,
    count: number
}

interface AgeRange {
    maxAge: number,
    minAge: number
}

export interface AgeColorInfo {
    ageRange: AgeRange,
    colorStats: ColorStat[]
}