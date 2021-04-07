import { calendarBf1, calendarBf2, calendarBf3 } from './calendarbf';

export function RendaBF({ close }) {
  return (
    <section className="row">
      <div className="col-12 subtitulo-renda" style={{ color: '#000' }}>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span
            aria-hidden="true"
            onClick={close}
            style={{ color: '#000', outline: 'none' }}
          >
            &times;
          </span>
        </button>
        <span>Renda Pará Bolsa Família</span>
      </div>

      <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
        <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
          <thead className="text-center header-tabela noborder">
            <tr>
              <th className="fw-400 text-center align-middle">Nascidos em</th>
              <th className="fw-400 text-center align-middle">
                Dia de Pagamento
              </th>
            </tr>
          </thead>
          <tbody className="texto-tabela">
            {calendarBf1.map((data) => (
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
            <tr>
              <th className="fw-400 text-center align-middle">Nascidos em</th>
              <th className="fw-400 text-center align-middle">
                Dia de Pagamento
              </th>
            </tr>
          </thead>
          <tbody className="texto-tabela">
            {calendarBf2.map((data) => (
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
            <tr>
              <th className="fw-400 text-center align-middle no-b-top">
                Nascidos em
              </th>
              <th className="fw-400 text-center align-middle no-b-top">
                Dia de Pagamento
              </th>
            </tr>
          </thead>
          <tbody className="texto-tabela">
            {calendarBf3.map((data) => (
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
