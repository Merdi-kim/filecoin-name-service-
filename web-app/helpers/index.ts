export const truncateAddress = (address:string) => {
    const leftPart = address.slice(0,5)
    const rightPart = address.slice(37)
    return `${leftPart}...${rightPart}`
}