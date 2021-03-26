import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import { api } from '../../services/api';

// Images
import Check from '../../assets/icones/check.svg';
import Cartao from '../../assets/cartao.png';
import RendaPara from '../../assets/renda-para.png';
import Governo from '../../assets/governo.png';
import Banpara from '../../assets/banpara.png';

// Util
import { valida_cpf_cnpj, formata_cpf_cnpj } from '../../util/validateCpfCnpj';

// Bootstrap
import { Modal } from 'react-bootstrap';

function Main() {
  const [cliente, setCliente] = useState();
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleInputCpf() {
    // verifica se os campos foram preenchidos
    if (cpf === '' || dataNascimento === '')
      return toast.error('Preencha todos os campos!');

    // valida cpf
    if (!valida_cpf_cnpj(cpf)) return toast.error('O CPF digitado é inválido');

    // remove a mascara
    const unmaskedCpf = cpf.replace(/[^0-9]/g, '');

    try {
      const resp = await api.get(
        `/beneficiario/?cpf=${unmaskedCpf}&nascimento=${format(
          parseISO(dataNascimento),
          'yyyy-MM-dd'
        )}`,
        { headers: { 'Content-Type': 'application/json' } }
      );

      setCliente(resp.data.message);
    } catch (err) {
      console.log(err);

      if (err.message === 'Network Error') {
        toast.error('Verifique sua conexão');
      }

      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  }

  return (
    <>
      <Modal
        id="modalCalendario"
        tabIndex="-1"
        aria-labelledby="modalCalendarioLabel"
        aria-hidden="true"
        show={show}
        size={'xl'}
        centered
        onHide={handleClose}
      >
        <Modal.Body className="py-4">
          <div className="container-fluid justify-content-center">
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
                    onClick={handleClose}
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
                      <th className="fw-400 text-center align-middle">
                        Nascidos em
                      </th>
                      <th className="fw-400 text-center align-middle">
                        Dia de Pagamento
                      </th>
                    </tr>
                  </thead>
                  <tbody className="texto-tabela">
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Janeiro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        11 e 12 de Março
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Fevereiro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        15 e 16 de Março
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Março
                      </td>
                      <td className="text-center align-middle no-b-top">
                        17 e 18 de Março
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Abril
                      </td>
                      <td className="text-center align-middle no-b-top">
                        19 e 22 de Março
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
                <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
                  <thead className="text-center header-tabela noborder">
                    <tr>
                      <th className="fw-400 text-center align-middle">
                        Nascidos em
                      </th>
                      <th className="fw-400 text-center align-middle">
                        Dia de Pagamento
                      </th>
                    </tr>
                  </thead>
                  <tbody className="texto-tabela">
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Maio
                      </td>
                      <td className="text-center align-middle no-b-top">
                        23 e 24 de Março
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Junho
                      </td>
                      <td className="text-center align-middle no-b-top">
                        25 e 26 de Março
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Julho
                      </td>
                      <td className="text-center align-middle no-b-top">
                        01 e 05 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Agosto
                      </td>
                      <td className="text-center align-middle no-b-top">
                        06 e 07 de Abril
                      </td>
                    </tr>
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
                    <tr className="noborder">
                      <td className="text-center align-middle no-b-top">
                        Setembro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        08 e 09 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Outubro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        12 e 13 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Novembro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        14 e 15 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Dezembro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        16 e 19 de Abril
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="row">
              <div className="col-12 subtitulo-renda" style={{ color: '#000' }}>
                <span>Renda Pará 500</span>
              </div>

              <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
                <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
                  <thead className="text-center header-tabela noborder">
                    <tr>
                      <td className="fw-400 text-center align-middle">
                        Nascidos em
                      </td>
                      <td className="fw-400 text-center align-middle">
                        Dia de Pagamento
                      </td>
                    </tr>
                  </thead>
                  <tbody className="texto-tabela">
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Janeiro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        01 e 05 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Fevereiro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        06 e 07 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Março
                      </td>
                      <td className="text-center align-middle no-b-top">
                        08 e 09 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Abril
                      </td>
                      <td className="text-center align-middle no-b-top">
                        12 e 13 de Abril
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-12 col-lg-8 offset-lg-2 col-xl-4 offset-xl-0 mt-3 p-0 px-xl-2">
                <table className="table table-condensed table-striped table-responsive-xs mt-3 p-0">
                  <thead className="text-center header-tabela noborder">
                    <td className="fw-400 text-center align-middle">
                      Nascidos em
                    </td>
                    <td className="fw-400 text-center align-middle">
                      Dia de Pagamento
                    </td>
                  </thead>
                  <tbody className="texto-tabela">
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Maio
                      </td>
                      <td className="text-center align-middle no-b-top">
                        14 e 15 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Junho
                      </td>
                      <td className="text-center align-middle no-b-top">
                        16 e 19 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Julho
                      </td>
                      <td className="text-center align-middle no-b-top">
                        20 e 22 de Abril
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Agosto
                      </td>
                      <td className="text-center align-middle no-b-top">
                        23 e 26 de Abril
                      </td>
                    </tr>
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
                    <tr className="noborder">
                      <td className="text-center align-middle no-b-top">
                        Setembro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        27 de Abril e 03 de Maio
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Outubro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        04 e 05 de Maio
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Novembro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        06 e 07 de Maio
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center align-middle no-b-top">
                        Dezembro
                      </td>
                      <td className="text-center align-middle no-b-top">
                        10 e 11 de Maio
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </Modal.Body>
      </Modal>

      <section className="row py-5 gd-renda-para">
        <div className="col-12 p-0 d-flex justify-content-center">
          <div className="col-8 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <img src={RendaPara} alt="renda-para" />
          </div>
        </div>

        {/* <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-3 texto-descricao-renda-para">
          O Programa, regulamentado por meio de lei estadual, representa um
          incremento no orçamento das famílias em situação de vulnerabilidade
          social, cadastradas no{' '}
          <span className="font-weight-bold">Bolsa Família</span>. Para cada
          pessoa beneficiada, é pago o valor de R$ 100, em cota única, em
          agências do <span className="font-weight-bold">Banpará.</span>
        </div> */}
        <div className="col-12 text-center mt-4">
          <span className="span-title-consulta">Realizado por:</span>
        </div>
        <div className="col-md-4 offset-md-4 text-center">
          <img src={Governo} className="logo-governo" alt="logo-governo-pará" />
          <img src={Banpara} className="logo-banpara" alt="logo-banpará" />
        </div>
      </section>

      <section className="row faixa-renda">
        <div className="col-12 content-faixa-renda">
          Consulte seu cadastro no Programa
        </div>
      </section>

      <section className="row py-4">
        <div className="col-11 col-sm-10 col-md-8 col-lg-5 p-0">
          <img src={Cartao} alt="" />
        </div>

        <div className="col-sm-12 col-md-8 offset-md-2 col-lg-5 offset-lg-1">
          <div className="col-sm-10 offset-sm-1 col-md-12 p-0 subtitulo-renda-3">
            Preencha os dados abaixo para realizar a consulta
          </div>

          <div className="col-sm-10 offset-sm-1 col-md-12 p-0">
            <div className="row mt-2">
              <div className="col-sm-6 pl-md-0">
                <div className="form-group">
                  <label className="label-input">CPF:</label>
                  <InputMask
                    className="form-control font-14"
                    mask="999.999.999-99"
                    name="cpf"
                    id="cpf"
                    maskChar={null}
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-sm-6 pr-md-0">
                <div className="form-group">
                  <label className="label-input">Data de Nascimento:</label>
                  <input
                    type="date"
                    className="form-control font-14"
                    name="data-nasc"
                    id="data-nasc"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-12 mt-2 text-center">
                <button
                  onClick={handleInputCpf}
                  className="btn btn-primary botao-renda-para sombra5"
                  style={{ marginRight: 10 }}
                >
                  Consultar
                </button>
                <button
                  type="button"
                  className="btn btn-primary botao-renda-para sombra5"
                  data-toggle="modal"
                  data-target="#modalCalendario"
                  onClick={handleShow}
                >
                  Ver Calendário Geral
                </button>
              </div>
            </div>
          </div>

          {cliente && (
            <section className="col-sm-10 offset-sm-1 col-md-12 p-md-0">
              <div className="card noborder mt-4 card-renda sombra5">
                <div id="collapse1" className="collapse noborder show">
                  <div className="card-body">
                    <div className="conteudo-faq">
                      <div className="row">
                        <div className="col-md-6 p-0">
                          <div className="col-12 titulo-consulta mt-3">
                            NOME:
                          </div>
                          <div className="col-12 descricao-consulta font-12">
                            {cliente.nome}
                          </div>
                          <div className="col-12 titulo-consulta mt-3">
                            CPF:
                          </div>
                          <div className="col-12 descricao-consulta font-12">
                            {formata_cpf_cnpj(cpf)}
                          </div>
                        </div>

                        <div className="col-md-6 p-0">
                          {cliente.status && (
                            <>
                              <div className="col-12 titulo-consulta mt-3">
                                STATUS:
                              </div>
                              <div className="col-12 p-0 descricao-consulta">
                                <img
                                  src={Check}
                                  alt=""
                                  className="icone-dash-3"
                                />
                                {cliente.status}
                              </div>
                            </>
                          )}

                          <div className="col-12 titulo-consulta mt-3">
                            DATAS DE PAGAMENTO:
                          </div>
                          <div className="col-12 descricao-consulta">
                            {format(
                              parseISO(cliente.dataSaque1),
                              'dd/MM/yyyy'
                            ) + ' '}
                            {cliente.dataSaque2 &&
                              'OU ' +
                                format(
                                  parseISO(cliente.dataSaque2),
                                  'dd/MM/yyyy'
                                )}
                          </div>
                        </div>

                        {cliente.atividade ? (
                          <>
                            <div className="col-md-6 p-0">
                              <div className="col-12 titulo-consulta mt-3">
                                Atividade:
                              </div>
                              <div className="col-12 p-0 descricao-consulta">
                                {cliente.atividade}
                              </div>
                            </div>

                            <div className="col-md-6 p-0">
                              <div className="col-12 titulo-consulta mt-3">
                                Valor:
                              </div>
                              <div className="col-12 p-0 descricao-consulta">
                                <span className="font-14 fw-400">R$</span>
                                <span style={{ fontSize: 26 }}>
                                  {cliente.valor},00
                                </span>
                              </div>
                            </div>

                            <div className="col-md-12 col-lg-8 offset-md-2 alert alert-warning mt-3 p-0 py-3">
                              <div className="col-12 titulo-consulta font-weight-bold">
                                DOCUMENTAÇÃO NECESSÁRIA PARA SAQUE:
                              </div>
                              <div className="col-12 titulo-consulta">
                                {cliente.documentacao}
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="col-md-12 p-o">
                            <div className="col-12 titulo-consulta mt-3">
                              Valor:
                            </div>
                            <div className="col-12 descricao-consulta">
                              <span className="font-14 fw-400">R$</span>
                              <span style={{ fontSize: 26 }}>100,00</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      <section className="row py-3 cinza-2" style={{ marginTop: 47 }}>
        <div className="col-12 texto-footer">
          SITE DESENVOLVIDO PELO BANCO DO ESTADO DO PARÁ ©{' '}
          {new Date().getFullYear()}
          <br />
          DITEC | Superintendência de Sistemas
        </div>
      </section>
    </>
  );
}

export default Main;
