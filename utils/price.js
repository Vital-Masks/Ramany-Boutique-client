const price = (value) => {
    value = value.toFixed(2)
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default price;