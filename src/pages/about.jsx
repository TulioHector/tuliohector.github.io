
import {Component} from "react";
import {pageConfig} from '../components/context';
  
class About extends Component {
    constructor(props) {
        super(props);
        pageConfig.backgroundImage = "url('assets/img/about-bg.jpg')";
        pageConfig.pageTitle = "About Me";
        pageConfig.pageSubTitle = "";
    }
    render() {
        return (
            <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <p>Hace más de 6 años se desempeña como arquitecto de soluciones participando en equipos multidisciplinarios generando desafíos técnicos en diferentes tipos de negocio.</p>
                                <p>Cuenta con experiencia en el sector financiero. Le interesan las nuevas tecnologías, la innovación, la investigación, la arquitectura de soluciones.</p>
                                <p>Le gusta capacitarse y transmitir experiencia al equipo de trabajo y aprender de la experiencia de colegas. Actualmente se interesa poder avanzar a arquitectura empresarial.</p>
                            </div>
                        </div>
                    </div>
                </main>
          );
    }
};
  
export default About;