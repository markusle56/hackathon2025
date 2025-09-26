export function distanceMeasure(lat_x: string, lon_x: string, lat_y: string, lon_y: string): number {
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const lat1 = parseFloat(lat_x);
    const lon1 = parseFloat(lon_x);
    const lat2 = parseFloat(lat_y);
    const lon2 = parseFloat(lon_y);

    const R = 6371; 
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return Math.max(0, 300 - distance);
}


export function overlapTime(start_x: Date, end_x: Date, start_y: Date, end_y: Date): number {
    const overlapStart = Math.max(start_x.getTime(), start_y.getTime());
    const overlapEnd = Math.min(end_x.getTime(), end_y.getTime());

    if (overlapStart >= overlapEnd) return 0;

    const overlapMinutes = Math.floor((overlapEnd - overlapStart) / (1000 * 60));
    return overlapMinutes * 3; 
}


export function tagSimilarScore(tag_x: string[], tag_y: string[]): number {
    const setX = new Set(tag_x.map(t => t.toLowerCase()));
    const setY = new Set(tag_y.map(t => t.toLowerCase()));

    let similarCount = 0;
    for (const tag of setX) {
        if (setY.has(tag)) similarCount++;
    }

    return similarCount * 50;
}