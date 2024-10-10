import { randomUUID } from "node:crypto"

// Classe para geração de id unico em toda a aplicação

export class UniqueentityID {
    private value: string

    constructor(value?: string) {
        this.value = value ?? randomUUID()
    }

    toString() {
        return this.value
    }

    toValue() {
        return this.value
    }
}