import { calendar1, calendar2, calendar3 } from './calendar500';

export function Renda500() {
  return (
    <section className="row">
      <div className="col-12 subtitulo-renda" style={{ color: '#000' }}>
        <span>Renda Pará 500</span>
      </div>

      <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
        <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
          <thead className="text-center header-tabela noborder">
            <tr>
              <td className="fw-400 text-center align-middle">Nascidos em</td>
              <td className="fw-400 text-center align-middle">
                Dia de Pagamento
              </td>
            </tr>
          </thead>
          <tbody className="texto-tabela">
            {calendar1.map((data) => (
              <tr>
                <td className="text-center align-middle no-b-top">
                  {data.mes}
                </td>
                <td className="text-center align-middle no-b-top">
                  {data.saque}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
        <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
          <thead className="text-center header-tabela noborder">
            <td className="fw-400 text-center align-middle">Nascidos em</td>
            <td className="fw-400 text-center align-middle">
              Dia de Pagamento
            </td>
          </thead>
          <tbody className="texto-tabela">
            {calendar2.map((data) => (
              <tr>
                <td className="text-center align-middle no-b-top">
                  {data.mes}
                </td>
                <td className="text-center align-middle no-b-top">
                  {data.saque}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
        <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
          <thead className="text-center header-tabela noborder">
            <td className="fw-400 text-center align-middle no-b-top">
              Nascidos em
            </td>
            <td className="fw-400 text-center align-middle no-b-top">
              Dia de Pagamento
            </td>
          </thead>
          <tbody className="texto-tabela">
            {calendar3.map((data) => (
              <tr>
                <td className="text-center align-middle no-b-top">
                  {data.mes}
                </td>
                <td className="text-center align-middle no-b-top">
                  {data.saque}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
