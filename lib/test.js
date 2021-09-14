const allESRules = require("eslint/lib/rules")
const prettierRules = require("eslint-config-prettier").rules
const { enabledRules, disabledRuleNames, deprecated } = require("./utils/constants")

const getNewRules = props => {
    try {
        const { es, used, ignored } = props
        const currentRules = [...used, ...ignored]
        const newRules = []

        es.forEach((_val, ruleName) => {
            if (!currentRules.includes(ruleName)) {
                newRules.push(ruleName)
            }
        })

        return newRules
    } catch (error) {
        console.error(`Issue with: checking for new rules\n`, error)

        return []
    }
}

const newRules = getNewRules({
    es: allESRules,
    used: Object.keys(enabledRules),
    ignored: [...disabledRuleNames, ...deprecated, ...Object.keys(prettierRules)],
})

console.log(newRules)
