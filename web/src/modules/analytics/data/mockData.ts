export const generateData = () => {
    return Array.from({length: 12}).map((_, i) => ({
        name: `Month ${i+1}`,
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: Math.floor(Math.random() * 5000) + 1000,
        amt: Math.floor(Math.random() * 5000) + 1000,
    }));
};
