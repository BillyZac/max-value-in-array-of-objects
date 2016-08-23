const localMax = (object, keys) => (
    keys.reduce((max, category) => {
            const value = object[category] || max
            return max > value ? max : value
        }, 0)
)

const max = (array, keys) => (
    array.reduce((max, item) => {
            const value = localMax(item, keys)
            return max > value ? max : value
        }, 0)
)

module.exports = max
