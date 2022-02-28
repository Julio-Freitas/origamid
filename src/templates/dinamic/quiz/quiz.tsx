import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import Radio from "../../../components/radios";
import { questions } from "./questions";

const Quiz = () => {
  const [responses, setResponses] = useState<Array<string>>([]);
  const [step, setStep] = useState(1);
  const stepTotal = questions.length;

  const _handleChangeResponse = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setResponses([...responses, target.value]);
  };

  const changeStep = () => {
    const nextStep = (currentStep: number) => currentStep + 1;
    setStep(nextStep);
  };

  const renderResult = () => {
    const totalCorrect = questions.filter(({ resposta }) =>
      responses.includes(resposta)
    ).length;
    if (totalCorrect < 3) {
      return (
        <span>
          você precisa estudar mais...
          <br />
          total de acertos {totalCorrect}
        </span>
      );
    }

    if (totalCorrect >= 3 && totalCorrect < questions.length) {
      return (
        <span>
          Parabéns você esta ficando senior... total de acertos
          <br />
          total de acertos {totalCorrect}
        </span>
      );
    }

    if (totalCorrect === questions.length) {
      return <span>Você é um dev senior acertou todas..</span>;
    }
  };
  return (
    <fieldset className="bg-white p-4 container mx-auto">
      {questions
        .filter(({ id }) => id === `p${step}`)
        .map((quest) => (
          <div key={quest.id} className="p-1">
            <div className="flex justify-between">
              <legend>{quest.pergunta}</legend>
              <span>
                {step}/{stepTotal}
              </span>
            </div>
            {quest.options.map((option) => (
              <div key={option} className="p-1">
                <Radio
                  name="quiz"
                  label={option}
                  value={option}
                  checked={responses.includes(option)}
                  onChange={_handleChangeResponse}
                  onBlur={(e) => console.log(e)}
                />
              </div>
            ))}
          </div>
        ))}
      {step <= stepTotal ? (
        <button
          type="button"
          className="bg-dark py-1 px-2 text-white my-2"
          onClick={changeStep}
          disabled={!responses[step - 1]}
        >
          {step === stepTotal ? "ultima pergunta" : "Próximo"}
        </button>
      ) : (
        <div>
          <h1>Resutado:</h1>
          <p>{renderResult()}</p>
        </div>
      )}
    </fieldset>
  );
};

export default Quiz;
