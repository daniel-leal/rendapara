import React, { useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import { api } from '../../services/api';

import { Calendar } from './components/Calendar';
import { Jumbotron } from './components/Jumbotron';
import { Tape } from './components/Tape';

// Images
import Check from '../../assets/icones/check.svg';
import Cartao from '../../assets/cartao.png';

// Util
import { valida_cpf_cnpj, formata_cpf_cnpj } from '../../util/validateCpfCnpj';

function Main() {
  const [cliente, setCliente] = useState();
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Formata CPF e DataNascimento
  const formattedCPf = useMemo(() => cpf.replace(/[^0-9]/g, ''), [cpf]);
  const formattedDate = useMemo(() => {
    if (dataNascimento !== '')
      return format(parseISO(dataNascimento), 'yyyy-MM-dd');

    return dataNascimento;
  }, [dataNascimento]);

  async function handleInputCpf() {
    // verifica se os campos foram preenchidos
    if (cpf === '' || dataNascimento === '')
      return toast.error('Preencha todos os campos!');

    // valida cpf
    if (!valida_cpf_cnpj(cpf)) return toast.error('O CPF digitado é inválido');

    try {
      const resp = await api.get('/beneficiario', {
        params: {
          cpf: formattedCPf,
          nascimento: formattedDate,
        },
      });

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
      <Calendar show={show} close={handleClose} />

      <Jumbotron />
      <Tape />

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
                            {cliente.dataSaque3 &&
                              ' OU ' +
                                format(
                                  parseISO(cliente.dataSaque3),
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

                            <div className="col-md-12 col-lg-8 offset-lg-2 alert alert-warning mt-3 p-0 py-3">
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
