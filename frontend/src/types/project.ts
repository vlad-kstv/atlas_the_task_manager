
export interface projectRequestDto {
    name : string,
    description : string
}

export interface projectResponseDto {
    id: number,
    name : string,
    description : string,
    ownerId : number
}