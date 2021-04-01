function pattern(n) {
    let finalPattern = '';

    for (let i = n; i >= 1; i--) {
        for (let j = n - 1; j >= i; j--) {
            finalPattern += ' ';
        }

        for (let h = 1; h <= i; h++) {
            finalPattern += '#';
        }
        finalPattern += '\n';
    }
    console.log(finalPattern);
}

pattern(6);