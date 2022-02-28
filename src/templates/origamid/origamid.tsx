import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import useFetch from "../../hooks/fetch";

type TypeFields = {
  [key: string]: string;
};

const url = "https://ranekapi.origamid.dev/json/api/usuario";

const Origamid = () => {
  const [fieldsForm, setFieldsForm] = useState<TypeFields>({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const { data, loading, error, request } = useFetch();

  const _handleSetInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target;
    setFieldsForm({ ...fieldsForm, [id.trim()]: value });
  };

  const _hadleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(fieldsForm),
    };

    const response = await request(url, options);
    console.log(response);
    resetForm();
  };

  const resetForm = () => {
    let empetyFields: TypeFields = { ...fieldsForm };
    Object.keys(fieldsForm).forEach((key: string) => {
      empetyFields = {
        ...empetyFields,
        [key]: "",
      };
    });
    setFieldsForm(empetyFields);
  };
  return (
    <form className="p-8 bg-slate-300" onSubmit={_hadleSubmitForm}>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="nome">Nome</label>
        <input
          className="rounded"
          type="text"
          name="nome"
          id="nome "
          value={fieldsForm.nome}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="email">email</label>
        <input
          className="rounded"
          type="email"
          name="email"
          id="email"
          value={fieldsForm.email}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="senha">senha</label>
        <input
          className="rounded"
          type="senha"
          name="senha"
          id="senha"
          value={fieldsForm.senha}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="cep">cep</label>
        <input
          className="rounded"
          type="cep"
          name="cep"
          id="cep"
          value={fieldsForm.cep}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="rua">rua</label>
        <input
          className="rounded"
          type="rua"
          name="rua"
          id="rua"
          value={fieldsForm.rua}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="numero">numero</label>
        <input
          className="rounded"
          type="numero"
          name="numero"
          id="numero"
          value={fieldsForm.numero}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="bairro">bairro</label>
        <input
          className="rounded"
          type="bairro"
          name="bairro"
          id="bairro"
          value={fieldsForm.bairro}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="cidade">cidade</label>
        <input
          className="rounded"
          type="cidade"
          name="cidade"
          id="cidade"
          value={fieldsForm.cidade}
          onChange={_handleSetInput}
        />
      </div>
      <div className="   flex my-2 text-blue-600 flex-col">
        <label htmlFor="estado">estado</label>
        <input
          className="rounded"
          type="estado"
          name="estado"
          id="estado"
          value={fieldsForm.estado}
          onChange={_handleSetInput}
        />
      </div>

      <button
        className="py-2 px-8 hover:bg-cyan-600 text-white font-bold bg-red-600"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default Origamid;
