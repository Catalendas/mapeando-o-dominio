import { UniqueentityID } from "./unique-entity-id"
// Classe base de entidade para outras entidades
// Nela contem todas as propriedades que outras classes vão ter
// Também estamos repassando as props onde só quem vai ter acesso é as classe que estão extendnedo

export class Entity<Props> {
    private _id: UniqueentityID
    protected props: Props

    get id() {
        return this._id
    }

    constructor(props: Props, id?: UniqueentityID) {
        this._id = id ?? new UniqueentityID(id)
        this.props = props
    }
}