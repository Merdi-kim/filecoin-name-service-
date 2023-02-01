export const truncateAddress = (address:string) => {
    const leftPart = address.slice(0,5)
    const rightPart = address.slice(36)
    return `${leftPart}...${rightPart}`
}