export const truncateAddress = (address:string, start:number = 5, end:number = 37) => {
    const leftPart = address.slice(0,start)
    const rightPart = address.slice(end)
    return `${leftPart}...${rightPart}`
}