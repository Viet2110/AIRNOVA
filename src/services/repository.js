export const formatFirebaseTimestamp = (timestamp, additionalDays = 0) => {
    const date = new Date(timestamp.seconds * 1000);
    date.setDate(date.getDate() + additionalDays);
    return date.toLocaleDateString('vi-VN'); // Convert to Vietnamese date format
};
export const getObjectById = (data, id) => {
    return data?.find(p => p.id == id) || "unknow";
}