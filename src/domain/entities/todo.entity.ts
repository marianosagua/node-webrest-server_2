export class TodoEntity {
  constructor(
    public id: number,
    public text: string,
    public completedAt?: Date | null
  ) {}

  get isCompleted() {
    return !!this.completedAt;
  }

  /**
   * Este método estático toma un objeto genérico y lo convierte en una instancia de TodoEntity.
   * Valida que el objeto tenga las propiedades 'id' y 'text', lanzando un error si alguna falta.
   * Si 'completedAt' está presente, intenta convertirlo a una fecha válida.
   * Si la conversión falla, lanza un error.
   * Finalmente, retorna una nueva instancia de TodoEntity con los valores proporcionados.
   */
  public static fromObject(object: { [key: string]: any }): TodoEntity {
    const { id, text, completedAt } = object;

    if (!id) throw "ID is required!!";
    if (!text) throw "Text is required!!";

    let newCompletedAt;

    if (completedAt) {
      newCompletedAt = new Date(completedAt);

      if (isNaN(newCompletedAt.getTime())) {
        throw "CompletedAt is not a valid date!!";
      }
    }

    return new TodoEntity(id, text, completedAt);
  }
}
