export const myFunc = () => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject(1)
            } else {
                resolve(0);
            }
        }, 1500)
    })
}

// export default myFunc;