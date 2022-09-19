function ProjectForm() {
    return (
        <form>
            <div>
            <input type="text" placeholder="Insira o nome do Projeto" />
            </div>
            <div>
            <input type="number" placeholder="Insira o oraçamento total"/>
            </div>
            <div>
            <select name="category_id">
                <option disabled>Selecione a Categoria</option>
                <option value=""></option>
            </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    )
}

export default ProjectForm