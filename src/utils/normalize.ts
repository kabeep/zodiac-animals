function normalize(value: Date | -1) {
    return value === -1 ? new Date(Number.NaN) : value;
}

export default normalize;
