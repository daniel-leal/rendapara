import RendaPara from '../../../../assets/renda-para.png';
import Governo from '../../../../assets/governo.png';
import Banpara from '../../../../assets/banpara.png';

export function Jumbotron() {
  return (
    <section className="row py-5 gd-renda-para">
      <div className="col-12 p-0 d-flex justify-content-center">
        <div className="col-8 col-sm-4 col-md-3 col-lg-3 col-xl-2">
          <img src={RendaPara} alt="renda-para" />
        </div>
      </div>

      <div className="col-12 text-center mt-4">
        <span className="span-title-consulta">Realizado por:</span>
      </div>
      <div className="col-md-4 offset-md-4 text-center">
        <img src={Governo} className="logo-governo" alt="logo-governo-pará" />
        <img src={Banpara} className="logo-banpara" alt="logo-banpará" />
      </div>
    </section>
  );
}
